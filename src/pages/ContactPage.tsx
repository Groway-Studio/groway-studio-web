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

type ContactReason = 'quote' | 'question' | 'contact' | null;

export function ContactPage() {
  const { t, language } = useLanguage();
  const [step, setStep] = useState<'reason' | 'form' | 'success'>('reason');
  const [reason, setReason] = useState<ContactReason>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const reasons = {
    quote: {
      es: {
        title: '💰 Quiero una cotización',
        description: 'Necesito conocer precios y opciones para mi proyecto'
      },
      en: {
        title: '💰 I want a quote',
        description: 'I need to know prices and options for my project'
      }
    },
    question: {
      es: {
        title: '❓ Tengo una pregunta',
        description: 'Necesito más información sobre sus servicios'
      },
      en: {
        title: '❓ I have a question',
        description: 'I need more information about your services'
      }
    },
    contact: {
      es: {
        title: '📞 Quiero que me contacten',
        description: 'Prefiero que un experto me llame o escriba'
      },
      en: {
        title: '📞 I want to be contacted',
        description: 'I prefer an expert to call or write to me'
      }
    }
  };

  const handleReasonSelect = (selectedReason: ContactReason) => {
    setReason(selectedReason);
    setStep('form');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log({ reason, ...formData });
    setStep('success');
  };

  const getFormTitle = () => {
    if (language === 'es') {
      if (reason === 'quote') return '¿Qué proyecto tienes en mente?';
      if (reason === 'question') return '¿En qué podemos ayudarte?';
      return '¿Cuál es la mejor forma de contactarte?';
    } else {
      if (reason === 'quote') return 'What project do you have in mind?';
      if (reason === 'question') return 'How can we help you?';
      return 'What is the best way to contact you?';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16">
        <SectionContainer>
          <div className="max-w-3xl mx-auto">
            {step === 'reason' && (
              <div className="space-y-8">
                <div className="text-center space-y-4">
                  <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                    {language === 'es' ? '¿Cómo podemos ayudarte?' : 'How can we help you?'}
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    {language === 'es' 
                      ? 'Selecciona la opción que mejor describa lo que necesitas'
                      : 'Select the option that best describes what you need'}
                  </p>
                </div>

                <div className="grid gap-4">
                  {(Object.keys(reasons) as ContactReason[]).map((key) => {
                    if (!key) return null;
                    const reasonData = reasons[key][language];
                    return (
                      <Card
                        key={key}
                        onClick={() => handleReasonSelect(key)}
                        className="p-6 cursor-pointer hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                              {reasonData.title}
                            </h3>
                            <p className="text-muted-foreground">
                              {reasonData.description}
                            </p>
                          </div>
                          <div className="text-2xl group-hover:scale-110 transition-transform">
                            →
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            )}

            {step === 'form' && (
              <div className="space-y-8">
                <div className="text-center space-y-4">
                  <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                    {getFormTitle()}
                  </h1>
                  <button
                    onClick={() => {
                      setStep('reason');
                      setReason(null);
                    }}
                    className="text-sm text-accent hover:underline"
                  >
                    ← {language === 'es' ? 'Cambiar opción' : 'Change option'}
                  </button>
                </div>

                <Card className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
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
                          reason === 'quote'
                            ? language === 'es'
                              ? 'Describe tu proyecto, objetivos, y cualquier requisito específico...'
                              : 'Describe your project, goals, and any specific requirements...'
                            : language === 'es'
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
            )}

            {step === 'success' && (
              <div className="text-center space-y-6 py-16">
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
            )}
          </div>
        </SectionContainer>
      </main>
      <Footer />
    </div>
  )
}
