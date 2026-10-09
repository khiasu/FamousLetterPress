import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { sampleKitsData } from "@/lib/data/sample-kits";
import { SampleKitCheckout } from "@/components/shop/SampleKitCheckout";
import { SampleKitGallery } from "@/components/shop/SampleKitGallery";
import { SampleKitInclusionsAccordion } from "@/components/shop/SampleKitInclusionsAccordion";

export const metadata: Metadata = {
  title: "Order Wedding Sample Kit | Famous Letterpress",
  description:
    "Experience our handcrafted letterpress wedding stationery in person. Includes 600gsm cotton suites, foil stamping, deckled paper, and swatch guides. Ships across India.",
};

export default function WeddingSampleKitPage() {
  const kit = sampleKitsData["wedding-sample-kit"];
  const allImages = Array.from(
    new Set([kit.featuredImage, ...(kit.galleryImages || [])].filter(Boolean))
  );

  return (
    <div className="bg-white min-h-screen text-black select-none">
      {/* Header */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-10 border-b border-[#E5E5E5]">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4 text-[10px] tracking-[0.18em] uppercase text-[#7b7566] font-mono">
                <Link href="/" className="hover:text-black transition-colors">Home</Link>
                <span>/</span>
                <Link href="/our-work/wedding-invites" className="hover:text-black transition-colors">Wedding Invites</Link>
                <span>/</span>
                <span className="text-black font-medium">Sample Kit</span>
              </div>
              <h1 className="d text-[clamp(36px,7.5vw,68px)] leading-[1.0] mt-2 mb-4 font-serif text-black">
                Wedding <i>Sample Kit</i>
              </h1>
              <p className="text-base sm:text-lg text-[#555] max-w-2xl font-light leading-relaxed">
                {kit.tagline}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Main Content & Checkout Form */}
      <section className="pt-0 pb-8 md:py-12 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Kit Details & Inclusions */}
            <div id="gallery" className="lg:col-span-7 space-y-8 scroll-mt-28">
              {/* Product Visual Showcase - Swipeable with dots and clickable thumbnail grid */}
              <Reveal>
                <SampleKitGallery images={allImages} title={kit.name} />
              </Reveal>

              <Reveal delay={0.05}>
                <div className="bg-white border border-[#E5E5E5] p-6 md:p-8">
                  <h2 className="text-xl md:text-2xl text-black mb-4 font-serif">Why Order a Sample Kit?</h2>
                  <p className="text-sm text-[#555555] leading-relaxed mb-6">
                    {kit.description}
                  </p>

                  <SampleKitInclusionsAccordion
                    items={kit.includedItems}
                    title="What's Inside the Box"
                    defaultOpen={false}
                  />
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="bg-[#F7F7F7] border border-[#E5E5E5] p-6 md:p-8">
                  <p className="eyebrow mb-2">Dispatch & Shipping Guarantee</p>
                  <h3 className="text-lg md:text-xl text-black mb-3 font-serif">Courier Delivery Across India</h3>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                    Every kit is assembled by hand in our Nagaland studio and dispatched via express courier with full tracking. Expect delivery within 3–5 working days anywhere in India.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Sticky Razorpay Checkout */}
            <div id="order-form" className="lg:col-span-5 lg:sticky lg:top-28 scroll-mt-28">
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
