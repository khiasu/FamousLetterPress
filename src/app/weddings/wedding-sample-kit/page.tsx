import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { sampleKitsData } from "@/lib/data/sample-kits";
import { SampleKitCheckout } from "@/components/shop/SampleKitCheckout";

export const metadata: Metadata = {
  title: "Order Wedding Sample Kit | Famous Letterpress",
  description:
    "Experience our handcrafted letterpress wedding stationery in person. Includes 600gsm cotton suites, foil stamping, deckled paper, and swatch guides. Ships across India.",
};

export default function WeddingSampleKitPage() {
  const kit = sampleKitsData["wedding-sample-kit"];

  return (
    <div className="bg-cream">
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-sand">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4 text-xs font-mono tracking-widest uppercase text-warm-stone">
                <Link href="/" className="hover:text-terracotta">Home</Link>
                <span>/</span>
                <Link href="/weddings" className="hover:text-terracotta">Weddings</Link>
                <span>/</span>
                <span className="text-terracotta">Sample Kit</span>
              </div>
              <span className="eyebrow text-terracotta">Sensory Benchmark</span>
              <h1 className="display-lg text-charcoal mt-2 mb-4">{kit.name}</h1>
              <p className="body-lg text-warm-stone max-w-2xl font-light leading-relaxed">
                {kit.tagline}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Main Content & Checkout Form */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Kit Details & Inclusions */}
            <div className="lg:col-span-7 space-y-8">
              <Reveal>
                <div className="card-warm p-8">
                  <h2 className="heading-md text-charcoal mb-4">Why Order a Sample Kit?</h2>
                  <p className="text-sm text-warm-stone leading-relaxed mb-6 font-light">
                    {kit.description}
                  </p>

                  <div className="pt-6 border-t border-sand">
                    <h3 className="font-serif text-xl text-charcoal mb-4">What's Inside the Box</h3>
                    <ul className="space-y-3">
                      {kit.includedItems.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-warm-stone">
                          <span className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="card-warm p-8 bg-cream border-forest/20">
                  <span className="eyebrow text-forest">Dispatch & Shipping Guarantee</span>
                  <h3 className="font-serif text-xl text-charcoal mt-2 mb-3">Courier Delivery Across India</h3>
                  <p className="text-xs sm:text-sm text-warm-stone leading-relaxed">
                    {kit.shippingInfo}
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Checkout Form */}
            <div className="lg:col-span-5 sticky top-28">
              <Reveal delay={0.2}>
                <SampleKitCheckout kit={kit} />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
