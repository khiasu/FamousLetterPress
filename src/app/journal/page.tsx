import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { journalArticles } from "@/lib/data/articles";

export const metadata: Metadata = {
  title: "The Journal | Letterpress Guides, Materials & Etiquette | Famous Letterpress",
  description:
    "Original essays and guides on letterpress mechanics, pure cotton paper stocks, wedding invitation suite checklists, and printing craftsmanship from our Nagaland pressroom.",
};

export default function JournalIndexPage() {
  const featuredArticle = journalArticles[0];
  const regularArticles = journalArticles.slice(1);

  return (
    <div className="bg-cream">
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-sand">
        <div className="container-wide">
          <Reveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4 text-xs font-mono tracking-widest uppercase text-warm-stone">
                <Link href="/" className="hover:text-terracotta">Home</Link>
                <span>/</span>
                <span className="text-terracotta">Journal</span>
              </div>
              <span className="eyebrow text-terracotta">Studio Notes & Guides</span>
              <h1 className="display-lg text-charcoal mt-2 mb-6">The Journal of Fine Print</h1>
              <p className="body-lg text-warm-stone max-w-2xl font-light leading-relaxed mb-8">
                Practical guides, craft essays, and etiquette notes written by our pressroom in Nagaland. Demystifying cotton paper, vintage platen presswork, and the tactile architecture of wedding stationery.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured Lead Article */}
      <section className="py-16 md:py-20 bg-ivory border-b border-sand">
        <div className="container-wide">
          <Reveal>
            <div className="card-warm p-8 md:p-12 bg-cream hover:border-terracotta/40 transition-colors">
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-warm-stone mb-4">
                <span className="text-terracotta font-semibold uppercase tracking-wider">
                  Featured Guide · {featuredArticle.category}
                </span>
                <span>•</span>
                <span>{featuredArticle.readTime}</span>
                <span>•</span>
                <span>{featuredArticle.publishedAt}</span>
              </div>

              <Link href={`/journal/${featuredArticle.slug}`}>
                <h2 className="heading-xl text-charcoal mb-4 hover:text-terracotta transition-colors">
                  {featuredArticle.title}
                </h2>
              </Link>
              <p className="body-md text-warm-stone max-w-3xl font-light leading-relaxed mb-6">
                {featuredArticle.excerpt}
              </p>
              <div className="flex items-center gap-4">
                <Button href={`/journal/${featuredArticle.slug}`} variant="primary" size="md">
                  Read Full Guide &rarr;
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Grid of Articles */}
      <section className="py-20 md:py-28 bg-cream border-b border-sand">
        <div className="container-wide">
          <Reveal>
            <div className="mb-12">
              <span className="eyebrow text-forest">Recent Publications</span>
              <h2 className="heading-lg text-charcoal mt-2">Guides on Paper, Inks & Etiquette</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regularArticles.map((art, idx) => (
              <Reveal key={art.id} delay={idx * 0.1} className="h-full">
                <div className="card-warm p-8 h-full flex flex-col justify-between group hover:border-terracotta/40 transition-colors">
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-warm-stone mb-3">
                      <span className="text-terracotta font-medium uppercase tracking-wider">
                        {art.category}
                      </span>
                      <span>{art.readTime}</span>
                    </div>

                    <Link href={`/journal/${art.slug}`}>
                      <h3 className="font-serif text-xl text-charcoal mb-3 group-hover:text-terracotta transition-colors">
                        {art.title}
                      </h3>
                    </Link>
                    <p className="body-sm text-warm-stone font-light leading-relaxed mb-6">
                      {art.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-sand flex items-center justify-between">
                    <span className="text-[11px] text-warm-stone font-mono">{art.publishedAt}</span>
                    <Link
                      href={`/journal/${art.slug}`}
                      className="text-xs uppercase tracking-wider font-mono font-medium text-terracotta hover:underline"
                    >
                      Read Article &rarr;
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Kit Promo */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="container-narrow text-center">
          <Reveal>
            <span className="eyebrow text-terracotta">Physical Experience</span>
            <h2 className="heading-xl text-charcoal mt-2 mb-4">Reading about paper is good. Touching it is better.</h2>
            <p className="body-md text-warm-stone max-w-lg mx-auto mb-8 font-light">
              Order our Wedding or Business Card Sample Kit to evaluate 600gsm cotton board, hot foil stamping, and debossed relief with your own hands.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/weddings/wedding-sample-kit" variant="primary" size="lg">
                Order Wedding Sample Kit (₹1,500)
              </Button>
              <Button href="/business-cards/business-card-sample-kit" variant="outline" size="lg">
                Order Business Card Kit (₹1,000)
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
