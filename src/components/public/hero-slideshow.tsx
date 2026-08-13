"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  { src: "/images/feature1.jpg", alt: "Featured dish from Antigua's Bake & Cuisine" },
  { src: "/images/feature2.jpg", alt: "Featured dish from Antigua's Bake & Cuisine" },
  { src: "/images/feature3.jpg", alt: "Featured dish from Antigua's Bake & Cuisine" },
] as const;

export function HeroSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(
      () => setActiveIndex((index) => (index + 1) % slides.length),
      5000,
    );
    return () => window.clearInterval(timer);
  }, []);

  function previousSlide() {
    setActiveIndex((index) => (index - 1 + slides.length) % slides.length);
  }

  function nextSlide() {
    setActiveIndex((index) => (index + 1) % slides.length);
  }

  return (
    <div className="home-hero-art relative aspect-[5/4] overflow-hidden border border-border/30">
      {slides.map((slide, index) => (
        <Image
          alt={slide.alt}
          className={`object-cover transition-opacity duration-700 ${index === activeIndex ? "opacity-100" : "opacity-0"}`}
          fill
          key={slide.src}
          priority={index === 0}
          sizes="(min-width: 1024px) 50vw, 100vw"
          src={slide.src}
        />
      ))}
      <div className="absolute inset-x-3 bottom-3 z-10 flex items-center justify-between">
        <button
          aria-label="Previous featured image"
          className="inline-flex size-9 items-center justify-center rounded-full bg-background/90 text-foreground shadow-sm transition hover:bg-primary"
          onClick={previousSlide}
          type="button"
        >
          <ChevronLeft aria-hidden="true" />
        </button>
        <div
          aria-label="Featured image slides"
          className="flex gap-2"
          role="tablist"
        >
          {slides.map((slide, index) => (
            <button
              aria-label={`Show featured image ${index + 1}`}
              aria-selected={index === activeIndex}
              className={`h-2.5 w-2.5 rounded-full border border-background transition ${index === activeIndex ? "bg-primary" : "bg-background/80"}`}
              key={slide.src}
              onClick={() => setActiveIndex(index)}
              role="tab"
              type="button"
            />
          ))}
        </div>
        <button
          aria-label="Next featured image"
          className="inline-flex size-9 items-center justify-center rounded-full bg-background/90 text-foreground shadow-sm transition hover:bg-primary"
          onClick={nextSlide}
          type="button"
        >
          <ChevronRight aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
