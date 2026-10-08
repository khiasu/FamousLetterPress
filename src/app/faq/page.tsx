import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { getCMSFAQs } from "@/lib/cms/store";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Famous Letterpress",
  description:
    "Everything you need to know about our letterpress printing, wedding suites, cotton papers, turnaround times, sample kits, and delivery across India.",
};

export default function FAQPage() {
  const faqs = getCMSFAQs();
  const categories = Array.from(new Set(faqs.map((f) => f.category)));
  const faqSections = categories.map((cat) => ({
    category: cat,
    items: faqs
      .filter((f) => f.category === cat)
      .map((f) => ({ q: f.question, a: f.answer })),
  }));

  return (
    <div className="bg-white min-h-screen">
      {/* ── Header ── */}
      <section className="pt-28 pb-14 md:pt-36 md:pb-20 border-b border-[#E5E5E5]">
        <div className="w">
          <Reveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4 text-[10px] tracking-[0.16em] uppercase text-[#888888] font-sans">
                <Link href="/" className="hover:text-black transition-colors">Home</Link>
                <span>/</span>
                <span className="text-black">FAQ</span>
              </div>
              <p className="eyebrow mb-2">Help &amp; Clarity</p>
              <h1 className="text-black mt-2 mb-6 font-serif">
                Frequently Asked <em className="font-light">Questions</em>
              </h1>
              <p className="text-base md:text-lg text-[#555555] max-w-2xl font-light leading-relaxed mb-8">
                Clear answers regarding our printing techniques, cotton papers, proofing workflows, turnaround times, and delivery across India and internationally.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Categorized FAQs ── */}
      <section className="section bg-white">
        <div className="w">
          <div className="space-y-16">
            {faqSections.map((sec, secIdx) => (
              <div key={sec.category} className="space-y-6">
                <Reveal delay={secIdx * 0.08}>
                  <div className="border-b border-[#E5E5E5] pb-3 mb-6">
                    <h2 className="text-xl md:text-2xl font-serif text-black">{sec.category}</h2>
                  </div>
                </Reveal>

                <div className="space-y-4">
                  {sec.items.map((item, idx) => (
                    <Reveal key={item.q} delay={idx * 0.04}>
                      <div className="bg-white border border-[#E5E5E5] p-6 md:p-8">
                        <h3 className="font-sans text-base md:text-lg font-medium text-black mb-2 tracking-[-0.01em]">{item.q}</h3>
                        <p className="text-xs md:text-sm text-[#555555] font-light leading-relaxed">{item.a}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Still Have Questions CTA ── */}
      <section className="section-lg bg-white text-black border-t border-[#E5E5E5]">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-2xl">
              <p className="k mb-2">Direct Studio Support</p>
              <h2 className="d text-[clamp(32px,6vw,56px)] leading-[1.05] font-serif text-black mb-4">
                Still have a <i>specific question?</i>
              </h2>
              <p className="text-sm md:text-base text-[#555] mb-8 font-light leading-relaxed">
                Reach out directly to our pressroom team on WhatsApp or send us an email. We are always glad to assist.
              </p>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <a
                  href="https://wa.me/919862800000?text=Hello%20Famous%20Letterpress%2C%20I%20have%20a%20question%20about..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Chat on WhatsApp
                </a>
                <Link
                  href="/start-a-project"
                  className="ln"
                >
                  Start a Project &rarr;
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
