import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const gateways = [
  {
    title: "Wedding Stationery",
    subtitle: "Invitations, RSVP suites, save-the-dates, and day-of paper pressed on 600–900gsm pure cotton with genuine hot foil stamping, blind sculpted debossing, and deckled edges.",
    href: "/weddings",
    label: "Explore Wedding Suites",
    image: "/assets/wedding-stationery/invites/FMS_6438.jpg",
    tag: "Heirloom Commissions",
  },
  {
    title: "Business & Corporate",
    subtitle: "Unbendable 600–900gsm cotton business cards, custom letterheads, and branded packaging with edge gilding, colored foil, and deep platen impression.",
    href: "/business-cards",
    label: "Explore Business Cards",
    image: "/assets/business-cards/FMS_3781.jpg",
    tag: "Executive Identity",
  },
];

export function WhatWeMakeSection() {
  return (
    <section className="section bg-white border-b border-[#E5E5E5]" aria-label="What We Make">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <Reveal>
              <p className="eyebrow mb-3">Core Disciplines</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-black font-serif">
                Two worlds, <em className="font-light italic font-serif">one craft.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <p className="text-sm text-[#555555] max-w-md font-light leading-relaxed">
              Every commission is hand-fed sheet-by-sheet through vintage platen presses in our Nagaland atelier. No digital shortcuts.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {gateways.map((item, index) => (
            <Reveal key={item.href} delay={0.15 + index * 0.1}>
              <Link href={item.href} className="group block">
                {/* Large Editorial Image Frame */}
                <div className="relative aspect-[4/3] bg-[#F7F7F7] overflow-hidden border border-[#E5E5E5] mb-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1 text-[10px] font-mono tracking-widest uppercase text-black border border-[#E5E5E5]">
                    {item.tag}
                  </div>
                </div>

                {/* Editorial Information */}
                <div className="space-y-2">
                  <h3 className="text-2xl lg:text-3xl text-black font-serif group-hover:opacity-60 transition-opacity">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#555555] leading-relaxed font-light max-w-lg mb-4">
                    {item.subtitle}
                  </p>
                  <span className="inline-block text-[11px] tracking-[0.2em] uppercase text-black font-medium border-b border-black pb-0.5 group-hover:opacity-60 transition-opacity">
                    {item.label} →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
