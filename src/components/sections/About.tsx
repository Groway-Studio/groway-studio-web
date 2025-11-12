import { SectionContainer } from "@/components/layout/SectionContainer"
import { Card } from "@/components/ui/card"
import { Check, Sparkle, Target, Users } from "@phosphor-icons/react"

const features = [
  {
    icon: <Sparkle size={24} weight="duotone" className="text-accent" />,
    title: "Advanced AI Design",
    description: "We don't just orchestrate—we design custom AI architectures from the ground up."
  },
  {
    icon: <Target size={24} weight="duotone" className="text-accent" />,
    title: "Results-Driven",
    description: "Every solution is engineered to deliver measurable business impact and ROI."
  },
  {
    icon: <Users size={24} weight="duotone" className="text-accent" />,
    title: "Enterprise-Ready",
    description: "Scalable, secure, and robust AI systems built for enterprise deployment."
  }
]

const differentiators = [
  "Custom AI architectures, not templated solutions",
  "Deep technical expertise in ML, NLP, and Computer Vision",
  "End-to-end ownership from strategy to deployment",
  "Proven track record of delivering business value"
]

export function About() {
  return (
    <SectionContainer id="about" className="bg-secondary/30">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-6">
          <p className="text-xs font-medium tracking-wider uppercase text-accent">
            Why Groway Studio
          </p>
          
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight tracking-tight">
            Built for Businesses That Demand More
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're not in the business of connecting APIs. We engineer sophisticated AI solutions 
            tailored to your unique challenges—designing advanced systems that orchestrate intelligence 
            at every layer.
          </p>
          
          <div className="space-y-3 pt-4">
            {differentiators.map((item, index) => (
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