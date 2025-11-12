import { TrendUp, GithubLogo, LinkedinLogo, TwitterLogo } from "@phosphor-icons/react"
import { Separator } from "@/components/ui/separator"
import { useLanguage } from "@/contexts/LanguageContext"

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <TrendUp className="text-accent" size={28} weight="bold" />
              <span className="text-xl font-bold text-foreground">Groway Studio</span>
            </div>
            <p className="text-muted-foreground">
              {t.footer.description}
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-muted-foreground hover:text-accent transition-colors">{t.nav.about}</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-accent transition-colors">{t.nav.services}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">{t.nav.contact}</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              {t.nav.services}
            </h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-muted-foreground hover:text-accent transition-colors">{t.services.items.strategy.title}</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-accent transition-colors">{t.services.items.ml.title}</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-accent transition-colors">{t.services.items.automation.title}</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-accent transition-colors">{t.services.items.custom.title}</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-card border border-border hover:border-accent hover:bg-accent/10 flex items-center justify-center transition-all">
                <LinkedinLogo size={20} weight="bold" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-card border border-border hover:border-accent hover:bg-accent/10 flex items-center justify-center transition-all">
                <TwitterLogo size={20} weight="bold" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-card border border-border hover:border-accent hover:bg-accent/10 flex items-center justify-center transition-all">
                <GithubLogo size={20} weight="bold" />
              </a>
            </div>
          </div>
        </div>
        
        <Separator className="mb-8" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Groway Studio. {t.footer.copyright}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}