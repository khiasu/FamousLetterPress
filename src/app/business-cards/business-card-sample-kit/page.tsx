import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { sampleKitsData } from "@/lib/data/sample-kits";
import { SampleKitCheckout } from "@/components/shop/SampleKitCheckout";

export const metadata: Metadata = {
  title: "Order Letterpress Business Card Sample Kit | Famous Letterpress",
  description:
    "Examine luxury 600gsm cotton business cards, edge gilding, hot foil, and blind deboss samples in person. Fast courier dispatch across India.",
};

export default function BusinessCardSampleKitPage() {
  const kit = sampleKitsData["business-card-sample-kit"];

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
                <Link href="/business-cards" className="hover:text-terracotta">Business Cards</Link>
                <span>/</span>
                <span className="text-terracotta">Sample Kit</span>
              </div>
              <span className="eyebrow text-terracotta">Sensory Assessment</span>
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
              {/* Product Visual Showcase */}
              <Reveal>
                <div className="card-warm overflow-hidden shadow-sm">
                  <div className="aspect-[16/10] relative overflow-hidden bg-sand/40">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={kit.featuredImage}
                      alt={kit.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {kit.galleryImages && kit.galleryImages.length > 0 && (
                    <div className="grid grid-cols-4 gap-2 p-3 bg-cream border-t border-sand">
                      {kit.galleryImages.map((img, i) => (
                        <div key={i} className="aspect-square rounded overflow-hidden border border-sand/60 shadow-xs">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={img}
                            alt={`${kit.name} detail ${i + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <div className="card-warm p-8">
                  <h2 className="heading-md text-charcoal mb-4">Feel Before You Print</h2>
                  <p className="text-sm text-warm-stone leading-relaxed mb-6 font-light">
                    {kit.description}
                  </p>

                  <div className="pt-6 border-t border-sand">
                    <h3 className="font-serif text-xl text-charcoal mb-4">Sample Kit Box Inclusions</h3>
                    <ul className="space-y-3">
                      {kit.includedItems.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-warm-stone">
                          <span className="w-1.5 h-1.5 rounded-full bg-forest mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="card-warm p-8 bg-cream border-forest/20">
                  <span className="eyebrow text-forest">Express Dispatch</span>
                  <h3 className="font-serif text-xl text-charcoal mt-2 mb-3">Courier Shipping Across India</h3>
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
