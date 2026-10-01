"use client";

import { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const audiences = [
  {
    id: "couples",
    tab: "Couples",
    title: "For Your Wedding Day",
    description:
      "We collaborate directly with couples to craft bespoke wedding stationery suites—invitations, RSVP cards, detail inserts, day-of menus, table numbers, and custom wax seals. Every suite is tailored to your aesthetic, from classic ivory to minimalist modern typography.",
    cta: "Start Your Wedding Suite",
    href: "/weddings",
    image: "/assets/wedding-stationery/invites/FMS_6988.jpg",
    specs: ["Bespoke Typographic Design", "600–900gsm Cotton", "Matching Euro-Flap Envelopes"],
  },
  {
    id: "partners",
    tab: "Designers & Planners",
    title: "For Creative Partners & Agencies",
    description:
      "We partner with wedding planners, independent graphic designers, calligraphers, and creative agencies who require a reliable artisanal letterpress house. Supply print-ready artwork or collaborate with our studio. Wholesale terms, priority press scheduling, and trade swatch libraries.",
    cta: "Apply for Trade Partnership",
    href: "/channel-partners",
    image: "/assets/home/our-story/FMS_4034.jpg",
    specs: ["Dedicated Trade Account", "Priority Press Queuing", "White-Label Tracked Delivery"],
  },
  {
    id: "b2b",
    tab: "Brands & Businesses",
    title: "For Distinguished Practices",
    description:
      "Luxury business cards, executive stationery, presentation folders, and bespoke packaging for brands that understand the authority of physical touch. We work with law firms, architecture studios, luxury hospitality brands, and design consultancies across India.",
    cta: "Request Corporate Quote",
    href: "/business-cards",
    image: "/assets/business-cards/FMS_3764.jpg",
    specs: ["600–900gsm Pure Cotton", "Mirror Edge Gilding", "Custom Die-Cut Packaging"],
  },
];

export function WhoWeMakeForSection() {
  const [active, setActive] = useState(0);
  const current = audiences[active];

  return (
    <section className="section bg-white border-b border-[#E5E5E5]" aria-label="Who We Make For">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <div>
            <Reveal>
              <p className="eyebrow mb-3">Audience Segments</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-black font-serif">
                Three audiences, <em className="font-light italic font-serif">one standard.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <p className="text-sm text-[#555555] max-w-md font-light leading-relaxed">
              Tailored workflows designed around the distinct needs of private couples, event planners, and corporate studios.
            </p>
          </Reveal>
        </div>

        {/* Minimalist Tab Navigation */}
        <div className="flex border-b border-[#E5E5E5] mb-10 md:mb-14">
          {audiences.map((aud, i) => (
            <button
              key={aud.id}
              onClick={() => setActive(i)}
              className={`pb-4 px-2 sm:px-6 text-[11px] tracking-[0.2em] uppercase font-sans font-medium transition-all relative ${
                i === active
                  ? "text-black border-b-2 border-black"
                  : "text-[#888888] hover:text-black"
              }`}
            >
              {aud.tab}
            </button>
          ))}
        </div>

        {/* Active Tab Editorial Showcase */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative aspect-[4/3] bg-[#F7F7F7] overflow-hidden border border-[#E5E5E5]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <span className="text-[10px] font-mono tracking-widest text-[#888888] uppercase block">
              Dedicated Pathway · 0{active + 1}
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl text-black font-serif">
              {current.title}
            </h3>
            <p className="text-sm sm:text-base text-[#555555] font-light leading-relaxed">
              {current.description}
            </p>

            <div className="pt-4 border-t border-[#E5E5E5] space-y-2">
              {current.specs.map((spec) => (
                <div key={spec} className="flex items-center gap-3 text-xs text-[#555555]">
                  <span className="w-1.5 h-1.5 bg-black rounded-full shrink-0" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href={current.href}
                className="inline-flex items-center justify-center px-8 py-3.5 text-[11px] tracking-[0.2em] uppercase font-medium bg-black text-white hover:bg-neutral-800 transition-colors"
              >
                {current.cta}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
