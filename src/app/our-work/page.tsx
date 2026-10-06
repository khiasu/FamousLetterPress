import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Work & Portfolio | Famous Letterpress",
  description:
    "Explore our 7 core disciplines of letterpress craftsmanship: wedding invites, bespoke envelopes, seal stickers, luxury business cards, archival certificates, design & illustration, and custom artisanal commissions.",
};

const WORK_CATEGORIES = [
  {
    num: "01",
    title: "Wedding Invites",
    desc: "We believe that one of life’s most special occasions deserves an equally extraordinary invitation. We offer a wide selection of handcrafted, custom, and ready-made wedding stationery that can be personalized to make a big impression on your big day.",
    href: "/our-work/wedding-invites",
    img: "/assets/our-work/wedding-invites.jpg",
  },
  {
    num: "02",
    title: "Envelopes",
    desc: "Our vintage presses provide us the unique ability to print on thick paper stock and irregular shapes. This allows us to make stunning personalized envelopes ideal for personal and professional use.",
    href: "/our-work/envelopes",
    img: "/assets/our-work/envelopes.jpg",
  },
  {
    num: "03",
    title: "Seal Stickers",
    desc: "Our die-cut seals are made from thick cotton paper and are easy to use and durable. Simply remove the release paper and seal your invite. No mess, no waste of envelopes.",
    href: "/our-work/seal-stickers",
    img: "/assets/our-work/seal-stickers.jpg",
  },
  {
    num: "04",
    title: "Business Cards",
    desc: "The use of business cards dates back to the 15th Century. Today, the business card is an extension of your brand’s identity and plays a crucial role in your first impression. Our business cards help reinforce your image and leave a lasting impression.",
    href: "/our-work/business-cards",
    img: "/assets/our-work/business-cards.jpg",
  },
  {
    num: "05",
    title: "Certificates",
    desc: "Certificates are a symbol of achievements, and we believe that they should feel like that as well. All our certificates are printed on acid-free cotton papers (ideal for archival purposes), debossed on our press, and then foil stamped, giving them a royal finish that is very hard to duplicate with a regular printer or press.",
    href: "/our-work/certificates",
    img: "/assets/our-work/certificates.jpg",
  },
  {
    num: "06",
    title: "Design & Illustrations",
    desc: "Our team of experienced in house designers works with our clients to help manifest their vision. Our approach to design and illustration coupled with our collaborative approach makes for engaging works that are guaranteed to leave a lasting impression.",
    href: "/our-work/design-illustration",
    img: "/assets/our-work/design-illustrations.jpg",
  },
  {
    num: "07",
    title: "Custom Works",
    desc: "Our team is always up for a challenge. Coasters, notebooks, Pamphlets, decor pieces, we’ve done it all! Have a custom job in mind? Tell us all about it! Fill out this form, and someone from our team will get back to you.",
    href: "/our-work/custom-works",
    img: "/assets/our-work/custom-works.jpg",
  },
];

export default function OurWorkPage() {
  return (
    <div className="min-h-screen text-black select-none">
      {/* ── Page Header ── */}
      <section className="pt-28 pb-14 md:pt-36 md:pb-20 border-b border-[rgba(14,14,14,0.08)]">
        <div className="w">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4 text-[10px] tracking-[0.18em] uppercase text-[#7b7566] font-mono">
              <Link href="/" className="hover:text-black transition-colors">Home</Link>
              <span>/</span>
              <span className="text-black font-medium">Our Work</span>
            </div>
            <p className="k mb-2">Handcrafted in Nagaland &bull; Studio Archive</p>
            <h1 className="d text-[clamp(40px,8vw,80px)] leading-[0.98] mt-2 mb-6 font-serif text-black">
              Our <i>work.</i>
            </h1>
            <p className="text-base sm:text-lg text-[#444] max-w-2xl font-light leading-relaxed mb-8">
              Our expertise lies in working with our clients to deliver transcending experiences and timeless products, find out more about how we can help you
            </p>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <Link href="/start-a-project" className="btn">
                Start a project
              </Link>
              <Link href="/weddings/wedding-sample-kit" className="ln">
                Order Sample Kit &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7 Work Disciplines Showcase ── */}
      <section className="py-16 md:py-24" aria-label="7 Disciplines of Our Work">
        <div className="w space-y-12 md:space-y-16">
          {WORK_CATEGORIES.map((item, idx) => (
            <div
              key={item.title}
              className={`flex flex-col ${
                idx % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              } gap-8 md:gap-14 items-center bg-[#FAF8F5] border border-[rgba(14,14,14,0.12)] p-6 sm:p-10 md:p-12 rounded-xs shadow-[0_12px_28px_-16px_rgba(0,0,0,0.08),0_2px_4px_rgba(0,0,0,0.02)]`}
            >
              <div className="w-full md:w-1/2 relative aspect-[4/3] overflow-hidden bg-[#F0ECE1] rounded-xs group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <span className="text-[11px] font-mono tracking-widest text-[#7b7566] uppercase mb-3">
                  Category {item.num}
                </span>
                <h2 className="font-serif font-medium text-[clamp(28px,4vw,42px)] leading-[1.05] tracking-[-0.02em] mb-4 text-black">
                  {item.title}
                </h2>
                <p className="text-sm sm:text-base text-[#555] font-light leading-relaxed mb-8">
                  {item.desc}
                </p>
                <div>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-black border-b border-black pb-1 hover:opacity-60 transition-opacity"
                  >
                    <span>View Projects</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Studio Inquiry ── */}
      <section className="py-20 md:py-28 text-center border-t border-[rgba(14,14,14,0.08)]">
        <div className="max-w-2xl mx-auto px-6">
          <p className="k mb-2">Bespoke Inquiries</p>
          <h2 className="d text-[clamp(32px,6vw,56px)] leading-[1.05] font-serif text-black mb-4">
            Have a custom design in <i>mind?</i>
          </h2>
          <p className="text-sm sm:text-base text-[#555] max-w-lg mx-auto mb-8 font-light leading-relaxed">
            We collaborate with couples, designers, brands, and agencies worldwide to create unforgettable letterpress print.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            <Link href="/start-a-project" className="btn">
              Submit Project Details
            </Link>
            <a
              href="https://wa.me/919862800000?text=Hello%20Famous%20Letterpress%2C%20I%20would%20like%20to%20enquire%20about..."
              target="_blank"
              rel="noopener noreferrer"
              className="ln"
            >
              Contact Studio &rarr;
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
