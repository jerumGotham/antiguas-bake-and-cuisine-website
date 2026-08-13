"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function updateVisibility() {
      setIsVisible(window.scrollY > 500);
    }

    window.addEventListener("scroll", updateVisibility, { passive: true });
    updateVisibility();
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      aria-label="Scroll to top"
      className="fixed bottom-6 left-4 z-40 inline-flex size-11 items-center justify-center rounded-full border border-border/55 bg-card text-foreground shadow-[4px_4px_0_color-mix(in_srgb,var(--primary)_45%,transparent)] transition duration-300 hover:-translate-y-1 hover:bg-primary focus-visible:ring-3 focus-visible:ring-ring/50 md:bottom-8 md:left-8"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      type="button"
    >
      <ArrowUp aria-hidden="true" />
    </button>
  );
}
