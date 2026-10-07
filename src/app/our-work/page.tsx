import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Our Work · 7 Core Printcraft Disciplines | Famous Letterpress",
  description:
    "Explore our 7 core letterpress disciplines: Wedding Invites, Business Cards, Seal Stickers, Envelopes, Certificates, Design & Illustration, and Custom Works. Handcrafted in Nagaland.",
};

const SERVICES = [
  {
    num: "01",
    title: "Wedding Invites",
    tagline: "Bespoke & Curated Suites",
    desc: "Luxury invitation suites crafted on 600–900gsm pure cotton board. Featuring tactile blind deboss relief, metallic and matte foil stamping, handmade deckled edges, and bespoke monogram seals.",
    specs: ["600–900 GSM Cotton", "Blind Deboss Relief", "Hot Foil Stamping", "Handmade Deckled Edges"],
    href: "/our-work/wedding-invites",
    img: "/assets/our-work/wedding-invites.jpg",
  },
  {
    num: "02",
    title: "Business Cards",
    tagline: "Distinguished Executive Identity",
    desc: "Thick unbendable cotton cards designed for distinguished practices and visionary founders. Crafted with sculpted blind deboss, duplexed colored sandwich cores, and mirror gold foil edge gilding.",
    specs: ["600–900 GSM Cotton", "Mirror Edge Gilding", "Sculpted Deboss", "Duplexed Color Cores"],
    href: "/our-work/business-cards",
    img: "/assets/our-work/business-cards.jpg",
  },
  {
    num: "03",
    title: "Seal Stickers",
    tagline: "Die-Cut Cotton Relief Seals",
    desc: "Hand-finished cotton adhesive seals featuring intricate sculpted relief patterns. Created to effortlessly elevate envelopes, invitation wraps, and luxury retail packaging without melting wax.",
    specs: ["Pure Cotton Stock", "Self-Adhesive Release", "Die-Cut Relief", "Mess-Free Sealing"],
    href: "/our-work/seal-stickers",
    img: "/assets/our-work/seal-stickers.jpg",
  },
  {
    num: "04",
    title: "Envelopes",
    tagline: "Handmade & Lined Envelopes",
    desc: "Custom-converted envelopes pressed on heavyweight cotton stock. Tailored with bespoke flap contours, blind pressed ciphers, and full-bleed illustrated liners for an unforgettable unboxing.",
    specs: ["Custom Flap Shapes", "Illustrated Liners", "Heavyweight Stock", "Wax Seal Compatible"],
    href: "/our-work/envelopes",
    img: "/assets/our-work/envelopes.jpg",
  },
  {
    num: "05",
    title: "Certificates",
    tagline: "Archival Institutional Honors",
    desc: "Acid-free archival cotton certificates crafted for prestigious institutions, universities, and corporate milestones. Enhanced with heated gold foil seals and deep mechanical embossing.",
    specs: ["100% Acid-Free Cotton", "Metallic Foil Seals", "Heavy Mechanical Bite", "Centuries Archival"],
    href: "/our-work/certificates",
    img: "/assets/our-work/certificates.jpg",
  },
  {
    num: "06",
    title: "Design & Illustration",
    tagline: "Studio Art & Bespoke Crests",
    desc: "Our in-house design studio translates your narrative into bespoke wedding crests, custom botanical illustrations, monogram typography, and architectural ink renderings ready for letterpress.",
    specs: ["Botanical Crests", "Custom Monograms", "Vector Inking", "Typography Direction"],
    href: "/our-work/design-illustration",
    img: "/assets/our-work/design-illustrations.jpg",
  },
  {
    num: "07",
    title: "Custom Works",
    tagline: "Artisanal Specialty Commissions",
    desc: "Specialty custom commissions from letterpress drink coasters and debossed notebook covers to exhibition pamphlets, blind debossed tags, and bespoke luxury packaging components.",
    specs: ["Debossed Coasters", "Hardcover Notebooks", "Event Menus & Tags", "Custom Packaging"],
    href: "/our-work/custom-works",
    img: "/assets/our-work/custom-works.jpg",
  },
];

