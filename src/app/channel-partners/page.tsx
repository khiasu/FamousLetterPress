import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { ChannelPartnerForm } from "@/components/forms/ChannelPartnerForm";

export const metadata: Metadata = {
  title: "Channel Partners & Creative Trade Collaboration | Famous Letterpress",
  description:
    "Partner with Famous Letterpress. We collaborate with wedding planners, creative agencies, graphic designers, and event stylists as your dedicated trade printmaker.",
};

const tradePillars = [
  {
    title: "Wholesale Trade Margin",
    desc: "Competitive trade pricing structures tailored for creative studios, allowing healthy agency margins.",
  },
  {
    title: "White-Label Fulfillment",
    desc: "Discreet unbranded packaging drop-shipped directly to your clients with tracked courier dispatch.",
  },
  {
    title: "Pre-Press File Auditing",
    desc: "Direct access to our pre-press team for vector dieline checks, foil trapping, and relief plate optimization.",
  },
  {
    title: "Archival Heavy Cotton",
    desc: "300 to 900+ gsm 100% cotton papers, bespoke duplexing, hand-torn deckle, and European foil stamping.",
  },
];

const partnerAudiences = [
  {
    title: "Wedding Planners & Event Curators",
    desc: "Seamless, dependable stationery production for high-profile celebrations. We manage precision timeline fulfillment, proofing, and direct packaging so you never worry about paper deadlines.",
    benefit: "Dedicated production scheduling & white-glove packaging",
    spec: "Turnaround: 10–14 business days from approved proof",
  },
  {
    title: "Graphic Designers & Calligraphers",
    desc: "You create the artwork; we bring it to life on cast-iron presses. We provide vector die templates, pre-press checks, and paper guidance so your typography translates into crisp, deep debossed relief.",
    benefit: "Pre-press file auditing & trade paper swatch kits",
    spec: "Artwork: Vector .AI / .EPS / PDF with 0.25pt minimum strokes",
  },
  {
    title: "Branding & Creative Agencies",
    desc: "Tactile corporate identities, executive business stationery, luxury packaging collateral, and VIP launch invitations that elevate client brand equity with authentic physical presence.",
    benefit: "Specialized duplexing, edge gilding & custom plate archives",
    spec: "Paper weights: 300gsm single-ply to 900gsm custom duplex",
  },
  {
    title: "Luxury Ateliers & Corporate Gifting",
    desc: "Custom holiday greetings, VIP personalized note cards, bespoke certificate folios, and prestige gift tags hand-stamped with genuine metallic foils and custom wax seals.",
    benefit: "Volume tiered pricing & archival foil library",
    spec: "Finishes: Matte gold, gloss copper, holographic, blind deboss",
  },
];

const collaborationWorkflow = [
  {
    step: "01",
    title: "Trade Partner Registration",
    desc: "Submit your studio details and portfolio using the form below to register for our trade network.",
  },
  {
    step: "02",
    title: "Paper & Swatch Library",
    desc: "Receive our comprehensive Trade Material Archive with real printed specimens to present to your clients.",
  },
  {
    step: "03",
    title: "Artwork & Pre-Press Guidance",
    desc: "Direct access to our pre-press team for vector checks, foil trapping, and relief plate optimization.",
  },
  {
    step: "04",
    title: "Priority Presswork & Dispatch",
    desc: "Priority queuing on our vintage presses in Nagaland, with tracked white-label delivery directly to you or your client.",
  },
];

