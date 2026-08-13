import { MenuBrowser } from "@/components/public/menu-browser";
import { Section } from "@/components/ui/section";

export default function MenuPage() {
  return (
    <>
      <Section className="bg-background">
        <div className="max-w-3xl space-y-5">
          <p className="text-sm font-semibold tracking-[0.14em] text-foreground">
            CURRENT MENU
          </p>
          <div className="h-px w-14 bg-primary" />
          <h1 className="font-heading text-[28px] font-semibold text-foreground">
            Menu, prices, and sizes.
          </h1>
          <p className="max-w-[65ch] text-base leading-6 text-foreground/85">
            Explore the current selection of pasta, cookies, desserts, and
            drinks. Message us on Facebook for ordering details.
          </p>
        </div>
      </Section>
      <Section className="bg-card">
        <MenuBrowser />
      </Section>
    </>
  );
}
