import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Channel Partners & Creative Trade Collaboration | Famous Letterpress",
  description:
    "Partner with Famous Letterpress. We collaborate with wedding planners, creative agencies, graphic designers, and event stylists as your dedicated trade printmaker.",
};

const partnerAudiences = [
  {
    title: "Wedding Planners & Event Curators",
    desc: "Seamless, dependable stationery production for your high-profile celebrations. We manage precision timeline fulfillment, proofing, and direct packaging.",
    benefit: "Dedicated production scheduling & white-glove packaging",
  },
  {
    title: "Graphic Designers & Calligraphers",
    desc: "You create the artwork; we bring it to life on cast-iron presses. We provide vector die templates, pre-press checks, and paper advice so your vision translates perfectly.",
    benefit: "Pre-press file auditing & trade paper swatch kits",
  },
  {
    title: "Branding & Creative Agencies",
    desc: "Tactile corporate identities, executive stationery, packaging collateral, and VIP launch invitations that elevate client brand equity.",
    benefit: "Specialized duplexing, edge gilding & custom plate archives",
  },
];

const collaborationWorkflow = [
  {
    step: "01",
    title: "Trade Partner Registration",
    desc: "Submit your studio details and business portfolio to join our trade partner network.",
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
      {/* ── Header ── */}
      <section className="pt-28 pb-14 md:pt-36 md:pb-20 border-b border-[#E5E5E5]">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4 text-[10px] tracking-[0.16em] uppercase text-[#888888] font-sans">
                <Link href="/" className="hover:text-black transition-colors">Home</Link>
                <span>/</span>
                <span className="text-black">Channel Partners</span>
              </div>
              <p className="eyebrow mb-2">Trade Collaboration</p>
              <h1 className="text-black mt-2 mb-6 font-serif">
                Your dedicated artisanal{" "}
                <em className="font-light">letterpress printmaker.</em>
              </h1>
              <p className="text-base md:text-lg text-[#555555] max-w-2xl font-light leading-relaxed mb-8">
                We work alongside wedding planners, brand designers, event directors, and creative agencies across India and internationally.
                Think of our Nagaland pressroom as your own private print studio.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/start-a-project?type=partner"
                  className="inline-flex px-7 py-3.5 text-[11px] tracking-[0.14em] uppercase bg-black text-white hover:bg-[#222] transition-colors"
                >
                  Apply for Trade Partnership
                </Link>
                <Link
                  href="/weddings/wedding-sample-kit"
                  className="inline-flex px-7 py-3.5 text-[11px] tracking-[0.14em] uppercase border border-[#E5E5E5] text-black hover:border-black/40 transition-colors"
                >
                  Order Studio Sample Kit
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Who We Collaborate With ── */}
      <section className="section bg-white" aria-label="Creative Disciplines">
        <div className="container-wide">
          <div className="text-center max-w-xl mx-auto mb-16">
            <Reveal>
              <p className="eyebrow mb-2">Trade Network</p>
              <h2 className="mb-4">
                Built for <em className="font-light">creative professionals</em>
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerAudiences.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 0.1}>
                <div className="bg-white border border-[#E5E5E5] p-8 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-serif text-black mb-3">{item.title}</h3>
                    <p className="text-xs md:text-sm text-[#555555] leading-relaxed mb-6 font-light">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#E5E5E5]">
                    <span className="text-[10px] tracking-[0.16em] uppercase text-black font-sans font-medium block">
                      Trade Benefit:
                    </span>
                    <span className="text-xs text-[#555555] mt-1 block">
                      {item.benefit}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Collaboration Workflow ── */}
      <section className="section bg-white" aria-label="Trade Workflow">
        <div className="container-wide">
          <div className="text-center max-w-xl mx-auto mb-16">
            <Reveal>
              <p className="eyebrow mb-2">Partnership Process</p>
              <h2 className="mb-4">
                How we work <em className="font-light">together</em>
              </h2>
              <p className="text-xs md:text-sm text-[#555555] leading-relaxed">
                From wholesale trade pricing to direct client drop-shipping under plain packaging.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {collaborationWorkflow.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 0.08}>
                <div className="bg-white border border-[#E5E5E5] p-6 relative h-full">
                  <span className="text-[10px] font-mono tracking-widest text-[#888888] block mb-2">
                    {item.step}
                  </span>
                  <h3 className="text-base font-serif text-black mb-2">{item.title}</h3>
                  <p className="text-xs text-[#555555] leading-relaxed font-light">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Direct Trade Inquiry CTA ── */}
      <section className="section-lg bg-white text-black text-center border-t border-[#E5E5E5]">
        <div className="container-narrow">
          <Reveal>
            <p className="eyebrow text-[#888888] mb-3">Partner With Us</p>
            <h2 className="text-black mb-4">
              Bring letterpress craft to <em className="font-light">your clients.</em>
            </h2>
            <p className="text-sm md:text-base text-[#555555] mb-8 max-w-lg mx-auto leading-relaxed">
              We offer trade discounts, custom sample boxes, and prioritized press turnarounds for registered partners. Reach out to set up your account.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/start-a-project?type=partner"
                className="inline-flex px-8 py-3.5 text-[11px] tracking-[0.14em] uppercase bg-black text-white hover:bg-neutral-800 transition-colors"
              >
                Register as a Trade Partner
              </Link>
              <a
                href="https://wa.me/919366012345"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-8 py-3.5 text-[11px] tracking-[0.14em] uppercase border border-black text-black hover:bg-black hover:text-white transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
