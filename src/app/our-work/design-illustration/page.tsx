import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { WorkGalleryCarousel } from "@/components/ui/WorkGalleryCarousel";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";

export const metadata: Metadata = {
  title: "Design & Illustrations Portfolio | Famous Letterpress",
  description:
    "Our team of experienced in house designers works with our clients to help manifest their vision. Our approach to design and illustration coupled with our collaborative approach makes for engaging works that are guaranteed to leave a lasting impression.",
};

const ARTWORKS_GALLERY = [
  {
    title: "Poems & Literary Broadsides",
    category: "Illustrated Typography",
    img: "/assets/our-work/design-illustrations/poems-sumi-gal.jpg",
  },
  {
    title: "Velvetten Dreams Art Print",
    category: "Fine Art Illustration",
    img: "/assets/our-work/design-illustrations/Design-Velvetten-Dreams.jpg",
  },
  {
    title: "Wander Nagaland Heritage Series",
    category: "Regional Illustrated Identity",
    img: "/assets/our-work/design-illustrations/Design-Wander-Nagaland.jpg",
  },
  {
    title: "Sumi Folklore & Spear Kick",
    category: "Indigenous Cultural Motifs",
    img: "/assets/our-work/design-illustrations/sumi-spear-kick.jpg",
  },
  {
    title: "Bamboo Pole Naga Architecture",
    category: "Vector Line Matrices",
    img: "/assets/our-work/design-illustrations/bamboo-pole-square.jpg",
  },
  {
    title: "Litsabo Traditional Study",
    category: "Botanical & Cultural Vector",
    img: "/assets/our-work/design-illustrations/litsabo-square.jpg",
  },
  {
    title: "Hand Caricature & Portraiture",
    category: "Custom Editorial Drawing",
    img: "/assets/our-work/design-illustrations/caricature-tombo.jpg",
  },
  {
    title: "Bespoke Book & Event Artwork",
    category: "Custom Letterpress Die Matrices",
    img: "/assets/our-work/design-illustrations/Design-Illustration-1.jpg",
  },
  {
    title: "Fitness Brand Identity",
    category: "Brand Logo & Vector Mark",
    img: "/assets/our-work/design-illustrations/fitness-logo.jpg",
  },
  {
    title: "Custom Logo Design Studio",
    category: "Brand Mark & Vector Illustration",
    img: "/assets/our-work/design-illustrations/BackgroundLOGO-DESIGN.jpg",
  },
  {
    title: "Sumi Indigenous Portraiture",
    category: "Cultural Line Art",
    img: "/assets/our-work/design-illustrations/sumi-gal.jpg",
  },
  {
    title: "Warrior Spear Kick Study",
    category: "Dynamic Motion Illustration",
    img: "/assets/our-work/design-illustrations/spear-kick.jpg",
  },
];

export default function DesignIllustrationPage() {
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
              <span className="text-black font-medium">Design & Illustrations</span>
            </div>
            <h1 className="d text-[clamp(36px,7.5vw,72px)] leading-[1.0] mt-2 mb-6 font-serif text-black">
              Design & <i>Illustrations.</i>
            </h1>
            <p className="text-base sm:text-lg text-[#444] max-w-2xl font-light leading-relaxed mb-8">
              Our team of experienced in house designers works with our clients to help manifest their vision. Our approach to design and illustration coupled with our collaborative approach makes for engaging works that are guaranteed to leave a lasting impression.
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

      {/* ── Design & Illustration Carousel Showcase ── */}
      <section className="py-14 md:py-20 bg-white" aria-label="Design and Illustration Gallery">
        <Reveal>
          <WorkGalleryCarousel
            items={ARTWORKS_GALLERY.map((item) => ({
              title: item.title,
              desc: item.category,
              img: item.img,
            }))}
            categoryTitle="Studio Illustrations & Vector Matrices"
          />
        </Reveal>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-20 md:py-28 border-t border-[rgba(14,14,14,0.08)]">
        <div className="container-wide">
          <div className="max-w-2xl">
            <p className="k mb-2">Bespoke Design Commissions</p>
            <h2 className="d text-[clamp(32px,6vw,54px)] leading-[1.05] font-serif text-black mb-4">
              Manifest your vision with our <i>artists.</i>
            </h2>
            <p className="text-sm sm:text-base text-[#555] mb-8 font-light leading-relaxed">
              Whether you need a custom family crest, venue sketch, or bespoke typography suite, we work hand-in-hand with you.
            </p>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <Link href="/start-a-project" className="btn">
                REQUEST A PRICE
              </Link>
              <a
                href="https://wa.me/919862800000?text=Hello%20Famous%20Letterpress%2C%20I%20would%20like%20to%20enquire%20about%20design%20and%20illustration..."
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
