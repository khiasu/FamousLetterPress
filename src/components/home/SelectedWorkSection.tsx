import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { getCMSPortfolio } from "@/lib/cms/store";

export function SelectedWorkSection() {
  const portfolio = getCMSPortfolio();
  const selectedWork = portfolio.slice(0, 4);
  return (
    <section className="section bg-ivory" aria-label="Selected work">
      <div className="container-wide">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <Reveal>
              <p className="eyebrow mb-4">Selected Work</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2>
                Made by{" "}
                <span className="italic font-light">hand</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Button href="/work" variant="ghost" size="sm">
              View all work →
            </Button>
          </Reveal>
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {selectedWork.map((item, index) => (
            <Reveal key={item.id} delay={0.1 + index * 0.08}>
              <Link href="/work" className="group block">
                <div className="aspect-[3/4] bg-sand/30 rounded-sm mb-4 overflow-hidden relative shadow-sm group-hover:shadow-md transition-all">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.featuredImage}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/5 transition-colors duration-500" />
                </div>
                <p className="eyebrow text-[0.65rem] mb-1">{item.categoryLabel}</p>
                <h4 className="text-base font-serif group-hover:text-terracotta transition-colors duration-300">
                  {item.title}
                </h4>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
