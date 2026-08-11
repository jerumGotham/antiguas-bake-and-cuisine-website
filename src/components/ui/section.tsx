import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

type SectionProps = ComponentProps<"section">

export function Section({ className, children, ...props }: SectionProps) {
  return (
    <section className={cn("px-4 py-12 md:px-8 md:py-16", className)} {...props}>
      <div className="mx-auto w-full max-w-5xl min-w-0">{children}</div>
    </section>
  )
}
