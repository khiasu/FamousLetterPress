import { HeroSection } from "@/components/home/HeroSection";
import { WhatWeMakeSection } from "@/components/home/WhatWeMakeSection";
import { HowWeMakeSection } from "@/components/home/HowWeMakeSection";
import { WhoWeMakeForSection } from "@/components/home/WhoWeMakeForSection";
import { SampleKitsSection } from "@/components/home/SampleKitsSection";
import { InstagramSection } from "@/components/home/InstagramSection";
import { HomeFAQSection } from "@/components/home/HomeFAQSection";
import { CTASection } from "@/components/home/CTASection";

export const metadata = {
  title: "Famous Letterpress — Handcrafted Letterpress & Foil Studio",
  description:
    "India's premier artisanal letterpress atelier. Bespoke wedding invitations, luxury business cards, and custom stationery pressed by hand on vintage platen presses in Nagaland.",
};

export default function HomePage() {
  return (
    <main>
      {/* 1. Hero Reel: IG-Style Momentum Showcase */}
      <HeroSection />

      {/* 2. What We Make: Wedding vs Business Split Gateway */}
      <WhatWeMakeSection />

      {/* 3. How We Make: Authentic Letterpress Craftsmanship Story */}
      <HowWeMakeSection />

      {/* 4. Who We Make For: Couples, Planners & B2B Audiences */}
      <WhoWeMakeForSection />

      {/* 5. Sample Kits: Tactile Commerce Discovery */}
      <SampleKitsSection />

      {/* 6. From Our Instagram: Top 4 Curated Reels & Posts (Playable in-page or open in IG) */}
      <InstagramSection />

      {/* 7. Frequently Asked Questions */}
      <HomeFAQSection />

      {/* 8. Direct Inquiry & Consultation CTA */}
      <CTASection />
    </main>
  );
}
