import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionContainerProps {
  children: ReactNode
  className?: string
  id?: string
}

export function SectionContainer({ children, className, id }: SectionContainerProps) {
  return (
    <section id={id} className={cn("py-20 lg:py-32", className)}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}