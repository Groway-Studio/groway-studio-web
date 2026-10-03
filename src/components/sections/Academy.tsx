import { GraduationCap } from '@phosphor-icons/react'
import { useLanguage } from '@/contexts/LanguageContext'
import { Section, Eyebrow } from '@/components/layout/Section'
import { Reveal } from '@/components/ui/Reveal'
import { openChat } from '@/components/chat/ChatWidget'

export function Academy() {
  const { t } = useLanguage()

  return (
    <Section id="academy" className="bg-bg">
      <div className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Pitch: en escritorio pasa a la derecha para alternar con Startups. */}
        <div className="lg:order-2">
          <Reveal>
            <Eyebrow>
              <span className="inline-flex items-center gap-2">
                <GraduationCap weight="fill" className="text-accent-9" />
                {t.academy.eyebrow}
              </span>
            </Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.08] tracking-[-0.02em] text-fg">
              {t.academy.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-muted">{t.academy.body}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <button
              onClick={() => openChat(t.chat.prefillAcademy)}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-accent-9 px-7 py-4 text-base font-semibold text-[oklch(0.14_0.02_40)] transition-all duration-200 ease-out hover:bg-accent-10 hover:glow-orange active:scale-[0.98]"
            >
              {t.academy.cta}
            </button>
          </Reveal>
        </div>

        {/* Two tracks: en escritorio ocupa la izquierda. */}
        <div className="grid gap-5 lg:order-1">
          {t.academy.tracks.map((track, i) => (
            <Reveal key={track.title} delay={0.1 + i * 0.05}>
              <div className="rounded-2xl border border-border bg-surface/50 p-7 transition-colors duration-300 hover:border-accent-9/40 hover:bg-surface">
                <h3 className="text-lg font-semibold text-fg">{track.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{track.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
