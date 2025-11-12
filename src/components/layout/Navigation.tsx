import { TrendUp, List, X } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import { LanguageSelector } from "@/components/ui/language-selector"
import { useLanguage } from "@/contexts/LanguageContext"
import { Link } from "react-router-dom"
import { useState } from "react"

export function Navigation() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <TrendUp className="text-accent" size={28} weight="bold" />
          <span className="text-xl font-bold text-foreground">Groway Studio</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="/servicios" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
            {t.nav.services}
          </Link>
          <Link to="/nosotros" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
            {t.nav.about}
          </Link>
          <Link to="/contacto" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
            {t.nav.contact}
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <LanguageSelector />
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="px-6 py-4 space-y-4">
            <Link 
              to="/servicios" 
              className="block text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.services}
            </Link>
            <Link 
              to="/nosotros" 
              className="block text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.about}
            </Link>
            <Link 
              to="/contacto" 
              className="block text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.contact}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}