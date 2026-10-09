import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "famousletterpress.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  async redirects() {
    return [
      // ── Process, Materials & Craft Unified Route ──
      {
        source: "/process",
        destination: "/craft",
        permanent: true,
      },
      {
        source: "/materials",
        destination: "/craft",
        permanent: true,
      },

      // ── Sample Kit Legacy URLs (WooCommerce & Campaign Landing Pages) ──
      {
        source: "/product/wedding-sample-kit",
        destination: "/weddings/wedding-sample-kit",
        permanent: true,
      },
      {
        source: "/product/wed-kit",
        destination: "/weddings/wedding-sample-kit",
        permanent: true,
      },
      {
        source: "/product/famous-wedding-sample-kit",
        destination: "/weddings/wedding-sample-kit",
        permanent: true,
      },
      {
        source: "/product/wedding-invitation-sample-kit",
        destination: "/weddings/wedding-sample-kit",
        permanent: true,
      },
      {
        source: "/famous-wedding-sample-kit",
        destination: "/weddings/wedding-sample-kit",
        permanent: true,
      },
      {
        source: "/wed-sample-kit",
        destination: "/weddings/wedding-sample-kit",
        permanent: true,
      },
      {
        source: "/wedding-sample-kit-checkout",
        destination: "/weddings/wedding-sample-kit",
        permanent: true,
      },
      {
        source: "/wedding-sample-kit-india",
        destination: "/weddings/wedding-sample-kit",
        permanent: true,
      },
      {
        source: "/wedding-sample-kit-nagaland",
        destination: "/weddings/wedding-sample-kit",
        permanent: true,
      },
      {
        source: "/wedding-sample-kit-2",
        destination: "/weddings/wedding-sample-kit",
        permanent: true,
      },
      {
        source: "/samplekit",
        destination: "/weddings/wedding-sample-kit",
        permanent: true,
      },
      {
        source: "/sample-kit-checkout",
        destination: "/weddings/wedding-sample-kit",
        permanent: true,
      },
      {
        source: "/product/business-card-sample-kit",
        destination: "/business-cards/business-card-sample-kit",
        permanent: true,
      },
      {
        source: "/product/biz-kit-business-cards-sample-kit",
        destination: "/business-cards/business-card-sample-kit",
        permanent: true,
      },
      {
        source: "/famous-biz-kit",
        destination: "/business-cards/business-card-sample-kit",
        permanent: true,
      },
      {
        source: "/business-card-sample-kit-2",
        destination: "/business-cards/business-card-sample-kit",
        permanent: true,
      },
      {
        source: "/business-card-smaple-kit",
        destination: "/business-cards/business-card-sample-kit",
        permanent: true,
      },

      // ── Legacy WooCommerce Commerce Routes ──
      {
        source: "/shop",
        destination: "/weddings/wedding-sample-kit",
        permanent: true,
      },
      {
        source: "/store",
        destination: "/weddings/wedding-sample-kit",
        permanent: true,
      },
      {
        source: "/cart",
        destination: "/weddings/wedding-sample-kit",
        permanent: true,
      },
      {
        source: "/checkout",
        destination: "/weddings/wedding-sample-kit",
        permanent: true,
      },

      // ── Wedding Stationery Legacy Routes ──
      {
        source: "/wedding-stationery-suite",
        destination: "/weddings/wedding-stationery",
        permanent: true,
      },
      {
        source: "/wedding-stationery-landing-page",
        destination: "/weddings/wedding-stationery",
        permanent: true,
      },
      {
        source: "/wedding-stationery-page",
        destination: "/weddings/wedding-stationery",
        permanent: true,
      },
      {
        source: "/wedding-stationery-page-2",
        destination: "/weddings/wedding-stationery",
        permanent: true,
      },
      {
        source: "/wedding-stationery-page-3",
        destination: "/weddings/wedding-stationery",
        permanent: true,
      },
      {
        source: "/letterpress-wedding-invitation-in-india",
        destination: "/weddings/wedding-stationery",
        permanent: true,
      },
      {
        source: "/wedding-invitations",
        destination: "/weddings/wedding-stationery",
        permanent: true,
      },
      {
        source: "/product-category/wedding-invitations",
        destination: "/weddings/wedding-stationery",
        permanent: true,
      },

      // ── Early Bride Program ──
      {
        source: "/early-bride",
        destination: "/weddings/early-bride",
        permanent: true,
      },
      {
        source: "/early-bride-program",
        destination: "/weddings/early-bride",
        permanent: true,
      },

      // ── Business Cards & Personalised Stationery ──
      {
        source: "/business-card-page",
        destination: "/business-cards",
        permanent: true,
      },
      {
        source: "/business-card-page-2",
        destination: "/business-cards",
        permanent: true,
      },
      {
        source: "/product-category/business-cards",
        destination: "/business-cards",
        permanent: true,
      },
      {
        source: "/presonalized-stationery-page",
        destination: "/our-work/custom-works",
        permanent: true,
      },
      {
        source: "/personalised-stationery-page-2",
        destination: "/our-work/custom-works",
        permanent: true,
      },
      {
        source: "/personalised-stationery-landing-page",
        destination: "/our-work/custom-works",
        permanent: true,
      },
      {
        source: "/personalised-stationery",
        destination: "/our-work/custom-works",
        permanent: true,
      },
      {
        source: "/personalized-stationery-sample-kit",
        destination: "/weddings/wedding-sample-kit",
        permanent: true,
      },
      {
        source: "/personalised-stationery-sample-kit-2",
        destination: "/weddings/wedding-sample-kit",
        permanent: true,
      },

      // ── Consultation & Quotes ──
      {
        source: "/price-request",
        destination: "/start-a-project",
        permanent: true,
      },
      {
        source: "/price-request-form",
        destination: "/start-a-project",
        permanent: true,
      },
      {
        source: "/request-price-wedding-stationery",
        destination: "/start-a-project",
        permanent: true,
      },
      {
        source: "/book-a-consulattion-form",
        destination: "/start-a-project",
        permanent: true,
      },

      // ── General Pages & FAQs ──
      {
        source: "/contact-us",
        destination: "/start-a-project",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/start-a-project",
        permanent: true,
      },
      {
        source: "/portfolio",
        destination: "/our-work/wedding-invites",
        permanent: true,
      },
      {
        source: "/work",
        destination: "/our-work/wedding-invites",
        permanent: true,
      },
      {
        source: "/our-work",
        destination: "/our-work/wedding-invites",
        permanent: true,
      },
      {
        source: "/our-process",
        destination: "/craft",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/faqs",
        destination: "/faq",
        permanent: true,
      },
      {
        source: "/faqs-process",
        destination: "/faq",
        permanent: true,
      },
      {
        source: "/updated-faq-page",
        destination: "/faq",
        permanent: true,
      },
      {
        source: "/what-is-letterperess",
        destination: "/craft",
        permanent: true,
      },
      {
        source: "/journal",
        destination: "/craft",
        permanent: true,
      },
      {
        source: "/journal/:path*",
        destination: "/craft",
        permanent: true,
      },
      // ── Legacy WordPress Blog Posts & Case Studies ──
      {
        source: "/the-crafting-of-sai-makarandh-ramolas-wedding-invites",
        destination: "/our-work/wedding-invites",
        permanent: true,
      },
      {
        source: "/the-crafting-of-naomi-and-ayings-wedding-invites",
        destination: "/our-work/wedding-invites",
        permanent: true,
      },
      {
        source: "/the-crafting-of-tasneem-and-samuels-wedding-invites",
        destination: "/our-work/wedding-invites",
        permanent: true,
      },
      {
        source: "/the-crafting-of-saesha-rohans-wedding-invites",
        destination: "/our-work/wedding-invites",
        permanent: true,
      },
      {
        source: "/rasa-mayank-how-their-invites-were-made",
        destination: "/our-work/wedding-invites",
        permanent: true,
      },
      {
        source: "/kanu-and-dhruv-wedding-invitations",
        destination: "/our-work/wedding-invites",
        permanent: true,
      },
      // ── Discontinued E-commerce Legacy Routes (Diwali, magnets, notebooks) ──
      {
        source: "/product/:path*",
        destination: "/weddings/wedding-sample-kit",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
