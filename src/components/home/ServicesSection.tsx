import Link from "next/link";
import { getCMSServices } from "@/lib/cms/store";
import { ServiceCardClient } from "./ServiceCardClient";

export function ServicesSection() {
  const servicesMap = getCMSServices();
  const services = [
    {
      title: servicesMap["wedding-stationery"]?.title || "Wedding Stationery",
      description:
        servicesMap["wedding-stationery"]?.tagline ||
        "Bespoke invitations, RSVP cards, and complete suites — designed and letterpress printed for your celebration.",
      href: "/weddings/wedding-stationery",
      label: "Explore weddings",
      image:
        servicesMap["wedding-stationery"]?.featuredImage ||
        "https://famousletterpress.com/wp-content/uploads/2026/05/FMS_4405-2000x2500.jpg",
    },
    {
      title: servicesMap["business-cards"]?.title || "Business Cards",
      description:
        servicesMap["business-cards"]?.tagline ||
        "Letterpress and foil stamped business cards on premium cotton stock — made to be remembered.",
      href: "/business-cards",
      label: "Explore business cards",
      image:
        servicesMap["business-cards"]?.featuredImage ||
        "https://famousletterpress.com/wp-content/uploads/2026/04/bizkit-01-1200x1200.jpg",
    },
    {
      title:
        servicesMap["personalised-stationery"]?.title ||
        "Personalised Stationery",
      description:
        servicesMap["personalised-stationery"]?.tagline ||
        "Custom letterheads, notecards, and personal stationery — designed and printed to your specification.",
      href: "/personalised-stationery",
      label: "Explore stationery",
      image:
        servicesMap["personalised-stationery"]?.featuredImage ||
        "https://famousletterpress.com/wp-content/uploads/2026/05/FMS_4413-2000x2500.jpg",
    },
  ];

  return (
    <section
      className="relative bg-cream overflow-hidden grain-overlay"
      aria-label="Our services"
      style={{
        paddingTop: "clamp(5rem, 10vw, 10rem)",
        paddingBottom: "clamp(5rem, 10vw, 10rem)",
      }}
    >
      <div className="container-wide">
        <ServiceCardClient services={services} />
      </div>
    </section>
  );
}
