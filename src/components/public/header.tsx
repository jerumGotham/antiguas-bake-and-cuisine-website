import Link from "next/link";

import { MobileMenu } from "@/components/public/mobile-menu";
import { OrderCta } from "@/components/public/order-cta";
import { siteNav } from "@/components/public/site-nav";

export function Header() {
  return (
    <header className="border-b border-border/35 bg-card/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-8 md:py-5">
        <Link
          className="font-heading text-xl font-semibold leading-tight text-foreground"
          href="/"
        >
          Antigua&apos;s Bake &amp; Cuisine
        </Link>
        <div className="flex items-start gap-4">
          <nav aria-label="Primary navigation" className="hidden items-center gap-4 lg:flex">
            {siteNav.map((item) => <Link className="border-b-2 border-transparent pb-1 text-sm font-semibold text-foreground transition hover:border-primary" href={item.href} key={item.href}>{item.label}</Link>)}
          </nav>
          <OrderCta className="hidden w-56 lg:flex" />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
