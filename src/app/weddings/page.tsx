import type { Metadata } from "next";
import Link from "next/link";
import { getCMSSampleKits, getCMSPortfolio } from "@/lib/cms/store";

export const metadata: Metadata = {
  title: "Letterpress Wedding Stationery & Invitations | Famous Letterpress",
  description:
    "Handcrafted letterpress wedding invitations, save-the-dates, and bespoke day-of stationery pressed on 100% cotton paper in Nagaland, India. Explore suites, sample kits, and book an Early Bride consultation.",
};

const weddingSuites = [
  {
    title: "The Main Invitation Suite",
    desc: "The centerpiece of your celebration. Pressed deep into 600gsm cotton board, accompanied by tailored RSVP cards, event detail inserts, and euro-flap envelopes.",
    tag: "Essential",
  },
  {
    title: "Save the Date Announcements",
    desc: "Your guests' first impression. Letterpress or metallic hot foil stamping on heavyweight cotton card, sent 6–9 months before the celebration.",
    tag: "Pre-Wedding",
  },
  {
    title: "Day-Of Paper & Signage",
    desc: "Menus, individual place cards, table numbers, order of service programs, and cocktail napkins sharing a seamless typographic identity.",
    tag: "Reception",
  },
  {
    title: "Finishing & Embellishments",
    desc: "Natural deckled feathered edges, custom engraved wax seals, metallic edge gilding, vellum wraps, and hand-dyed botanical silk ribbons.",
    tag: "Artisanal",
  },
];

const tactileDetails = [
  {
    title: "Handmade Euro-Flap Envelopes",
    detail: "Custom die-cut envelopes in pure cotton, handmade deckle paper, or Colorplan archival stocks.",
    image: "https://famousletterpress.com/wp-content/uploads/2026/05/FMS_4413-2000x2500.jpg",
  },
  {
    title: "Illustrated Envelope Liners",
    detail: "Custom venue illustrations, floral patterns, or blind-embossed monograms inside each envelope flap.",
    image: "https://famousletterpress.com/wp-content/uploads/2026/05/FMS_4395-2000x2500.jpg",
  },
  {
    title: "Botanical & Crest Wax Seals",
    detail: "Hand-poured flexible sealing wax in antique bronze, matte champagne, pearl white, or forest green.",
    image: "https://famousletterpress.com/wp-content/uploads/2026/04/wedkit-1-pics-1200x1200.jpg",
  },
  {
    title: "Edge Gilding & Beveling",
    detail: "Mirror-finish metallic foil applied by hand along the thick 600–900gsm beveled edges of your cards.",
    image: "https://famousletterpress.com/wp-content/uploads/2026/04/bizkit-01-1200x1200.jpg",
  },
];

const timelineSteps = [
  {
    step: "01",
    time: "4 to 6 Months Before",
    title: "Design Discovery & Sample Kit",
    desc: "Order our Wedding Sample Kit to feel our 600–900gsm cotton board, foil finishes, and deckled edges in person.",
  },
  {
    step: "02",
    time: "3 to 4 Months Before",
    title: "Concept, Typesetting & Proofs",
    desc: "Submit your Early Bride consultation. We refine typographic proofs, select papers, and finalize foil tones and ink mixtures.",
  },
  {
    step: "03",
    time: "2 to 3 Months Before",
    title: "Presswork & Suite Delivery",
    desc: "We hand-mix inks and press your suite on vintage platen presses in Nagaland. Meticulously inspected, packaged, and shipped to your door.",
  },
  {
    step: "04",
    time: "6 to 8 Weeks Before",
    title: "Mailing to Guests",
    desc: "Your invitations are in the mail, giving loved ones ample time to RSVP and anticipate your celebration.",
  },
];

