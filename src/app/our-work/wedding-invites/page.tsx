import type { Metadata } from "next";
import Link from "next/link";
import { EarlyBrideForm } from "@/components/forms/EarlyBrideForm";

export const metadata: Metadata = {
  title: "Wedding Invites Portfolio & Early Bride Consultation | Famous Letterpress",
  description:
    "Handcrafted letterpress wedding invitations, custom wax seals, illustrated liners, and bespoke suites pressed on 100% cotton paper in Nagaland, India. Explore our portfolio, request pricing, book an Early Bride consultation, or order physical sample kits.",
};

const WEDDING_GALLERY = [
  {
    title: "Daniella & Minot",
    desc: "Letterpress wedding invitation suite debossed on heavy pure cotton paper with custom envelopes.",
    img: "/assets/our-work/wedding-invites/daniella-minot.jpg",
  },
  {
    title: "Livika & Gideon",
    desc: "Handcrafted letterpress wedding cards with delicate typography, blind debossing and fine details.",
    img: "/assets/our-work/wedding-invites/livika-gideon.jpg",
  },
  {
    title: "Anita & Jeffrey",
    desc: "Multi-piece ceremonial wedding suite on ultra-thick cotton cardstock with matching reply cards.",
    img: "/assets/our-work/wedding-invites/anita-jeffrey.jpg",
  },
  {
    title: "Durga & Viceroy",
    desc: "Rose gold metallic foil stamping paired with deep letterpress impression on archival cotton paper.",
    img: "/assets/our-work/wedding-invites/durga-viceroy.jpg",
  },
  {
    title: "Sakune & Toito",
    desc: "Bespoke Indian wedding suite with traditional motifs debossed into textured cotton stock.",
    img: "/assets/our-work/wedding-invites/sakune-toito.jpg",
  },
  {
    title: "Sohan & Akshatha",
    desc: "Vibrant red and blind impression letterpress wedding cards with custom monogram crest.",
    img: "/assets/our-work/wedding-invites/sohan-akshatha.jpg",
  },
  {
    title: "Himaka & Helika",
    desc: "Classic letterpress invitation featuring refined serif typography and hand-mixed ink tones.",
    img: "/assets/our-work/wedding-invites/himaka-helika.jpg",
  },
  {
    title: "Mimi & Seyie",
    desc: "Handcrafted floral wedding invitation suite with bespoke layout and coordinating inserts.",
    img: "/assets/our-work/wedding-invites/mimi-seyie.jpg",
  },
  {
    title: "Atif & Narjis",
    desc: "Sophisticated grey letterpress wedding invitation with timeless calligraphy typography.",
    img: "/assets/our-work/wedding-invites/atif-narjis.jpg",
  },
  {
    title: "Awala Lkr & Sangro Aier",
    desc: "Warm beige cotton suite with crisp deep bite impression and matching custom envelopes.",
    img: "/assets/our-work/wedding-invites/awala-sangro.jpg",
  },
  {
    title: "Chumchanbeni & Wonashi",
    desc: "Artisanal grey letterpress wedding suite with custom layout and subtle debossed details.",
    img: "/assets/our-work/wedding-invites/chumchanbeni-wonashi.jpg",
  },
  {
    title: "Jaremdi & Daniel",
    desc: "Hand-crafted wedding stationery set printed on vintage platen presses with rich ink density.",
    img: "/assets/our-work/wedding-invites/jaremdi-daniel.jpg",
  },
  {
    title: "Nesser Sangma & Neliyan",
    desc: "Letterpress grey suite on premium cotton cardstock with crisp typographic hierarchy.",
    img: "/assets/our-work/wedding-invites/nesser-neliyan.jpg",
  },
  {
    title: "Weku-u Therie & Vitho David",
    desc: "Bespoke wedding stationery suite debossed on heavy paper stock with coordinating stationery items.",
    img: "/assets/our-work/wedding-invites/weku-vitho.jpg",
  },
];

