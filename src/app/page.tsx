import { OrderCta } from "@/components/public/order-cta";
import { businessContent } from "@/content/business";

export default function Home() {
  const { brandName, expectedFacts, placeholders } = businessContent;

  return (
    <section className="flex flex-1 items-center bg-background px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto grid w-full max-w-5xl gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] md:items-center">
        <div className="space-y-6">
          <div className="h-px w-12 bg-primary" aria-hidden="true" />
          <h1 className="font-heading text-[28px] font-semibold leading-[1.2] text-primary">
            {brandName}
          </h1>
          <p className="max-w-[65ch] text-base leading-6 text-foreground">
            {expectedFacts.businessOverview ?? placeholders.detail}
          </p>
          <OrderCta />
        </div>

        <div className="flex min-h-64 flex-col items-center justify-center border border-border bg-card p-6 text-center">
          <p className="text-sm font-semibold text-primary">{placeholders.imageLabel}</p>
          <p className="mt-2 text-base leading-6 text-foreground">
            {expectedFacts.featuredImage ?? placeholders.detail}
          </p>
        </div>
      </div>
    </section>
  );
}
