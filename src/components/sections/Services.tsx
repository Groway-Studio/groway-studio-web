import { Card } from "@/components/ui/card"
import { Brain, Cpu, Lightning, Rocket } from "@phosphor-icons/react"
import { SectionContainer } from "@/components/layout/SectionContainer"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { useLanguage } from "@/contexts/LanguageContext"
import { ReactNode } from "react"

export function Services() {
  const { t } = useLanguage();
  
  const services: Array<{ icon: ReactNode; title: string; description: string }> = [
    {
      icon: <Brain size={32} weight="duotone" className="text-accent" />,
      title: t.services.items.strategy.title,
      description: t.services.items.strategy.description
    },
    {
      icon: <Cpu size={32} weight="duotone" className="text-accent" />,
      title: t.services.items.ml.title,
      description: t.services.items.ml.description
    },
    {
      icon: <Lightning size={32} weight="duotone" className="text-accent" />,
      title: t.services.items.automation.title,
      description: t.services.items.automation.description
    },
    {
      icon: <Rocket size={32} weight="duotone" className="text-accent" />,
      title: t.services.items.custom.title,
      description: t.services.items.custom.description
    }
  ];

  return (
    <SectionContainer id="services">
      <SectionHeader
        overline={t.services.overline}
        title={t.services.title}
        description={t.services.description}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {services.map((service, index) => (
          <Card
            key={index}
            className="p-6 lg:p-8 bg-card border-border hover:border-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/10 group"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </SectionContainer>
  )
}