const TACTILE_DETAILS = [
  {
    title: "Handmade Euro-Flap Envelopes",
    detail: "Custom die-cut envelopes in pure cotton, handmade deckle paper, or Colorplan archival stocks.",
    image: "https://famousletterpress.com/wp-content/uploads/2026/05/FMS_4413-2000x2500.jpg",
  },
  {
    title: "Illustrated Envelope Liners",
    detail: "Custom venue illustrations, floral patterns, or blind-embossed monograms inside each envelope flap.",
    image: "https://famousletterpress.com/wp-content/uploads/2026/05/FMS_4395-2000x2500.jpg",
  },
  {
    title: "Botanical & Crest Wax Seals",
    detail: "Hand-poured flexible sealing wax in antique bronze, matte champagne, pearl white, or forest green.",
    image: "https://famousletterpress.com/wp-content/uploads/2026/04/wedkit-1-pics-1200x1200.jpg",
  },
  {
    title: "Edge Gilding & Beveling",
    detail: "Mirror-finish metallic foil applied by hand along the thick 600–900gsm beveled edges of your cards.",
    image: "https://famousletterpress.com/wp-content/uploads/2026/04/bizkit-01-1200x1200.jpg",
  },
];

const TIMELINE_STEPS = [
  {
    step: "01",
    time: "4 to 6 Months Before",
    title: "Design Discovery & Sample Kit",
    desc: "Order our Wedding Sample Kit to feel our 600–900gsm cotton board, foil finishes, and deckled edges in person.",
  },
  {
    step: "02",
    time: "3 to 4 Months Before",
    title: "Concept, Typesetting & Proofs",
    desc: "Submit your Early Bride consultation. We refine typographic proofs, select papers, and finalize foil tones and ink mixtures.",
  },
  {
    step: "03",
    time: "2 to 3 Months Before",
    title: "Presswork & Suite Delivery",
    desc: "We hand-mix inks and press your suite on vintage platen presses in Nagaland. Meticulously inspected, packaged, and shipped to your door.",
  },
  {
    step: "04",
    time: "6 to 8 Weeks Before",
    title: "Mailing to Guests",
    desc: "Your invitations are in the mail, giving loved ones ample time to RSVP and anticipate your celebration.",
  },
];

