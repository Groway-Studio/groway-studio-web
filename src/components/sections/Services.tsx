import { Card } from "@/components/ui/card"
import { Brain, Cpu, Lightning, Rocket } from "@phosphor-icons/react"
import { SectionContainer } from "@/components/layout/SectionContainer"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { ReactNode } from "react"

interface Service {
  icon: ReactNode
  title: string
  description: string
}

const services: Service[] = [
  {
    icon: <Brain size={32} weight="duotone" className="text-accent" />,
    title: "AI Strategy",
    description: "Crafting bespoke AI roadmaps to align with your business objectives and unlock competitive advantages."
  },
  {
    icon: <Cpu size={32} weight="duotone" className="text-accent" />,
    title: "Machine Learning",
    description: "Developing predictive models to unlock data-driven insights and intelligent automation."
  },
  {
    icon: <Lightning size={32} weight="duotone" className="text-accent" />,
    title: "AI Automation",
    description: "Streamlining operations with intelligent workflows that scale efficiency across your organization."
  },
  {
    icon: <Rocket size={32} weight="duotone" className="text-accent" />,
    title: "Custom Solutions",
    description: "Designing advanced AI systems from the ground up, tailored precisely to your unique challenges."
  }
]

export function Services() {
  return (
    <SectionContainer id="services">
      <SectionHeader
        overline="Our Expertise"
        title="Transforming Industries with Artificial Intelligence"
        description="Our expertise spans across the full spectrum of AI, delivering tailored solutions that meet your unique challenges."
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