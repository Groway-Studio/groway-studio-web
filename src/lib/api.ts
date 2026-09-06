/**
 * API layer. The site deploys as a static bundle (GitHub Pages), so any
 * backend lives behind an external endpoint configured at build time via
 * `VITE_CONTACT_ENDPOINT` (e.g. a Formspree form, a Cloudflare Worker, or a
 * future Groway API). Swapping the backend never touches component code.
 */

export interface ContactPayload {
  name: string
  email: string
  company?: string
  /** Self-assessed depth level — internal routing signal for sales. */
  depth: string
  problem: string
}

const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT
const CONTACT_EMAIL = 'hola@groway.studio'

export type ContactResult =
  /** delivered to the configured backend */
  | { via: 'endpoint' }
  /** no backend configured — a pre-filled mail draft was opened instead */
  | { via: 'mailto' }

export async function submitContact(data: ContactPayload): Promise<ContactResult> {
  if (CONTACT_ENDPOINT) {
    const res = await fetch(CONTACT_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data),
    })
    if (!res.ok) throw new Error(`Contact endpoint responded ${res.status}`)
    return { via: 'endpoint' }
  }

  // Graceful fallback so the form is never a dead end.
  const subject = encodeURIComponent(`[Groway] ${data.name} — ${data.depth}`)
  const body = encodeURIComponent(`${data.name} (${data.email})\n${data.company ?? ''}\n\n${data.problem}`)
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  return { via: 'mailto' }
}
