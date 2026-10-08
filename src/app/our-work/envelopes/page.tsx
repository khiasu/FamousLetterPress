import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { WorkGalleryCarousel } from "@/components/ui/WorkGalleryCarousel";

export const metadata: Metadata = {
  title: "Letterpress Envelopes & Liners | Famous Letterpress",
  description:
    "Our vintage presses provide us the unique ability to print on thick paper stock and irregular shapes to make stunning personalized envelopes.",
};

const ENVELOPE_GALLERY = [
  {
    title: "Euro-Flap Monogram Envelopes (Set 1)",
    desc: "Letterpress debossed return addressing and bespoke crest on premium pointed euro-flap cotton envelopes.",
    img: "/assets/our-work/envelopes/printed-envelopes-1.jpg",
  },
  {
    title: "Handcrafted Invitation Envelopes (Set 2)",
    desc: "Custom heavy paper stock envelopes with crisp typography debossing and elegant proportions.",
    img: "/assets/our-work/envelopes/printed-envelopes-2.jpg",
  },
  {
    title: "Classic Pointed Flap Envelopes (Set 3)",
    desc: "Archival cotton envelopes tailored for bespoke wedding suites and formal correspondence.",
    img: "/assets/our-work/envelopes/printed-envelopes-3.jpg",
  },
  {
    title: "Terracotta & Warm Toned Envelopes (Set 4)",
    desc: "Custom pigmented earth-toned envelope paper with rich letterpress printing on the flap.",
    img: "/assets/our-work/envelopes/printed-envelopes-4.jpg",
  },
  {
    title: "Wild Ivory Cotton Envelopes (Set 5)",
    desc: "Deep pointed flap envelopes crafted from thick 250gsm pure cotton paper stock.",
    img: "/assets/our-work/envelopes/printed-envelopes-5.jpg",
  },
  {
    title: "Artisanal Wedding Envelopes (Set 6)",
    desc: "Bespoke stationery envelopes with sculpted letterpress impression for wedding invitations.",
    img: "/assets/our-work/envelopes/printed-envelopes-6.jpg",
  },
  {
    title: "Botanical Liner Envelopes (Set 7)",
    desc: "Hand-lined wedding envelopes with custom illustrated interior patterns and foil debossing.",
    img: "/assets/our-work/envelopes/printed-envelopes-7.jpg",
  },
  {
    title: "Executive Flap Envelopes (Set 8)",
    desc: "Precision printed business and personal stationery envelopes for professional correspondence.",
    img: "/assets/our-work/envelopes/printed-envelopes-8.jpg",
  },
  {
    title: "Custom Monogram Envelopes (Set 9)",
    desc: "Handcrafted envelope sets with personalized blind debossed crest on back flap.",
    img: "/assets/our-work/envelopes/printed-envelopes-9.jpg",
  },
  {
    title: "Fine Art Letterpress Envelopes (Set 10)",
    desc: "Bespoke cotton envelopes printed on vintage platen presses with rich pigment inks.",
    img: "/assets/our-work/envelopes/printed-envelopes-10.jpg",
  },
  {
    title: "Luxury Event Envelopes (Set 11)",
    desc: "Heavyweight tactile envelopes designed to protect and elevate fine invitation cards.",
    img: "/assets/our-work/envelopes/printed-envelopes-11.jpg",
  },
  {
    title: "Suite Presentation Envelopes (Set 12)",
    desc: "Coordinated envelope sizing with matching RSVP and enclosure envelopes.",
    img: "/assets/our-work/envelopes/printed-envelopes-12.jpg",
  },
];

export default function EnvelopesPage() {
  return (
    <div className="min-h-screen text-black select-none">
      {/* ── Breadcrumb & Header ── */}
      <section className="pt-28 pb-14 md:pt-36 md:pb-20 border-b border-[rgba(14,14,14,0.08)]">
        <div className="w">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4 text-[10px] tracking-[0.18em] uppercase text-[#7b7566] font-mono">
              <Link href="/" className="hover:text-black transition-colors">Home</Link>
              <span>/</span>
              <Link href="/our-work" className="hover:text-black transition-colors">Our Work</Link>
              <span>/</span>
              <span className="text-black font-medium">Envelopes</span>
            </div>
            <p className="k mb-2">Category 02 &bull; Custom Letterpress Envelopes</p>
            <h1 className="d text-[clamp(36px,7.5vw,72px)] leading-[1.0] mt-2 mb-6 font-serif text-black">
              Bespoke <i>Envelopes.</i>
            </h1>
            <p className="text-base sm:text-lg text-[#444] max-w-2xl font-light leading-relaxed mb-8">
              Our vintage presses provide us the unique ability to print on thick paper stock and irregular shapes. This allows us to make stunning personalized envelopes ideal for personal and professional use.
            </p>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <Link href="/start-a-project" className="btn">
                Request Price
              </Link>
              <Link href="/our-work" className="ln">
                &larr; View All Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Envelopes Carousel Showcase ── */}
      <section className="py-14 md:py-20 bg-white" aria-label="Envelope Gallery">
        <Reveal>
          <WorkGalleryCarousel
            items={ENVELOPE_GALLERY}
            categoryTitle="Printed Envelopes & Liners • Euro-Flap & Thick Stock"
          />
        </Reveal>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-20 md:py-28 border-t border-[rgba(14,14,14,0.08)]">
        <div className="container-wide">
          <div className="max-w-2xl">
            <p className="k mb-2">Made to Order</p>
            <h2 className="d text-[clamp(32px,6vw,54px)] leading-[1.05] font-serif text-black mb-4">
              Order custom letterpress <i>envelopes.</i>
            </h2>
            <p className="text-sm sm:text-base text-[#555] mb-8 font-light leading-relaxed">
              Available in A7, A6, 4-bar, and square custom dimensions with your choice of cotton weight and liner artwork.
            </p>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <Link href="/start-a-project" className="btn">
                Request Envelope Quote
              </Link>
              <a
                href="https://wa.me/919862800000?text=Hello%20Famous%20Letterpress%2C%20I%20would%20like%20to%20enquire%20about%20custom%20envelopes..."
                target="_blank"
                rel="noopener noreferrer"
                className="ln"
              >
                Inquire With Studio &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
