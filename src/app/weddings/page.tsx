import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { getCMSSampleKits, getCMSPortfolio } from "@/lib/cms/store";
import { SampleKitCheckout } from "@/components/shop/SampleKitCheckout";

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
    time: "6 to 9 Months Before",
    title: "Order Sample Kit & Save the Dates",
    desc: "Feel the cotton paper in your hands with our Wedding Sample Kit. Finalize your guest count and dispatch Save the Dates.",
  },
  {
    step: "02",
    time: "4 to 5 Months Before",
    title: "Consultation & Design",
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
    <div className="bg-paper-creme min-h-screen">
      {/* ── Editorial Header ── */}
      <section className="pt-28 pb-14 md:pt-36 md:pb-20 border-b border-border-hairline">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4 text-[10px] tracking-[0.16em] uppercase text-ink-light font-sans">
                <Link href="/" className="hover:text-ink-deep transition-colors">Home</Link>
                <span>/</span>
                <span className="text-ink-deep">Weddings</span>
              </div>
              <p className="eyebrow mb-2">Bespoke Wedding Stationery</p>
              <h1 className="text-ink-deep mt-2 mb-6 font-serif">
                Heirloom wedding stationery pressed by hand on{" "}
                <em className="font-light">100% cotton.</em>
              </h1>
              <p className="text-base md:text-lg text-ink-muted max-w-2xl font-light leading-relaxed mb-8">
                We believe wedding stationery is not merely paper with dates—it is the tangible opening chapter of your celebration.
                Handcrafted on vintage platen presses in Nagaland on pure cotton stock.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/weddings/early-bride"
                  className="inline-flex px-7 py-3.5 text-[11px] tracking-[0.14em] uppercase bg-ink-deep text-paper-creme hover:bg-[#222] transition-colors"
                >
                  Book a Consult
                </Link>
                <a
                  href="#sample-kit"
                  className="inline-flex px-7 py-3.5 text-[11px] tracking-[0.14em] uppercase border border-border-hairline text-ink-deep hover:border-ink-deep/40 transition-colors"
                >
                  Order Sample Kit (₹{weddingKit.price})
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Section 1: Invitations & Suites Showcase (IG-Style Reel) ── */}
      <section className="section bg-paper-white" aria-label="Wedding Suites Reel">
        <div className="container-wide mb-8 md:mb-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <Reveal>
                <p className="eyebrow mb-3">Section 01 · Bespoke Commissions</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2>
                  Selected <em className="font-light">wedding suites</em>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <Link
                href="/weddings/early-bride"
                className="text-[11px] tracking-[0.14em] uppercase text-ink-light hover:text-ink-deep transition-colors"
              >
                Inquire for Your Date →
              </Link>
            </Reveal>
          </div>
        </div>

        {/* Carousel Reel */}
        <div className="carousel-scroll pl-[clamp(1.25rem,5vw,3rem)] pr-6 mb-12">
          {weddingPortfolio.map((piece) => (
            <div
              key={piece.id}
              className="w-[75vw] md:w-[42vw] lg:w-[30vw] min-w-[280px] max-w-[440px]"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-paper-sand group mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={piece.featuredImage}
                  alt={piece.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] tracking-[0.16em] uppercase text-white/70 font-sans">
                    {piece.paperStock}
                  </span>
                  <p className="font-serif text-base text-white mt-1 leading-snug">
                    {piece.title}
                  </p>
                </div>
              </div>
              <p className="text-xs text-ink-muted line-clamp-2 leading-relaxed">
                {piece.description}
              </p>
            </div>
          ))}
        </div>

        {/* Suite Components Grid */}
        <div className="container-wide pt-8 border-t border-border-hairline">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {weddingSuites.map((item, index) => (
              <Reveal key={item.title} delay={0.1 + index * 0.08}>
                <div className="space-y-2">
                  <span className="text-[10px] tracking-[0.16em] uppercase text-ink-light font-mono">
                    {item.tag}
                  </span>
                  <h3 className="text-base text-ink-deep font-serif">{item.title}</h3>
                  <p className="text-xs text-ink-muted leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 2: Envelopes, Liners & Seals ── */}
      <section className="section bg-paper-creme" aria-label="Finishing & Details">
        <div className="container-wide">
          <div className="max-w-xl mb-12">
            <Reveal>
              <p className="eyebrow mb-3">Section 02 · Tactile Finishing</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mb-4">
                Envelopes, liners <em className="font-light">&amp; wax seals</em>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-sm text-ink-muted leading-relaxed">
                Every detail of your wedding suite is customized. We craft bespoke envelope liners, pour custom wax seals with your monogram crest, and hand-bevel edges with mirror-finish foils.
              </p>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tactileDetails.map((detail, index) => (
              <Reveal key={detail.title} delay={0.1 + index * 0.08}>
                <div className="group block">
                  <div className="relative aspect-square overflow-hidden bg-paper-sand mb-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={detail.image}
                      alt={detail.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <h3 className="text-sm font-serif text-ink-deep mb-1">{detail.title}</h3>
                  <p className="text-xs text-ink-muted leading-relaxed">{detail.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: The Famous Wedding Sample Kit (Direct Commerce) ── */}
      <section id="sample-kit" className="section bg-paper-white" aria-label="Wedding Sample Kit">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Kit Story & Details */}
            <div className="lg:col-span-6 space-y-8">
              <Reveal>
                <p className="eyebrow mb-2">Section 03 · Direct Commerce</p>
                <h2 className="mb-4 font-serif">
                  The Wedding <em className="font-light">Sample Kit</em>
                </h2>
                <p className="text-sm md:text-base text-ink-muted leading-relaxed mb-6">
                  Screens cannot convey the texture of 600gsm cotton rag, the brilliance of hot foil under daylight, or the depth of a platen impression.
                  Hold our finished work in your hands before commissioning your suite.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="overflow-hidden bg-paper-sand border border-border-hairline">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={weddingKit.featuredImage}
                      alt={weddingKit.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="bg-paper-creme border border-border-hairline p-6 space-y-4">
                  <h3 className="text-base font-serif text-ink-deep">What&apos;s Included in the Box:</h3>
                  <ul className="space-y-2.5">
                    {weddingKit.includedItems.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-ink-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-ink-deep mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[11px] text-ink-light pt-2 border-t border-border-hairline">
                    * The ₹{weddingKit.price} kit cost is 100% credited toward your final wedding order upon confirmation.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right: Integrated Direct Razorpay Checkout */}
            <div className="lg:col-span-6 lg:sticky lg:top-28">
              <Reveal delay={0.2}>
                <div className="space-y-4">
                  <div className="bg-ink-deep text-paper-creme p-4 text-center">
                    <p className="text-[10px] tracking-[0.18em] uppercase font-sans">
                      Direct Dispatch · Ships Across India within 48 Hours
                    </p>
                  </div>
                  <SampleKitCheckout kit={weddingKit} />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: 4-Stage Wedding Timeline ── */}
      <section className="section bg-paper-creme" aria-label="Production Timeline">
        <div className="container-wide">
          <div className="text-center max-w-xl mx-auto mb-14">
            <Reveal>
              <p className="eyebrow mb-2">Planning Guide</p>
              <h2 className="mb-4">
                The Wedding <em className="font-light">Stationery Timeline</em>
              </h2>
              <p className="text-xs md:text-sm text-ink-muted leading-relaxed">
                Letterpress is a meticulous physical process. We recommend reaching out early to ensure dedicated press time for your suite.
              </p>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {timelineSteps.map((step, index) => (
              <Reveal key={step.title} delay={0.1 + index * 0.08}>
                <div className="bg-paper-white border border-border-hairline p-6 relative">
                  <span className="text-[10px] font-mono tracking-widest text-ink-light block mb-2">
                    {step.step}
                  </span>
                  <p className="text-[11px] tracking-wide uppercase text-ink-deep font-medium font-sans mb-1">
                    {step.time}
                  </p>
                  <h3 className="text-sm font-serif text-ink-deep mb-2">{step.title}</h3>
                  <p className="text-xs text-ink-muted leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Consultation CTA ── */}
      <section className="section-lg bg-ink-deep text-paper-creme text-center">
        <div className="container-narrow">
          <Reveal>
            <p className="eyebrow !text-paper-creme/30 mb-3">Begin Your Suite</p>
            <h2 className="!text-paper-creme mb-4">
              Ready to craft your <em className="font-light">heirloom suite?</em>
            </h2>
            <p className="text-sm md:text-base text-paper-creme/50 mb-8 max-w-lg mx-auto leading-relaxed">
              Every Famous Letterpress suite is custom formulated. Share your wedding vision with us through our Early Bride consultation or message our founder directly on WhatsApp.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/weddings/early-bride"
                className="inline-flex px-8 py-3.5 text-[11px] tracking-[0.14em] uppercase bg-paper-creme text-ink-deep hover:bg-white transition-colors"
              >
                Submit Early Bride Form
              </Link>
              <a
                href="https://wa.me/919366012345"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-8 py-3.5 text-[11px] tracking-[0.14em] uppercase border border-paper-creme/30 text-paper-creme hover:border-paper-creme transition-colors"
              >
                WhatsApp Founder Direct
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
