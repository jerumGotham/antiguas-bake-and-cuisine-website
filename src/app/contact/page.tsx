import { PageIntro } from "@/components/public/page-intro";
import { businessContent } from "@/content/business";

export default function ContactPage() {
  const { address, email, phone } = businessContent.contact;

  return (
    <PageIntro eyebrow="CONTACT" title="Let's talk food.">
      <p>
        Reach Antigua&apos;s Bake &amp; Cuisine through Facebook, phone, or
        email.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <a
          className="group border border-border/35 bg-card p-5 transition hover:-translate-y-1 hover:shadow-[7px_7px_0_color-mix(in_srgb,var(--primary)_40%,transparent)]"
          href={`tel:${phone.replaceAll(" ", "")}`}
        >
          <p className="text-sm font-semibold tracking-[0.12em] text-foreground/70">
            PHONE
          </p>
          <p className="mt-2 font-heading text-2xl font-semibold">{phone}</p>
        </a>
        <a
          className="group border border-border/35 bg-card p-5 transition hover:-translate-y-1 hover:shadow-[7px_7px_0_color-mix(in_srgb,var(--primary)_40%,transparent)]"
          href={`mailto:${email}`}
        >
          <p className="text-sm font-semibold tracking-[0.12em] text-foreground/70">
            EMAIL
          </p>
          <p className="mt-2 break-all font-heading text-xl font-semibold">
            {email}
          </p>
        </a>
        <a
          className="border border-border/35 bg-card p-5 transition hover:-translate-y-1 hover:shadow-[7px_7px_0_color-mix(in_srgb,var(--primary)_40%,transparent)] sm:col-span-2"
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <p className="text-sm font-semibold tracking-[0.12em] text-foreground/70">
            ADDRESS
          </p>
          <p className="mt-2 font-heading text-xl font-semibold">{address}</p>
          <p className="mt-3 text-sm font-semibold underline underline-offset-4">
            Get directions
          </p>
        </a>
      </div>
      <div className="mt-8 border-l-2 border-primary pl-5">
        <h2 className="font-heading text-2xl font-semibold">
          Planning to resell?
        </h2>
        <p className="mt-2">
          Choose &ldquo;Reseller inquiry&rdquo; on the order form and tell us
          about the products and quantities you are interested in.
        </p>
      </div>
    </PageIntro>
  );
}
