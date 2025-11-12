import { SectionContainer } from "@/components/layout/SectionContainer"
import { Card } from "@/components/ui/card"
import { Check, Sparkle, Target, Users } from "@phosphor-icons/react"
import { useLanguage } from "@/contexts/LanguageContext"

export function About() {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <Sparkle size={24} weight="duotone" className="text-accent" />,
      title: t.about.features.design.title,
      description: t.about.features.design.description
    },
    {
      icon: <Target size={24} weight="duotone" className="text-accent" />,
      title: t.about.features.results.title,
      description: t.about.features.results.description
    },
    {
      icon: <Users size={24} weight="duotone" className="text-accent" />,
      title: t.about.features.enterprise.title,
      description: t.about.features.enterprise.description
    }
  ];

  return (
    <SectionContainer id="about" className="bg-secondary/30">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-6">
          <p className="text-xs font-medium tracking-wider uppercase text-accent">
            {t.about.overline}
          </p>
          
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight tracking-tight">
            {t.about.title}
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.about.description}
          </p>
          
          <div className="space-y-3 pt-4">
            {t.about.differentiators.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={14} weight="bold" className="text-accent" />
                </div>
                <p className="text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 bg-card border-border hover:border-accent/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  {feature.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}