export default function ChannelPartnersPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* ── Header / Hero ── */}
      <section className="pt-28 pb-14 md:pt-36 md:pb-20 border-b border-[#E5E5E5]">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4 text-[10px] tracking-[0.18em] uppercase text-[#7b7566] font-mono">
                <Link href="/" className="hover:text-black transition-colors">
                  Home
                </Link>
                <span>/</span>
                <span className="text-black font-medium">Channel Partners & Trade</span>
              </div>
              <p className="k mb-3">Trade Collaboration & Creative Alliances</p>
              <h1 className="d text-[clamp(36px,7.5vw,72px)] leading-[0.96] font-serif text-black mt-3 mb-6">
                Your dedicated artisanal <i>letterpress printmaker.</i>
              </h1>
              <p className="text-base md:text-lg text-[#555555] max-w-2xl font-light leading-relaxed mb-8">
                We work alongside wedding planners, brand designers, event directors, and creative agencies across
                India and internationally. Think of our Nagaland pressroom as your studio&apos;s private, specialized
                print atelier.
              </p>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <a href="#partner-form-section" className="btn">
                  APPLY FOR TRADE PARTNERSHIP
                </a>
                <Link href="/weddings/wedding-sample-kit" className="btn-out btn">
                  ORDER SWATCH ARCHIVE
                </Link>
                <a
                  href="https://wa.me/918416099340"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ln inline-flex items-center gap-2"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                  <span>DIRECT STUDIO DESK</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Trade Pillars / Advantages Strip ── */}
      <section className="border-b border-[#E5E5E5] bg-[#FAF8F5]">
        <div className="container-wide py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {tradePillars.map((pillar, idx) => (
              <Reveal key={pillar.title} delay={idx * 0.06}>
                <div className="border-l-2 border-black pl-5">
                  <h3 className="text-sm font-serif font-semibold text-black mb-1.5">{pillar.title}</h3>
                  <p className="text-xs text-[#666] leading-relaxed font-light">{pillar.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who We Collaborate With ── */}
      <section className="section bg-white" aria-label="Creative Disciplines">
        <div className="container-wide">
          <div className="max-w-xl mb-16">
            <Reveal>
              <p className="k mb-2">Trade Network</p>
              <h2 className="d text-[clamp(32px,6vw,54px)] leading-[1.05] font-serif text-black mb-4">
                Built for <i>creative professionals</i>
              </h2>
              <p className="text-xs md:text-sm text-[#555555] leading-relaxed font-light">
                Whether you design the artwork in-house or orchestrate high-profile events for discerning clientele,
                our pressroom offers the technical depth and tactile craft to execute your visions flawlessly.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerAudiences.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 0.08}>
                <div className="bg-white border border-[#E5E5E5] p-8 md:p-10 h-full flex flex-col justify-between hover:border-black/50 transition-colors">
                  <div>
                    <h3 className="text-xl md:text-2xl font-serif text-black mb-3">{item.title}</h3>
                    <p className="text-xs md:text-sm text-[#555555] leading-relaxed mb-6 font-light">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-6 border-t border-[#E5E5E5] space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-[10px] tracking-[0.16em] uppercase text-black font-sans font-medium shrink-0 pt-0.5">
                        Trade Benefit:
                      </span>
                      <span className="text-xs text-[#555555] font-light">
                        {item.benefit}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[10px] tracking-[0.16em] uppercase text-[#7b7566] font-sans font-medium shrink-0 pt-0.5">
                        Technical Spec:
                      </span>
                      <span className="text-xs text-[#777] font-mono font-light">
                        {item.spec}
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Collaboration Workflow ── */}
      <section className="section bg-[#FAF8F5] border-y border-[#E5E5E5]" aria-label="Trade Workflow">
        <div className="container-wide">
          <div className="max-w-xl mb-16">
            <Reveal>
              <p className="k mb-2">Partnership Process</p>
              <h2 className="d text-[clamp(32px,6vw,54px)] leading-[1.05] font-serif text-black mb-4">
                How we work <i>together</i>
              </h2>
              <p className="text-xs md:text-sm text-[#555555] leading-relaxed font-light">
                From wholesale trade pricing and vector dieline audits to direct client drop-shipping under plain,
                unbranded packaging.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {collaborationWorkflow.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 0.08}>
                <div className="bg-white border border-[#E5E5E5] p-7 relative h-full">
                  <span className="text-xs font-mono tracking-widest text-[#7b7566] block mb-3 font-semibold">
                    {item.step}
                  </span>
                  <h3 className="text-base font-serif font-semibold text-black mb-2">{item.title}</h3>
                  <p className="text-xs text-[#555555] leading-relaxed font-light">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trade Partner Application Form Section ── */}
      <section id="partner-form-section" className="section bg-white scroll-mt-24" aria-label="Apply for Partnership">
        <div className="container-wide">
          <div className="max-w-3xl mb-12">
            <Reveal>
              <p className="k mb-2">Apply for Partnership</p>
              <h2 className="d text-[clamp(32px,6vw,54px)] leading-[1.05] font-serif text-black mb-4">
                Register your <i>studio or agency</i>
              </h2>
              <p className="text-xs md:text-sm text-[#555555] leading-relaxed font-light">
                Complete the application brief below. Once approved, you will receive our confidential wholesale
                price sheet, dieline vectors, and an invitation to request our tactile paper swatch archive.
              </p>
            </Reveal>
          </div>

          <Reveal>
            <ChannelPartnerForm />
          </Reveal>
        </div>
      </section>

      {/* ── Direct Trade Concierge CTA ── */}
      <section className="section-lg bg-[#FAF8F5] text-black border-t border-[#E5E5E5]">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-2xl">
              <p className="k mb-2">Immediate Commission</p>
              <h2 className="d text-[clamp(32px,6vw,56px)] leading-[1.05] font-serif text-black mb-4">
                Have a project ready <i>for press?</i>
              </h2>
              <p className="text-sm md:text-base text-[#555] mb-8 leading-relaxed font-light">
                If you have completed vector artwork (.AI or .PDF) or an imminent event deadline, connect directly
                with our master letterpress artisans via WhatsApp for rapid technical feasibility and proofing.
              </p>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <a
                  href="https://wa.me/918416099340?text=Hello%20Famous%20Letterpress%2C%20I%20am%20a%20creative%20partner%20with%20an%20urgent%20letterpress%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn inline-flex items-center gap-2"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                  <span>MESSAGE OUR PRE-PRESS TEAM</span>
                </a>
                <Link href="/our-work" className="btn-out btn">
                  VIEW PRINT ARCHIVE
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
