import Link from "next/link";

export function SampleKitsSection() {
  return (
    <section id="sample-kits" className="py-24 md:py-32 bg-white border-b border-[#E5E5E5]" aria-label="Sample Kits">
      <div className="w">
        <div className="flex justify-between items-center mb-6">
          <p className="k">Sample Kits &amp; Discovery</p>
          <p className="k">(03)</p>
        </div>

        <h2 className="d text-[clamp(36px,8vw,64px)] leading-[0.98] mt-2 mb-4 font-serif">
          Hold the <i>craft</i> in your hands.
        </h2>
        <p className="text-[#555] max-w-xl text-sm sm:text-base font-light leading-relaxed mb-12">
          Screen pixels cannot convey the tactile bite of letterpress or the substantial weight of 900gsm cotton. Order our curated sample boxes before commissioning your suite. The kit fee is 100% credited back on your final stationery commission.
        </p>

        {/* 2 Tactile 3D Paper Sample Kit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Wedding Sample Kit */}
          <div className="bg-[#faf5ea] border border-[#E5E5E5] p-6 sm:p-8 shadow-[0_20px_30px_-16px_rgba(60,45,20,0.3)] flex flex-col justify-between transition-transform duration-500 hover:-translate-y-1.5 group">
            <div>
              <div className="relative aspect-[16/11] overflow-hidden mb-6 border border-black/10 bg-[#f1e8d4]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/revamp/sample-kits/FMS_3749.jpg"
                  alt="The Wedding Sample Box"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="k text-[9px] mb-2 tracking-[0.28em]">Bespoke Wedding Collection</p>
              <h3 className="font-serif font-medium text-2xl sm:text-3xl text-black tracking-tight mb-2">
                The Wedding Sample Box
              </h3>
              <p className="font-serif font-medium text-xl text-black mb-3">
                ₹1,500 <span className="font-sans text-xs text-[#7b7566] tracking-normal font-light">(100% Credited on order)</span>
              </p>
              <p className="text-xs sm:text-sm text-[#444] font-light leading-relaxed mb-6">
                Contains 300, 600 &amp; 900gsm cotton boards, blind deboss relief swatches, matte &amp; metallic foil library, illustrated envelope liners, and wax seal variations.
              </p>
            </div>
            <Link
              href="https://wa.me/+918416099340?text=I%20would%20like%20to%20order%20the%20Wedding%20Sample%20Kit"
              target="_blank"
              rel="noopener noreferrer"
              className="btn self-start"
            >
              Order Wedding Kit
            </Link>
          </div>

          {/* Business Card Sample Kit */}
          <div className="bg-[#faf5ea] border border-[#E5E5E5] p-6 sm:p-8 shadow-[0_20px_30px_-16px_rgba(60,45,20,0.3)] flex flex-col justify-between transition-transform duration-500 hover:-translate-y-1.5 group">
            <div>
              <div className="relative aspect-[16/11] overflow-hidden mb-6 border border-black/10 bg-[#f1e8d4]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/revamp/what-we-make/FMS_3462.jpg"
                  alt="Business Card Sample Kit"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="k text-[9px] mb-2 tracking-[0.28em]">Executive &amp; Corporate</p>
              <h3 className="font-serif font-medium text-2xl sm:text-3xl text-black tracking-tight mb-2">
                Business Card Sample Kit
              </h3>
              <p className="font-serif font-medium text-xl text-black mb-3">
                ₹1,000 <span className="font-sans text-xs text-[#7b7566] tracking-normal font-light">(100% Credited on order)</span>
              </p>
              <p className="text-xs sm:text-sm text-[#444] font-light leading-relaxed mb-6">
                Thick unbendable cotton cards featuring mirror gold edge gilding, sculpted blind deboss, duplexed color cores, and luxury stationery finishes for distinguished practices.
              </p>
            </div>
            <Link
              href="https://wa.me/+918416099340?text=I%20would%20like%20to%20order%20the%20Business%20Card%20Sample%20Kit"
              target="_blank"
              rel="noopener noreferrer"
              className="btn self-start"
            >
              Order Business Kit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
