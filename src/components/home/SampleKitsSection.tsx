import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { getCMSSampleKits } from "@/lib/cms/store";

export function SampleKitsSection() {
  const kitsMap = getCMSSampleKits();
  const kits = [
    {
      title: kitsMap["wedding-sample-kit"]?.name || "Wedding Sample Kit",
      price: kitsMap["wedding-sample-kit"]?.price || 1500,
      contents: "Cotton paper swatches (300–900 gsm), foil library, impression depth samples, envelope colours, wax seal samples",
      href: "/weddings/wedding-sample-kit",
      image: "/assets/wed-kit/FMS_3749.jpg",
    },
    {
      title: kitsMap["business-card-sample-kit"]?.name || "Business Card Sample Kit",
      price: kitsMap["business-card-sample-kit"]?.price || 1000,
      contents: "350–900 gsm cotton boards, blind deboss, coloured foil, edge gilding, and duplexed stock samples",
      href: "/business-cards/business-card-sample-kit",
      image: "/assets/business-cards/FMS_3462.jpg",
    },
  ];

  return (
    <section className="section bg-ink-deep" aria-label="Sample kits">
      <div className="container-wide">
        <div className="text-center mb-12">
          <Reveal>
            <p className="eyebrow !text-paper-creme/30 mb-4">Sample Kits</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="!text-paper-creme mb-5">
              See it. Touch it.{" "}
              <em className="font-light">Then decide.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-paper-creme/40 mx-auto max-w-lg text-sm leading-relaxed">
              Screens cannot show you paper weight, cotton texture, or how deep a die bites.
              Order a sample kit to hold finished pieces in your hands before placing a full run.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {kits.map((kit, index) => (
            <Reveal key={kit.href} delay={0.2 + index * 0.1}>
              <Link
                href={kit.href}
                className="group block bg-paper-creme/5 border border-paper-creme/8 hover:border-paper-creme/20 p-5 md:p-6 transition-all duration-500"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden bg-paper-creme/5 mb-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={kit.image}
                    alt={kit.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-lg !text-paper-creme font-serif">
                    {kit.title}
                  </h3>
                  <span className="text-sm text-paper-creme/60 font-sans">
                    ₹{kit.price}
                  </span>
                </div>
                <p className="text-[12px] text-paper-creme/30 leading-relaxed mb-4">
                  {kit.contents}
                </p>
                <span className="text-[11px] tracking-[0.14em] uppercase text-paper-creme/40 group-hover:text-paper-creme transition-colors duration-300">
                  Order Now →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
