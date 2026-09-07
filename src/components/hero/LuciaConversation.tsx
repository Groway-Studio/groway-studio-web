import { useCallback, useEffect, useRef, useState, type FormEvent } from 'react'
import { PaperPlaneRight } from '@phosphor-icons/react'
import { useLanguage } from '@/contexts/LanguageContext'
import { cn } from '@/lib/utils'
import { streamChat } from '@/lib/chat'
import type { OrbState } from '@/components/hero/PointCloudCanvas'

/**
 * LucIA's conversational surface: a minimalist input under the orb plus a
 * glass conversation panel where the exchange streams in token by token.
 * The orb is her presence — this component owns the talking and reports her
 * reactive state (listening / thinking / speaking) up to the Hero.
 *
 * No forms: LucIA takes contact details inside the conversation (soul records
 * the lead). Other CTAs focus this input via the `groway:focus-lucia` event.
 */

const FOCUS_EVENT = 'groway:focus-lucia'

/**
 * Focus LucIA's input from anywhere (e.g. the Startups CTA).
 * Pass `prefill` to leave a drafted message in the input, unsent.
 */
// eslint-disable-next-line react-refresh/only-export-components -- tiny event helper, belongs with the component
export function focusLucia(prefill?: string) {
  window.dispatchEvent(new CustomEvent(FOCUS_EVENT, { detail: { prefill } }))
}

interface Message {
  role: 'user' | 'lucia'
  text: string
}

export function LuciaConversation({
  onStateChange,
}: {
  onStateChange: (state: OrbState) => void
}) {
  const { t } = useLanguage()
  const [messages, setMessages] = useState<Message[]>([])
  const [draft, setDraft] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const logRef = useRef<HTMLDivElement>(null)

  // Focus (and optionally prefill) when a CTA elsewhere calls focusLucia().
  useEffect(() => {
    const onFocus = (e: Event) => {
      const prefill = (e as CustomEvent<{ prefill?: string }>).detail?.prefill
      if (prefill) setDraft(prefill)
      inputRef.current?.focus()
      inputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
    window.addEventListener(FOCUS_EVENT, onFocus)
    return () => window.removeEventListener(FOCUS_EVENT, onFocus)
  }, [])

  // Keep the latest reply in view as it streams.
  useEffect(() => {
    const log = logRef.current
    if (log) log.scrollTop = log.scrollHeight
  }, [messages])

  const send = useCallback(
    async (text: string) => {
      setError(false)
      setMessages((m) => [...m, { role: 'user', text }, { role: 'lucia', text: '' }])
      setBusy(true)
      onStateChange('thinking')

      try {
        let first = true
        for await (const event of streamChat(text)) {
          if (event.type === 'text_delta') {
            if (first) {
              onStateChange('speaking')
              first = false
            }
            setMessages((m) => {
              const next = m.slice()
              const last = next[next.length - 1]
              next[next.length - 1] = { role: 'lucia', text: last.text + event.text }
              return next
            })
          }
        }
      } catch {
        setError(true)
        // Drop the empty placeholder reply so only the error line shows.
        setMessages((m) => {
          const last = m[m.length - 1]
          return last?.role === 'lucia' && last.text === '' ? m.slice(0, -1) : m
        })
      } finally {
        setBusy(false)
        onStateChange('idle')
      }
    },
    [onStateChange],
  )

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const text = draft.trim()
    if (!text || busy) return
    setDraft('')
    void send(text)
  }

  const hasConversation = messages.length > 0 || error

  return (
    <div className="mt-9 max-w-xl">
      {/* Conversation panel — the bubble where the exchange lives. */}
      {hasConversation && (
        <div
          ref={logRef}
          role="log"
          aria-live="polite"
          aria-label={t.lucia.title}
          className="mb-5 max-h-[42vh] space-y-3 overflow-y-auto rounded-2xl border border-white/10 bg-bg/50 p-4 shadow-[0_16px_60px_-24px_rgba(0,0,0,0.9)] backdrop-blur-xl"
        >
          {messages.map((msg, i) => (
            <div key={i} className={msg.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
              <div
                className={cn(
                  'max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm leading-relaxed',
                  msg.role === 'user'
                    ? 'rounded-br-md bg-accent-9/15 text-fg'
                    : 'rounded-bl-md border border-hairline bg-surface/70 text-fg',
                )}
              >
                {msg.text || <TypingDots />}
              </div>
            </div>
          ))}
          {error && <p className="text-sm text-fg-muted">{t.lucia.error}</p>}
        </div>
      )}

      {/* Minimalist single-line input — talk to LucIA. */}
      <form onSubmit={submit} className="flex items-center gap-3 border-b border-border/80 pb-2 focus-within:border-accent-9 transition-colors duration-200">
        <input
          ref={inputRef}
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onFocus={() => !busy && onStateChange('listening')}
          onBlur={() => !busy && onStateChange('idle')}
          placeholder={hasConversation ? t.lucia.placeholder : t.lucia.intro}
          disabled={busy}
          aria-label={t.lucia.placeholder}
          className="w-full bg-transparent py-2 text-base text-fg placeholder:text-fg-subtle focus:outline-none disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={busy || !draft.trim()}
          aria-label={t.lucia.send}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-accent-11 transition-colors duration-200 hover:bg-accent-9/15 disabled:opacity-40"
        >
          <PaperPlaneRight size={20} weight="fill" aria-hidden="true" />
        </button>
      </form>
    </div>
  )
}

function TypingDots() {
  return (
    <span className="inline-flex items-center gap-1 align-middle">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-11"
          style={{ animationDelay: `${i * 0.18}s` }}
        />
      ))}
    </span>
  )
}
