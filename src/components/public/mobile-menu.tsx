"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { OrderCta } from "@/components/public/order-cta";

const panelId = "mobile-navigation-panel";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <div className="relative md:hidden">
      <button
        aria-controls={panelId}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        className="inline-flex size-11 items-center justify-center rounded-lg border border-border bg-background text-foreground shadow-sm transition-[color,background-color,border-color,box-shadow,transform] hover:bg-muted hover:shadow-md focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px"
        onClick={() => setIsOpen((open) => !open)}
        type="button"
      >
        {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      {isOpen ? (
        <div
          className="absolute right-0 z-10 mt-2 flex w-[min(20rem,calc(100vw-2rem))] flex-col gap-4 rounded-lg border border-border/50 bg-card p-4 shadow-lg"
          id={panelId}
        >
          <Link
            className="w-fit border-b-2 border-primary pb-1 text-sm font-semibold text-foreground"
            href="/"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <OrderCta />
        </div>
      ) : null}
    </div>
  );
}
