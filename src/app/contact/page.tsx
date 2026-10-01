import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Contact Famous Letterpress | Nagaland Atelier",
  description:
    "Get in touch with Famous Letterpress. Contact our atelier via WhatsApp, email, or schedule a consultation for your upcoming wedding or brand stationery.",
};

const studioDetails = {
  name: "Famous Letterpress Atelier",
  location: "Dimapur, Nagaland, India",
  email: "hello@famousletterpress.com",
  phone: "+91 93660 12345",
  whatsapp: "+91 93660 12345",
  hours: "Monday – Saturday: 9:30 AM – 6:00 PM IST",
  instagram: "https://www.instagram.com/famousletterpressindia/",
  facebook: "https://www.facebook.com/FamousLetterpress/",
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* ── Header ── */}
      <section className="pt-28 pb-14 md:pt-36 md:pb-20 border-b border-[#E5E5E5]">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4 text-[10px] tracking-[0.16em] uppercase text-[#888888] font-sans">
                <Link href="/" className="hover:text-black transition-colors">Home</Link>
                <span>/</span>
                <span className="text-black">Contact</span>
              </div>
              <p className="eyebrow mb-2">Get In Touch</p>
              <h1 className="text-black mt-2 mb-6 font-serif">
                Connect with our <em className="font-light">atelier.</em>
              </h1>
              <p className="text-base md:text-lg text-[#555555] max-w-2xl font-light leading-relaxed mb-8">
                Whether you have an upcoming wedding celebration, need executive business cards, or wish to explore a trade collaboration, we welcome your conversation.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Contact Options ── */}
      <section className="section bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Primary Direct Contact Channels */}
            <div className="lg:col-span-7 space-y-8">
              <Reveal>
                <div className="bg-white border border-[#E5E5E5] p-8 md:p-10">
                  <p className="eyebrow mb-2">Direct Messaging</p>
                  <h2 className="text-2xl font-serif text-black mb-3">Fastest Response via WhatsApp</h2>
                  <p className="text-sm text-[#555555] mb-6 font-light leading-relaxed">
                    For quick pricing checks, paper availability, or to share inspiration photos directly with our press team, message us on WhatsApp.
                  </p>
                  <a
                    href={`https://wa.me/${studioDetails.whatsapp.replace(/[^0-9]/g, "")}?text=Hello%20Famous%20Letterpress,%20I%20would%20like%20to%20enquire%20about...`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex px-7 py-3.5 text-[11px] tracking-[0.14em] uppercase bg-black text-white hover:bg-[#222] transition-colors"
                  >
                    Chat on WhatsApp ({studioDetails.whatsapp})
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="bg-white border border-[#E5E5E5] p-8 md:p-10">
                  <p className="eyebrow mb-2">Email Correspondence</p>
                  <h2 className="text-2xl font-serif text-black mb-3">Email Artwork &amp; Briefs</h2>
                  <p className="text-sm text-[#555555] mb-6 font-light leading-relaxed">
                    Send vector artwork files (.AI, .PDF), project briefs, or trade partnership inquiries to our primary studio email.
                  </p>
                  <a
                    href={`mailto:${studioDetails.email}`}
                    className="font-serif text-xl text-black hover:opacity-70 transition-opacity underline decoration-border-hairline underline-offset-4"
                  >
                    {studioDetails.email}
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Studio Information Sidebar */}
            <div className="lg:col-span-5 space-y-8">
              <Reveal delay={0.15}>
                <div className="bg-[#F7F7F7] border border-[#E5E5E5] p-8 space-y-6">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#888888] block mb-1">
                      Atelier Location
                    </span>
                    <div className="font-serif text-xl text-black">{studioDetails.name}</div>
                    <div className="text-sm text-[#555555] font-light mt-0.5">{studioDetails.location}</div>
                  </div>

                  <div className="pt-4 border-t border-[#E5E5E5]">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#888888] block mb-1">
                      Studio Hours
                    </span>
                    <div className="text-sm text-black font-sans">{studioDetails.hours}</div>
                  </div>

                  <div className="pt-4 border-t border-[#E5E5E5]">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#888888] block mb-2">
                      Social Archives
                    </span>
                    <div className="flex gap-4">
                      <a
                        href={studioDetails.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs uppercase tracking-wider text-black hover:opacity-60 transition-opacity font-sans"
                      >
                        Instagram →
                      </a>
                      <a
                        href={studioDetails.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs uppercase tracking-wider text-black hover:opacity-60 transition-opacity font-sans"
                      >
                        Facebook →
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
