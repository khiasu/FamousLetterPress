import { PrismaClient } from "@prisma/client";
import { servicesData } from "../src/lib/data/services";
import { sampleKitsData } from "../src/lib/data/sample-kits";
import { portfolioData } from "../src/lib/data/portfolio";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding Famous Letterpress Database...");

  // 1. Seed Site Settings
  await prisma.siteSettings.upsert({
    where: { id: "default" },
    update: {},
    create: {
      id: "default",
      studioName: "Famous Letter Press",
      tagline: "Designers Turned Printers · Handcrafted in Nagaland",
      contactEmail: "hello@famousletterpress.com",
      contactPhone: "+91 98628 00000",
      whatsappNumber: "+91 98628 00000",
      studioAddress: "Nagaland, India",
      businessHours: "Monday – Saturday: 9:30 AM – 6:00 PM IST",
      instagramUrl: "https://www.instagram.com/famousletterpress",
      facebookUrl: "https://www.facebook.com/famousletterpress",
      metaTitleDefault: "Famous Letterpress — Handcrafted Letterpress & Foil Printing | Nagaland, India",
      metaDescDefault:
        "India's boutique letterpress studio. Handcrafted bespoke wedding stationery, luxurious business cards, and personalized paper goods on 100% cotton stock.",
    },
  });
  console.log("✓ Site Settings seeded.");

  // 2. Seed Services
  for (const svc of Object.values(servicesData)) {
    await prisma.service.upsert({
      where: { slug: svc.slug },
      update: {
        title: svc.title,
        tagline: svc.tagline,
        shortDesc: svc.shortDesc,
        fullDescription: svc.fullDescription.join("\n\n"),
        materials: svc.materials,
        techniques: svc.techniques,
        leadTime: svc.leadTime,
        metaTitle: svc.metaTitle,
        metaDescription: svc.metaDescription,
      },
      create: {
        title: svc.title,
        slug: svc.slug,
        tagline: svc.tagline,
        shortDesc: svc.shortDesc,
        fullDescription: svc.fullDescription.join("\n\n"),
        materials: svc.materials,
        techniques: svc.techniques,
        leadTime: svc.leadTime,
        metaTitle: svc.metaTitle,
        metaDescription: svc.metaDescription,
      },
    });
  }
  console.log("✓ Core Services seeded.");

  // 3. Seed Sample Kits
  for (const kit of Object.values(sampleKitsData)) {
    await prisma.sampleKit.upsert({
      where: { slug: kit.slug },
      update: {
        name: kit.name,
        tagline: kit.tagline,
        price: kit.price,
        description: kit.description,
        includedItems: kit.includedItems,
        materials: kit.materials,
        shippingInfo: kit.shippingInfo,
        metaTitle: kit.metaTitle,
        metaDescription: kit.metaDescription,
      },
      create: {
        name: kit.name,
        slug: kit.slug,
        tagline: kit.tagline,
        price: kit.price,
        description: kit.description,
        includedItems: kit.includedItems,
        materials: kit.materials,
        shippingInfo: kit.shippingInfo,
        featuredImage: kit.featuredImage,
        galleryImages: kit.galleryImages,
        metaTitle: kit.metaTitle,
        metaDescription: kit.metaDescription,
      },
    });
  }
  console.log("✓ Sample Kits seeded.");

  // 4. Seed Portfolio Pieces
  for (const piece of portfolioData) {
    await prisma.portfolioItem.upsert({
      where: { slug: piece.slug },
      update: {
        title: piece.title,
        category: piece.category,
        clientOrProject: piece.clientOrProject,
        description: piece.description,
        techniques: piece.techniques,
        paperStock: piece.paperStock,
        featured: piece.featured ?? false,
      },
      create: {
        title: piece.title,
        slug: piece.slug,
        category: piece.category,
        clientOrProject: piece.clientOrProject,
        description: piece.description,
        techniques: piece.techniques,
        paperStock: piece.paperStock,
        featuredImage: piece.featuredImage,
        featured: piece.featured ?? false,
      },
    });
  }
  console.log("✓ Portfolio Items seeded.");

  console.log("✨ Seeding finished successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
