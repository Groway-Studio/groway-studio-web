import { useEffect, useState } from 'react'
import { List, X } from '@phosphor-icons/react'
import { LogoMark } from '@/components/layout/Logo'
import { useLanguage } from '@/contexts/LanguageContext'
import { scrollToId } from '@/lib/scroll'
import { cn } from '@/lib/utils'
import type { Language } from '@/locales/types'

const NAV_IDS = ['approach', 'depth', 'method', 'proof', 'startups'] as const

function LangToggle() {
  const { language, setLanguage } = useLanguage()
  const langs: Language[] = ['es', 'en', 'ko']
  return (
    <div className="flex items-center rounded-full border border-border p-0.5">
      {langs.map((l) => (
        <button
          key={l}
          onClick={() => setLanguage(l)}
          aria-pressed={language === l}
          className={cn(
            'rounded-full px-3 py-1.5 font-mono text-xs uppercase transition-all duration-200 ease-out active:scale-95',
            language === l ? 'bg-accent-9 text-[oklch(0.14_0.02_40)]' : 'text-fg-subtle hover:text-fg',
          )}
        >
          {l}
        </button>
      ))}
    </div>
  )
}

export function Navigation() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.7)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id: string) => {
    setMenuOpen(false)
    scrollToId(id)
  }

  const navLabels: Record<(typeof NAV_IDS)[number], string> = {
    approach: t.nav.approach,
    depth: t.nav.depth,
    method: t.nav.method,
    proof: t.nav.proof,
    startups: t.nav.startups,
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-hairline bg-bg/80 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav className="mx-auto flex max-w-[75rem] items-center justify-between px-6 py-4 lg:px-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group flex items-center gap-2.5 text-fg"
        >
          <LogoMark className="h-7 w-auto text-accent-9 transition-all duration-200 group-hover:drop-shadow-[0_0_10px_oklch(0.70_0.19_45/0.6)]" />
          <span className="text-lg font-semibold tracking-tight">
            groway<span className="text-fg-muted">.studio</span>
          </span>
        </button>

        <div className="hidden items-center gap-7 md:flex">
          {NAV_IDS.map((id) => (
            <button
              key={id}
              onClick={() => go(id)}
              className="relative py-1 text-sm font-medium text-fg-muted transition-colors duration-200 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-accent-11/70 after:transition-transform after:duration-200 after:ease-out hover:text-accent-11 hover:after:scale-x-100"
            >
              {navLabels[id]}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <LangToggle />
          <button
            onClick={() => go('contact')}
            className="hidden rounded-lg bg-accent-9 px-4 py-2 text-sm font-semibold text-[oklch(0.14_0.02_40)] transition-all duration-200 ease-out hover:bg-accent-10 hover:glow-orange-soft active:scale-[0.98] sm:inline-flex"
          >
            {t.nav.cta}
          </button>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
            className="-m-2 rounded-md p-2 text-fg transition-colors duration-200 hover:text-accent-11 md:hidden"
          >
            {menuOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-hairline bg-bg/95 backdrop-blur-md md:hidden">
          <div className="space-y-1 px-6 py-4">
            {NAV_IDS.map((id) => (
              <button
                key={id}
                onClick={() => go(id)}
                className="block w-full py-2.5 text-left text-sm font-medium text-fg-muted transition-colors duration-200 hover:text-accent-11"
              >
                {navLabels[id]}
              </button>
            ))}
            <button
              onClick={() => go('contact')}
              className="mt-2 block w-full rounded-lg bg-accent-9 px-4 py-3 text-center text-sm font-semibold text-[oklch(0.14_0.02_40)] transition-all duration-200 ease-out hover:bg-accent-10 active:scale-[0.99]"
            >
              {t.nav.cta}
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
