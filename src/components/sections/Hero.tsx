import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { PointCloudCanvas, type OrbState } from '@/components/hero/PointCloudCanvas'
import { LuciaConversation } from '@/components/hero/LuciaConversation'
import { scrollToId } from '@/lib/scroll'

/** Renders the H1 with the highlight substring wrapped in the signature gradient. */
function HeadlineWithHighlight({ text, highlight }: { text: string; highlight: string }) {
  const idx = text.indexOf(highlight)
  if (idx === -1) return <>{text}</>
  return (
    <>
      {text.slice(0, idx)}
      <span className="text-gradient">{highlight}</span>
      {text.slice(idx + highlight.length)}
    </>
  )
}

export function Hero() {
  const { t } = useLanguage()
  const [orbState, setOrbState] = useState<OrbState>('idle')

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-bg-inset">
      {/* LucIA's presence — the orb reacts as she listens, thinks and speaks */}
      <PointCloudCanvas state={orbState} className="pointer-events-none absolute inset-0 h-full w-full" />

      {/* Legibility overlays: top fade, strong fade to next section, text scrim */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-bg-inset to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-bg to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_30%_50%,oklch(0.06_0_0/0.55),transparent_70%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[75rem] px-6 pt-24 pb-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent-11">
            {t.hero.overline}
          </p>

          <h1 className="mt-6 text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.98] tracking-[-0.03em] text-fg">
            <HeadlineWithHighlight text={t.hero.h1} highlight={t.hero.h1Highlight} />
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-fg-muted lg:text-xl">
            {t.hero.subhead}
          </p>

          {/* Talk to LucIA — the orb above is her presence */}
          <LuciaConversation onStateChange={setOrbState} />
        </div>
      </div>

      {/* Scroll hint */}
      <button
        onClick={() => scrollToId('approach')}
        aria-label={t.hero.scroll}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 rounded-full p-2 text-fg-subtle transition-colors duration-200 hover:text-accent-11"
      >
        <span className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-current p-1.5 transition-colors duration-200">
          <span className="h-2 w-1 animate-[scroll-hint_2s_ease-in-out_infinite] rounded-full bg-current" />
        </span>
      </button>
    </section>
  )
}
