import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { WorkGalleryCarousel } from "@/components/ui/WorkGalleryCarousel";

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

      {/* ── Certificate Carousel Showcase ── */}
      <section className="py-14 md:py-20 bg-white" aria-label="Certificate Gallery">
        <Reveal>
          <WorkGalleryCarousel
            items={CERTIFICATE_GALLERY}
            categoryTitle="Archival Certificates & Honors • Acid-Free Cotton"
          />
        </Reveal>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-20 md:py-28 border-t border-[rgba(14,14,14,0.08)] bg-white">
        <div className="container-wide">
          <div className="max-w-2xl">
            <p className="k mb-2">Institutional & Corporate Honors</p>
            <h2 className="d text-[clamp(32px,6vw,54px)] leading-[1.05] font-serif text-black mb-4">
              Create indelible symbols of <i>achievement.</i>
            </h2>
            <p className="text-sm sm:text-base text-[#555] mb-8 font-light leading-relaxed">
              From university degrees to executive awards and foundation milestones, we craft certificates worthy of life&apos;s highest honors.
            </p>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <Link href="/start-a-project" className="btn">
                Inquire for Institution
              </Link>
              <a
                href="https://wa.me/919862800000?text=Hello%20Famous%20Letterpress%2C%20I%20would%20like%20to%20enquire%20about%20certificates..."
                target="_blank"
                rel="noopener noreferrer"
                className="ln"
              >
                Speak With Our Pressmen &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
