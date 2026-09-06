import { LogoMark } from '@/components/layout/Logo'
import { useLanguage } from '@/contexts/LanguageContext'
import { scrollToId } from '@/lib/scroll'

export function Footer() {
  const { t } = useLanguage()

  const services = ['Orchestrate', 'Engineer', 'Model', 'Research']
  const company: Array<{ label: string; id: string }> = [
    { label: t.nav.approach, id: 'approach' },
    { label: t.nav.proof, id: 'proof' },
    { label: t.nav.startups, id: 'startups' },
  ]

  return (
    <footer className="border-t border-hairline bg-bg-inset">
      <div className="mx-auto max-w-[75rem] px-6 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <LogoMark className="h-7 w-auto text-accent-9" />
              <span className="text-lg font-semibold tracking-tight text-fg">
                groway<span className="text-fg-muted">.studio</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-fg-muted">{t.footer.tagline}</p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-fg-subtle">
              {t.footer.servicesTitle}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollToId('depth')}
                    className="relative py-0.5 text-sm text-fg-muted transition-colors duration-200 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-accent-11/70 after:transition-transform after:duration-200 after:ease-out hover:text-accent-11 hover:after:scale-x-100"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-fg-subtle">
              {t.footer.companyTitle}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {company.map((c) => (
                <li key={c.id}>
                  <button
                    onClick={() => scrollToId(c.id)}
                    className="relative py-0.5 text-sm text-fg-muted transition-colors duration-200 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-accent-11/70 after:transition-transform after:duration-200 after:ease-out hover:text-accent-11 hover:after:scale-x-100"
                  >
                    {c.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-fg-subtle">
              {t.footer.contactTitle}
            </h3>
            <a
              href={`mailto:${t.footer.contactEmail}`}
              className="relative mt-4 inline-block py-0.5 text-sm text-fg-muted transition-colors duration-200 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-accent-11/70 after:transition-transform after:duration-200 after:ease-out hover:text-accent-11 hover:after:scale-x-100"
            >
              {t.footer.contactEmail}
            </a>
          </div>
        </div>

        <div className="mt-14 border-t border-hairline pt-6">
          <p className="text-xs text-fg-subtle">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
