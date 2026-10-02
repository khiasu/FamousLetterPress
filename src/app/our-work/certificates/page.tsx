import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Archival Certificates & Diplomas | Famous Letterpress",
  description:
    "Certificates are a symbol of achievements, and we believe that they should feel like that as well. All our certificates are printed on acid-free cotton papers (ideal for archival purposes), debossed on our press, and then foil stamped, giving them a royal finish that is very hard to duplicate with a regular printer or press.",
};

const CERTIFICATE_GALLERY = [
  {
    title: "Tetushi",
    desc: "Archival letterpress certificates on acid-free cotton papers with deep debossed borders and foil stamped crest.",
    img: "/assets/our-work/certificates/tetushi.jpg",
  },
  {
    title: "Kohima Education Society",
    desc: "Official educational honors certificate with intricate border matrices and gold foil authentication seals.",
    img: "/assets/our-work/certificates/kohima-education.jpg",
  },
  {
    title: "St. John",
    desc: "Distinguished letterpress certificate printed on heavy cotton stock with clean typographic hierarchy.",
    img: "/assets/our-work/certificates/st-john.jpg",
  },
  {
    title: "NECU",
    desc: "Institutional convocation certificate with royal foil stamping and deep dimensional impression.",
    img: "/assets/our-work/certificates/necu.jpg",
  },
  {
    title: "DCCI",
    desc: "Chamber of Commerce & Industry excellence certificate printed on acid-free archival cotton paper.",
    img: "/assets/our-work/certificates/dcci.jpg",
  },
  {
    title: "Her & Now",
    desc: "Entrepreneurship award certificate with custom embossed insignia and metallic pigment detailing.",
    img: "/assets/our-work/certificates/her-now.jpg",
  },
  {
    title: "Maple Tree",
    desc: "Archival graduation and merit certificates designed to preserve lifetime achievements without fading.",
    img: "/assets/our-work/certificates/maple-tree.jpg",
  },
  {
    title: "Moaso",
    desc: "Fine art provenance and honor certificate with rich black ink impression and tactile debossed seal.",
    img: "/assets/our-work/certificates/moaso.jpg",
  },
];

export default function CertificatesPage() {
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
              <span className="text-black font-medium">Certificates</span>
            </div>
            <p className="k mb-2">Category 05 &bull; Archival Letterpress Certificates</p>
            <h1 className="d text-[clamp(36px,7.5vw,72px)] leading-[1.0] mt-2 mb-6 font-serif text-black">
              Archival <i>Certificates.</i>
            </h1>
            <p className="text-base sm:text-lg text-[#444] max-w-2xl font-light leading-relaxed mb-8">
              Certificates are a symbol of achievements, and we believe that they should feel like that as well. All our certificates are printed on acid-free cotton papers (ideal for archival purposes), debossed on our press, and then foil stamped, giving them a royal finish that is very hard to duplicate with a regular printer or press.
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

      {/* ── Gallery Showcase ── */}
      <section className="py-16 md:py-24" aria-label="Certificate Gallery">
        <div className="w">
          <div className="flex items-center justify-between mb-10 pb-4 border-b border-[rgba(14,14,14,0.08)]">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#7b7566]">
              Archival Certificates & Honors
            </span>
            <span className="text-xs text-[#888] font-light">
              Acid-Free Cotton &bull; Debossed &bull; Foil Stamped
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {CERTIFICATE_GALLERY.map((item) => (
              <div
                key={item.title}
                className="bg-[#FAF8F5] border border-[rgba(14,14,14,0.12)] p-4 sm:p-5 flex flex-col rounded-xs transition-all duration-300 hover:border-black/35 hover:-translate-y-1 shadow-[0_10px_24px_-12px_rgba(0,0,0,0.06)] group"
              >
                <div className="relative aspect-[4/3] overflow-hidden mb-4 bg-[#F0ECE1] rounded-xs">
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
          <p className="k mb-2">Institutional & Corporate Honors</p>
          <h2 className="d text-[clamp(32px,6vw,54px)] leading-[1.05] font-serif text-black mb-4">
            Create indelible symbols of <i>achievement.</i>
          </h2>
          <p className="text-sm sm:text-base text-[#555] max-w-lg mx-auto mb-8 font-light leading-relaxed">
            From university degrees to executive awards and foundation milestones, we craft certificates worthy of life&apos;s highest honors.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            <Link href="/start-a-project" className="btn">
              Inquire for Institution
            </Link>
            <Link href="/contact" className="ln">
              Speak With Our Pressmen &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
