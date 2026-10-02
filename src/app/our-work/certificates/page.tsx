import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Archival Certificates & Diplomas | Famous Letterpress",
  description:
    "Letterpress and hot foil stamped archival certificates printed on acid-free cotton paper with royal debossed finish in Nagaland, India.",
};

const CERTIFICATE_SPECS = [
  {
    title: "Acid-Free Cotton Rag",
    desc: "100% archival cotton paper resistant to yellowing, humidity, and aging over decades.",
    img: "/assets/revamp/what-we-make/FMS_8669.jpg",
  },
  {
    title: "Precision Metal Die Relief",
    desc: "Bespoke brass dies debossing official seal insignias and regal ornate borders into the paper fiber.",
    img: "/assets/revamp/what-we-make/FMS_6999.jpg",
  },
  {
    title: "Metallic Hot Foil Stamping",
    desc: "Mirror gold, satin silver, and bronze hot foil stamping that cannot be replicated by desktop printers.",
    img: "/assets/revamp/what-we-make/FMS_3781.jpg",
  },
  {
    title: "Hand-Numbered Editions",
    desc: "Individual numbering and calligraphy signature lines for prestigious honors and degree conferrals.",
    img: "/assets/revamp/what-we-make/FMS_6500.jpg",
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

      {/* ── Certificate Specifications ── */}
      <section className="py-16 md:py-24" aria-label="Certificate Details">
        <div className="w">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
            {CERTIFICATE_SPECS.map((item) => (
              <div
                key={item.title}
                className="bg-[#FAF8F5] border border-[rgba(14,14,14,0.12)] p-5 sm:p-6 rounded-xs shadow-[0_10px_24px_-12px_rgba(0,0,0,0.06)] group"
              >
                <div className="relative aspect-[16/10] overflow-hidden mb-4 bg-[#F0ECE1] rounded-xs">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif font-medium text-2xl text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#555] font-light leading-relaxed">
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
