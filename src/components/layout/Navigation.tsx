import { TrendUp, List } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import { LanguageSelector } from "@/components/ui/language-selector"
import { useLanguage } from "@/contexts/LanguageContext"

export function Navigation() {
  const { t } = useLanguage();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <TrendUp className="text-accent" size={28} weight="bold" />
          <span className="text-xl font-bold text-foreground">Groway Studio</span>
        </div>
        
        <div className="flex items-center gap-2">
          <LanguageSelector />
          <Button variant="ghost" size="icon">
            <List size={24} weight="bold" />
          </Button>
        </div>
      </div>
    </nav>
  )
}