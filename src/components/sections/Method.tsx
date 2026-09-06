import { useLanguage } from '@/contexts/LanguageContext'
import { Section, Eyebrow } from '@/components/layout/Section'
import { Reveal } from '@/components/ui/Reveal'
import { KeywordCloud } from '@/components/visuals/KeywordCloud'

export function Method() {
  const { t } = useLanguage()

  return (
    <Section id="method" className="overflow-hidden bg-bg-inset">
      {/* Dim vocabulary cloud drifting behind the method */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <KeywordCloud className="absolute inset-0 opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_65%_at_38%_42%,oklch(0.08_0.01_40/0.88),transparent_85%)]" />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-bg-inset to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-bg-inset to-transparent" />
      </div>
      <div className="relative max-w-2xl">
        <Reveal>
          <Eyebrow>{t.method.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 flex flex-wrap items-baseline gap-x-4 gap-y-2 text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.02em] text-fg">
            <span className="text-gradient">{t.method.name}</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 text-lg text-fg-muted">{t.method.heading}</p>
        </Reveal>
      </div>

      <ol className="relative mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {t.method.steps.map((step, i) => (
          <Reveal
            as="li"
            key={step.title}
            delay={i * 0.08}
            className="group relative flex flex-col bg-bg/70 p-7 backdrop-blur-sm transition-colors duration-300 hover:bg-surface/50"
          >
            <span className="select-none font-mono text-sm text-accent-11 transition-all duration-200 group-hover:[text-shadow:0_0_14px_oklch(0.70_0.19_45/0.6)]">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-4 text-xl font-semibold text-fg">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-fg-muted">{step.body}</p>
            {i < t.method.steps.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute right-5 top-7 hidden select-none font-mono text-accent-9/50 transition-all duration-200 ease-out group-hover:translate-x-1 group-hover:text-accent-9 lg:block"
              >
                →
              </span>
            )}
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
