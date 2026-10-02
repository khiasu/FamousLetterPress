import Link from "next/link";

const KITS = [
  {
    eyebrow: "Bespoke Wedding Collection",
    title: "The Wedding Sample Box",
    price: "₹1,500",
    credit: "100% Credited on order",
    description:
      "Contains 300, 600 & 900gsm cotton boards, blind deboss relief swatches, matte & metallic foil library, illustrated envelope liners, and wax seal variations.",
    img: "/assets/revamp/sample-kits/FMS_3749.jpg",
    detailHref: "/weddings/wedding-sample-kit",
  },
  {
    eyebrow: "Executive & Corporate",
    title: "Business Card Sample Kit",
    price: "₹1,000",
    credit: "100% Credited on order",
    description:
      "Thick unbendable cotton cards featuring mirror gold edge gilding, sculpted blind deboss, duplexed color cores, and luxury stationery finishes for distinguished practices.",
    img: "/assets/revamp/what-we-make/FMS_3462.jpg",
    detailHref: "/business-cards/business-card-sample-kit",
  },
];

export function SampleKitsSection() {
  return (
    <section
      id="sample-kits"
      className="py-24 md:py-32 bg-white border-b border-[#E5E5E5]"
      aria-label="Sample Kits"
    >
      <div className="w">
        <div className="flex justify-between items-center mb-6">
          <p className="k">Sample Kits &amp; Discovery</p>
          <p className="k">(05)</p>
        </div>

        <h2 className="d text-[clamp(36px,8vw,64px)] leading-[0.98] mt-2 mb-4 font-serif">
          Hold the <i>craft</i> in your hands.
        </h2>
        <p className="text-[#555] max-w-xl text-sm sm:text-base font-light leading-relaxed mb-12">
          Screen pixels cannot convey the tactile bite of letterpress or the
          substantial weight of 900gsm cotton. Order our curated sample boxes
          before commissioning your suite. The kit fee is 100% credited back on
          your final stationery commission.
        </p>

        {/* 2 Sample Kit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {KITS.map((kit) => (
            <div
              key={kit.title}
              className="border border-[rgba(14,14,14,0.1)] bg-white flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_24px_-12px_rgba(60,45,20,0.2)] group"
            >
              {/* Image — clickable to detail page */}
              <Link
                href={kit.detailHref}
                className="relative aspect-[16/11] overflow-hidden bg-[#f5f2ed] block"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={kit.img}
                  alt={kit.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>

              {/* Content */}
              <div className="p-5 sm:p-7 flex flex-col flex-1">
                <p className="k text-[9px] mb-2 tracking-[0.28em]">
                  {kit.eyebrow}
                </p>
                <h3 className="font-serif font-medium text-2xl sm:text-3xl text-black tracking-tight mb-2">
                  {kit.title}
                </h3>
                <p className="font-serif font-medium text-xl text-black mb-3">
                  {kit.price}{" "}
                  <span className="font-sans text-xs text-[#7b7566] tracking-normal font-light">
                    ({kit.credit})
                  </span>
                </p>
                <p className="text-xs sm:text-sm text-[#444] font-light leading-relaxed mb-6">
                  {kit.description}
                </p>

                {/* Dual CTAs: View Details + Order */}
                <div className="flex items-center gap-5 mt-auto">
                  <Link href={kit.detailHref} className="btn">
                    Order kit
                  </Link>
                  <Link href={kit.detailHref} className="ln">
                    View details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
