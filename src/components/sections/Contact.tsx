import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { useLanguage } from '@/contexts/LanguageContext'
import { Section, Eyebrow } from '@/components/layout/Section'
import { Reveal } from '@/components/ui/Reveal'
import { DotField } from '@/components/visuals/DotField'
import { submitContact } from '@/lib/api'
import { cn } from '@/lib/utils'

const messages = {
  es: { required: 'Campo obligatorio', email: 'Email no válido' },
  en: { required: 'Required field', email: 'Invalid email' },
}

export function Contact() {
  const { t, language } = useLanguage()
  const m = messages[language]

  const schema = z.object({
    name: z.string().min(1, m.required),
    email: z.string().min(1, m.required).email(m.email),
    company: z.string().optional(),
    depth: z.string().min(1, m.required),
    problem: z.string().min(1, m.required),
  })
  type FormValues = z.infer<typeof schema>

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '', company: '', depth: '', problem: '' },
  })

  const onSubmit = async (data: FormValues) => {
    try {
      await submitContact(data)
      toast.success(t.contact.successToast)
      reset()
    } catch {
      toast.error(t.contact.errorToast)
    }
  }

  const fieldBase =
    'w-full rounded-lg border bg-surface/50 px-4 text-fg placeholder:text-fg-subtle transition-[border-color,box-shadow,background-color] duration-200 ease-out hover:border-accent-9/40 focus:border-accent-9 focus:bg-surface/70 focus:outline-none focus:ring-2 focus:ring-accent-9/25'
  const fieldError = 'border-destructive focus:border-destructive focus:ring-destructive/20'
  const labelBase = 'block font-mono text-xs uppercase tracking-[0.14em] text-fg-subtle'

  return (
    <Section id="contact" className="bg-bg">
      <DotField className="pointer-events-none absolute inset-0 h-full w-full opacity-60" density={38} intensity={0.4} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_65%_at_50%_55%,oklch(0.13_0.015_40/0.92),transparent_80%)]" />
      <div className="gradient-glow pointer-events-none absolute inset-x-0 top-0 h-1/2" />
      <div className="relative mx-auto max-w-2xl">
        <div className="text-center">
          <Reveal>
            <Eyebrow className="justify-center">{t.contact.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.02em] text-fg">
              {t.contact.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-xl text-lg text-fg-muted">{t.contact.subhead}</p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-12 space-y-6" noValidate>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelBase}>
                  {t.contact.fields.name}
                </label>
                <input
                  id="name"
                  className={cn(fieldBase, 'mt-2 h-14', errors.name ? fieldError : 'border-border')}
                  {...register('name')}
                />
                {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name.message}</p>}
              </div>
              <div>
                <label htmlFor="email" className={labelBase}>
                  {t.contact.fields.email}
                </label>
                <input
                  id="email"
                  type="email"
                  className={cn(fieldBase, 'mt-2 h-14', errors.email ? fieldError : 'border-border')}
                  {...register('email')}
                />
                {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email.message}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="company" className={labelBase}>
                {t.contact.fields.company}
              </label>
              <input
                id="company"
                className={cn(fieldBase, 'mt-2 h-14 border-border')}
                {...register('company')}
              />
            </div>

            <div>
              <label htmlFor="depth" className={labelBase}>
                {t.contact.fields.depth}
              </label>
              <select
                id="depth"
                className={cn(fieldBase, 'mt-2 h-14 appearance-none pr-10', errors.depth ? fieldError : 'border-border')}
                defaultValue=""
                {...register('depth')}
              >
                <option value="" disabled>
                  —
                </option>
                {t.contact.fields.depthOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              {errors.depth && <p className="mt-1.5 text-xs text-destructive">{errors.depth.message}</p>}
            </div>

            <div>
              <label htmlFor="problem" className={labelBase}>
                {t.contact.fields.problem}
              </label>
              <textarea
                id="problem"
                rows={4}
                className={cn(fieldBase, 'mt-2 resize-none py-3', errors.problem ? fieldError : 'border-border')}
                {...register('problem')}
              />
              {errors.problem && <p className="mt-1.5 text-xs text-destructive">{errors.problem.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-accent-9 px-7 py-4 text-base font-semibold text-[oklch(0.14_0.02_40)] transition-all duration-200 ease-out hover:bg-accent-10 hover:glow-orange active:scale-[0.99] disabled:opacity-60 disabled:hover:bg-accent-9 disabled:hover:shadow-none"
            >
              {isSubmitting ? t.contact.sending : t.contact.submit}
            </button>

            <p className="text-center text-xs text-fg-subtle">{t.contact.privacy}</p>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
