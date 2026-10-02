import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Luxury Letterpress Business Cards | Famous Letterpress",
  description:
    "Handcrafted letterpress business cards on 600gsm cotton board, hot foil stamping, and foil edge gilding. Printed on vintage platen presses in Nagaland, India.",
};

const CLIENT_CARDS = [
  {
    client: "Alicia Souza",
    specs: "8.5 × 5.4 cm (Rounded) • Wild Ivory White 300 GSM • Letterpress (Single Colour)",
    img: "/assets/our-work/business-cards/alicia-souza.jpg",
  },
  {
    client: "Avinash",
    specs: "8.5 × 5.4 cm (Rounded) • Wild Ivory White 450 GSM • Letterpress (Gold)",
    img: "/assets/our-work/business-cards/avinash.jpg",
  },
  {
    client: "Cold Mountain",
    specs: "8.5 × 5.4 cm (Rounded) • Wild Ivory White 450 GSM • Letterpress (Single Colour - Green)",
    img: "/assets/our-work/business-cards/cold-mountain.jpg",
  },
  {
    client: "Lideu",
    specs: "8.5 × 5.4 cm (Rounded) • Wild Ivory White 450 GSM • Letterpress (Single Colour - Dusty Pink)",
    img: "/assets/our-work/business-cards/lideu.jpg",
  },
  {
    client: "Lucy Ngullie",
    specs: "8.5 × 5.4 cm (Rounded) • Wild Ivory White 300 GSM • Letterpress (Single Colour)",
    img: "/assets/our-work/business-cards/lucy-ngullie.jpg",
  },
  {
    client: "M for Apples",
    specs: "8.5 × 5.4 cm (Rounded) • Wild Ivory White 450 GSM • Letterpress (Blind + Grey)",
    img: "/assets/our-work/business-cards/m-for-apples.jpg",
  },
  {
    client: "Nilaya",
    specs: "8.5 × 5.4 cm (Rounded) • Wild Ivory White 450 GSM • Letterpress (Single Colour - Grey)",
    img: "/assets/our-work/business-cards/nilaya.jpg",
  },
  {
    client: "Rachna Takawale",
    specs: "8.5 × 5.4 cm (Rounded) • Wild Ivory White 450 GSM • Letterpress (Pantone & Die-cut)",
    img: "/assets/our-work/business-cards/rachna-takawale.jpg",
  },
  {
    client: "Space Man",
    specs: "Wild Ivory White 450 GSM • Letterpress in single colour black",
    img: "/assets/our-work/business-cards/space-man.jpg",
  },
  {
    client: "Theyievino Whiso",
    specs: "8.5 × 5.4 cm rectangle • Wild ivory white 540 GSM • Letterpress in 3 colour (Black, Red, Green)",
    img: "/assets/our-work/business-cards/theyievino.jpg",
  },
  {
    client: "Universal Thirst",
    specs: "8.5 × 5.4 cm rectangle • Wild ivory white 300 GSM • Letterpress in single colour black",
    img: "/assets/our-work/business-cards/universal-thirst.jpg",
  },
  {
    client: "Winstar Realtors",
    specs: "8.5 × 5.4 cm rectangle • Wild ivory white 450 GSM • Letterpress in single colour black",
    img: "/assets/our-work/business-cards/winstar-realtors.jpg",
  },
];

const CARD_FINISHES = [
  {
    title: "600gsm & 900gsm Cotton",
    desc: "Unbendable, ultra-heavyweight cotton board that makes an immediate, unforgettable physical impression.",
    detail: "100% Tree-Free Cotton Rag",
  },
  {
    title: "Precision Hot Foil Stamping",
    desc: "Mirror gold, satin silver, copper, rose gold, or high-contrast gloss black applied under calibrated heat and pressure.",
    detail: "Imported German Stamping Foils",
  },
  {
    title: "Metallic Edge Gilding",
    desc: "Hand-applied reflective foil gilding or custom Pantone color painted edges that elevate the profile of every stack.",
    detail: "Beveled & Hand-Polished",
  },
  {
    title: "Double-Sided Duplexing",
    desc: "Two distinct stocks bonded back-to-back, allowing deep bite impressions on both sides with zero opposite-side show-through.",
    detail: "Up to 1200gsm Combined Stock",
  },
];

