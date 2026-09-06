import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { Section, Eyebrow, CapabilityTag } from '@/components/layout/Section'
import { Reveal } from '@/components/ui/Reveal'
import { LEVEL_ICONS } from '@/components/visuals/LevelIcons'
import type { DepthLevel } from '@/locales/types'
import { cn } from '@/lib/utils'

function AnchorRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-fg-subtle">{label}</dt>
      <dd className="mt-1 text-sm leading-snug text-fg-muted">{value}</dd>
    </div>
  )
}

function LevelCard({
  level,
  labels,
  onActive,
}: {
  level: DepthLevel
  labels: ReturnType<typeof useLanguage>['t']['depth']['labels']
  onActive: (id: string) => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const Icon = LEVEL_ICONS[level.id]

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) onActive(level.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [level.id, onActive])

  return (
    <Reveal
      as="div"
      className="group relative border-t border-hairline py-12 first:border-t-0 first:pt-0 lg:py-16"
    >
      <div ref={ref}>
        {/* Oversized background number */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-2 right-0 select-none font-bold leading-none text-fg/[0.04] text-[clamp(6rem,14vw,12rem)] transition-colors duration-300 group-hover:text-fg/[0.07]"
        >
          {level.num}
        </span>

        <div className="flex items-center gap-4">
          {Icon && (
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-hairline bg-surface/50 transition-colors duration-300 group-hover:border-accent-9/40 group-hover:bg-surface">
              <Icon className="h-9 w-9" />
            </span>
          )}
          <p className="font-mono text-sm text-accent-11">
            {level.num} · {level.name}
          </p>
        </div>
        <h3 className="mt-5 max-w-2xl text-[clamp(1.5rem,2.6vw,2.25rem)] font-bold leading-tight tracking-[-0.02em] text-fg">
          {level.tagline}
        </h3>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-fg-muted">{level.desc}</p>
        <p className="mt-3 max-w-2xl text-sm italic text-fg-subtle">{level.ideal}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {level.tags.map((tag) => (
            <CapabilityTag key={tag}>{tag}</CapabilityTag>
          ))}
        </div>

        {/* Commercial anchors — the "this is a real offer" block */}
        <dl className="mt-8 grid grid-cols-1 gap-x-8 gap-y-5 rounded-xl border border-border bg-surface/40 p-6 transition-colors duration-300 hover:border-accent-9/30 sm:grid-cols-2">
          <AnchorRow label={labels.deliverable} value={level.deliverable} />
          <AnchorRow label={labels.time} value={level.time} />
          <AnchorRow label={labels.start} value={level.start} />
          <AnchorRow label={labels.success} value={level.success} />
        </dl>
      </div>
    </Reveal>
  )
}

export function DepthLevels() {
  const { t } = useLanguage()
  const [active, setActive] = useState(t.depth.levels[0].id)

  return (
    <Section id="depth" className="bg-bg">
      <div className="max-w-2xl">
        <Reveal>
          <Eyebrow>{t.depth.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.02em] text-fg">
            {t.depth.heading}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 font-mono text-sm text-accent-11">{t.depth.axis}</p>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] lg:gap-16">
        {/* Sticky index (desktop) */}
        <nav aria-hidden="true" className="hidden lg:block">
          <ul className="sticky top-28 select-none space-y-4">
            {t.depth.levels.map((level) => {
              const on = level.id === active
              return (
                <li key={level.id} className="flex items-center gap-3">
                  <span
                    className={cn(
                      'h-px w-6 transition-all duration-300',
                      on
                        ? 'w-10 bg-accent-9 shadow-[0_0_10px_0_oklch(0.70_0.19_45/0.6)]'
                        : 'bg-border',
                    )}
                  />
                  <span
                    className={cn(
                      'font-mono text-sm transition-colors duration-300',
                      on ? 'text-accent-11' : 'text-fg-subtle',
                    )}
                  >
                    {level.num} {level.name}
                  </span>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Level cards */}
        <div>
          {t.depth.levels.map((level) => (
            <LevelCard key={level.id} level={level} labels={t.depth.labels} onActive={setActive} />
          ))}
        </div>
      </div>
    </Section>
  )
}
