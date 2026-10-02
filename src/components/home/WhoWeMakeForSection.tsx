import Link from "next/link";

const AUDIENCES = [
  {
    num: "I",
    title: "Couples",
    description:
      "Wedding invitations, RSVP suites, and day-of stationery designed to be treasured long after your celebration. We collaborate from initial moodboard to final hand assembly.",
    cta: "Start couple consultation",
    href: "https://wa.me/+918416099340?text=I%20am%20a%20couple%20looking%20for%20wedding%20invitations",
    external: true,
    img: "/assets/revamp/carousel/FMS_7392.jpg",
  },
  {
    num: "II",
    title: "Designers & Planners",
    description:
      "Trade collaboration for wedding planners, graphic designers, and art directors. Send us print-ready artwork or let our atelier assist with formulation, paper selection, and die making.",
    cta: "Join partner program",
    href: "/channel-partners",
    external: false,
    img: "/assets/revamp/how-we-make/FMS_7401.jpg",
  },
  {
    num: "III",
    title: "Brands & B2B",
    description:
      "Uncompromising executive cards, luxury packaging sleeves, certificates, and bespoke letterheads for discerning brands seeking physical authority and tactile distinction.",
    cta: "Inquire B2B",
    href: "/business-cards",
    external: false,
    img: "/assets/revamp/what-we-make/FMS_3781.jpg",
  },
];

export function WhoWeMakeForSection() {
  return (
    <section
      id="who"
      className="py-24 md:py-32 bg-white border-b border-[#E5E5E5]"
      aria-label="Who We Make For"
    >
      <div className="w">
        <div className="mb-6">
          <p className="k">Who we make for</p>
        </div>

        <h2 className="d text-[clamp(42px,11vw,84px)] leading-[0.95] mt-2 mb-4 font-serif">
          Made for <i>you</i>
        </h2>
        <p className="text-[#333] text-sm sm:text-base max-w-xl font-light leading-relaxed mb-14">
          Whether you&rsquo;re a couple planning your wedding day, a designer seeking a print partner, or a brand that demands tactile distinction &mdash; we make for people who value craft.
        </p>

        {/* 3-Column Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {AUDIENCES.map((audience) => (
            <div
              key={audience.title}
              className="group border border-[#E5E5E5] bg-white transition-all duration-300 hover:border-black"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F7F7F7]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={audience.img}
                  alt={audience.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="font-serif font-medium text-2xl text-black tracking-tight mb-3">
                  {audience.title}
                </h3>
                <p className="text-[13px] text-[#3b372e] font-light leading-relaxed mb-5">
                  {audience.description}
                </p>
                {audience.external ? (
                  <a
                    href={audience.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ln inline-block"
                  >
                    {audience.cta}
                  </a>
                ) : (
                  <Link href={audience.href} className="ln inline-block">
                    {audience.cta}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