export default function BusinessCardsWorkPage() {
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
              <span className="text-black font-medium">Business Cards</span>
            </div>
            <p className="k mb-2">Category 04 &bull; Luxury Letterpress Business Cards</p>
            <h1 className="d text-[clamp(36px,7.5vw,72px)] leading-[1.0] mt-2 mb-6 font-serif text-black">
              Business <i>Cards.</i>
            </h1>
            <p className="text-base sm:text-lg text-[#444] max-w-2xl font-light leading-relaxed mb-8">
              The use of business cards dates back to the 15th Century. Today, the business card is an extension of your brand’s identity and plays a crucial role in your first impression. Our business cards help reinforce your image and leave a lasting impression.
            </p>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <Link href="/start-a-project" className="btn">
                Request Price
              </Link>
              <Link href="/business-cards/business-card-sample-kit" className="ln">
                Order Card Sample Kit &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Client Cards Grid ── */}
      <section className="py-16 md:py-24" aria-label="Selected Business Cards">
        <div className="w">
          <div className="flex items-center justify-between mb-10 pb-4 border-b border-[rgba(14,14,14,0.08)]">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#7b7566]">
              Our Clients Archive
            </span>
            <span className="text-xs text-[#888] font-light">
              300–540 GSM Wild Ivory Cotton Blends
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {CLIENT_CARDS.map((card) => (
              <div
                key={card.client}
                className="bg-[#FAF8F5] border border-[rgba(14,14,14,0.12)] p-4 sm:p-5 flex flex-col rounded-xs transition-all duration-300 hover:border-black/35 hover:-translate-y-1 shadow-[0_10px_24px_-12px_rgba(0,0,0,0.06)] group"
              >
                <div className="relative aspect-[4/3] overflow-hidden mb-4 bg-[#F0ECE1] rounded-xs">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={card.img}
                    alt={card.client}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif font-medium text-lg text-black mb-1">
                  {card.client}
                </h3>
                <p className="text-[11.5px] text-[#666] font-light leading-relaxed">
                  {card.specs}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Finishes & Tactile Options ── */}
      <section className="py-20 md:py-28 bg-[#FAF8F5] border-y border-[rgba(14,14,14,0.08)]" aria-label="Finishes and Specs">
        <div className="w">
          <div className="max-w-xl mb-12">
            <p className="k mb-2">Tactile Finishes</p>
            <h2 className="d text-[clamp(32px,6vw,54px)] leading-[1.05] font-serif text-black mb-4">
              Finishes built to <i>distinguish.</i>
            </h2>
            <p className="text-xs sm:text-sm text-[#444] font-light leading-relaxed">
              Every detail is calibrated for distinction: ultra-thick tree-free cotton rag, hand-mixed Pantone inks, mirror foils, and beveled edge gilding.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CARD_FINISHES.map((finish) => (
              <div
                key={finish.title}
                className="bg-white border border-[rgba(14,14,14,0.12)] p-6 flex flex-col justify-between rounded-xs"
              >
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#7b7566] block mb-2 uppercase">
                    {finish.detail}
                  </span>
                  <h3 className="text-base font-serif text-black font-medium mb-2">
                    {finish.title}
                  </h3>
                  <p className="text-xs text-[#555] font-light leading-relaxed">
                    {finish.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-20 md:py-28 text-center bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <p className="k mb-2">Corporate & Identity Commissions</p>
          <h2 className="d text-[clamp(32px,6vw,54px)] leading-[1.05] font-serif text-black mb-4">
            Command attention with every <i>handshake.</i>
          </h2>
          <p className="text-sm sm:text-base text-[#555] max-w-lg mx-auto mb-8 font-light leading-relaxed">
            Choose from single or multi-color letterpress, edge gilding, debossing, and custom die cuts. We provide digital proofs and paper guidance within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            <Link href="/start-a-project" className="btn">
              Request Price
            </Link>
            <Link href="/business-cards/business-card-sample-kit" className="btn bg-transparent text-black border border-black hover:bg-black hover:text-white">
              Order Sample Kit
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
