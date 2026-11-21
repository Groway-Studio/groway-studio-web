import { ArrowRight, Crosshair, Stack, Flask, GearSix } from '@phosphor-icons/react'
import { useLanguage } from '@/contexts/LanguageContext'
import { Section, Eyebrow } from '@/components/layout/Section'
import { Reveal } from '@/components/ui/Reveal'

const stepIcons = [Crosshair, Stack, Flask, GearSix]

export function Method() {
  const { t } = useLanguage()

  return (
    <Section id="method" className="method-journey overflow-hidden">
      <svg className="method-contours" viewBox="0 0 1200 600" preserveAspectRatio="none" fill="none" aria-hidden="true">
        {Array.from({ length: 12 }, (_, i) => (
          <path key={i} d={`M${630 + i * 24} -30 C${750 + i * 12} 210 1000 ${170 + i * 10} 1250 ${20 + i * 14} M-60 ${440 + i * 9} C180 ${360 + i * 11} 170 ${730 + i * 6} 490 650`} />
        ))}
      </svg>
      <div className="relative max-w-2xl">
        <Reveal><Eyebrow className="method-eyebrow">{t.method.eyebrow}</Eyebrow></Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 text-[clamp(2.2rem,5vw,3.75rem)] font-bold leading-[1.05] tracking-[-0.03em] text-accent-11">{t.method.name}</h2>
        </Reveal>
        <Reveal delay={0.1}><p className="mt-4 text-lg text-fg-muted">{t.method.heading}</p></Reveal>
      </div>
      <ol className="method-steps">
        {t.method.steps.map((step, i) => {
          const Icon = stepIcons[i]
          return (
            <Reveal as="li" key={step.title} delay={i * 0.08} className="method-step">
              <span className="font-mono text-sm font-medium text-accent-11">{String(i + 1).padStart(2, '0')}</span>
              <span className="method-step-icon"><Icon size={32} weight="regular" aria-hidden="true" /></span>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-fg">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-fg-muted">{step.body}</p>
              {i < t.method.steps.length - 1 && <span className="method-connector" aria-hidden="true"><ArrowRight size={19} weight="bold" /></span>}
            </Reveal>
          )
        })}
      </ol>
    </Section>
  )
}
