import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Footer } from "@/components/public/footer";
import { Header } from "@/components/public/header";
import { ScrollToTop } from "@/components/public/scroll-to-top";
import { cn } from "@/lib/utils";

const playfairDisplay = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Antigua's Bake & Cuisine",
  description: "Antigua's Bake & Cuisine",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        inter.variable,
        playfairDisplay.variable,
      )}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
        <ScrollToTop />
        <Script
          async
          src="https://code.tidio.co/0aqhav9i3l0tn1gmqewdhg5rwik6jwqs.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
