import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wedding Invites Portfolio | Famous Letterpress",
  description:
    "We offer a wide selection of handcrafted, custom, and ready-made wedding stationery that can be personalized to make a big impression on your big day.",
};

const WEDDING_GALLERY = [
  {
    title: "Daniella & Minot",
    desc: "Letterpress wedding invitation suite debossed on heavy pure cotton paper with custom envelopes.",
    img: "/assets/our-work/wedding-invites/daniella-minot.jpg",
  },
  {
    title: "Livika & Gideon",
    desc: "Handcrafted letterpress wedding cards with delicate typography, blind debossing and fine details.",
    img: "/assets/our-work/wedding-invites/livika-gideon.jpg",
  },
  {
    title: "Anita & Jeffrey",
    desc: "Multi-piece ceremonial wedding suite on ultra-thick cotton cardstock with matching reply cards.",
    img: "/assets/our-work/wedding-invites/anita-jeffrey.jpg",
  },
  {
    title: "Durga & Viceroy",
    desc: "Rose gold metallic foil stamping paired with deep letterpress impression on archival cotton paper.",
    img: "/assets/our-work/wedding-invites/durga-viceroy.jpg",
  },
  {
    title: "Sakune & Toito",
    desc: "Bespoke Indian wedding suite with traditional motifs debossed into textured cotton stock.",
    img: "/assets/our-work/wedding-invites/sakune-toito.jpg",
  },
  {
    title: "Sohan & Akshatha",
    desc: "Vibrant red and blind impression letterpress wedding cards with custom monogram crest.",
    img: "/assets/our-work/wedding-invites/sohan-akshatha.jpg",
  },
  {
    title: "Himaka & Helika",
    desc: "Classic letterpress invitation featuring refined serif typography and hand-mixed ink tones.",
    img: "/assets/our-work/wedding-invites/himaka-helika.jpg",
  },
  {
    title: "Mimi & Seyie",
    desc: "Handcrafted floral wedding invitation suite with bespoke layout and coordinating inserts.",
    img: "/assets/our-work/wedding-invites/mimi-seyie.jpg",
  },
  {
    title: "Atif & Narjis",
    desc: "Sophisticated grey letterpress wedding invitation with timeless calligraphy typography.",
    img: "/assets/our-work/wedding-invites/atif-narjis.jpg",
  },
  {
    title: "Awala Lkr & Sangro Aier",
    desc: "Warm beige cotton suite with crisp deep bite impression and matching custom envelopes.",
    img: "/assets/our-work/wedding-invites/awala-sangro.jpg",
  },
  {
    title: "Chumchanbeni & Wonashi",
    desc: "Artisanal grey letterpress wedding suite with custom layout and subtle debossed details.",
    img: "/assets/our-work/wedding-invites/chumchanbeni-wonashi.jpg",
  },
  {
    title: "Jaremdi & Daniel",
    desc: "Hand-crafted wedding stationery set printed on vintage platen presses with rich ink density.",
    img: "/assets/our-work/wedding-invites/jaremdi-daniel.jpg",
  },
  {
    title: "Nesser Sangma & Neliyan",
    desc: "Letterpress grey suite on premium cotton cardstock with crisp typographic hierarchy.",
    img: "/assets/our-work/wedding-invites/nesser-neliyan.jpg",
  },
  {
    title: "Weku-u Therie & Vitho David",
    desc: "Bespoke wedding stationery suite debossed on heavy paper stock with coordinating stationery items.",
    img: "/assets/our-work/wedding-invites/weku-vitho.jpg",
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
