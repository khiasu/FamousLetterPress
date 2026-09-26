import { getCMSSampleKits } from "@/lib/cms/store";
import { SampleKitsClient } from "./SampleKitsClient";

export function SampleKitsSection() {
  const kitsMap = getCMSSampleKits();
  const sampleKits = [
    {
      title: kitsMap["wedding-sample-kit"]?.name || "Wedding Sample Kit",
      description:
        kitsMap["wedding-sample-kit"]?.tagline ||
        "Experience the quality of our wedding stationery — 600gsm cotton, hot foil, deckled edges, and swatches in your hands.",
      href: "/weddings/wedding-sample-kit",
      label: `Order wedding kit`,
      price: `₹${kitsMap["wedding-sample-kit"]?.price || 1500}`,
      image:
        kitsMap["wedding-sample-kit"]?.featuredImage ||
        "https://famousletterpress.com/wp-content/uploads/2026/04/wedkit-1-pics-1200x1200.jpg",
    },
    {
      title:
        kitsMap["business-card-sample-kit"]?.name ||
        "Business Card Sample Kit",
      description:
        kitsMap["business-card-sample-kit"]?.tagline ||
        "Feel the weight, texture, and print quality of our ultra-thick business cards and foil edge gilding before you commit.",
      href: "/business-cards/business-card-sample-kit",
      label: `Order business kit`,
      price: `₹${kitsMap["business-card-sample-kit"]?.price || 1000}`,
      image:
        kitsMap["business-card-sample-kit"]?.featuredImage ||
        "https://famousletterpress.com/wp-content/uploads/2026/04/bizkit-01-1200x1200.jpg",
    },
  ];

  return <SampleKitsClient sampleKits={sampleKits} />;
}
