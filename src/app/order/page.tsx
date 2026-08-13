import { PageIntro } from "@/components/public/page-intro";
import { OrderForm } from "@/components/public/order-form";

export default function OrderPage() {
  return (
    <>
      <PageIntro eyebrow="HOW TO ORDER" title="Send us your request.">
        <ol className="list-decimal space-y-3 pl-5">
          <li>Browse the menu and choose your favorites.</li>
          <li>
            Place your order using the form below, or message us on Facebook
            Messenger.
          </li>
          <li>We will follow up using the details you provide.</li>
        </ol>
      </PageIntro>
      <section className="bg-card px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-3xl">
          <OrderForm />
        </div>
      </section>
    </>
  );
}