export default function WeddingsHubPage() {
  const weddingKit = getCMSSampleKits()["wedding-sample-kit"];
  const weddingPortfolio = getCMSPortfolio().filter((item) => item.category === "weddings");

  return (
    <div className="bg-white min-h-screen text-black">
      {/* ── 1. Editorial Header ── */}
      <section className="pt-28 pb-14 md:pt-36 md:pb-20 border-b border-[#E5E5E5]">
        <div className="w">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4 text-[10px] tracking-[0.16em] uppercase text-[#777] font-mono">
              <Link href="/" className="hover:text-black transition-colors">Home</Link>
              <span>/</span>
              <span className="text-black font-medium">Weddings</span>
            </div>
            <p className="k mb-2">Bespoke Wedding Stationery &middot; Nagaland, India</p>
            <h1 className="d text-[clamp(38px,8.5vw,78px)] leading-[0.95] mt-2 mb-6 font-serif text-black">
              Heirloom wedding stationery pressed by hand on{" "}
              <em className="font-light">100% cotton.</em>
            </h1>
            <p className="text-base md:text-lg text-[#3b372e] max-w-2xl font-light leading-relaxed mb-8">
              We believe wedding stationery is not merely paper with dates &mdash; it is the tangible opening chapter of your celebration.
              Handcrafted on vintage platen presses in Nagaland on pure cotton stock.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Link
                href="/weddings/early-bride"
                className="btn"
              >
                Early Bride Consultation
              </Link>
              <Link
                href="/weddings/wedding-sample-kit"
                className="ln"
              >
                Order Sample Box (₹{weddingKit.price})
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Dedicated Section Gateways (Separated Experience Pathways) ── */}
      <section className="py-16 md:py-20 bg-white border-b border-[#E5E5E5]" aria-label="Wedding Experiences">
        <div className="w">
          <div className="mb-10">
            <p className="k mb-2">Explore Dedicated Sections</p>
            <h2 className="d text-[clamp(28px,5.5vw,46px)] leading-[1.05] font-serif text-black">
              Three ways to experience our <i>craft.</i>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Gateway 1: Full Stationery Suites */}
            <div className="border border-[#E5E5E5] p-6 sm:p-8 flex flex-col justify-between group hover:border-black transition-all">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-[#777] mb-3">01 &middot; Bespoke Suites</p>
                <h3 className="font-serif text-2xl text-black font-medium tracking-tight mb-3">
                  Wedding Stationery
                </h3>
                <p className="text-xs sm:text-sm text-[#444] font-light leading-relaxed mb-6">
                  Explore full invitation suites, insert cards, euro-flap envelopes, printing capabilities, and lead times.
                </p>
              </div>
              <Link
                href="/weddings/wedding-stationery"
                className="ln text-[11px] font-mono uppercase tracking-[0.16em]"
              >
                View Stationery Guide &rarr;
              </Link>
            </div>

            {/* Gateway 2: The Physical Sample Kit */}
            <div className="border border-[#E5E5E5] p-6 sm:p-8 flex flex-col justify-between group hover:border-black transition-all bg-[#faf9f6]">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-[#777] mb-3">02 &middot; Tactile Discovery</p>
                <h3 className="font-serif text-2xl text-black font-medium tracking-tight mb-1">
                  The Wedding Sample Box
                </h3>
                <p className="text-sm font-serif text-black mb-3">₹1,500 <span className="text-xs text-[#777] font-mono">(100% credited on order)</span></p>
                <p className="text-xs sm:text-sm text-[#444] font-light leading-relaxed mb-6">
                  Hold 300, 600 &amp; 900gsm cotton board, blind deboss, matte gold foils, deckled edges, and wax seals in your hands.
                </p>
              </div>
              <Link
                href="/weddings/wedding-sample-kit"
                className="btn text-center"
              >
                Order Sample Box &rarr;
              </Link>
            </div>

            {/* Gateway 3: Early Bride Consultation */}
            <div className="border border-[#E5E5E5] p-6 sm:p-8 flex flex-col justify-between group hover:border-black transition-all">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-[#777] mb-3">03 &middot; Dedicated Consultation</p>
                <h3 className="font-serif text-2xl text-black font-medium tracking-tight mb-3">
                  Early Bride Program
                </h3>
                <p className="text-xs sm:text-sm text-[#444] font-light leading-relaxed mb-6">
                  Planning ahead? Reserve your production press slot 3 to 6 months before your wedding date for dedicated proofing and formulation.
                </p>
              </div>
              <Link
                href="/weddings/early-bride"
                className="ln text-[11px] font-mono uppercase tracking-[0.16em]"
              >
                Submit Consultation Form &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Selected Wedding Suites Gallery (Fully Responsive Mobile-First Grid) ── */}
      <section className="py-20 md:py-28 bg-white border-b border-[#E5E5E5]" aria-label="Selected Wedding Suites">
        <div className="w">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <p className="k mb-2">Commissions</p>
              <h2 className="d text-[clamp(32px,7vw,64px)] leading-[0.95] font-serif text-black">
                Selected <i>wedding suites.</i>
              </h2>
            </div>
            <Link
              href="/weddings/early-bride"
              className="ln text-[11px] font-mono uppercase tracking-[0.16em]"
            >
              Inquire for your date &rarr;
            </Link>
          </div>

          {/* Fully Responsive Grid for all screens (1 col mobile, 2 col tablet, 3 col desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {weddingPortfolio.map((piece) => (
              <article
                key={piece.id}
                className="border border-[#E5E5E5] bg-white group flex flex-col justify-between transition-all duration-300 hover:border-black"
              >
                <div>
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#F7F7F7]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={piece.featuredImage}
                      alt={piece.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-[9.5px] tracking-[0.16em] uppercase text-white/80 font-mono block mb-1">
                        {piece.paperStock}
                      </span>
                      <h3 className="font-serif text-lg text-white font-medium leading-tight">
                        {piece.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="text-xs text-[#555] font-light leading-relaxed">
                      {piece.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-3 border-t border-[#E5E5E5] flex items-center justify-between text-[10.5px] font-mono uppercase tracking-wider text-[#777]">
                  <span>Nagaland Studio</span>
                  <Link href="/weddings/early-bride" className="text-black hover:opacity-60 transition-opacity font-medium">
                    Commission &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Suite Inclusions Row */}
          <div className="mt-16 pt-12 border-t border-[#E5E5E5]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {weddingSuites.map((item) => (
                <div key={item.title} className="space-y-2">
                  <span className="text-[9.5px] tracking-[0.16em] uppercase text-[#777] font-mono block">
                    {item.tag}
                  </span>
                  <h3 className="text-base text-black font-serif font-medium">{item.title}</h3>
                  <p className="text-xs text-[#555] leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Envelopes, Liners & Seals (Responsive Grid) ── */}
      <section className="py-20 md:py-28 bg-white border-b border-[#E5E5E5]" aria-label="Finishing & Details">
        <div className="w">
          <div className="max-w-xl mb-12">
            <p className="k mb-2">Tactile Finishing</p>
            <h2 className="d text-[clamp(32px,7vw,60px)] leading-[0.95] font-serif text-black mb-4">
              Envelopes, liners <em className="font-light">&amp; wax seals.</em>
            </h2>
            <p className="text-xs sm:text-sm text-[#444] font-light leading-relaxed">
              Every detail of your wedding suite is customized. We craft bespoke envelope liners, pour custom wax seals with your monogram crest, and hand-bevel edges with mirror-finish foils.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tactileDetails.map((detail) => (
              <div key={detail.title} className="border border-[#E5E5E5] bg-white p-4 group hover:border-black transition-colors">
                <div className="relative aspect-square overflow-hidden bg-[#F7F7F7] mb-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={detail.image}
                    alt={detail.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-sm font-serif text-black font-medium mb-1">{detail.title}</h3>
                <p className="text-xs text-[#555] font-light leading-relaxed">{detail.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. 4-Stage Wedding Timeline (Responsive Cards) ── */}
      <section className="py-20 md:py-28 bg-white border-b border-[#E5E5E5]" aria-label="Production Timeline">
        <div className="w">
          <div className="max-w-xl mb-12">
            <p className="k mb-2">Planning Guide</p>
            <h2 className="d text-[clamp(32px,7vw,60px)] leading-[0.95] font-serif text-black mb-4">
              The wedding stationery <i>timeline.</i>
            </h2>
            <p className="text-xs sm:text-sm text-[#444] font-light leading-relaxed">
              Letterpress is a physical, plate-making craft. We recommend booking early to reserve press time for your suite.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {timelineSteps.map((step) => (
              <div key={step.title} className="border border-[#E5E5E5] bg-white p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#777] block mb-2">
                    {step.step}
                  </span>
                  <p className="text-[10.5px] tracking-wide uppercase text-black font-medium font-mono mb-1">
                    {step.time}
                  </p>
                  <h3 className="text-base font-serif text-black font-medium mb-2">{step.title}</h3>
                  <p className="text-xs text-[#555] font-light leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Final Call to Action ── */}
      <section className="py-24 md:py-32 bg-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="k mb-2">Begin Your Heirloom Suite</p>
          <h2 className="d text-[clamp(36px,8vw,70px)] leading-[0.95] font-serif text-black mb-4">
            Let&rsquo;s craft something <i>unforgettable.</i>
          </h2>
          <p className="text-sm sm:text-base text-[#444] font-light mb-8 max-w-lg mx-auto leading-relaxed">
            Every Famous Letterpress suite is custom formulated. Share your wedding date and moodboard through our Early Bride form, or order the physical sample kit to feel the cotton stock in person.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link
              href="/weddings/early-bride"
              className="btn"
            >
              Early Bride Consultation
            </Link>
            <Link
              href="/weddings/wedding-sample-kit"
              className="ln"
            >
              Order Sample Box (₹1,500)
            </Link>
            <a
              href="https://wa.me/+918416099340"
              target="_blank"
              rel="noopener noreferrer"
              className="ln"
            >
              WhatsApp Founder Direct &nearr;
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
