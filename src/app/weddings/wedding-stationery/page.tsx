import type { Metadata } from "next";
import Link from "next/link";
import { getCMSServices, getCMSSampleKits } from "@/lib/cms/store";

export const metadata: Metadata = {
  title: "Bespoke Letterpress Wedding Stationery | Famous Letterpress",
  description:
    "Handcrafted letterpress wedding invitations, save-the-dates, and luxury paper suites pressed on 100% cotton paper in Nagaland, India.",
};

export default function WeddingStationeryPage() {
  const service = getCMSServices()["wedding-stationery"];
  const sampleKit = getCMSSampleKits()["wedding-sample-kit"];

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="pt-28 pb-14 md:pt-36 md:pb-20 border-b border-[#E5E5E5]">
        <div className="w">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4 text-[10px] tracking-[0.16em] uppercase text-[#888888] font-mono">
              <Link href="/" className="hover:text-black transition-colors">Home</Link>
              <span>/</span>
              <Link href="/weddings" className="hover:text-black transition-colors">Weddings</Link>
              <span>/</span>
              <span className="text-black">Wedding Stationery</span>
            </div>
            <p className="k mb-2">Handcrafted in Nagaland</p>
            <h1 className="d text-[clamp(36px,9vw,72px)] leading-[0.95] mt-2 mb-6 font-serif">
              {service.title}
            </h1>
            <p className="text-[#3b372e] text-base md:text-lg max-w-2xl font-light leading-relaxed mb-8">
              {service.tagline}. {service.shortDesc}
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Link href="/weddings/early-bride" className="btn">
                Enquire via Early Bride
              </Link>
              <Link href="/weddings/wedding-sample-kit" className="ln">
                Order Sample Kit (₹{sampleKit.price})
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Overview & Craft Ethos */}
      <section className="py-20 md:py-28 bg-white border-b border-[#E5E5E5]">
        <div className="w">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="k mb-2">Our Approach</p>
              <h2 className="d text-[clamp(28px,6vw,48px)] leading-[1.05] mt-2 mb-6 font-serif">
                Designers turned printers: <i>intentionality</i> in every bite.
              </h2>
              <div className="space-y-4 text-[#3b372e] text-sm sm:text-base font-light leading-relaxed">
                {service.fullDescription.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-[rgba(14,14,14,0.1)]">
                <div className="text-[10px] uppercase tracking-widest font-mono text-black font-medium mb-1">
                  Standard Lead Time
                </div>
                <div className="font-serif text-2xl text-black">{service.leadTime}</div>
                <div className="text-xs text-[#7b7566] mt-1 font-light">
                  Expedited slots available upon studio request.
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              {/* Materials Card */}
              <div className="border border-[rgba(14,14,14,0.1)] p-6 sm:p-8 bg-white">
                <p className="k mb-2">Sensory Substrates</p>
                <h3 className="font-serif text-xl sm:text-2xl text-black font-medium tracking-tight mb-4">
                  Cotton Stocks &amp; Physical Materials
                </h3>
                <ul className="space-y-3">
                  {service.materials.map((mat) => (
                    <li key={mat} className="flex items-start gap-3 text-sm text-[#3b372e] font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0" />
                      <span>{mat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Techniques Card */}
              <div className="border border-[rgba(14,14,14,0.1)] p-6 sm:p-8 bg-white">
                <p className="k mb-2">Press Capabilities</p>
                <h3 className="font-serif text-xl sm:text-2xl text-black font-medium tracking-tight mb-4">
                  Finishes &amp; Print Techniques
                </h3>
                <ul className="space-y-3">
                  {service.techniques.map((tech) => (
                    <li key={tech} className="flex items-start gap-3 text-sm text-[#3b372e] font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Process Steps */}
      <section className="py-20 md:py-28 bg-white border-b border-[#E5E5E5]">
        <div className="w">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="k mb-2">Transparent Workflow</p>
            <h2 className="d text-[clamp(32px,7vw,56px)] leading-[0.95] mt-2 font-serif">
              How your suite comes to <i>life</i>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {service.processSteps?.map((step, idx) => (
              <div
                key={step.title}
                className="border border-[rgba(14,14,14,0.1)] p-5 sm:p-6 h-full flex flex-col justify-between bg-white"
              >
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-black font-semibold block mb-2">
                    0{idx + 1}
                  </span>
                  <h3 className="font-serif text-lg text-black mb-2 font-medium">{step.title}</h3>
                  <p className="text-xs text-[#555] leading-relaxed font-light">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service FAQs */}
      <section className="py-20 md:py-28 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-[760px] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="k mb-2">Frequently Asked Questions</p>
            <h2 className="d text-[clamp(32px,7vw,52px)] leading-[0.95] mt-2 font-serif">
              Answers on Wedding <i>Stationery</i>
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs?.map((faq) => (
              <div key={faq.question} className="border border-[rgba(14,14,14,0.1)] p-6 bg-white">
                <h3 className="font-serif text-lg text-black mb-2 font-medium">{faq.question}</h3>
                <p className="text-sm text-[#3b372e] leading-relaxed font-light">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[680px] mx-auto px-6 text-center">
          <p className="k mb-2">Take The First Step</p>
          <h2 className="d text-[clamp(32px,7vw,56px)] leading-[0.95] mt-2 mb-4 font-serif">
            Experience the paper or begin your <i>design</i>
          </h2>
          <p className="text-sm sm:text-base text-[#3b372e] max-w-lg mx-auto mb-8 font-light leading-relaxed">
            Whether you want to hold our cotton paper swatches in your hands or are ready to schedule your consultation, our Nagaland studio is ready to guide you.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link href="/weddings/early-bride" className="btn">
              Submit Early Bride Enquiry
            </Link>
            <Link href="/weddings/wedding-sample-kit" className="ln">
              Order Wedding Sample Kit (₹{sampleKit.price})
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
