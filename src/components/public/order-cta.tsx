import { buttonVariants } from "@/components/ui/button"
import { businessContent } from "@/content/business"
import { cn } from "@/lib/utils"

export function OrderCta({ className }: { className?: string }) {
  const { ctaLabel, facebookPageUrl, loginWarning } = businessContent.order

  return (
    <div className={cn("flex max-w-sm flex-col gap-2", className)}>
      <a
        className={cn(
          buttonVariants({ variant: "default", size: "cta" }),
          "text-center text-sm",
        )}
        href={facebookPageUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {ctaLabel}
      </a>
      <p className="text-sm leading-6 text-foreground/75">{loginWarning}</p>
    </div>
  )
}
