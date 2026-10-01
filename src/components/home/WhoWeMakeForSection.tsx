"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const audiences = [
  {
    id: "couples",
    tab: "Couples",
    title: "For Your Wedding Day",
    description:
      "We work directly with couples to create bespoke wedding stationery suites — invitations, RSVP inserts, day-of menus, table numbers, and thank-you cards. Each suite is designed and printed to match your wedding aesthetic, from classic ivory to contemporary minimalist.",
    cta: "Start Your Wedding Suite",
    href: "/weddings",
    image: "/assets/wedding-stationery/invites/FMS_6988.jpg",
  },
  {
    id: "partners",
    tab: "Designers & Planners",
    title: "For Channel Partners",
    description:
      "We partner with wedding planners, independent designers, and creative agencies who need a reliable letterpress production house. Send us your client's artwork or collaborate with our in-house design team. Wholesale terms, priority scheduling, and dedicated account management.",
    cta: "Partner With Us",
    href: "/channel-partners",
    image: "/assets/home/our-story/FMS_4034.jpg",
  },
  {
    id: "b2b",
    tab: "B2B & Corporate",
    title: "For Brands & Businesses",
    description:
      "Luxury business cards, custom packaging, branded stationery, and premium boxes for brands that understand the power of tactile first impressions. We work with law firms, architecture studios, hospitality brands, and design agencies across India.",
    cta: "Start a Project",
    href: "/business-cards",
    image: "/assets/business-cards/FMS_3764.jpg",
  },
];

export function WhoWeMakeForSection() {
  const [active, setActive] = useState(0);
  const current = audiences[active];

  return (
    <section className="section bg-paper-white" aria-label="Who we make for">
      <div className="container-wide">
        <Reveal>
          <p className="eyebrow mb-4">Who We Make For</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-10 md:mb-14 max-w-md">
            Three audiences,{" "}
            <em className="font-light">one standard</em>
          </h2>
        </Reveal>

        {/* Tab Bar */}
        <Reveal delay={0.2}>
          <div className="flex gap-0 border-b border-border-hairline mb-10 md:mb-14">
            {audiences.map((aud, i) => (
              <button
                key={aud.id}
                onClick={() => setActive(i)}
                className={`relative pb-4 px-1 mr-6 md:mr-8 text-[11px] tracking-[0.14em] uppercase font-sans font-medium transition-colors duration-300 ${
                  i === active ? "text-ink-deep" : "text-ink-light hover:text-ink-muted"
                }`}
              >
                {aud.tab}
                {i === active && (
                  <motion.div
                    layoutId="audience-tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-px bg-ink-deep"
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden bg-paper-sand order-2 lg:order-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <h3 className="mb-5">{current.title}</h3>
              <p className="text-ink-muted leading-relaxed mb-8">
                {current.description}
              </p>
              <Link
                href={current.href}
                className="inline-flex px-7 py-3 text-[11px] tracking-[0.14em] uppercase bg-ink-deep text-paper-creme hover:bg-[#222] transition-colors duration-300"
              >
                {current.cta}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
