import { Check, Lightning } from '@phosphor-icons/react'
import { useLanguage } from '@/contexts/LanguageContext'
import { Section, Eyebrow } from '@/components/layout/Section'
import { Reveal } from '@/components/ui/Reveal'
import { openChat } from '@/components/chat/ChatWidget'

export function Startups() {
  const { t } = useLanguage()

  return (
    <Section id="startups" className="bg-inset-pool">
      <div className="gradient-glow pointer-events-none absolute inset-x-0 top-0 h-1/2" />
      <div className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Pitch */}
        <div>
          <Reveal>
            <Eyebrow>
              <span className="inline-flex items-center gap-2">
                <Lightning weight="fill" className="text-accent-9" />
                {t.startups.eyebrow}
              </span>
            </Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.08] tracking-[-0.02em] text-fg">
              {t.startups.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-muted">{t.startups.body}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <button
              onClick={() => openChat(t.chat.prefillMvp)}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-accent-9 px-7 py-4 text-base font-semibold text-[oklch(0.14_0.02_40)] transition-all duration-200 ease-out hover:bg-accent-10 hover:glow-orange active:scale-[0.98]"
            >
              {t.startups.cta}
            </button>
          </Reveal>
        </div>

        {/* Package "ticket" card */}
        <Reveal delay={0.1}>
          <div className="glow-orange relative rounded-2xl border border-accent-9/30 bg-surface/60 p-8 transition-colors duration-300 hover:border-accent-9/50">
            <div className="flex items-baseline justify-between border-b border-hairline pb-5">
              <h3 className="text-xl font-semibold text-fg">{t.startups.packageTitle}</h3>
              <span className="glow-orange-soft rounded-full bg-accent-9/15 px-3 py-1 font-mono text-sm text-accent-11">
                {t.startups.packageTime}
              </span>
            </div>
            <ul className="mt-6 space-y-4">
              {t.startups.includes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check
                    weight="bold"
                    className="mt-0.5 shrink-0 text-accent-9"
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-relaxed text-fg-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
