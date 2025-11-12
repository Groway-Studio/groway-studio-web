import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { SectionContainer } from "@/components/layout/SectionContainer"
import { ArrowRight, CalendarCheck } from "@phosphor-icons/react"

export function CTA() {
  return (
    <SectionContainer id="cta">
      <Card className="relative overflow-hidden bg-gradient-to-br from-accent/20 via-primary/10 to-card border-accent/30 p-8 lg:p-16">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight tracking-tight">
            Ready to Transform Your Business with AI?
          </h2>
          
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
            Let's discuss how custom AI solutions can drive unprecedented growth for your organization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-base font-semibold group">
              <CalendarCheck className="mr-2" size={20} weight="bold" />
              Schedule a Demo
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" weight="bold" />
            </Button>
          </div>
        </div>
      </Card>
    </SectionContainer>
  )
}