export default function OurWorkPage() {
  return (
    <div className="bg-white min-h-screen text-black select-none">
      {/* ── Page Header ── */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 border-b border-[#E5E5E5]">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4 text-[10px] tracking-[0.18em] uppercase text-[#7b7566] font-mono">
                <Link href="/" className="hover:text-black transition-colors">Home</Link>
                <span>/</span>
                <span className="text-black font-medium">Our Work</span>
              </div>
              <p className="k mb-2">Seven Disciplines of Letterpress Craft</p>
              <h1 className="d text-[clamp(40px,8vw,76px)] leading-[0.98] mt-2 mb-6 font-serif text-black">
                Our <i>work.</i>
              </h1>
              <p className="text-base sm:text-lg text-[#555] max-w-2xl font-light leading-relaxed mb-8">
                Our expertise lies in working with our clients to deliver transcending experiences and timeless products. Discover our 7 specialized printing and finishing disciplines below.
              </p>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <Link
                  href="/start-a-project"
                  className="inline-flex items-center justify-center px-7 sm:px-8 py-3.5 bg-black text-white hover:bg-[#222] transition-colors rounded-none text-[11px] uppercase tracking-[0.22em] font-sans font-medium whitespace-nowrap shadow-sm"
                >
                  Start a project
                </Link>
                <Link
                  href="/weddings/wedding-sample-kit"
                  className="ln"
                >
                  Order Sample Kit &rarr;
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 7 Core Services Grid ── */}
      <section className="py-12 md:py-20 bg-white" aria-label="Our 7 Work Disciplines">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            {SERVICES.map((service) => (
              <Reveal key={service.num}>
                <div className="border border-[#E5E5E5] bg-white flex flex-col justify-between transition-all duration-300 hover:border-black/40 hover:shadow-[0_12px_28px_-16px_rgba(0,0,0,0.1)] group h-full">
                  {/* Image Card Container */}
                  <Link
                    href={service.href}
                    className="relative aspect-[16/10] overflow-hidden bg-[#F7F7F7] block border-b border-[#E5E5E5]"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-white/95 border border-[#E5E5E5] text-[10px] font-mono tracking-widest uppercase text-black">
                      {service.num}
                    </div>
                  </Link>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                    <div>
                      <p className="k text-[10px] mb-1.5">{service.tagline}</p>
                      <h2 className="font-serif font-medium text-2xl sm:text-3xl text-black tracking-tight mb-3">
                        <Link href={service.href} className="hover:opacity-75 transition-opacity">
                          {service.title}
                        </Link>
                      </h2>
                      <p className="text-xs sm:text-sm text-[#555] font-light leading-relaxed mb-6">
                        {service.desc}
                      </p>

                      {/* Craft Spec Badges */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-8">
                        {service.specs.map((spec) => (
                          <span
                            key={spec}
                            className="px-2.5 py-1 bg-[#FAF8F5] border border-[#E5E5E5] text-[10px] font-mono uppercase tracking-wider text-[#444]"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Dual Action CTAs */}
                    <div className="flex items-center justify-between pt-5 border-t border-[#E5E5E5] mt-auto">
                      <Link
                        href={service.href}
                        className="inline-flex items-center justify-center px-5 sm:px-6 py-3 bg-black text-white hover:bg-[#222] transition-colors rounded-none text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-sans font-medium whitespace-nowrap shadow-sm"
                      >
                        Explore {service.title}
                      </Link>
                      <Link
                        href={`/start-a-project?service=${service.href.split("/").pop()}`}
                        className="ln text-[10px] sm:text-[11px]"
                      >
                        Inquire &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sample Kit Discovery Banner ── */}
      <section className="py-14 md:py-20 bg-[#FAF8F5] border-y border-[#E5E5E5]">
        <div className="container-wide">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <p className="k mb-2">Feel The Physical Craft</p>
                <h2 className="d text-[clamp(28px,5vw,46px)] leading-[1.05] font-serif text-black mb-3">
                  Experience our cotton papers &amp; foils <i>in person.</i>
                </h2>
                <p className="text-sm sm:text-base text-[#555] font-light leading-relaxed">
                  Screen pixels cannot convey the bite of letterpress or the weight of 900gsm cotton board. Order our curated sample boxes dispatched express across India.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 shrink-0">
                <Link
                  href="/weddings/wedding-sample-kit"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-black text-white hover:bg-[#222] transition-colors rounded-none text-[11px] uppercase tracking-[0.22em] font-sans font-medium whitespace-nowrap shadow-sm"
                >
                  Wedding Sample Kit (₹1,500)
                </Link>
                <Link
                  href="/business-cards/business-card-sample-kit"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-transparent border border-black text-black hover:bg-black hover:text-white transition-colors rounded-none text-[11px] uppercase tracking-[0.22em] font-sans font-medium whitespace-nowrap shadow-sm"
                >
                  Business Sample Kit (₹1,000)
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Studio Inquiry ── */}
      <section className="py-20 md:py-28 text-center bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <Reveal>
            <p className="k mb-2">Custom Project Consultation</p>
            <h2 className="d text-[clamp(32px,6vw,56px)] leading-[1.05] font-serif text-black mb-4">
              Have a bespoke design in <i>mind?</i>
            </h2>
            <p className="text-sm sm:text-base text-[#555] max-w-lg mx-auto mb-8 font-light leading-relaxed">
              We collaborate with couples, designers, agencies, and businesses across India and worldwide. Reach out to review papers, ballpark budgets, or production timelines.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
              <Link
                href="/start-a-project"
                className="inline-flex items-center justify-center px-8 py-4 bg-black text-white hover:bg-[#222] transition-colors rounded-none text-[11px] sm:text-xs uppercase tracking-[0.22em] font-sans font-medium whitespace-nowrap shadow-sm"
              >
                Submit Project Brief
              </Link>
              <a
                href="https://wa.me/919862800000?text=Hello%20Famous%20Letterpress%2C%20I%20would%20like%20to%20enquire%20about%20a%20print%20project..."
                target="_blank"
                rel="noopener noreferrer"
                className="ln"
              >
                Chat on WhatsApp &rarr;
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
