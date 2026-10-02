import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wedding Invites Portfolio | Famous Letterpress",
  description:
    "We offer a wide selection of handcrafted, custom, and ready-made wedding stationery that can be personalized to make a big impression on your big day.",
};

const WEDDING_GALLERY = [
  {
    title: "Heritage Botanical Suite",
    desc: "Single-color deep letterpress on 600gsm Wild Ivory cotton cardstock with custom monogram.",
    img: "/assets/our-work/wedding-invites/wedding_p1.jpg",
  },
  {
    title: "Gold Foil Ceremonial Suite",
    desc: "24k metallic hot foil stamping paired with hand-mixed oil pigments on heavy cotton paper.",
    img: "/assets/our-work/wedding-invites/wedding_p2.jpg",
  },
  {
    title: "Deckled Edge Invitation",
    desc: "Organic hand-torn deckled edges with deep tactile sculptural bite and RSVP insert.",
    img: "/assets/our-work/wedding-invites/wedding_p3.jpg",
  },
  {
    title: "Minimalist Typographic Suite",
    desc: "Refined modern serif typography debossed deep into pure cotton rag with euro-flap envelope.",
    img: "/assets/our-work/wedding-invites/1-Wedding-card-A.jpg",
  },
  {
    title: "Custom Crest & Liner Set",
    desc: "Bespoke couple's crest with matching illustrated envelope liner and wax seal closure.",
    img: "/assets/our-work/wedding-invites/2-Wedding-card-A.jpg",
  },
  {
    title: "Editorial Wedding Invitation",
    desc: "Classic letterpress layout with delicate blind debossing and hand-mixed warm grey ink.",
    img: "/assets/our-work/wedding-invites/3-Wedding-card-A.jpg",
  },
];

export default function WeddingInvitesPage() {
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
              <span className="text-black font-medium">Wedding Invites</span>
            </div>
            <p className="k mb-2">Category 01 &bull; Handcrafted Wedding Stationery</p>
            <h1 className="d text-[clamp(36px,7.5vw,72px)] leading-[1.0] mt-2 mb-6 font-serif text-black">
              Wedding <i>Invites.</i>
            </h1>
            <p className="text-base sm:text-lg text-[#444] max-w-2xl font-light leading-relaxed mb-8">
              We believe that one of life’s most special occasions deserves an equally extraordinary invitation. We offer a wide selection of handcrafted, custom, and ready-made wedding stationery that can be personalized to make a big impression on your big day.
            </p>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <Link href="/start-a-project" className="btn">
                Request Price
              </Link>
              <Link href="/weddings/wedding-sample-kit" className="ln">
                Order Wedding Sample Kit &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery Showcase ── */}
      <section className="py-16 md:py-24" aria-label="Wedding Invites Gallery">
        <div className="w">
          <div className="flex items-center justify-between mb-10 pb-4 border-b border-[rgba(14,14,14,0.08)]">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#7b7566]">
              Portfolio Gallery
            </span>
            <span className="text-xs text-[#888] font-light">
              600–900 GSM Pure Cotton Paper
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {WEDDING_GALLERY.map((item) => (
              <div
                key={item.title}
                className="bg-[#FAF8F5] border border-[rgba(14,14,14,0.12)] p-4 sm:p-5 flex flex-col rounded-xs transition-all duration-300 hover:border-black/35 hover:-translate-y-1 shadow-[0_10px_24px_-12px_rgba(0,0,0,0.06)]"
              >
                <div className="relative aspect-[4/3.2] overflow-hidden mb-4 bg-[#F0ECE1] rounded-xs group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif font-medium text-xl text-black mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-[#555] font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-20 md:py-28 text-center border-t border-[rgba(14,14,14,0.08)]">
        <div className="max-w-2xl mx-auto px-6">
          <p className="k mb-2">Bespoke Suite Consultations</p>
          <h2 className="d text-[clamp(32px,6vw,54px)] leading-[1.05] font-serif text-black mb-4">
            Begin your wedding <i>invitations.</i>
          </h2>
          <p className="text-sm sm:text-base text-[#555] max-w-lg mx-auto mb-8 font-light leading-relaxed">
            Tell us your date, color palette, and pieces needed. We provide digital proofs, ink mix previews, and custom quotes within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            <Link href="/start-a-project" className="btn">
              Submit Wedding Details
            </Link>
            <Link href="/our-work" className="ln">
              &larr; Back to Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
