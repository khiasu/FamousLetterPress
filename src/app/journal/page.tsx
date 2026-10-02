import type { Metadata } from "next";
import Link from "next/link";
import { getCMSArticles } from "@/lib/cms/store";

export const metadata: Metadata = {
  title: "The Journal | Letterpress Guides, Materials & Etiquette | Famous Letterpress",
  description:
    "Original essays and guides on letterpress mechanics, pure cotton paper stocks, wedding invitation suite checklists, and printing craftsmanship from our Nagaland pressroom.",
};

export default function JournalIndexPage() {
  const articles = getCMSArticles();
  const featuredArticle = articles[0] || {
    id: "default",
    title: "The Anatomy of Letterpress",
    slug: "anatomy-of-letterpress",
    excerpt: "Exploring the craft of relief printing.",
    category: "Craft",
    readTime: "5 min",
    publishedAt: "2026",
    image: "https://famousletterpress.com/wp-content/uploads/2022/06/craft-1.jpg",
  };
  const regularArticles = articles.slice(1);

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="pt-28 pb-14 md:pt-36 md:pb-20 border-b border-[#E5E5E5]">
        <div className="w">
          <div className="flex items-center gap-2 mb-4 text-[10px] tracking-[0.16em] uppercase text-[#888] font-sans">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <span>/</span>
            <span className="text-black">Journal</span>
          </div>
          <p className="k mb-2">Studio Notes &amp; Guides</p>
          <h1 className="d text-[clamp(42px,10vw,80px)] leading-[0.95] mt-2 mb-6 font-serif">
            The Journal of <i>Fine Print</i>
          </h1>
          <p className="text-[#3b372e] text-sm sm:text-base max-w-2xl font-light leading-relaxed">
            Practical guides, craft essays, and etiquette notes from our pressroom in Nagaland. Demystifying cotton paper, vintage platen presswork, and the tactile architecture of wedding stationery.
          </p>
        </div>
      </section>

      {/* Featured Lead Article */}
      <section className="py-16 md:py-20 bg-white border-b border-[#E5E5E5]">
        <div className="w">
          <div className="border border-[rgba(14,14,14,0.1)] p-6 sm:p-8 transition-all hover:shadow-[0_16px_24px_-12px_rgba(60,45,20,0.15)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono text-[#7b7566] mb-4 tracking-widest uppercase">
                  <span className="text-black font-medium">
                    Featured Guide · {featuredArticle.category}
                  </span>
                  <span>•</span>
                  <span>{featuredArticle.readTime}</span>
                  <span>•</span>
                  <span>{featuredArticle.publishedAt}</span>
                </div>

                <Link href={`/journal/${featuredArticle.slug}`}>
                  <h2 className="font-serif text-2xl sm:text-3xl text-black mb-4 hover:opacity-70 transition-opacity tracking-tight font-medium">
                    {featuredArticle.title}
                  </h2>
                </Link>
                <p className="text-sm text-[#3b372e] font-light leading-relaxed mb-6">
                  {featuredArticle.excerpt}
                </p>
                <Link href={`/journal/${featuredArticle.slug}`} className="btn">
                  Read Full Guide
                </Link>
              </div>

              <div className="lg:col-span-5">
                <div className="aspect-[4/3] overflow-hidden border border-[rgba(14,14,14,0.1)] group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Articles */}
      <section className="py-20 md:py-28 bg-white border-b border-[#E5E5E5]">
        <div className="w">
          <div className="mb-12">
            <p className="k mb-2">Recent Publications</p>
            <h2 className="d text-[clamp(32px,7vw,56px)] leading-[0.95] font-serif">
              Guides on Paper, Inks &amp; <i>Etiquette</i>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {regularArticles.map((art) => (
              <div
                key={art.id}
                className="border border-[rgba(14,14,14,0.1)] bg-white flex flex-col justify-between group transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_24px_-12px_rgba(60,45,20,0.15)]"
              >
                <div>
                  <div className="aspect-[16/10] bg-[#f5f2ed] overflow-hidden border-b border-[rgba(14,14,14,0.08)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-5 sm:p-6">
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#7b7566] mb-3 tracking-widest uppercase">
                      <span className="text-black font-medium">{art.category}</span>
                      <span>{art.readTime}</span>
                    </div>

                    <Link href={`/journal/${art.slug}`}>
                      <h3 className="font-serif text-lg text-black mb-3 group-hover:opacity-70 transition-opacity tracking-tight font-medium">
                        {art.title}
                      </h3>
                    </Link>
                    <p className="text-xs text-[#555] font-light leading-relaxed">
                      {art.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                  <div className="pt-4 border-t border-[rgba(14,14,14,0.08)] flex items-center justify-between">
                    <span className="text-[10px] text-[#7b7566] font-mono tracking-wider">{art.publishedAt}</span>
                    <Link
                      href={`/journal/${art.slug}`}
                      className="ln"
                    >
                      Read Article
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Kit Promo */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-narrow text-center">
          <p className="k mb-2">Physical Experience</p>
          <h2 className="d text-[clamp(32px,7vw,56px)] leading-[0.95] mt-2 mb-4 font-serif">
            Reading about paper is good. <i>Touching</i> it is better.
          </h2>
          <p className="text-sm sm:text-base text-[#3b372e] max-w-lg mx-auto mb-8 font-light leading-relaxed">
            Order our Wedding or Business Card Sample Kit to evaluate 600gsm cotton board, hot foil stamping, and debossed relief with your own hands.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link href="/weddings/wedding-sample-kit" className="btn">
              Order Wedding Sample Kit (₹1,500)
            </Link>
            <Link href="/business-cards/business-card-sample-kit" className="ln">
              Order Business Card Kit (₹1,000)
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
