import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

type CardProps = ComponentProps<"div">

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "min-w-0 overflow-hidden rounded-lg border border-border bg-card p-4 text-card-foreground shadow-sm transition-[box-shadow,transform] hover:-translate-y-px hover:shadow-md",
        className,
      )}
      {...props}
    />
  )
}
