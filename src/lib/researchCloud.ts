/** Pick an unseen term and insert it inside a different row on every turn. */
export function planTermInsertion(rows: number[][], previousRow: number, termCount: number, random: () => number = Math.random) {
  const visible = new Set(rows.flat())
  const available = Array.from({ length: termCount }, (_, i) => i).filter(i => !visible.has(i))
  const candidates = rows.map((_, i) => i).filter(i => i !== previousRow)
  const row = candidates[Math.floor(random() * candidates.length)]
  const insertion = 1 + Math.floor(random() * (rows[row].length - 1))
  return {
    row,
    insertion,
    term: available[Math.floor(random() * available.length)],
    retire: insertion <= rows[row].length / 2 ? rows[row].length - 1 : 0,
  }
}
