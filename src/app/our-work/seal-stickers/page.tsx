import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { WorkGalleryCarousel } from "@/components/ui/WorkGalleryCarousel";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";

export const metadata: Metadata = {
  title: "Seal Stickers & Wax Seals | Famous Letterpress",
  description:
    "Our die-cut seals are made from thick cotton paper and are easy to use and durable. Simply remove the release paper and seal your invite. No mess, no waste of envelopes.",
};

const SEAL_GALLERY = [
  {
    title: "Gold Foil Botanical Seal Stickers",
    desc: "Precision circular die-cut seals with metallic gold foil impression and permanent high-tack backing.",
    img: "/assets/our-work/seal-stickers/Layer-26seals.jpg",
  },
  {
    title: "Black Letterpress Cotton Seals",
    desc: "Crisp deep bite monogram seals printed on 450gsm thick cotton stock.",
    img: "/assets/our-work/seal-stickers/Layer-16seals.jpg",
  },
  {
    title: "Sage Green Wax Seal Die-Cut",
    desc: "Organic contoured seals designed to evoke the tactile beauty of hand-poured wax with peel-and-stick ease.",
    img: "/assets/our-work/seal-stickers/letterpress-wedding-green-wax-seal.jpg",
  },
  {
    title: "Embossed Crest Seal Stickers",
    desc: "Sculptural debossed seal matrices creating three-dimensional tactile texture on envelope flaps.",
    img: "/assets/our-work/seal-stickers/Layer-25seals.jpg",
  },
  {
    title: "Organic Hand-Cast Wax Seals",
    desc: "Hand-poured flexible sealing wax stamped with custom brass monogram seals, complete with self-adhesive backing.",
    img: "/assets/our-work/seal-stickers/letterpress-wedding-wax-seal-diecut.jpg",
  },
  {
    title: "Custom Monogram Cotton Seals",
    desc: "Personalized couple initials and wedding date relief printed for swift, pristine invitation assembly.",
    img: "/assets/our-work/seal-stickers/Layer-19seals.jpg",
  },
  {
    title: "Terracotta Wax Seal Stickers",
    desc: "Hand-cast earthy wax seals with custom initials and self-adhesive peel release backing.",
    img: "/assets/our-work/seal-stickers/Layer-8seals.jpg",
  },
  {
    title: "Metallic Gold Crest Seals",
    desc: "Foil-stamped monogram stickers on pure cotton paper with clean kiss-cut perimeter.",
    img: "/assets/our-work/seal-stickers/Layer-13seals.jpg",
  },
  {
    title: "Bespoke Couple Monogram Seals",
    desc: "Custom illustrated monogram die-cut seals for effortless, mess-free envelope closure.",
    img: "/assets/our-work/seal-stickers/Layer-3seals.jpg",
  },
  {
    title: "Copper & Bronze Wax Seals",
    desc: "Deep metallic luster wax seals individually poured and stamped with custom brass dies.",
    img: "/assets/our-work/seal-stickers/Layer-20seals.jpg",
  },
  {
    title: "Letterpress Cotton Stickers",
    desc: "Heavy cotton paper seal stickers debossed on vintage presses with rich pigment ink.",
    img: "/assets/our-work/seal-stickers/Seal-stickers-2.jpg",
  },
  {
    title: "Classic Wedding Wax Seals",
    desc: "Traditional sealing wax stamped with ornate couple insignia for luxurious presentation.",
    img: "/assets/our-work/seal-stickers/letterpress-wedding-wax-seals.jpg",
  },
];

export default function SealStickersPage() {
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
              <span className="text-black font-medium">Seal Stickers</span>
            </div>
            <h1 className="d text-[clamp(36px,7.5vw,72px)] leading-[1.0] mt-2 mb-6 font-serif text-black">
              Seal <i>Stickers.</i>
            </h1>
            <p className="text-base sm:text-lg text-[#444] max-w-2xl font-light leading-relaxed mb-8">
              Our die-cut seals are made from thick cotton paper and are easy to use and durable. Simply remove the release paper and seal your invite. No mess, no waste of envelopes.
            </p>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <Link href="/start-a-project" className="btn">
                REQUEST A PRICE
              </Link>
              <Link href="/our-work" className="ln">
                VIEW ALL WORK
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Seal Stickers Carousel Showcase ── */}
      <section className="py-14 md:py-20 bg-white" aria-label="Seal Stickers Gallery">
        <Reveal>
          <WorkGalleryCarousel
            items={SEAL_GALLERY}
            categoryTitle="Die-Cut Cotton Seals & Wax Seals • Peel & Stick"
          />
        </Reveal>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-20 md:py-28 border-t border-[rgba(14,14,14,0.08)]">
        <div className="container-wide">
          <div className="max-w-2xl">
            <p className="k mb-2">Custom Seal Production</p>
            <h2 className="d text-[clamp(32px,6vw,54px)] leading-[1.05] font-serif text-black mb-4">
              Custom crests, monograms & <i>motifs.</i>
            </h2>
            <p className="text-sm sm:text-base text-[#555] mb-8 font-light leading-relaxed">
              Send us your monogram or vector artwork, and we will engrave precision dies for your seal stickers or wax stamps.
            </p>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <Link href="/start-a-project" className="btn">
                REQUEST A PRICE
              </Link>
              <a
                href="https://wa.me/918416099340?text=Hello%20Famous%20Letterpress%2C%20I%20would%20like%20to%20enquire%20about%20seal%20stickers..."
                target="_blank"
                rel="noopener noreferrer"
                className="ln inline-flex items-center gap-2"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                <span>CONTACT STUDIO</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
