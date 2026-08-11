import Link from "next/link";

import { MobileMenu } from "@/components/public/mobile-menu";
import { OrderCta } from "@/components/public/order-cta";

export function Header() {
  return (
    <header className="border-b border-border/35 bg-card/95">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 md:px-8 md:py-6">
        <Link
          className="font-heading text-xl font-semibold leading-tight text-foreground"
          href="/"
        >
          Antigua&apos;s Bake &amp; Cuisine
        </Link>
        <div className="flex items-start gap-4">
          <nav aria-label="Primary navigation" className="hidden md:block">
            <Link
              aria-current="page"
              className="border-b-2 border-primary pb-1 text-sm font-semibold text-foreground"
              href="/"
            >
              Home
            </Link>
          </nav>
          <OrderCta className="w-full sm:w-auto" />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
