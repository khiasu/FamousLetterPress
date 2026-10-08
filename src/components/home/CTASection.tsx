import Link from "next/link";

export function CTASection() {
  return (
    <section className="fin border-t border-[rgba(14,14,14,0.14)] bg-white py-24 sm:py-32" id="consultation">
      <div className="w">
        <p className="k mb-6">Begin &middot; Consultation</p>
        <h2 className="d text-[clamp(46px,11vw,110px)] leading-[0.95] tracking-[-0.035em] my-6">
          Let&rsquo;s figure it out <span className="sm:block"><i>together.</i></span>
        </h2>
        <p className="text-[#3b372e] text-base sm:text-lg max-w-[38ch] mb-10 leading-relaxed font-light">
          Tell us about your day, your brand, or your bespoke idea. We reply with material recommendations, estimates, and complimentary mockups within 24 hours.
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <Link
            href="/our-work/wedding-invites#early-bride"
            className="inline-flex items-center justify-center px-8 sm:px-9 py-4 bg-black text-white hover:bg-[#222] transition-colors rounded-none text-[11px] sm:text-xs uppercase tracking-[0.22em] font-sans font-medium whitespace-nowrap shadow-sm"
          >
            Book a Consultation
          </Link>
          <Link href="/start-a-project" className="ln">
            Start a project
          </Link>
        </div>
      </div>
    </section>
  );
}

