import type React from 'react'

/**
 * Dot-matrix icons for the four depth levels.
 *
 * Same visual family as the hero point cloud: every icon is drawn with dots,
 * warm-gradient tinted, no strokes. Positions are computed deterministically
 * so the icons stay crisp at any size.
 */

interface Dot {
  x: number
  y: number
  r: number
  /** 0..1 → mixes from dim amber to bright crest along the gradient */
  heat: number
}

function DotSvg({ dots, title, className }: { dots: Dot[]; title: string; className?: string }) {
  return (
    <svg viewBox="0 0 48 48" role="img" aria-label={title} className={className}>
      {dots.map((d, i) => (
        <circle
          key={i}
          cx={d.x}
          cy={d.y}
          r={d.r}
          fill={`oklch(${0.55 + d.heat * 0.31} ${0.12 + d.heat * 0.07} ${45 + d.heat * 30})`}
          opacity={0.45 + d.heat * 0.55}
        />
      ))}
    </svg>
  )
}

/** 01 Orchestrate — a hub dot linked to an orbit of systems by stepping-stone dots. */
export function OrchestrateIcon({ className }: { className?: string }) {
  const dots: Dot[] = [{ x: 24, y: 24, r: 3.2, heat: 1 }]
  const R = 16
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2 - Math.PI / 2
    const ox = 24 + Math.cos(a) * R
    const oy = 24 + Math.sin(a) * R
    dots.push({ x: ox, y: oy, r: 2.2, heat: 0.55 })
    // stepping stones toward the hub
    dots.push({ x: 24 + Math.cos(a) * R * 0.62, y: 24 + Math.sin(a) * R * 0.62, r: 1.1, heat: 0.75 })
    dots.push({ x: 24 + Math.cos(a) * R * 0.34, y: 24 + Math.sin(a) * R * 0.34, r: 0.8, heat: 0.9 })
  }
  return <DotSvg dots={dots} title="Orchestrate" className={className} />
}

/** 02 Engineer — dots assembling into a rising structure, scaffold to solid. */
export function EngineerIcon({ className }: { className?: string }) {
  const dots: Dot[] = []
  const cols = 5
  const rows = 5
  for (let c = 0; c < cols; c++) {
    // each column grows taller left → right, like a build in progress
    const height = c + 1
    for (let r = 0; r < rows; r++) {
      if (rows - r > height) continue
      const built = r >= rows - c // upper new dots are "hot", base is settled
      dots.push({
        x: 8 + c * 8,
        y: 8 + r * 8,
        r: built ? 2.4 : 1.6,
        heat: built ? 0.95 : 0.35 + (r / rows) * 0.3,
      })
    }
  }
  return <DotSvg dots={dots} title="Engineer" className={className} />
}

/** 03 Model — a dim baseline curve and a bright fine-tuned curve lifting above it. */
export function ModelIcon({ className }: { className?: string }) {
  const dots: Dot[] = []
  const N = 9
  for (let i = 0; i < N; i++) {
    const t = i / (N - 1)
    const x = 6 + t * 36
    // baseline: shallow arc, dim
    dots.push({ x, y: 36 - Math.sin(t * Math.PI) * 6, r: 1.3, heat: 0.2 })
    // tuned model: same shape, lifted and brighter as it diverges
    const lift = Math.sin(t * Math.PI) * 16
    dots.push({ x, y: 34 - lift, r: 1.9, heat: 0.35 + Math.sin(t * Math.PI) * 0.65 })
  }
  return <DotSvg dots={dots} title="Model" className={className} />
}

/** 04 Research — dots spiraling outward from a known center into the unknown. */
export function ResearchIcon({ className }: { className?: string }) {
  const dots: Dot[] = [{ x: 24, y: 24, r: 2.6, heat: 1 }]
  const N = 18
  for (let i = 1; i <= N; i++) {
    const t = i / N
    const a = t * Math.PI * 3.2
    const r = 3 + t * 17
    dots.push({
      x: 24 + Math.cos(a) * r,
      y: 24 + Math.sin(a) * r,
      r: 0.9 + t * 1.5,
      heat: 1 - t * 0.75, // fades toward the frontier
    })
  }
  return <DotSvg dots={dots} title="Research" className={className} />
}

// eslint-disable-next-line react-refresh/only-export-components -- static icon registry, not stateful
export const LEVEL_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  orchestrate: OrchestrateIcon,
  engineer: EngineerIcon,
  model: ModelIcon,
  research: ResearchIcon,
}
