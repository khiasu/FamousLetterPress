import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { journalArticles } from "@/lib/data/articles";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return journalArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const article = journalArticles.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    return { title: "Article Not Found | Famous Letterpress" };
  }

  return {
    title: `${article.title} | Famous Letterpress Journal`,
    description: article.metaDescription,
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author],
    },
  };
}

export default async function JournalArticlePage({ params }: ArticlePageProps) {
  const resolvedParams = await params;
  const article = journalArticles.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  // Article JSON-LD schema for AEO / search engines
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    author: {
      "@type": "Organization",
      name: "Famous Letterpress",
      url: "https://famousletterpress.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Famous Letterpress",
      logo: "https://famousletterpress.com/logo.png",
    },
    datePublished: article.publishedAt,
    mainEntityOfPage: `https://famousletterpress.com/journal/${article.slug}`,
  };

  return (
    <article className="bg-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Editorial Article Header */}
      <header className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-sand">
        <div className="container-narrow">
          <Reveal>
            <div className="flex items-center gap-2 mb-6 text-xs font-mono tracking-widest uppercase text-warm-stone">
              <Link href="/" className="hover:text-terracotta">Home</Link>
              <span>/</span>
              <Link href="/journal" className="hover:text-terracotta">Journal</Link>
              <span>/</span>
              <span className="text-terracotta">{article.category}</span>
            </div>

            <span className="eyebrow text-terracotta">{article.category}</span>
            <h1 className="display-lg text-charcoal mt-2 mb-4 leading-tight">
              {article.title}
            </h1>
            <p className="body-lg text-warm-stone font-light leading-relaxed mb-6">
              {article.subtitle}
            </p>

            <div className="flex items-center gap-4 text-xs font-mono text-warm-stone pt-6 border-t border-sand">
              <span>By {article.author}</span>
              <span>•</span>
              <span>Published {article.publishedAt}</span>
              <span>•</span>
              <span className="text-terracotta font-medium">{article.readTime}</span>
            </div>
          </Reveal>
        </div>
      </header>

      {/* Main Reading Flow */}
      <section className="py-16 md:py-24 bg-ivory border-b border-sand">
        <div className="container-narrow">
          <div className="space-y-12">
            {article.sections.map((section, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="space-y-6">
                  {section.heading && (
                    <h2 className="heading-md text-charcoal pt-4 border-t border-sand/60">
                      {section.heading}
                    </h2>
                  )}

                  <div className="space-y-4 text-warm-stone body-md font-light leading-relaxed">
                    {section.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>

                  {section.callout && (
                    <div className="card-warm p-6 my-6 bg-cream border-l-4 border-l-terracotta">
                      <div className="text-xs font-mono uppercase tracking-wider text-terracotta font-semibold mb-1">
                        {section.callout.title}
                      </div>
                      <p className="text-xs sm:text-sm text-charcoal leading-relaxed font-normal">
                        {section.callout.text}
                      </p>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          {/* Contextual Recommendation Footer */}
          <div className="mt-16 pt-10 border-t border-sand">
            <Reveal>
              <div className="card-warm p-8 bg-cream text-center">
                <span className="eyebrow text-forest">Recommended Next Step</span>
                <h3 className="heading-md text-charcoal mt-1 mb-3">
                  Experience the tactility in person
                </h3>
                <p className="body-sm text-warm-stone max-w-md mx-auto mb-6 font-light">
                  Hold pure 600gsm cotton suites, foil swatches, and deckled paper in your own hands.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button href="/weddings/wedding-sample-kit" variant="primary" size="md">
                    Order Wedding Sample Kit (₹1,500)
                  </Button>
                  <Button href="/weddings/early-bride" variant="outline" size="md">
                    Early Bride Consultation
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Back to Journal Link */}
      <div className="py-12 bg-cream text-center">
        <Link
          href="/journal"
          className="text-xs uppercase tracking-widest font-mono text-terracotta hover:underline font-medium"
        >
          &larr; Back to All Journal Guides
        </Link>
      </div>
    </article>
  );
}
