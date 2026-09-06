import { useEffect, useRef } from 'react'

/**
 * Lightweight 2D echo of the hero point cloud: a sparse dot grid whose
 * brightness breathes with traveling waves, warm-tinted on black.
 *
 * Cheap by construction (a few hundred dots, plain canvas 2D), pauses
 * off-screen, renders a single static frame under prefers-reduced-motion.
 */
export function DotField({
  className,
  density = 30,
  intensity = 1,
}: {
  className?: string
  /** approximate px between dots */
  density?: number
  /** 0..1 multiplier on dot alpha, keeps the field subtle */
  intensity?: number
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0
    let visible = true
    let w = 0
    let h = 0
    let dpr = 1

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting }, { threshold: 0 })
    io.observe(canvas)

    // cheap smooth pseudo-noise from layered sines — no allocation per frame
    const wave = (x: number, y: number, t: number) =>
      Math.sin(x * 0.011 + t * 0.5) * Math.sin(y * 0.013 - t * 0.35) +
      Math.sin((x + y) * 0.006 + t * 0.22)

    const render = (t: number) => {
      ctx.clearRect(0, 0, w, h)
      for (let y = density / 2; y < h; y += density) {
        for (let x = density / 2; x < w; x += density) {
          const n = wave(x, y, t) * 0.5 // -1..1
          const k = Math.max(0, n * 0.5 + 0.5) // 0..1
          if (k < 0.18) continue
          const alpha = k * k * 0.55 * intensity
          const radius = 0.8 + k * 1.4
          // valleys stay amber-dim, crests go bright orange
          ctx.fillStyle = `oklch(${0.5 + k * 0.34} ${0.1 + k * 0.09} ${42 + k * 28} / ${alpha})`
          ctx.beginPath()
          ctx.arc(x, y, radius, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    if (reduceMotion) {
      render(4)
    } else {
      const t0 = performance.now()
      const loop = (now: number) => {
        raf = requestAnimationFrame(loop)
        if (!visible) return
        render((now - t0) / 1000)
      }
      raf = requestAnimationFrame(loop)
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      io.disconnect()
    }
  }, [density, intensity])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}
