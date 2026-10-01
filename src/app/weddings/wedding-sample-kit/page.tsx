import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { getCMSSampleKits } from "@/lib/cms/store";
import { SampleKitCheckout } from "@/components/shop/SampleKitCheckout";

export const metadata: Metadata = {
  title: "Order Wedding Sample Kit | Famous Letterpress",
  description:
    "Experience our handcrafted letterpress wedding stationery in person. Includes 600gsm cotton suites, foil stamping, deckled paper, and swatch guides. Ships across India.",
};

export default function WeddingSampleKitPage() {
  const kits = getCMSSampleKits();
  const kit = kits["wedding-sample-kit"];

  return (
    <div className="bg-paper-creme min-h-screen">
      {/* Header */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 border-b border-border-hairline">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4 text-[10px] tracking-[0.16em] uppercase text-ink-light">
                <Link href="/" className="hover:text-ink-deep transition-colors">Home</Link>
                <span>/</span>
                <Link href="/weddings" className="hover:text-ink-deep transition-colors">Weddings</Link>
                <span>/</span>
                <span className="text-ink-deep">Sample Kit</span>
              </div>
              <p className="eyebrow mb-2">Tactile Discovery</p>
              <h1 className="text-ink-deep mb-4 font-serif">
                {kit.name}
              </h1>
              <p className="text-base md:text-lg text-ink-muted max-w-2xl leading-relaxed">
                {kit.tagline}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Main Content & Checkout Form */}
      <section className="section bg-paper-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Kit Details & Inclusions */}
            <div className="lg:col-span-7 space-y-8">
              {/* Product Visual Showcase */}
              <Reveal>
                <div className="overflow-hidden bg-paper-sand border border-border-hairline">
                  <div className="aspect-[16/10] relative overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={kit.featuredImage}
                      alt={kit.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {kit.galleryImages && kit.galleryImages.length > 0 && (
                    <div className="grid grid-cols-4 gap-2 p-3 bg-paper-creme border-t border-border-hairline">
                      {kit.galleryImages.map((img, i) => (
                        <div key={i} className="aspect-square overflow-hidden border border-border-hairline">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={img}
                            alt={`${kit.name} preview ${i + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <div className="bg-paper-creme border border-border-hairline p-6 md:p-8">
                  <h2 className="text-xl md:text-2xl text-ink-deep mb-4 font-serif">Why Order a Sample Kit?</h2>
                  <p className="text-sm text-ink-muted leading-relaxed mb-6">
                    {kit.description}
                  </p>

                  <div className="pt-6 border-t border-border-hairline">
                    <h3 className="text-lg text-ink-deep mb-4 font-serif">What&apos;s Inside the Box</h3>
                    <ul className="space-y-3">
                      {kit.includedItems.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-ink-muted">
                          <span className="w-1.5 h-1.5 rounded-full bg-ink-deep mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="bg-paper-sand border border-border-hairline p-6 md:p-8">
                  <p className="eyebrow mb-2">Dispatch & Shipping Guarantee</p>
                  <h3 className="text-lg md:text-xl text-ink-deep mb-3 font-serif">Courier Delivery Across India</h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    Every kit is assembled by hand in our Nagaland atelier and dispatched via express courier with full tracking. Expect delivery within 3–5 working days anywhere in India.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Sticky Razorpay Checkout */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <Reveal delay={0.15}>
                <SampleKitCheckout kit={kit} />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
