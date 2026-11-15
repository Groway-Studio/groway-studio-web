import { ArrowRight } from '@phosphor-icons/react'
import { useLanguage } from '@/contexts/LanguageContext'
import { Section, Eyebrow } from '@/components/layout/Section'
import { Reveal } from '@/components/ui/Reveal'
import { IntegrationCloud } from '@/components/visuals/IntegrationCloud'
import { ResearchCloud } from '@/components/visuals/ResearchCloud'
import { scrollToId } from '@/lib/scroll'

export function DepthLevels() {
  const { t } = useLanguage()

  return (
    <Section id="depth" className="bg-bg" containerClassName="max-w-[70rem]">
      <Reveal>
        <Eyebrow>{t.depth.eyebrow}</Eyebrow>
        <h2 className="mt-5 max-w-2xl text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.02em] text-fg">
          {t.depth.heading}
        </h2>
      </Reveal>
      <div className="mt-12">
        {t.depth.levels.map((level, index) => (
          <Reveal key={level.id}>
            <article aria-labelledby={`depth-${level.id}`} className="depth-row">
              <div className={`depth-copy ${index % 2 ? 'depth-copy-right' : ''}`}>
                <p className="font-mono text-xs tracking-[0.12em] text-accent-11">{level.num} / {level.name.toUpperCase()}</p>
                <h3 id={`depth-${level.id}`} className="mt-3 text-3xl font-semibold tracking-tight text-fg">{level.title}</h3>
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
