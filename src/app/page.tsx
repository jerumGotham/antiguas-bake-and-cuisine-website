import Image from "next/image";
import Link from "next/link";

import { OrderCta } from "@/components/public/order-cta";
import { ProductCard } from "@/components/public/product-card";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { Section } from "@/components/ui/section";
import { productCategories } from "@/content/menu";
import { getProductsByCategory } from "@/content/selectors";

const featured = [
  "beef-mushroom-lasagna",
  "gooey-smores-cookies",
  "mango-tapioca-jelly",
] as const;
const categoryImages = {
  Pasta: "/images/lasagna2_pasta.jpg",
  Cookies: "/images/cookies.jpg",
  Desserts: "/images/moist_cake_price.jpg",
  Drinks: "/images/mango_price.jpg",
} as const;
const feedbackImages = [
  "/images/feedback1.jpg",
  "/images/feedback2.jpg",
  "/images/feedback3.jpg",
] as const;

export default function Home() {
  const allProducts = productCategories.flatMap((category) =>
    getProductsByCategory(category),
  );
  const bestSellers = featured
    .map((id) => allProducts.find((product) => product.id === id))
    .filter((product): product is NonNullable<typeof product> =>
      Boolean(product),
    );

  return (
    <>
      <div className="bg-foreground px-4 py-2 text-center text-sm font-semibold text-background">
        Browse the menu, then message us on Facebook to order.
      </div>
      <Section className="home-hero bg-background">
        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <div className="space-y-6">
            <p className="home-kicker text-sm font-semibold tracking-[0.14em] text-foreground">
              ANTIGUA&apos;S BAKE &amp; CUISINE
            </p>
            <div className="h-px w-14 bg-primary" />
            <h1 className="font-heading text-4xl font-semibold leading-[0.95] text-foreground sm:text-5xl lg:text-6xl">
              Browse the current menu.
            </h1>
            <p className="max-w-[52ch] text-base leading-7 text-foreground/85">
              Explore pasta, cookies, desserts, and drinks from Antigua&apos;s Bake
              &amp; Cuisine.
            </p>
            <OrderCta />
          </div>
          <div className="home-hero-art relative aspect-[5/4] overflow-hidden border border-border/30">
            <Image
              alt="Antigua's pasta favorites"
              className="object-cover"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              src="/images/carbo_lasagna.jpg"
            />
          </div>
        </div>
      </Section>
      <Section className="bg-card">
        <div className="space-y-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold tracking-[0.14em] text-foreground">
                A GOOD PLACE TO START
              </p>
              <h2 className="mt-3 font-heading text-[28px] font-semibold text-foreground">
                Featured items
              </h2>
            </div>
            <Link
              className="text-sm font-semibold text-foreground underline underline-offset-4"
              href="/menu"
            >
              See full menu
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {bestSellers.map((product) => (
              <ProductCard compact key={product.id} product={product} />
            ))}
          </div>
        </div>
      </Section>
      <Section className="bg-background">
        <div className="space-y-8">
          <div>
            <p className="text-sm font-semibold tracking-[0.14em] text-foreground">
              CLIENT FEEDBACK
            </p>
            <h2 className="mt-3 font-heading text-[28px] font-semibold text-foreground">
              Messages from our clients
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {feedbackImages.map((src, index) => (
              <div
                className="feedback-frame relative aspect-square overflow-hidden border border-border/30 bg-card"
                key={src}
              >
                <Image
                  alt={`Client feedback ${index + 1}`}
                  className="object-cover"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  src={src}
                />
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section className="bg-background">
        <div className="space-y-8">
          <div>
            <p className="text-sm font-semibold tracking-[0.14em] text-foreground">
                EXPLORE THE MENU
            </p>
            <h2 className="mt-3 font-heading text-[28px] font-semibold text-foreground">
                Browse by category
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(categoryImages).map(([category, src]) => (
              <Link
                className="group relative aspect-square overflow-hidden border border-border/30"
                href="/menu"
                key={category}
              >
                <Image
                  alt={`${category} from Antigua's Bake & Cuisine`}
                  className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  src={src}
                />
                <span className="absolute inset-x-0 bottom-0 bg-foreground/85 px-4 py-3 font-heading text-xl font-semibold text-background">
                  {category}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Section>
      <Section className="bg-card">
        <div className="grid gap-8 lg:grid-cols-3">
          {(["Pasta", "Desserts", "Cookies"] as const).map((category) => {
            const product = getProductsByCategory(category)[0];
            return (
              <div className="space-y-4" key={category}>
                <h2 className="font-heading text-[28px] font-semibold text-foreground">
                  {category}
                </h2>
                <ImagePlaceholder
                  image={product?.image}
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
                <p className="text-base leading-6 text-foreground/85">
                  {product?.description}
                </p>
                <Link
                  className="text-sm font-semibold text-foreground underline underline-offset-4"
                  href="/menu"
                >
                  Explore {category.toLowerCase()}
                </Link>
              </div>
            );
          })}
        </div>
      </Section>
      <Section className="bg-background">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="border-t-2 border-primary pt-4">
            <h2 className="font-heading text-xl font-semibold text-foreground">
              Our menu
            </h2>
            <p className="mt-3 text-base leading-6 text-foreground/85">
              See sizes, prices, and descriptions for the current selection.
            </p>
            <Link
              className="mt-4 inline-block text-sm font-semibold text-foreground underline underline-offset-4"
              href="/menu"
            >
              Browse the menu
            </Link>
          </div>
          <div className="border-t-2 border-primary pt-4">
            <h2 className="font-heading text-xl font-semibold text-foreground">
              How to order
            </h2>
            <p className="mt-3 text-base leading-6 text-foreground/85">
              Choose your favorites and send us a message on the verified
              Facebook Page.
            </p>
            <Link
              className="mt-4 inline-block text-sm font-semibold text-foreground underline underline-offset-4"
              href="/order"
            >
              View ordering guide
            </Link>
          </div>
          <div className="border-t-2 border-primary pt-4">
            <h2 className="font-heading text-xl font-semibold text-foreground">
              Delivery
            </h2>
            <p className="mt-3 text-base leading-6 text-foreground/85">
              Ask us on Facebook for the latest delivery details.
            </p>
            <Link
              className="mt-4 inline-block text-sm font-semibold text-foreground underline underline-offset-4"
              href="/delivery"
            >
              Ask about delivery
            </Link>
          </div>
        </div>
      </Section>
      <Section className="bg-foreground">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-sm font-semibold tracking-[0.14em] text-background">
              MESSAGE US ON FACEBOOK
            </p>
            <h2 className="mt-3 font-heading text-[28px] font-semibold text-background">
              Ask us about ordering.
            </h2>
          </div>
          <OrderCta className="[&_p]:text-background/85" />
        </div>
      </Section>
    </>
  );
}
