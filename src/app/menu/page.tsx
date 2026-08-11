import { ProductCard } from "@/components/public/product-card"
import { Section } from "@/components/ui/section"
import { productCategories } from "@/content/menu"
import { getProductsByCategory } from "@/content/selectors"

export default function MenuPage() {
  return <><Section className="bg-background"><div className="max-w-3xl space-y-5"><p className="text-sm font-semibold tracking-[0.14em] text-foreground">CURRENT MENU</p><div className="h-px w-14 bg-primary" /><h1 className="font-heading text-[28px] font-semibold text-foreground">Made with care, priced clearly.</h1><p className="max-w-[65ch] text-base leading-6 text-foreground/85">Explore the current selection of pasta, cookies, desserts, and drinks. Message us on Facebook for ordering details.</p></div></Section>{productCategories.map((category, index) => <Section className={index % 2 === 0 ? "bg-card" : "bg-background"} id={category.toLowerCase()} key={category}><div className="space-y-6"><h2 className="font-heading text-[28px] font-semibold text-foreground">{category}</h2><div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{getProductsByCategory(category).map((product) => <ProductCard key={product.id} product={product} />)}</div></div></Section>)}</>
}
