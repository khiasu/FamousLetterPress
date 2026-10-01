import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const gateways = [
  {
    title: "Wedding Stationery",
    subtitle: "Invitations, RSVP suites, save-the-dates, and day-of stationery on thick cotton paper with deep letterpress impression and hot foil stamping.",
    href: "/weddings",
    label: "Explore weddings",
    image: "/assets/wedding-stationery/invites/FMS_6438.jpg",
  },
  {
    title: "Business & Corporate",
    subtitle: "Thick cotton business cards, custom letterheads, and branded stationery with deep impression, foil detailing, and edge painting.",
    href: "/business-cards",
    label: "Explore business cards",
    image: "/assets/business-cards/FMS_3781.jpg",
  },
];

export function WhatWeMakeSection() {
  return (
    <section className="section bg-paper-white" aria-label="What we make">
      <div className="container-wide">
        <Reveal>
          <p className="eyebrow mb-4">What We Make</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-12 md:mb-16 max-w-lg">
            Two worlds,{" "}
            <em className="font-light">one craft</em>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {gateways.map((item, index) => (
            <Reveal key={item.href} delay={0.15 + index * 0.1}>
              <Link href={item.href} className="group block">
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden bg-paper-sand mb-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-ink-deep/0 group-hover:bg-ink-deep/5 transition-colors duration-500" />
                </div>

                {/* Text */}
                <h3 className="text-ink-deep mb-2 group-hover:opacity-70 transition-opacity duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed mb-3 max-w-sm">
                  {item.subtitle}
                </p>
                <span className="text-[11px] tracking-[0.14em] uppercase text-ink-light group-hover:text-ink-deep transition-colors duration-300">
                  {item.label} →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
