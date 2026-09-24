export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://famousletterpress.com/#organization",
        name: "Famous Letterpress",
        alternateName: "Famous Letter Press",
        url: "https://famousletterpress.com",
        logo: "https://famousletterpress.com/logo.png",
        image: "https://famousletterpress.com/og-image.jpg",
        description:
          "India's boutique letterpress printing and stationery studio. Designers turned printers handcrafting bespoke wedding invitations, luxury business cards, and personalized cotton stationery in Nagaland, India.",
        telephone: "+91-98628-00000",
        email: "hello@famousletterpress.com",
        priceRange: "₹₹₹",
        address: {
          "@type": "PostalAddress",
          addressRegion: "Nagaland",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "25.6747",
          longitude: "94.1102",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:30",
            closes: "18:00",
          },
        ],
        sameAs: [
          "https://www.instagram.com/famousletterpress",
          "https://www.facebook.com/famousletterpress",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Letterpress Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Bespoke Letterpress Wedding Stationery",
                url: "https://famousletterpress.com/weddings/wedding-stationery",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Luxury Letterpress Business Cards",
                url: "https://famousletterpress.com/business-cards",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: "Wedding Sample Kit",
                url: "https://famousletterpress.com/weddings/wedding-sample-kit",
                offers: {
                  "@type": "Offer",
                  price: "1500",
                  priceCurrency: "INR",
                  availability: "https://schema.org/InStock",
                },
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
