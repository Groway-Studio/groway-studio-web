import { Navigation } from "@/components/layout/Navigation"
import { Footer } from "@/components/layout/Footer"
import { SectionContainer } from "@/components/layout/SectionContainer"
import { Card } from "@/components/ui/card"
import { Brain, Cpu, Lightning, Rocket, Target, ChartBar, Robot, Cloud } from "@phosphor-icons/react"
import { useLanguage } from "@/contexts/LanguageContext"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

export function OurServicesPage() {
  const { t } = useLanguage();

  const servicesDetail = [
    {
      icon: <Brain size={40} weight="duotone" className="text-accent" />,
      title: t.services.items.strategy.title,
      description: t.services.items.strategy.description,
      features: [
        "Análisis de oportunidades de IA",
        "Roadmap tecnológico personalizado",
        "Evaluación de madurez digital",
        "Identificación de casos de uso"
      ]
    },
    {
      icon: <Cpu size={40} weight="duotone" className="text-accent" />,
      title: t.services.items.ml.title,
      description: t.services.items.ml.description,
      features: [
        "Modelos predictivos avanzados",
        "Procesamiento de lenguaje natural",
        "Computer Vision",
        "Análisis de datos complejos"
      ]
    },
    {
      icon: <Lightning size={40} weight="duotone" className="text-accent" />,
      title: t.services.items.automation.title,
      description: t.services.items.automation.description,
      features: [
        "Automatización de procesos",
        "Workflows inteligentes",
        "Integración de sistemas",
        "Optimización operacional"
      ]
    },
    {
      icon: <Rocket size={40} weight="duotone" className="text-accent" />,
      title: t.services.items.custom.title,
      description: t.services.items.custom.description,
      features: [
        "Desarrollo de IA a medida",
        "Arquitecturas escalables",
        "Soluciones end-to-end",
        "Soporte continuo"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24">
        <SectionContainer>
          <div className="text-center space-y-6 mb-16">
            <p className="text-xs font-medium tracking-wider uppercase text-accent">
              {t.services.overline}
            </p>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight tracking-tight">
              {t.services.title}
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.services.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {servicesDetail.map((service, index) => (
              <Card key={index} className="p-8 bg-card border-border hover:border-accent/50 transition-all duration-300">
                <div className="space-y-6">
                  <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center">
                    {service.icon}
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

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
