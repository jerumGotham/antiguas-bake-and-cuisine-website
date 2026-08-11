import { ImagePlaceholder } from "@/components/ui/image-placeholder"
import type { Product } from "@/content/menu"

export function ProductCard({ product, compact = false }: { product: Product; compact?: boolean }) {
  return <article className="group overflow-hidden border border-border/35 bg-card shadow-sm transition hover:-translate-y-px hover:shadow-md">
    <ImagePlaceholder image={product.image} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
    <div className="space-y-3 p-4">
      <div className="flex items-start justify-between gap-3"><h3 className="font-heading text-xl font-semibold leading-tight text-foreground">{product.name}</h3>{product.isBestSeller ? <span className="shrink-0 border border-border/50 px-2 py-1 text-sm font-semibold text-foreground">Best Seller</span> : null}</div>
      {!compact ? <p className="text-base leading-6 text-foreground/85">{product.description}</p> : null}
      <ul className="space-y-1 border-t border-border/25 pt-3 text-sm leading-6 text-foreground"><>{product.options.map((option) => <li className="flex justify-between gap-3" key={`${product.id}-${option.label}`}><span>{option.label}</span><strong className="shrink-0 font-semibold">{option.price}</strong></li>)}</></ul>
    </div>
  </article>
}
