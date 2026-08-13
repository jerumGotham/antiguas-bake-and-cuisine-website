"use client";

import { useState } from "react";

import { ProductCard } from "@/components/public/product-card";
import { Button } from "@/components/ui/button";
import { productCategories } from "@/content/menu";
import { getProductsByCategory } from "@/content/selectors";
import { cn } from "@/lib/utils";

export function MenuBrowser() {
  const [activeCategory, setActiveCategory] = useState<
    (typeof productCategories)[number]
  >(productCategories[0]);

  function selectCategory(category: (typeof productCategories)[number]) {
    setActiveCategory(category);
  }

  return (
    <div className="space-y-8">
      <div
        aria-label="Menu categories"
        className="flex flex-wrap gap-2"
        role="tablist"
      >
        {productCategories.map((category) => (
          <Button
            aria-selected={activeCategory === category}
            className={cn(
              "rounded-full px-4 transition duration-300",
              activeCategory === category
                ? "bg-foreground text-background shadow-[4px_4px_0_color-mix(in_srgb,var(--primary)_55%,transparent)]"
                : "border-border/35 bg-background hover:-translate-y-px",
            )}
            key={category}
            onClick={() => selectCategory(category)}
            role="tab"
            variant="outline"
          >
            {category}
          </Button>
        ))}
      </div>
      <section
        aria-label={`${activeCategory} menu`}
        className="animate-in fade-in slide-in-from-bottom-3 duration-500"
        role="tabpanel"
      >
        <div className="mb-6 flex items-baseline justify-between gap-4">
          <h2 className="font-heading text-4xl font-semibold text-foreground">
            {activeCategory}
          </h2>
          <p className="text-sm text-foreground/70">
            {getProductsByCategory(activeCategory).length} items
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {getProductsByCategory(activeCategory).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
