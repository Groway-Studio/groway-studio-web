/**
 * Parte el texto de un turno de LucIA en burbujas. La persona escribe los beats
 * distintos (saludo / pregunta / dato) como mensajes separados por una línea en
 * blanco (`\n\n`) — cada bloque es una burbuja, como cuando alguien manda dos o
 * tres mensajes seguidos en un chat.
 *
 * Robustez: si el modelo colara un separador crudo en su propia línea ("---",
 * "***", "|||", "[separador]"…), se descarta — nunca debe verse un marcador en
 * pantalla. Bloques vacíos o de solo espacios se colapsan.
 */

/** Una línea que es solo un marcador de separación, no contenido real. */
const SEPARATOR_ARTIFACT = /^\s*(?:[-–—*_=|·•]{2,}|\[[^\]]*\]|<[^>]*>)\s*$/

export function splitBubbles(text: string): string[] {
  return text
    .split(/\n{2,}/)
    .map((block) => stripSeparatorLines(block).trim())
    .filter((block) => block.length > 0)
}

/** Quita líneas que son solo un artefacto de separador dentro de un bloque. */
function stripSeparatorLines(block: string): string {
  return block
    .split('\n')
    .filter((line) => !SEPARATOR_ARTIFACT.test(line))
    .join('\n')
}

/**
 * Delay del indicador "escribiendo…" antes de una burbuja, proporcional a su
 * largo: una frase corta aparece casi enseguida, una más larga se hace esperar.
 */
export function typingDelayMs(bubble: string): number {
  const words = bubble.trim().split(/\s+/).filter(Boolean).length
  return Math.min(400 + words * 30, 1500)
}
