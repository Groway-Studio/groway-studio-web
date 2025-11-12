import { Navigation } from "@/components/layout/Navigation"
import { Footer } from "@/components/layout/Footer"
import { SectionContainer } from "@/components/layout/SectionContainer"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/contexts/LanguageContext"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Users, Lightbulb, Rocket } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

export function AboutUsPage() {
  const { t } = useLanguage();

  const values = [
    {
      icon: <Target size={32} weight="duotone" className="text-accent" />,
      title: "Orientados a Resultados",
      description: "Cada proyecto está diseñado para generar impacto real y retorno de inversión medible."
    },
    {
      icon: <Lightbulb size={32} weight="duotone" className="text-accent" />,
      title: "Innovación Constante",
      description: "Nos mantenemos a la vanguardia de las tecnologías de IA más avanzadas del mercado."
    },
    {
      icon: <Users size={32} weight="duotone" className="text-accent" />,
      title: "Enfoque Colaborativo",
      description: "Trabajamos codo a codo con nuestros clientes para entender y resolver sus desafíos únicos."
    },
    {
      icon: <Rocket size={32} weight="duotone" className="text-accent" />,
      title: "Excelencia Técnica",
      description: "Nuestro equipo combina años de experiencia en ML, NLP y Computer Vision."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24">
        <SectionContainer>
          <div className="text-center space-y-6 mb-16">
            <p className="text-xs font-medium tracking-wider uppercase text-accent">
              {t.about.overline}
            </p>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight tracking-tight">
              {t.about.title}
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.about.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {values.map((value, index) => (
              <Card key={index} className="p-8 bg-card border-border hover:border-accent/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    {value.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 lg:p-12 bg-secondary/30 border-border mb-16">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center">
                Nuestra Diferencia
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground">
                <p className="leading-relaxed">
                  En Groway Studio, no creemos en las soluciones de talla única. Cada empresa tiene desafíos únicos 
                  que requieren enfoques personalizados y arquitecturas de IA diseñadas específicamente para sus necesidades.
                </p>
                
                <p className="leading-relaxed">
                  Nuestro equipo combina experiencia técnica profunda con una comprensión real de los desafíos empresariales. 
                  No solo implementamos tecnología—diseñamos soluciones que generan valor real y sostenible para tu organización.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                  {t.about.differentiators.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <p className="text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          <div className="text-center">
            <Link to="/contacto">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-base font-semibold group">
                {t.cta.button}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" weight="bold" />
              </Button>
            </Link>
          </div>
        </SectionContainer>
      </main>
      <Footer />
    </div>
  )
}
