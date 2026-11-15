import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
import { planTermInsertion } from '@/lib/researchCloud'

export function ResearchCloud({ terms }: { terms: string[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const cloud = ref.current
    if (!cloud) return
    const animations = new Set<Animation>()
    const makeTerm = (index: number) => {
      const element = document.createElement('span')
      element.textContent = terms[index]
      element.dataset.term = String(index)
      const emphasis = terms[index].length <= 12 && index % 3 === 0 ? 'large' : index % 4 === 3 ? 'accent' : index % 3 === 1 ? 'medium' : 'small'
      element.className = `research-term research-term--${emphasis}`
      return element
    }
    // This decorative scene owns its DOM so layout can be measured for each insertion.
    cloud.replaceChildren()
    const tracks = Array.from({ length: 4 }, (_, row) => {
      const lane = document.createElement('div')
      lane.className = 'research-cloud-lane'
      lane.setAttribute('aria-hidden', 'true')
      const track = document.createElement('div')
      track.className = 'research-cloud-track'
      terms.slice(row * 5, row * 5 + 5).forEach((_, column) => track.append(makeTerm(row * 5 + column)))
      lane.append(track)
      cloud.append(lane)
      return track
    })
    let visible = false
    let changing = false
    let previousRow = -1
    let disposed = false
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting })
    observer.observe(cloud)
    const animate = (element: HTMLElement, frames: Keyframe[], options: KeyframeAnimationOptions = {}) => {
      if (reduceMotion || typeof element.animate !== 'function') return Promise.resolve()
      const animation = element.animate(frames, { duration: 850, easing: 'cubic-bezier(.22,1,.36,1)', ...options })
      animations.add(animation)
      return animation.finished.catch(() => {}).finally(() => { animations.delete(animation) })
    }
    const timer = reduceMotion ? undefined : window.setInterval(async () => {
      if (!visible || document.hidden || changing || disposed) return
      const rows = tracks.map(track => Array.from(track.children).map(element => Number((element as HTMLElement).dataset.term)))
      const next = planTermInsertion(rows, previousRow, terms.length)
      const track = tracks[next.row]
      const existing = Array.from(track.children) as HTMLElement[]
      const before = new Map(existing.map(element => [element, element.getBoundingClientRect().left]))
      const newcomer = makeTerm(next.term)
      track.insertBefore(newcomer, existing[next.insertion])
      existing[next.retire].remove()
      const moves = (Array.from(track.children) as HTMLElement[]).filter(element => element !== newcomer).map(element => {
        const offset = before.get(element)! - element.getBoundingClientRect().left
        return animate(element, [{ transform: `translateX(${offset}px)` }, { transform: 'translateX(0)' }])
      })
      changing = true
      previousRow = next.row
      try {
        await Promise.all([...moves, animate(newcomer, [
          { opacity: 0, transform: 'translateY(6px) scale(.92)' },
          { opacity: 1, transform: 'translateY(0) scale(1)' },
        ], { duration: 650, delay: 140 })])
      } finally { changing = false }
    }, 1900)
    return () => {
      disposed = true
      window.clearInterval(timer)
      observer.disconnect()
      animations.forEach(animation => animation.cancel())
      cloud.replaceChildren()
    }
  }, [terms, reduceMotion])

  return <div ref={ref} className="research-cloud" role="img" aria-label={terms.join(', ')} />
}
