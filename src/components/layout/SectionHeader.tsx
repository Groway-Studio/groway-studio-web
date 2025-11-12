import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  overline?: string
  title: string
  description?: string
  className?: string
}

export function SectionHeader({ overline, title, description, className }: SectionHeaderProps) {
  return (
    <div className={cn("space-y-4 mb-12 lg:mb-16", className)}>
      {overline && (
        <p className="text-xs font-medium tracking-wider uppercase text-accent">
          {overline}
        </p>
      )}
      <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}