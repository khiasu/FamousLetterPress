import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Legacy WordPress / WooCommerce sample kit products
      {
        source: "/product/wedding-sample-kit",
        destination: "/weddings/wedding-sample-kit",
        permanent: true,
      },
      {
        source: "/product/business-card-sample-kit",
        destination: "/business-cards/business-card-sample-kit",
        permanent: true,
      },
      {
        source: "/shop",
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

      // Legacy categories and legacy URLs
      {
        source: "/product-category/wedding-invitations",
        destination: "/weddings/wedding-stationery",
        permanent: true,
      },
      {
        source: "/product-category/business-cards",
        destination: "/business-cards",
        permanent: true,
      },
      {
        source: "/early-bride",
        destination: "/weddings/early-bride",
        permanent: true,
      },
      {
        source: "/wedding-invitations",
        destination: "/weddings/wedding-stationery",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/portfolio",
        destination: "/work",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
