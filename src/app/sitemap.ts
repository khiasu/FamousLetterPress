import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://famousletterpress.com";

  const staticRoutes = [
    "",
    "/weddings",
    "/weddings/wedding-stationery",
    "/weddings/wedding-sample-kit",
    "/weddings/early-bride",
    "/business-cards",
    "/business-cards/business-card-sample-kit",
    "/personalised-stationery",
    "/channel-partners",
    "/work",
    "/about",
    "/process",
    "/materials",
    "/faq",
    "/start-a-project",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route.startsWith("/weddings") ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/weddings") || route.startsWith("/business-cards") ? 0.9 : 0.8,
  }));

  return staticEntries;
}
