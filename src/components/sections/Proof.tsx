import { useLanguage } from '@/contexts/LanguageContext'
import { Section, Eyebrow } from '@/components/layout/Section'
import { Reveal } from '@/components/ui/Reveal'
import type { ProofCase } from '@/locales/types'

/** A metric is real (publishable) only if the client filled it with an actual number. */
function isPlaceholder(metric: string) {
  return !metric || metric.includes('[')
}

function CaseCard({ c, template }: { c: ProofCase; template: boolean }) {
  return (
    <div
      className={
        template
          ? 'flex flex-col rounded-2xl border border-dashed border-border bg-surface/30 p-7'
          : 'flex flex-col rounded-2xl border border-border bg-surface/50 p-7 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-accent-9/40 hover:bg-surface/70'
      }
    >
      {template ? (
        <span className="inline-flex w-fit items-center rounded-md bg-surface-2 px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-widest text-fg-subtle">
          métrica pendiente
        </span>
      ) : (
        <span className="select-none text-[clamp(2rem,4vw,3rem)] font-bold leading-none text-gradient">
          {c.metric}
        </span>
      )}
      <h3 className="mt-5 text-lg font-semibold leading-snug text-fg">{c.title}</h3>
      <p className="mt-3 font-mono text-xs leading-relaxed text-fg-muted">{c.body}</p>
      <p className="mt-auto pt-5 text-xs text-fg-subtle">{c.sector}</p>
    </div>
  )
}

export function Proof() {
  const { t } = useLanguage()
  const realCases = t.proof.cases.filter((c) => !isPlaceholder(c.metric))
  const showTemplate = realCases.length === 0
  const cases = showTemplate ? t.proof.cases : realCases

  return (
    <Section id="proof" className="bg-bg">
      <div className="max-w-2xl">
        <Reveal>
          <Eyebrow>{t.proof.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.02em] text-fg">
            {t.proof.heading}
          </h2>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {cases.map((c, i) => (
          <Reveal as="div" key={i} delay={i * 0.08}>
            <CaseCard c={c} template={showTemplate} />
          </Reveal>
        ))}
      </div>

      {showTemplate && (
        <p className="mt-6 text-sm text-fg-subtle">{t.proof.fallback}</p>
      )}

      {/* Team credential — anchors the science with real people */}
      <Reveal delay={0.1}>
        <div className="mt-14 rounded-2xl border border-hairline bg-surface/30 p-8">
          <p className="font-mono text-[0.8125rem] uppercase tracking-[0.18em] text-accent-11">
            {t.proof.teamEyebrow}
          </p>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-fg">{t.proof.teamBody}</p>
        </div>
      </Reveal>
    </Section>
  )
}
