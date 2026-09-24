import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const services = [
  {
    title: "Wedding Stationery",
    description:
      "Bespoke invitations, RSVP cards, and complete suites — designed and letterpress printed for your celebration.",
    href: "/weddings/wedding-stationery",
    label: "Explore weddings",
  },
  {
    title: "Business Cards",
    description:
      "Letterpress and foil stamped business cards on premium cotton stock — made to be remembered.",
    href: "/business-cards",
    label: "Explore business cards",
  },
  {
    title: "Personalised Stationery",
    description:
      "Custom letterheads, notecards, and personal stationery — designed and printed to your specification.",
    href: "/personalised-stationery",
    label: "Explore stationery",
  },
];

export function ServicesSection() {
  return (
    <section className="section bg-cream" aria-label="Our services">
      <div className="container-wide">
        <Reveal>
          <p className="eyebrow mb-4">What We Create</p>
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
                {/* Image placeholder */}
                <div className="aspect-[4/5] bg-sand/40 rounded-sm mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-sm text-taupe">{service.title} image</p>
                  </div>
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
