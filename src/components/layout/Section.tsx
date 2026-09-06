import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/** Consistent section shell: vertical rhythm, max width, horizontal padding. */
export function Section({
  id,
  children,
  className,
  containerClassName,
}: {
  id?: string
  children: ReactNode
  className?: string
  containerClassName?: string
}) {
  return (
    <section
      id={id}
      className={cn('relative scroll-mt-24 py-[clamp(5rem,12vh,10rem)]', className)}
    >
      <div className={cn('mx-auto w-full max-w-[75rem] px-6 lg:px-8', containerClassName)}>
        {children}
      </div>
    </section>
  )
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        'text-[0.8125rem] font-semibold uppercase tracking-[0.18em] text-accent-11',
        className,
      )}
    >
      {children}
    </p>
  )
}

/** Monospace capability chip — reinforces the engineering register. */
export function CapabilityTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex select-none items-center rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs text-fg-muted transition-all duration-200 ease-out hover:-translate-y-px hover:border-accent-9/60 hover:bg-surface-2 hover:text-fg">
      {children}
    </span>
  )
}
