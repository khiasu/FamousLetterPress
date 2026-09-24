import { SampleKitItem } from "@/types";

export const sampleKitsData: Record<string, SampleKitItem> = {
  "wedding-sample-kit": {
    id: "kit-wedding",
    name: "Wedding Sample Kit",
    slug: "wedding-sample-kit",
    tagline: "Feel the cotton paper, the deep mechanical impression, and the brilliance of hot foil in your hands.",
    price: 1500, // Price in INR
    description:
      "Digital photos and monitor screens cannot convey the emotional weight of pure cotton paper or the deep, tactile indents of a cast-iron letterpress. Our Wedding Sample Kit is curated to give couples and wedding designers direct, sensory contact with our craftsmanship before committing to a full bespoke suite.",
    includedItems: [
      "Full Invitation Suite printed on 600gsm 100% Cotton Rag paper",
      "Save the Date sample card featuring Matte Gold Hot Foil Stamping",
      "Detail & RSVP cards demonstrating Blind Debossing (tactile impression without ink)",
      "Deckled Edge handmade cotton paper sample showcasing natural feathered borders",
      "Colorplan duplex card showcasing colored backing paired with crisp white cotton",
      "Curated Paper Swatch Ring (300gsm, 450gsm, 600gsm & 900gsm paper weights)",
      "Curated Foil Swatch Card (Matte Gold, Shiny Gold, Champagne, Copper, Rose Gold)",
      "Envelope Samples: Euro-flap cotton envelopes with custom printed and solid paper liners",
      "Wax Seal Samples with genuine hand-pressed sealing wax",
      "Comprehensive Stationery Planning & Timeline Guide brochure",
    ],
    materials: [
      "100% Cotton Rag Paper (Crane Lettra / Wild 600gsm)",
      "Artisan Handmade Deckled Cotton Paper",
      "European Colorplan Premium Colored Boards",
      "Hot Stamping Foil (Kurz Metallic & Pigment Foils)",
      "Soy & Mineral Letterpress Inks",
    ],
    shippingInfo:
      "Dispatched within 24–48 hours via express courier across India. Delivery typically takes 3–5 business days depending on your city. All orders include full end-to-end tracking.",
    featuredImage: "/images/sample-kits/wedding-kit-hero.jpg",
    galleryImages: [
      "/images/sample-kits/wedding-kit-1.jpg",
      "/images/sample-kits/wedding-kit-2.jpg",
      "/images/sample-kits/wedding-kit-3.jpg",
    ],
    stockAvailable: true,
    featured: true,
    metaTitle: "Order Wedding Sample Kit | Famous Letterpress",
    metaDescription:
      "Experience our handcrafted letterpress wedding stationery in person. Includes 600gsm cotton suites, foil stamping, deckled paper, and swatch guides. Ships across India.",
  },

  "business-card-sample-kit": {
    id: "kit-business-card",
    name: "Business Card Sample Kit",
    slug: "business-card-sample-kit",
    tagline: "Hold real examples of ultra-thick cotton boards, edge gilding, and precision letterpress relief.",
    price: 1000, // Price in INR
    description:
      "Choosing the right card stock, weight, and finish for your company or executive identity requires tangible inspection. Our Business Card Sample Kit brings our studio's benchmark print specimens directly to your desk.",
    includedItems: [
      "600gsm Pure Cotton Business Card with two-color deep letterpress",
      "600gsm Cotton Board featuring metallic foil stamping & blind debossing",
      "Duplexed Business Card featuring contrasting colored GF Smith board with edge painting",
      "Beveled Edge Card with mirror-finish reflective gold edge gilding",
      "900gsm ultra-heavyweight museum board sample card",
      "Paper Weight & Thickness comparison reference card (300gsm to 900gsm)",
      "Metallic & Pigment Foil Swatch Reference card",
      "Technical Artwork & Typography preparation checklist for letterpress",
    ],
    materials: [
      "Pure Cotton Boards (Fluorescent White, Pearl White, Soft Ecru)",
      "GF Smith Colorplan Heavyweight Board Range",
      "German Precision Hot Stamping Foils",
      "Metallic Edge Gilding Foils & Archival Inks",
    ],
    shippingInfo:
      "Dispatched within 24–48 hours via express courier with real-time tracking across India. International shipping available upon direct enquiry.",
    featuredImage: "/images/sample-kits/business-kit-hero.jpg",
    galleryImages: [
      "/images/sample-kits/business-kit-1.jpg",
      "/images/sample-kits/business-kit-2.jpg",
    ],
    stockAvailable: true,
    featured: true,
    metaTitle: "Order Letterpress Business Card Sample Kit | Famous Letterpress",
    metaDescription:
      "Examine luxury 600gsm cotton business cards, edge gilding, hot foil, and blind deboss samples in person. Fast courier dispatch across India.",
  },
};
