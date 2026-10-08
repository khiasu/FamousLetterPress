import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { EarlyBrideForm } from "@/components/forms/EarlyBrideForm";
import { WeddingGalleryCarousel } from "@/components/wedding/WeddingGalleryCarousel";

export const metadata: Metadata = {
  title: "Wedding Invites Portfolio & Early Bride Consultation | Famous Letterpress",
  description:
    "Handcrafted letterpress wedding invitations, custom wax seals, illustrated liners, and bespoke suites pressed on 100% cotton paper in Nagaland, India. Explore our portfolio, request pricing, book an Early Bride consultation, or order physical sample kits.",
};

const WEDDING_GALLERY = [
  {
    title: "Daniella & Minot",
    desc: "Letterpress invitation suite debossed on heavy pure cotton paper with custom envelopes.",
    img: "/assets/our-work/wedding-invites/daniella-minot.jpg",
  },
  {
    title: "Livika & Gideon",
    desc: "Delicate typography, blind debossing and fine detail on handcrafted letterpress cards.",
    img: "/assets/our-work/wedding-invites/livika-gideon.jpg",
  },
  {
    title: "Anita & Jeffrey",
    desc: "Multi-piece ceremonial suite on ultra-thick cotton cardstock with matching reply cards.",
    img: "/assets/our-work/wedding-invites/anita-jeffrey.jpg",
  },
  {
    title: "Durga & Viceroy",
    desc: "Rose gold foil stamping paired with deep letterpress impression on archival cotton.",
    img: "/assets/our-work/wedding-invites/durga-viceroy.jpg",
  },
  {
    title: "Sakune & Toito",
    desc: "Bespoke Indian suite with traditional motifs debossed into textured cotton stock.",
    img: "/assets/our-work/wedding-invites/sakune-toito.jpg",
  },
  {
    title: "Sohan & Akshatha",
    desc: "Vibrant red and blind impression cards with a custom monogram crest.",
    img: "/assets/our-work/wedding-invites/sohan-akshatha.jpg",
  },
  {
    title: "Himaka & Helika",
    desc: "Refined serif typography and hand-mixed ink tones in a classic letterpress invitation.",
    img: "/assets/our-work/wedding-invites/himaka-helika.jpg",
  },
  {
    title: "Mimi & Seyie",
    desc: "Handcrafted floral suite with a bespoke layout and coordinating inserts.",
    img: "/assets/our-work/wedding-invites/mimi-seyie.jpg",
  },
  {
    title: "Atif & Narjis",
    desc: "Sophisticated grey letterpress with timeless calligraphic typography.",
    img: "/assets/our-work/wedding-invites/atif-narjis.jpg",
  },
  {
    title: "Awala Lkr & Sangro Aier",
    desc: "Warm beige cotton with a crisp deep-bite impression and matching envelopes.",
    img: "/assets/our-work/wedding-invites/awala-sangro.jpg",
  },
  {
    title: "Chumchanbeni & Wonashi",
    desc: "Artisanal grey suite with custom layout and subtle debossed details.",
    img: "/assets/our-work/wedding-invites/chumchanbeni-wonashi.jpg",
  },
  {
    title: "Jaremdi & Daniel",
    desc: "Pressed on vintage platen presses with rich ink density.",
    img: "/assets/our-work/wedding-invites/jaremdi-daniel.jpg",
  },
  {
    title: "Nesser Sangma & Neliyan",
    desc: "Grey letterpress on premium cotton cardstock with crisp typographic hierarchy.",
    img: "/assets/our-work/wedding-invites/nesser-neliyan.jpg",
  },
  {
    title: "Weku-u Therie & Vitho David",
    desc: "Suite debossed on heavy stock with coordinating stationery pieces.",
    img: "/assets/our-work/wedding-invites/weku-vitho.jpg",
  },
];

const TACTILE_DETAILS = [
  {
    title: "Handmade Euro-Flap Envelopes",
    detail: "Die-cut envelopes in pure cotton, handmade deckle paper or Colorplan archival stocks.",
    image: "https://famousletterpress.com/wp-content/uploads/2026/05/FMS_4413-2000x2500.jpg",
  },
  {
    title: "Illustrated Envelope Liners",
    detail: "Venue illustrations, florals or blind-embossed monograms inside each flap.",
    image: "https://famousletterpress.com/wp-content/uploads/2026/05/FMS_4395-2000x2500.jpg",
  },
  {
    title: "Botanical & Crest Wax Seals",
    detail: "Hand-poured wax in antique bronze, matte champagne, pearl white or forest green.",
    image: "https://famousletterpress.com/wp-content/uploads/2026/04/wedkit-1-pics-1200x1200.jpg",
  },
  {
    title: "Edge Gilding & Beveling",
    detail: "Mirror-finish foil applied by hand along thick 600–900gsm beveled edges.",
    image: "https://famousletterpress.com/wp-content/uploads/2026/04/bizkit-01-1200x1200.jpg",
  },
];

