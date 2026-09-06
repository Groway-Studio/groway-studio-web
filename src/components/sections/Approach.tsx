import { useLanguage } from '@/contexts/LanguageContext'
import { Section, Eyebrow } from '@/components/layout/Section'
import { Reveal } from '@/components/ui/Reveal'
import { DotField } from '@/components/visuals/DotField'

export function Approach() {
  const { t } = useLanguage()

  return (
    <Section id="approach" className="bg-bg">
      {/* Breathing dot field — 2D echo of the hero cloud */}
      <DotField className="pointer-events-none absolute inset-0 h-full w-full opacity-70" density={34} intensity={0.5} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_60%_at_50%_50%,oklch(0.13_0.015_40/0.9),transparent_75%)]" />
      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <Eyebrow className="justify-center">{t.approach.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.02em] text-fg">
            {t.approach.thesis}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mx-auto mt-8 h-px w-16 bg-gradient-to-r from-transparent via-accent-9 to-transparent" />
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-[60ch] text-lg leading-relaxed text-fg-muted">
            {t.approach.body}
          </p>
        </Reveal>
      </div>
    </Section>
  )
}
