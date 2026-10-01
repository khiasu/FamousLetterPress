import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { getCMSSampleKits } from "@/lib/cms/store";

export function SampleKitsSection() {
  const kitsMap = getCMSSampleKits();
  const kits = [
    {
      title: kitsMap["wedding-sample-kit"]?.name || "Wedding Sample Kit",
      price: kitsMap["wedding-sample-kit"]?.price || 1500,
      contents: "100% cotton paper swatches (300–900 gsm), hot foil library, relief bite depth samples, envelope colors, custom monogram wax seals.",
      href: "/weddings/wedding-sample-kit",
      image: "/assets/wed-kit/FMS_3749.jpg",
      tag: "Direct Dispatch · India",
    },
    {
      title: kitsMap["business-card-sample-kit"]?.name || "Business Card Sample Kit",
      price: kitsMap["business-card-sample-kit"]?.price || 1000,
      contents: "350–900 gsm cotton boards, blind deboss, metallic foil stamping, edge gilding samples, and duplexed color-core stocks.",
      href: "/business-cards/business-card-sample-kit",
      image: "/assets/business-cards/FMS_3462.jpg",
      tag: "Direct Dispatch · India",
    },
  ];

  return (
    <section className="section bg-white border-b border-[#E5E5E5]" aria-label="Sample Kits">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <Reveal>
            <p className="eyebrow mb-3">Tactile Proof</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-black font-serif mb-4">
              See it. Touch it. <em className="font-light italic font-serif">Then decide.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-sm md:text-base text-[#555555] font-light leading-relaxed">
              Screens cannot show you paper weight, cotton texture, or how deep a brass die bites. Order a sample kit to evaluate finished pieces in your hands before placing your run.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {kits.map((kit, index) => (
            <Reveal key={kit.href} delay={0.2 + index * 0.1}>
              <div className="border border-[#E5E5E5] bg-white p-6 sm:p-8 flex flex-col justify-between h-full group hover:border-black transition-colors duration-300">
                <div>
                  {/* Image */}
                  <div className="relative aspect-[4/3] bg-[#F7F7F7] overflow-hidden border border-[#E5E5E5] mb-6">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={kit.image}
                      alt={kit.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 text-[10px] font-mono tracking-widest uppercase text-black border border-[#E5E5E5]">
                      {kit.tag}
                    </div>
                  </div>

                  {/* Header & Price */}
                  <div className="flex items-baseline justify-between mb-3">
                    <h3 className="text-2xl font-serif text-black">{kit.title}</h3>
                    <span className="font-serif text-xl text-black">
                      ₹{kit.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-light mb-6">
                    {kit.contents}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#E5E5E5]">
                  <Link
                    href={kit.href}
                    className="inline-flex w-full items-center justify-center py-3.5 text-[11px] tracking-[0.2em] uppercase font-medium bg-black text-white hover:bg-neutral-800 transition-colors"
                  >
                    Order Sample Kit →
                  </Link>
                  <p className="text-[10px] text-center text-[#888888] font-sans mt-2.5">
                    * Kit fee is 100% credited toward your final stationery commission.
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
