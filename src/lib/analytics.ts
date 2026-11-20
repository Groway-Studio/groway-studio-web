/**
 * Capa de analytics (GA4). El loader de gtag vive en `index.html` y solo se
 * carga fuera de localhost (ver el guard ahí). Este wrapper evita que los
 * componentes toquen globals del navegador: si gtag no cargó (dev, bloqueador
 * de anuncios, consentimiento denegado) cada llamada es un no-op seguro.
 *
 * El lead real lo captura LucIA conversando y lo registra el backend; del lado
 * web medimos la intención: abrir el chat y enviar el primer mensaje.
 */

type GtagParams = Record<string, unknown>

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

/** Envía un evento a GA4. Nombre en formato object_action (GA4 convention). */
export function trackEvent(name: string, params: GtagParams = {}): void {
  window.gtag?.('event', name, params)
}
