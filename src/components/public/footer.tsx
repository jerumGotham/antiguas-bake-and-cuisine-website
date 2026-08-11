import { OrderCta } from "@/components/public/order-cta";
import Link from "next/link";
import { siteNav } from "@/components/public/site-nav";

export function Footer() {
  return (
    <footer className="border-t border-border/35 bg-card">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-[1.3fr_1fr_1fr] md:px-8">
        <div className="space-y-3"><p className="font-heading text-xl font-semibold text-foreground">Antigua&apos;s Bake &amp; Cuisine</p><p className="max-w-sm text-base leading-6 text-foreground/80">Made for sharing, one thoughtful bite at a time.</p><p className="text-sm leading-6 text-foreground/75">© {new Date().getFullYear()} Antigua&apos;s Bake &amp; Cuisine.</p></div>
        <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-4 gap-y-3">{siteNav.map((item) => <Link className="text-sm font-semibold text-foreground hover:underline" href={item.href} key={item.href}>{item.label}</Link>)}</nav>
        <OrderCta className="w-full" />
      </div>
    </footer>
  );
}
