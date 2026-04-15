import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

const heading = Outfit({
  subsets: ["latin", "latin-ext"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const body = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sminkes.vercel.app"),
  title: {
    default: "Makeup by Kamilla Kovacsik — Sminkes | Győr & Tapolca",
    template: "%s | Makeup by Kamilla",
  },
  description:
    "Professzionális sminkes Győrben és Tapolcán. Menyasszonyi, alkalmi, nappali és fotó smink. Kovacsik Kamilla — természetes szépség, maradandó élmény.",
  keywords:
    "sminkes győr, sminkes tapolca, menyasszonyi smink győr, alkalmi smink győr, nappali smink, fotó smink, érettségi smink, Kovacsik Kamilla, makeup artist győr",
  openGraph: {
    title: "Makeup by Kamilla Kovacsik — Sminkes | Győr & Tapolca",
    description:
      "Professzionális sminkes Győrben és Tapolcán. Menyasszonyi, alkalmi, nappali és fotó smink.",
    url: "https://sminkes.vercel.app",
    siteName: "Makeup by Kamilla Kovacsik",
    locale: "hu_HU",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Makeup by Kamilla Kovacsik — Sminkes | Győr & Tapolca",
    description:
      "Professzionális sminkes Győrben és Tapolcán.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://sminkes.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className={`${heading.variable} ${body.variable} h-full`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `if('scrollRestoration' in history)history.scrollRestoration='manual';if(location.hash)history.replaceState(null,'',location.pathname);window.scrollTo(0,0)` }} />
        {/* BeautySalon JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              "@id": "https://sminkes.vercel.app/#business",
              name: "Makeup by Kamilla Kovacsik",
              description:
                "Professzionális sminkes Győrben és Tapolcán. Menyasszonyi, alkalmi, nappali, fotó és érettségi smink. Kovacsik Kamilla — természetes, tartós smink minden alkalomra.",
              url: "https://sminkes.vercel.app",
              email: "kapcsolat@makeupbykamilla.hu",
              image: "https://sminkes.vercel.app/images/kamilla.webp",
              address: [
                {
                  "@type": "PostalAddress",
                  addressLocality: "Győr",
                  addressCountry: "HU",
                },
                {
                  "@type": "PostalAddress",
                  addressLocality: "Tapolca",
                  addressCountry: "HU",
                },
              ],
              areaServed: [
                { "@type": "City", name: "Győr" },
                { "@type": "City", name: "Tapolca" },
              ],
              sameAs: [
                "https://www.instagram.com/kovacsik_kamilla_sminkes/",
              ],
              priceRange: "$$",
              makesOffer: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Menyasszonyi smink" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Alkalmi smink" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Nappali smink" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fotó smink" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Érettségi / bál smink" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Próbasmink" } },
              ],
            }),
          }}
        />
        {/* Person JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://sminkes.vercel.app/#person",
              name: "Kovacsik Kamilla",
              jobTitle: "Sminkes / Makeup Artist",
              worksFor: { "@id": "https://sminkes.vercel.app/#business" },
              url: "https://sminkes.vercel.app",
              sameAs: [
                "https://www.instagram.com/kovacsik_kamilla_sminkes/",
              ],
              address: [
                { "@type": "PostalAddress", addressLocality: "Győr", addressCountry: "HU" },
                { "@type": "PostalAddress", addressLocality: "Tapolca", addressCountry: "HU" },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-body antialiased bg-surface text-foreground">
        {children}
        <Analytics />
        <SpeedInsights />
        <CookieConsent />
      </body>
    </html>
  );
}
