import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { getCMSSettings } from "@/lib/cms/store";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Famous Letterpress — Handcrafted Letterpress & Foil Printing | Nagaland, India",
    template: "%s | Famous Letterpress",
  },
  description:
    "Famous Letterpress crafts premium letterpress and foil stamping wedding invitations, business cards, and personalised stationery. Handcrafted in Nagaland, India.",
  metadataBase: new URL("https://famousletterpress.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Famous Letterpress",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const settings = getCMSSettings();
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd />
        <Header
          logoUrl={settings.logoUrl}
          announcementActive={settings.announcementActive}
          announcementBarText={settings.announcementBarText}
        />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
