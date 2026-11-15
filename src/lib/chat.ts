/**
 * Chat client for LucIA. Speaks the soul SSE wire contract over a plain POST
 * (`EventSource` cannot POST, so the stream is parsed by hand): one TurnEvent
 * per `data: <JSON>\n\n` message, `: ping` comments as keep-alive, and the
 * stream closes after `turn_done`.
 */

/** Mirror of soul's transport contract (soul/src/domain/engine/events.ts). */
export type TurnEvent =
  | { type: 'text_delta'; text: string }
  | { type: 'tool_started'; name: string }
  | { type: 'tool_finished'; name: string }
  | { type: 'turn_done'; conversationId: string }

// Endpoint del chat según dónde se sirva la web:
// - groway.studio (GitHub Pages, sin backend propio) → el chat vive en el
//   ProDesk, expuesto por api.groway.studio (cross-origin; el backend ya tiene
//   CORS para groway.studio).
// - ProDesk (192.168.0.109) o dev (localhost) → same-origin /api/chat, que
//   Apache/Vite enruta al backend.
// VITE_CHAT_ENDPOINT mantiene prioridad para overrides manuales.
function defaultChatEndpoint(): string {
  if (typeof location !== 'undefined' && location.hostname.endsWith('groway.studio')) {
    return 'https://api.groway.studio/public/chat'
  }
  return '/api/chat'
}

const CHAT_ENDPOINT = import.meta.env.VITE_CHAT_ENDPOINT ?? defaultChatEndpoint()

const FINGERPRINT_KEY = 'groway_fp'

function fnv1a(input: string, seed: number): string {
  let hash = seed
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i)
    hash = Math.imul(hash, 0x01000193)
  }
  return (hash >>> 0).toString(16).padStart(8, '0')
}

/**
 * Anonymous per-browser id: hashed once from coarse device traits plus a
 * random salt, then persisted so every visit reuses the same value.
 */
function getFingerprint(): string {
  const stored = localStorage.getItem(FINGERPRINT_KEY)
  if (stored) return stored
  const raw = [
    navigator.userAgent,
    `${screen.width}x${screen.height}`,
    navigator.language,
    Intl.DateTimeFormat().resolvedOptions().timeZone,
    Math.random().toString(36).slice(2),
  ].join('|')
  const fingerprint = fnv1a(raw, 0x811c9dc5) + fnv1a(raw, 0x01935661)
  localStorage.setItem(FINGERPRINT_KEY, fingerprint)
  return fingerprint
}

// Session-only: the thread survives navigation within the SPA but not a
// reload (accepted trade-off — history lives in React state anyway).
let conversationId: string | undefined

export async function* streamChat(message: string): AsyncGenerator<TurnEvent> {
  const res = await fetch(CHAT_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'text/event-stream' },
    body: JSON.stringify({ fingerprint: getFingerprint(), message, conversationId }),
  })
  if (!res.ok || !res.body) throw new Error(`Chat endpoint responded ${res.status}`)

  const reader = res.body.pipeThrough(new TextDecoderStream()).getReader()
  let buffer = ''
  try {
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      buffer += value
      let sep
      while ((sep = buffer.indexOf('\n\n')) !== -1) {
        const frame = buffer.slice(0, sep)
        buffer = buffer.slice(sep + 2)
        for (const line of frame.split('\n')) {
          if (!line.startsWith('data: ')) continue // skips `: ping` comments
          const event = JSON.parse(line.slice(6)) as TurnEvent
          if (event.type === 'turn_done') conversationId = event.conversationId
          yield event
        }
      }
    }
  } finally {
    await reader.cancel().catch(() => {})
  }
}
