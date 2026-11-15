/**
 * Cloudflare Turnstile en modo invisible. El widget de chat no tiene un form
 * visible, así que ejecutamos el challenge on-demand justo antes de enviar el
 * lead y devolvemos el token para que el backend lo verifique (siteverify).
 *
 * Sin `VITE_TURNSTILE_SITEKEY` configurada, `getTurnstileToken` devuelve null
 * y el envío procede sin token (útil en dev; el backend también omite la
 * verificación si no tiene secret).
 */
const SITEKEY = import.meta.env.VITE_TURNSTILE_SITEKEY
const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js'

interface TurnstileApi {
  render: (el: HTMLElement, opts: Record<string, unknown>) => string
  execute: (widgetId: string) => void
  reset: (widgetId: string) => void
}

declare global {
  interface Window {
    turnstile?: TurnstileApi
  }
}

let scriptPromise: Promise<void> | null = null
let widgetId: string | null = null
let container: HTMLElement | null = null

function loadScript(): Promise<void> {
  if (window.turnstile) return Promise.resolve()
  if (scriptPromise) return scriptPromise
  scriptPromise = new Promise((resolve, reject) => {
    const s = document.createElement('script')
    s.src = SCRIPT_SRC
    s.async = true
    s.defer = true
    s.onload = () => resolve()
    s.onerror = () => reject(new Error('turnstile script failed to load'))
    document.head.appendChild(s)
  })
  return scriptPromise
}

/**
 * Ejecuta un challenge invisible y resuelve con el token, o null si Turnstile
 * no está configurado. Nunca lanza: un fallo de red del challenge no debe
 * romper la captura del lead (el backend decide si el token es obligatorio).
 */
export async function getTurnstileToken(): Promise<string | null> {
  if (!SITEKEY) return null
  try {
    await loadScript()
    const api = window.turnstile
    if (!api) return null

    if (!container) {
      container = document.createElement('div')
      container.style.display = 'none'
      document.body.appendChild(container)
    }

    return await new Promise<string | null>((resolve) => {
      const timeout = setTimeout(() => resolve(null), 8000)
      const done = (token: string | null) => {
        clearTimeout(timeout)
        resolve(token)
      }
      if (widgetId === null) {
        widgetId = api.render(container as HTMLElement, {
          sitekey: SITEKEY,
          size: 'invisible',
          callback: (token: string) => done(token),
          'error-callback': () => done(null),
          'timeout-callback': () => done(null),
        })
      } else {
        api.reset(widgetId)
      }
      api.execute(widgetId as string)
    })
  } catch {
    return null
  }
}
