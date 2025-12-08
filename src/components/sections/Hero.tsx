import { Button } from "@/components/ui/button"
import { ArrowRight } from "@phosphor-icons/react"
import { useLanguage } from "@/contexts/LanguageContext"
import { Link } from "react-router-dom"

export function Hero() {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Efecto de luz amaneciendo en el horizonte superior */}
      <div className="absolute top-0 inset-x-0 h-[60vh] pointer-events-none animate-dawn">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent shadow-[0_0_80px_40px_rgba(99,102,241,0.3)]" />
        <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-accent/20 via-primary/10 to-transparent opacity-60 animate-pulse" style={{ animationDuration: '4s' }} />
      </div>
      
      <div className="absolute inset-0 gradient-glow" />
      
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-primary/10 to-transparent animate-gradient" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-8">
        <p className="text-xs font-medium tracking-wider uppercase text-accent animate-fade-in">
          {t.hero.overline}
        </p>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight tracking-tight animate-fade-in-up">
          {t.hero.title.line1}<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent">
            {t.hero.title.highlight}
          </span><br />
          {t.hero.title.line2}
        </h1>
        
        <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {t.hero.description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Link to="/contacto">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-base font-semibold group">
              {t.hero.cta}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" weight="bold" />
            </Button>
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full p-1">
          <div className="w-1.5 h-2 bg-accent rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  )
}