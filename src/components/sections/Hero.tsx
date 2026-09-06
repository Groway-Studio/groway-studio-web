import { ArrowRight } from '@phosphor-icons/react'
import { useLanguage } from '@/contexts/LanguageContext'
import { PointCloudCanvas } from '@/components/hero/PointCloudCanvas'
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

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-bg-inset">
      {/* Animated point-cloud, decorative, behind everything */}
      <PointCloudCanvas className="pointer-events-none absolute inset-0 h-full w-full" />

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

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              onClick={() => scrollToId('contact')}
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-accent-9 px-7 py-4 text-base font-semibold text-[oklch(0.14_0.02_40)] transition-all duration-200 ease-out hover:bg-accent-10 hover:glow-orange active:scale-[0.98]"
            >
              {t.hero.ctaPrimary}
              <ArrowRight weight="bold" className="transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollToId('approach')}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-7 py-4 text-base font-medium text-fg transition-colors duration-200 hover:border-accent-9/60 hover:bg-surface/40 hover:text-accent-11"
            >
              {t.hero.ctaSecondary}
            </button>
          </div>
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