export default function WeddingInvitesPage() {
  return (
    <div className="bg-white min-h-screen text-black select-none">
      {/* ── Breadcrumb & Hero Header ── */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 border-b border-[#E5E5E5]">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-4 text-[10px] tracking-[0.18em] uppercase text-[#7b7566] font-mono">
                <Link href="/" className="hover:text-black transition-colors">Home</Link>
                <span>/</span>
                <span className="text-black font-medium">Wedding Invites</span>
              </div>
              <h1 className="d text-[clamp(40px,8vw,80px)] leading-[0.98] mt-2 mb-6 font-serif text-black">
                Wedding <i>Invites.</i>
              </h1>
              <p className="text-base sm:text-lg text-[#444] max-w-2xl font-light leading-relaxed mb-8">
                One of life&rsquo;s most special occasions deserves an equally extraordinary invitation. Handcrafted, custom and ready-made wedding stationery, personalised to make a lasting impression.
              </p>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <a
                  href="#early-bride"
                  className="inline-flex items-center justify-center px-7 sm:px-8 py-3.5 bg-black text-white hover:bg-[#222] transition-colors rounded-none text-[11px] uppercase tracking-[0.22em] font-sans font-medium whitespace-nowrap shadow-sm"
                >
                  Book a Consultation
                </a>
                <Link
                  href="/weddings/wedding-sample-kit"
                  className="ln"
                >
                  Order Sample Kit &rarr;
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Carousel Gallery Showcase ── */}
      <section className="py-14 md:py-20 bg-white" id="gallery" aria-label="Wedding Invites Portfolio Carousel">
        <Reveal>
          <WeddingGalleryCarousel items={WEDDING_GALLERY} />
        </Reveal>
      </section>

      {/* ── Tactile Finishing & Details ── */}
      <section className="py-16 md:py-24 bg-[#FAF8F5] border-y border-[#E5E5E5]" aria-label="Finishing & Details">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <p className="k mb-2">Tactile Finishing</p>
              <h2 className="d text-[clamp(32px,6vw,54px)] leading-[1.05] font-serif text-black mb-4">
                Envelopes, liners <i>&amp; wax seals.</i>
              </h2>
              <p className="text-xs sm:text-sm text-[#555] font-light leading-relaxed">
                Bespoke envelope liners, custom wax seals poured with your monogram crest, and hand-bevelled edges finished in mirror foil.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {TACTILE_DETAILS.map((detail) => (
                <div
                  key={detail.title}
                  className="border border-[#E5E5E5] bg-white p-5 group hover:border-black/40 hover:shadow-[0_12px_28px_-16px_rgba(0,0,0,0.08)] transition-all flex flex-col"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#F0ECE1] mb-4 group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={detail.image}
                      alt={detail.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-base font-serif text-black font-medium mb-1.5">{detail.title}</h3>
                  <p className="text-xs text-[#555] font-light leading-relaxed">{detail.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Dedicated Early Bride Consultation Form Section ── */}
      <section id="early-bride" className="py-16 md:py-24 bg-white scroll-mt-20 border-b border-[#E5E5E5]">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <p className="k mb-2">Dedicated Bespoke Service</p>
              <h2 className="d text-[clamp(32px,6vw,54px)] leading-[1.05] font-serif text-black mb-4">
                The Early Bride <i>Experience.</i>
              </h2>
              <p className="text-sm sm:text-base text-[#555] font-light leading-relaxed">
                Whether you have a completed visual design or are just beginning to explore tactile letterpress, our Early Bride consultation helps us reserve press capacity, recommend paper stocks, and create an artisanal plan tailored to your wedding date.
              </p>
            </div>

            <div className="w-full">
              <EarlyBrideForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Bottom CTA & Quick Actions ── */}
      <section className="py-20 md:py-28 text-center bg-[#FAF8F5]">
        <div className="max-w-2xl mx-auto px-6">
          <Reveal>
            <p className="k mb-2">Ready to Create Your Suite?</p>
            <h2 className="d text-[clamp(32px,6vw,54px)] leading-[1.05] font-serif text-black mb-4">
              Let&rsquo;s craft something <i>unforgettable.</i>
            </h2>
            <p className="text-sm sm:text-base text-[#555] max-w-lg mx-auto mb-8 font-light leading-relaxed">
              Share your wedding details or order our physical sample box to explore pure cotton letterpress in person.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
              <a
                href="#early-bride"
                className="inline-flex items-center justify-center px-8 py-4 bg-black text-white hover:bg-[#222] transition-colors rounded-none text-[11px] sm:text-xs uppercase tracking-[0.22em] font-sans font-medium whitespace-nowrap shadow-sm"
              >
                Book a Consultation
              </a>
              <Link
                href="/weddings/wedding-sample-kit"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-black text-black hover:bg-black hover:text-white transition-colors rounded-none text-[11px] sm:text-xs uppercase tracking-[0.22em] font-sans font-medium whitespace-nowrap shadow-sm"
              >
                Order Sample Box (₹1,500)
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
