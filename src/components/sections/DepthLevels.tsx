import { ArrowRight } from '@phosphor-icons/react'
import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { Section, Eyebrow } from '@/components/layout/Section'
import { Reveal } from '@/components/ui/Reveal'
import { IntegrationCloud } from '@/components/visuals/IntegrationCloud'
import { ResearchCloud } from '@/components/visuals/ResearchCloud'
import { scrollToId } from '@/lib/scroll'

export function DepthLevels() {
  const { t } = useLanguage()
  const rowsRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(t.depth.levels[0].id)

  useEffect(() => {
    const rows = rowsRef.current?.querySelectorAll<HTMLElement>('[data-depth-level]')
    if (!rows) return
    const updateActive = () => {
      const line = window.innerHeight * 0.45
      let nearest = rows[0]
      let distance = Infinity
      rows.forEach(row => {
        const rect = row.getBoundingClientRect()
        const delta = rect.top > line ? rect.top - line : rect.bottom < line ? line - rect.bottom : 0
        if (delta < distance) { nearest = row; distance = delta }
      })
      if (nearest) setActive(nearest.dataset.depthLevel!)
    }
    updateActive()
    window.addEventListener('scroll', updateActive, { passive: true })
    window.addEventListener('resize', updateActive)
    return () => {
      window.removeEventListener('scroll', updateActive)
      window.removeEventListener('resize', updateActive)
    }
  }, [t.depth.levels])

  return (
    <Section id="depth" className="bg-bg" containerClassName="max-w-[75rem]">
      <Reveal>
        <Eyebrow>{t.depth.eyebrow}</Eyebrow>
        <h2 className="mt-5 max-w-2xl text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.02em] text-fg">
          {t.depth.heading}
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-8 lg:grid-cols-[8rem_minmax(0,1fr)]">
        <nav aria-label={t.depth.eyebrow} className="hidden lg:block">
          <ol className="sticky top-28 space-y-5 pt-10">
            {t.depth.levels.map(level => (
              <li key={level.id}>
                <a
                  href={`#depth-${level.id}`}
                  aria-current={active === level.id ? 'location' : undefined}
                  onClick={event => { event.preventDefault(); scrollToId(`depth-${level.id}`) }}
                  className={`flex items-center gap-2 font-mono text-xs transition-colors ${active === level.id ? 'text-accent-11' : 'text-fg-subtle hover:text-fg'}`}
                >
                  <span className={`h-px shrink-0 transition-all ${active === level.id ? 'w-5 bg-accent-9' : 'w-3 bg-border'}`} aria-hidden="true" />
                  <span>{level.num} {level.title}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div ref={rowsRef} className="min-w-0">
        {t.depth.levels.map((level, index) => (
          <Reveal key={level.id}>
            <article data-depth-level={level.id} aria-labelledby={`depth-${level.id}`} className="depth-row relative isolate">
              <span aria-hidden="true" className="pointer-events-none absolute right-0 top-3 -z-10 select-none text-[clamp(7rem,13vw,11rem)] font-bold leading-none text-fg/[0.04]">{level.num}</span>
              <div className={`depth-copy ${index % 2 ? 'depth-copy-right' : ''}`}>
                <p className="font-mono text-xs tracking-[0.12em] text-accent-11">{level.num} / {level.name.toUpperCase()}</p>
                <h3 id={`depth-${level.id}`} className="mt-3 scroll-mt-28 text-3xl font-semibold tracking-tight text-fg">{level.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-fg-muted">{level.desc}</p>
                {level.note && <p className="mt-5 text-sm leading-relaxed text-fg-muted">{level.note}</p>}
              </div>
              <div className={`depth-media ${index % 2 ? 'depth-media-left' : ''}`}>
                {level.id === 'orchestrate' ? (
                  <>
                    <IntegrationCloud label={t.depth.integrationLabel} />
                    <p className="mx-auto mt-4 max-w-sm text-center text-xs leading-relaxed text-fg-muted">{t.depth.integrationCaption}</p>
                  </>
                ) : level.id === 'research' ? (
                  <>
                    <ResearchCloud terms={t.depth.researchTerms} />
                    <p className="mt-3 text-center text-xs text-fg-muted">{t.depth.researchCaption}</p>
                  </>
                ) : (
                  <ul className="space-y-5">
                    {level.examples.map(example => (
                      <li key={example.title} className="flex gap-3">
                        <ArrowRight aria-hidden="true" size={16} className="mt-1 shrink-0 text-accent-11" />
                        <div>
                          <p className="text-sm font-medium text-fg">{example.title}</p>
                          {example.body && <p className="mt-1 text-sm leading-relaxed text-fg-muted">{example.body}</p>}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          </Reveal>
        ))}
        </div>
      </div>
      <Reveal className="flex flex-wrap items-center justify-between gap-6 border-t border-hairline pt-8">
        <div>
          <p className="font-medium text-fg">{t.depth.closingHeading}</p>
          <p className="mt-2 text-sm text-fg-muted">{t.depth.closingBody}</p>
        </div>
        <button type="button" onClick={() => scrollToId('contact')} className="inline-flex items-center gap-2 rounded-lg border border-accent-9/40 bg-surface px-5 py-3 text-sm font-semibold text-accent-11 transition-colors hover:border-accent-9 hover:bg-surface-2">
          {t.depth.cta}<ArrowRight aria-hidden="true" weight="bold" />
        </button>
      </Reveal>
    </Section>
  )
}