export default function WeddingInvitesPage() {
  return (
    <div className="min-h-screen text-black select-none">
      {/* ── Breadcrumb & Header ── */}
      <section className="pt-28 pb-14 md:pt-36 md:pb-20 border-b border-[rgba(14,14,14,0.08)]">
        <div className="w">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4 text-[10px] tracking-[0.18em] uppercase text-[#7b7566] font-mono">
              <Link href="/" className="hover:text-black transition-colors">Home</Link>
              <span>/</span>
              <Link href="/our-work" className="hover:text-black transition-colors">Our Work</Link>
              <span>/</span>
              <span className="text-black font-medium">Wedding Invites</span>
            </div>
            <p className="k mb-2">Category 01 &bull; Handcrafted Wedding Stationery</p>
            <h1 className="d text-[clamp(36px,7.5vw,72px)] leading-[1.0] mt-2 mb-6 font-serif text-black">
              Wedding <i>Invites.</i>
            </h1>
            <p className="text-base sm:text-lg text-[#444] max-w-2xl font-light leading-relaxed mb-8">
              We believe that one of life’s most special occasions deserves an equally extraordinary invitation. We offer a wide selection of handcrafted, custom, and ready-made wedding stationery that can be personalized to make a big impression on your big day.
            </p>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <Link href="/start-a-project" className="btn">
                Request Price
              </Link>
              <a
                href="#early-bride"
                className="btn bg-transparent text-black border border-black hover:bg-black hover:text-white"
              >
                Early Bride Consultation
              </a>
              <Link href="/weddings/wedding-sample-kit" className="ln">
                Order Wedding Sample Kit &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery Showcase ── */}
      <section className="py-16 md:py-24" aria-label="Wedding Invites Gallery">
        <div className="w">
          <div className="flex items-center justify-between mb-10 pb-4 border-b border-[rgba(14,14,14,0.08)]">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#7b7566]">
              Portfolio Gallery
            </span>
            <span className="text-xs text-[#888] font-light">
              600–900 GSM Pure Cotton Paper
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {WEDDING_GALLERY.map((item) => (
              <div
                key={item.title}
                className="bg-[#FAF8F5] border border-[rgba(14,14,14,0.12)] p-4 sm:p-5 flex flex-col rounded-xs transition-all duration-300 hover:border-black/35 hover:-translate-y-1 shadow-[0_10px_24px_-12px_rgba(0,0,0,0.06)]"
              >
                <div className="relative aspect-[4/3.2] overflow-hidden mb-4 bg-[#F0ECE1] rounded-xs group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif font-medium text-xl text-black mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-[#555] font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tactile Finishing & Details ── */}
      <section className="py-20 md:py-28 bg-[#FAF8F5] border-y border-[rgba(14,14,14,0.08)]" aria-label="Finishing & Details">
        <div className="w">
          <div className="max-w-xl mb-12">
            <p className="k mb-2">Tactile Finishing</p>
            <h2 className="d text-[clamp(32px,6vw,54px)] leading-[1.05] font-serif text-black mb-4">
              Envelopes, liners <i>&amp; wax seals.</i>
            </h2>
            <p className="text-xs sm:text-sm text-[#444] font-light leading-relaxed">
              Every detail of your wedding suite is customized. We craft bespoke envelope liners, pour custom wax seals with your monogram crest, and hand-bevel edges with mirror-finish foils.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TACTILE_DETAILS.map((detail) => (
              <div key={detail.title} className="border border-[rgba(14,14,14,0.12)] bg-white p-4 group hover:border-black transition-colors rounded-xs">
                <div className="relative aspect-square overflow-hidden bg-[#F0ECE1] mb-3 rounded-xs">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={detail.image}
                    alt={detail.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-sm font-serif text-black font-medium mb-1">{detail.title}</h3>
                <p className="text-xs text-[#555] font-light leading-relaxed">{detail.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4-Stage Wedding Timeline ── */}
      <section className="py-20 md:py-28 bg-white border-b border-[rgba(14,14,14,0.08)]" aria-label="Production Timeline">
        <div className="w">
          <div className="max-w-xl mb-12">
            <p className="k mb-2">Planning Guide</p>
            <h2 className="d text-[clamp(32px,6vw,54px)] leading-[1.05] font-serif text-black mb-4">
              The wedding stationery <i>timeline.</i>
            </h2>
            <p className="text-xs sm:text-sm text-[#444] font-light leading-relaxed">
              Letterpress is a physical, plate-making craft. We recommend booking early to reserve press time for your suite.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TIMELINE_STEPS.map((step) => (
              <div key={step.title} className="border border-[rgba(14,14,14,0.12)] bg-[#FAF8F5] p-6 flex flex-col justify-between rounded-xs">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#7b7566] block mb-2">
                    {step.step}
                  </span>
                  <p className="text-[10.5px] tracking-wide uppercase text-black font-medium font-mono mb-1">
                    {step.time}
                  </p>
                  <h3 className="text-base font-serif text-black font-medium mb-2">{step.title}</h3>
                  <p className="text-xs text-[#555] font-light leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dedicated Early Bride Consultation Form Section ── */}
      <section id="early-bride" className="py-20 md:py-28 bg-[#FAF8F5] scroll-mt-20 border-b border-[rgba(14,14,14,0.08)]">
        <div className="w">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <p className="k mb-2">Dedicated Bespoke Service</p>
            <h2 className="d text-[clamp(32px,6vw,54px)] leading-[1.05] font-serif text-black mb-4">
              The Early Bride <i>Experience.</i>
            </h2>
            <p className="text-sm sm:text-base text-[#444] font-light leading-relaxed">
              Whether you have a completed visual design or are just beginning to explore tactile letterpress, our Early Bride consultation helps us reserve press capacity, recommend paper stocks, and create an artisanal plan tailored to your wedding date.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white border border-[rgba(14,14,14,0.12)] p-6 sm:p-10 md:p-12 rounded-xs shadow-[0_12px_32px_-16px_rgba(0,0,0,0.08)]">
            <EarlyBrideForm />
          </div>
        </div>
      </section>

      {/* ── Bottom CTA & Quick Actions ── */}
      <section className="py-20 md:py-28 text-center bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <p className="k mb-2">Ready to Create Your Suite?</p>
          <h2 className="d text-[clamp(32px,6vw,54px)] leading-[1.05] font-serif text-black mb-4">
            Let’s craft something <i>unforgettable.</i>
          </h2>
          <p className="text-sm sm:text-base text-[#555] max-w-lg mx-auto mb-8 font-light leading-relaxed">
            Every Famous Letterpress suite is custom formulated. Share your wedding details, order our physical sample box, or chat directly with our team.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            <Link href="/start-a-project" className="btn">
              Request Custom Price
            </Link>
            <Link href="/weddings/wedding-sample-kit" className="btn bg-transparent text-black border border-black hover:bg-black hover:text-white">
              Order Sample Box (₹1,500)
            </Link>
            <a
              href="https://wa.me/+918416099340"
              target="_blank"
              rel="noopener noreferrer"
              className="ln"
            >
              WhatsApp Founder &rarr;
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
