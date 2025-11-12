import { Navigation } from "@/components/layout/Navigation"
import { Footer } from "@/components/layout/Footer"
import { SectionContainer } from "@/components/layout/SectionContainer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/contexts/LanguageContext"
import { useState } from "react"
import { PaperPlaneTilt, CheckCircle } from "@phosphor-icons/react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type ContactReason = 'quote' | 'question' | 'contact' | '';

export function ContactPage() {
  const { t, language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    reason: '' as ContactReason,
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log(formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-24 pb-16">
          <SectionContainer>
            <div className="max-w-3xl mx-auto text-center space-y-6 py-16">
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                <CheckCircle size={48} weight="duotone" className="text-accent" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                {language === 'es' ? '¡Mensaje enviado!' : 'Message sent!'}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {language === 'es'
                  ? 'Gracias por contactarnos. Nos pondremos en contacto contigo en las próximas 24 horas.'
                  : 'Thank you for contacting us. We will get in touch with you within the next 24 hours.'}
              </p>
              <Button
                onClick={() => window.location.href = '/'}
                variant="outline"
                size="lg"
              >
                {language === 'es' ? 'Volver al inicio' : 'Back to home'}
              </Button>
            </div>
          </SectionContainer>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16">
        <SectionContainer>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                  {language === 'es' ? '¿Cómo podemos ayudarte?' : 'How can we help you?'}
                </h1>
                <p className="text-lg text-muted-foreground">
                  {language === 'es' 
                    ? 'Completa el formulario y nos pondremos en contacto contigo pronto'
                    : 'Fill out the form and we will get in touch with you soon'}
                </p>
              </div>

              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      {language === 'es' ? '¿Qué necesitas?' : 'What do you need?'} *
                    </label>
                    <Select
                      required
                      value={formData.reason}
                      onValueChange={(value) => setFormData({ ...formData, reason: value as ContactReason })}
                    >
                      <SelectTrigger className="text-base">
                        <SelectValue placeholder={language === 'es' ? 'Selecciona una opción' : 'Select an option'} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="quote">
                          {language === 'es' ? '💰 Quiero una cotización' : '💰 I want a quote'}
                        </SelectItem>
                        <SelectItem value="question">
                          {language === 'es' ? '❓ Tengo una pregunta' : '❓ I have a question'}
                        </SelectItem>
                        <SelectItem value="contact">
                          {language === 'es' ? '📞 Quiero que me contacten' : '📞 I want to be contacted'}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      {language === 'es' ? 'Tu nombre' : 'Your name'} *
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={language === 'es' ? 'Juan Pérez' : 'John Doe'}
                      className="text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      {language === 'es' ? 'Email' : 'Email'} *
                    </label>
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={language === 'es' ? 'tu@empresa.com' : 'you@company.com'}
                      className="text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      {language === 'es' ? 'Empresa' : 'Company'}
                    </label>
                    <Input
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder={language === 'es' ? 'Nombre de tu empresa' : 'Your company name'}
                      className="text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      {language === 'es' ? 'Cuéntanos más' : 'Tell us more'} *
                    </label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        language === 'es'
                          ? 'Cuéntanos en qué podemos ayudarte...'
                          : 'Tell us how we can help you...'
                      }
                      rows={6}
                      className="text-base resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold group"
                  >
                    <PaperPlaneTilt className="mr-2" size={20} weight="bold" />
                    {language === 'es' ? 'Enviar mensaje' : 'Send message'}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </SectionContainer>
      </main>
      <Footer />
    </div>
  )
}
