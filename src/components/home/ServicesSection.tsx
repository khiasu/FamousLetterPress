import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { getCMSServices } from "@/lib/cms/store";

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
      title: servicesMap["personalised-stationery"]?.title || "Personalised Stationery",
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
    <section className="section bg-cream" aria-label="Our services">
      <div className="container-wide">
        <Reveal>
          <p className="eyebrow text-taupe mb-4">What We Create</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-16 max-w-2xl">
            Three things,{" "}
            <span className="italic font-light">done exceptionally</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <Reveal key={service.href} delay={0.15 + index * 0.1}>
              <Link
                href={service.href}
                className="group block h-full"
              >
                {/* Real Service Image */}
                <div className="aspect-[4/5] bg-sand/40 rounded-sm mb-6 overflow-hidden relative shadow-sm group-hover:shadow-md transition-shadow">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/5 transition-colors duration-500" />
                </div>

                <h3 className="text-xl mb-3 group-hover:text-sage-dark transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-taupe leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="text-xs tracking-wider uppercase text-sage group-hover:text-sage-dark transition-colors duration-300">
                  {service.label} →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
