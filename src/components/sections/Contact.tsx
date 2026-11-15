import { useLanguage } from '@/contexts/LanguageContext'
import { Section, Eyebrow } from '@/components/layout/Section'
import { Reveal } from '@/components/ui/Reveal'
import { DotField } from '@/components/visuals/DotField'
import { SiriOrb } from '@/components/chat/SiriOrb'
import { openChat } from '@/components/chat/ChatWidget'

const CONTACT_EMAIL = 'hola@groway.studio'

export function Contact() {
  const { t } = useLanguage()

  return (
    <Section id="contact" className="bg-bg">
      <DotField className="pointer-events-none absolute inset-0 h-full w-full opacity-60" density={38} intensity={0.4} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_65%_at_50%_55%,oklch(0.13_0.015_40/0.92),transparent_80%)]" />
      <div className="relative mx-auto max-w-2xl text-center">
        <Reveal>
          <Eyebrow className="justify-center">{t.contact.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.02em] text-fg">
            {t.contact.heading}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-4 max-w-xl text-lg text-fg-muted">{t.contact.subhead}</p>
        </Reveal>

        {/* The assistant orb is the CTA */}
        <Reveal delay={0.15}>
          <button
            onClick={() => openChat()}
            aria-label={t.chat.launcher}
            className="group mx-auto mt-10 block rounded-full transition-transform duration-300 ease-out hover:scale-105 active:scale-95"
          >
            <SiriOrb size={128} mode="passive" />
          </button>
        </Reveal>

        <Reveal delay={0.2}>
          <button
            onClick={() => openChat()}
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-accent-9 px-8 py-4 text-base font-semibold text-[oklch(0.14_0.02_40)] transition-all duration-200 ease-out hover:bg-accent-10 hover:glow-orange active:scale-[0.98]"
          >
            {t.chat.launcher}
          </button>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-8 text-xs text-fg-subtle">
            {t.contact.privacy}{' '}
            <span className="mx-1.5 text-fg-subtle/50">·</span>
            {t.contact.emailNote}{' '}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-accent-11 underline decoration-accent-11/40 underline-offset-2 transition-colors duration-200 hover:decoration-accent-11"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </Reveal>
      </div>
    </Section>
  )
}
