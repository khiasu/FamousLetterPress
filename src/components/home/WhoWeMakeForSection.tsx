import Link from "next/link";

export function WhoWeMakeForSection() {
  return (
    <section id="who" className="wh py-24 md:py-32 bg-[#faf5ea] border-b border-[#E5E5E5]" aria-label="Who We Make For">
      <div className="w">
        <div className="flex justify-between items-center mb-6">
          <p className="k">Who we make for</p>
          <p className="k">(04)</p>
        </div>

        <h2 className="d text-[clamp(42px,11vw,84px)] leading-[0.95] mt-2 mb-10 font-serif">
          Made for <i>you</i>
        </h2>

        <div className="space-y-0">
          <details className="border-t border-black/15 py-2 group" open>
            <summary className="list-none cursor-pointer flex items-baseline gap-4 py-6 font-serif font-medium text-[clamp(28px,7vw,50px)] leading-[1] text-black tracking-[-0.03em] select-none">
              <span>Couples</span>
              <small className="font-sans text-[10px] tracking-[0.2em] text-[#7b7566] uppercase">I</small>
              <span className="ml-auto font-sans font-extralight text-3xl group-open:rotate-45 transition-transform duration-300">
                +
              </span>
            </summary>
            <div className="pl-6 pb-6 max-w-lg space-y-4">
              <p className="text-sm text-[#3b372e] font-light leading-relaxed">
                Wedding invitations, RSVP suites, and day-of stationery designed to be treasured long after your celebration ends. We collaborate with you from initial moodboard to final hand assembly.
              </p>
              <Link
                href="https://wa.me/+918416099340?text=I%20am%20a%20couple%20looking%20for%20wedding%20invitations"
                target="_blank"
                rel="noopener noreferrer"
                className="ln inline-block"
              >
                Start couple consultation
              </Link>
            </div>
          </details>

          <details className="border-t border-black/15 py-2 group">
            <summary className="list-none cursor-pointer flex items-baseline gap-4 py-6 font-serif font-medium text-[clamp(28px,7vw,50px)] leading-[1] text-black tracking-[-0.03em] select-none">
              <span>Designers &amp; Planners</span>
              <small className="font-sans text-[10px] tracking-[0.2em] text-[#7b7566] uppercase">II</small>
              <span className="ml-auto font-sans font-extralight text-3xl group-open:rotate-45 transition-transform duration-300">
                +
              </span>
            </summary>
            <div className="pl-6 pb-6 max-w-lg space-y-4">
              <p className="text-sm text-[#3b372e] font-light leading-relaxed">
                Trade collaboration for wedding planners, graphic designers, and art directors. Send us your print-ready vector artwork or let our atelier assist with formulation, paper selection, and die making.
              </p>
              <Link
                href="/channel-partners"
                className="ln inline-block"
              >
                Join partner program
              </Link>
            </div>
          </details>

          <details className="border-t border-b border-black/15 py-2 group">
            <summary className="list-none cursor-pointer flex items-baseline gap-4 py-6 font-serif font-medium text-[clamp(28px,7vw,50px)] leading-[1] text-black tracking-[-0.03em] select-none">
              <span>Brands &amp; B2B</span>
              <small className="font-sans text-[10px] tracking-[0.2em] text-[#7b7566] uppercase">III</small>
              <span className="ml-auto font-sans font-extralight text-3xl group-open:rotate-45 transition-transform duration-300">
                +
              </span>
            </summary>
            <div className="pl-6 pb-6 max-w-lg space-y-4">
              <p className="text-sm text-[#3b372e] font-light leading-relaxed">
                Uncompromising executive cards, luxury packaging sleeves, certificates, and bespoke letterheads for discerning brands seeking physical authority and tactile distinction.
              </p>
              <Link
                href="/business-cards"
                className="ln inline-block"
              >
                Inquire B2B
              </Link>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
