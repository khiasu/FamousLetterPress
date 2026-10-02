import Link from "next/link";

export function CTASection() {
  return (
    <section className="fin border-t border-[rgba(14,14,14,0.14)] bg-white py-24 sm:py-32" id="consultation">
      <div className="w">
        <p className="k mb-6">Begin &middot; Consultation</p>
        <h2 className="d text-[clamp(46px,11vw,110px)] leading-[0.95] tracking-[-0.035em] my-6">
          Let&rsquo;s figure it out <i>together.</i>
        </h2>
        <p className="text-[#3b372e] text-base sm:text-lg max-w-[38ch] mb-10 leading-relaxed font-light">
          Tell us about your day, your brand, or your bespoke idea. We reply with material recommendations, estimates, and complimentary mockups within 24 hours.
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <a
            className="btn"
            href="https://wa.me/+918416099340"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a consult
          </a>
          <Link href="/start-a-project" className="ln">
            Start a project
          </Link>
        </div>
      </div>
    </section>
  );
}

