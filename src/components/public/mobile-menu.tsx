"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { OrderCta } from "@/components/public/order-cta";
import { siteNav } from "@/components/public/site-nav";

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
    <div className="relative lg:hidden">
      <button
        aria-controls={panelId}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        className="relative z-[70] inline-flex size-11 items-center justify-center rounded-lg border border-border bg-background text-foreground shadow-sm transition-[color,background-color,border-color,box-shadow,transform] hover:bg-muted hover:shadow-md focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px"
        onClick={() => setIsOpen((open) => !open)}
        type="button"
      >
        {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      {isOpen ? (
        <>
          <button
            aria-label="Dismiss navigation menu"
            className="fixed inset-0 z-[60] cursor-default bg-foreground/30 backdrop-blur-[1px]"
            onClick={() => setIsOpen(false)}
            type="button"
          />
          <div
            className="fixed right-4 top-[5.25rem] z-[65] flex w-[min(20rem,calc(100vw-2rem))] flex-col gap-4 border border-border/50 bg-card p-5 shadow-[10px_10px_0_color-mix(in_srgb,var(--primary)_45%,transparent)]"
            id={panelId}
          >
            <nav aria-label="Mobile navigation" className="flex flex-col gap-3">
              {siteNav.map((item) => (
                <Link
                  className="w-fit border-b-2 border-transparent pb-1 text-sm font-semibold text-foreground transition hover:border-primary"
                  href={item.href}
                  key={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <OrderCta className="w-full max-w-none" />
          </div>
        </>
      ) : null}
    </div>
  );
}
