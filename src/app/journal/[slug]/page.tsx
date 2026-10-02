import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCMSArticles } from "@/lib/cms/store";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getCMSArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const articles = getCMSArticles();
  const article = articles.find((a) => a.slug === resolvedParams.slug);

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
  const articles = getCMSArticles();
  const article = articles.find((a) => a.slug === resolvedParams.slug);

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
    <article className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Editorial Article Header */}
      <header className="pt-28 pb-14 md:pt-36 md:pb-20 border-b border-[#E5E5E5]">
        <div className="container-narrow">
          <div className="flex items-center gap-2 mb-6 text-[10px] font-mono tracking-widest uppercase text-[#7b7566]">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <span>/</span>
            <Link href="/journal" className="hover:text-black transition-colors">Journal</Link>
            <span>/</span>
            <span className="text-black">{article.category}</span>
          </div>

          <p className="k mb-2">{article.category}</p>
          <h1 className="d text-[clamp(36px,9vw,72px)] leading-[0.95] mt-2 mb-4 font-serif">
            {article.title}
          </h1>
          <p className="text-[#3b372e] text-base sm:text-lg font-light leading-relaxed mb-6">
            {article.subtitle}
          </p>

          <div className="flex items-center gap-4 text-[10px] font-mono text-[#7b7566] pt-6 border-t border-[rgba(14,14,14,0.1)] tracking-widest uppercase">
            <span>By {article.author}</span>
            <span>•</span>
            <span>Published {article.publishedAt}</span>
            <span>•</span>
            <span className="text-black font-medium">{article.readTime}</span>
          </div>
        </div>
      </header>

      {/* Featured Editorial Image */}
      {article.image && (
        <div className="container-wide -mt-6 mb-12">
          <div className="aspect-[21/9] md:aspect-[24/9] overflow-hidden border border-[rgba(14,14,14,0.1)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* Main Reading Flow */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E5E5E5]">
        <div className="container-narrow">
          <div className="space-y-12">
            {article.sections.map((section, idx) => (
              <div key={idx} className="space-y-6">
                {section.heading && (
                  <h2 className="font-serif text-xl sm:text-2xl text-black font-medium tracking-tight pt-4 border-t border-[rgba(14,14,14,0.08)]">
                    {section.heading}
                  </h2>
                )}

                <div className="space-y-4 text-[#3b372e] text-sm sm:text-base font-light leading-relaxed">
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {section.callout && (
                  <div className="border border-[rgba(14,14,14,0.1)] border-l-[3px] border-l-black p-5 sm:p-6 my-6 bg-white">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-black font-medium mb-1">
                      {section.callout.title}
                    </div>
                    <p className="text-xs sm:text-sm text-[#3b372e] leading-relaxed font-light">
                      {section.callout.text}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contextual Recommendation Footer */}
          <div className="mt-16 pt-10 border-t border-[rgba(14,14,14,0.1)]">
            <div className="border border-[rgba(14,14,14,0.1)] p-6 sm:p-8 text-center bg-white">
              <p className="k mb-2">Recommended Next Step</p>
              <h3 className="font-serif text-xl sm:text-2xl text-black font-medium tracking-tight mb-3">
                Experience the tactility in person
              </h3>
              <p className="text-sm text-[#3b372e] max-w-md mx-auto mb-6 font-light leading-relaxed">
                Hold pure 600gsm cotton suites, foil swatches, and deckled paper in your own hands.
              </p>
              <div className="flex flex-wrap justify-center gap-5">
                <Link href="/weddings/wedding-sample-kit" className="btn">
                  Order Wedding Sample Kit (₹1,500)
                </Link>
                <Link href="/weddings/early-bride" className="ln">
                  Early Bride Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Journal Link */}
      <div className="py-12 bg-white text-center">
        <Link href="/journal" className="ln">
          &larr; Back to All Journal Guides
        </Link>
      </div>
    </article>
  );
}
