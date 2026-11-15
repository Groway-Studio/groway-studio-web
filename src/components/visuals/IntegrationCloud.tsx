import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion'
import { INTEGRATIONS, nextIntegration } from '@/lib/integrations'

export function IntegrationCloud({ label }: { label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const visible = useInView(ref)
  const reduceMotion = useReducedMotion()
  const [apps, setApps] = useState([0, 1, 2, 3, 4, 5, 6, 7])
  const previousSlot = useRef(-1)

  useEffect(() => {
    if (!visible || reduceMotion) return
    const timer = window.setInterval(() => {
      if (document.hidden) return
      const next = nextIntegration(apps, previousSlot.current)
      previousSlot.current = next.slot
      setApps(next.apps)
    }, 2400)
    return () => window.clearInterval(timer)
  }, [apps, visible, reduceMotion])

  return (
    <div ref={ref} role="img" aria-label={label} className="integration-cloud">
      <svg viewBox="0 0 300 264" preserveAspectRatio="none" aria-hidden="true" className="integration-cloud-links">
        <g fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M150 132 H130 C108 132 114 38 88 38 M150 132 V38 M150 132 H170 C192 132 186 38 212 38 M150 132 H88 M150 132 H212 M150 132 H130 C108 132 114 226 88 226 M150 132 V226 M150 132 H170 C192 132 186 226 212 226" />
        </g>
      </svg>
      {Array.from({ length: 9 }, (_, position) => {
        if (position === 4) return (
          <div key="agent" className="integration-cloud-agent" aria-hidden="true">
            <svg viewBox="0 0 48 48" className="h-[38px] w-[38px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="14" width="30" height="25" rx="9" />
              <path d="M24 14 V8 M4 24 V30 M44 24 V30 M19 32 H29" />
              <circle cx="24" cy="6" r="2" />
              <rect x="16" y="23" width="3" height="3" rx="1" />
              <rect x="29" y="23" width="3" height="3" rx="1" />
            </svg>
          </div>
        )
        const app = INTEGRATIONS[apps[position > 4 ? position - 1 : position]]
        return (
          <div key={position} className="integration-cloud-slot" aria-hidden="true">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={app.slug}
                className="integration-cloud-app"
                initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
              >
                <img src={`/integrations/${app.slug}.svg`} width={20} height={20} alt="" />
                <span>{app.name}</span>
              </motion.div>
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
