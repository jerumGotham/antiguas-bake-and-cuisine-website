import { OrderCta } from "@/components/public/order-cta";

export function Footer() {
  return (
    <footer className="border-t border-border/35 bg-card">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 md:flex-row md:items-end md:justify-between md:px-8">
        <p className="max-w-md text-sm leading-6 text-foreground/75">
          © {new Date().getFullYear()} Antigua&apos;s Bake &amp; Cuisine. Made with care in
          Quezon City.
        </p>
        <OrderCta className="w-full md:w-auto" />
      </div>
    </footer>
  );
}
