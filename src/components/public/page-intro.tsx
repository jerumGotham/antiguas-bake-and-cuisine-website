import { OrderCta } from "@/components/public/order-cta"
import { Section } from "@/components/ui/section"

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return <Section className="bg-background"><div className="max-w-3xl space-y-5"><p className="text-sm font-semibold tracking-[0.14em] text-foreground">{eyebrow}</p><div className="h-px w-14 bg-primary" /><h1 className="font-heading text-[28px] font-semibold leading-tight text-foreground">{title}</h1><div className="max-w-[65ch] space-y-4 text-base leading-6 text-foreground/85">{children}</div><OrderCta /></div></Section>
}
