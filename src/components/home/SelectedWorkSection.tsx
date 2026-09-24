import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

// Placeholder portfolio items — will be replaced with CMS data
const selectedWork = [
  {
    id: "1",
    title: "Wedding Invitation Suite",
    category: "Weddings",
    slug: "#",
  },
  {
    id: "2",
    title: "Letterpress Business Cards",
    category: "Business",
    slug: "#",
  },
  {
    id: "3",
    title: "Foil Stamped Wedding Suite",
    category: "Weddings",
    slug: "#",
  },
  {
    id: "4",
    title: "Custom Stationery Set",
    category: "Personalised",
    slug: "#",
  },
];

export function SelectedWorkSection() {
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
              <Link href={`/work/${item.slug}`} className="group block">
                <div className="aspect-[3/4] bg-sand/30 rounded-sm mb-4 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-xs text-taupe text-center px-4">
                      {item.title}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/5 transition-colors duration-500" />
                </div>
                <p className="eyebrow text-[0.65rem] mb-1">{item.category}</p>
                <h4 className="text-base font-serif group-hover:text-sage-dark transition-colors duration-300">
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
