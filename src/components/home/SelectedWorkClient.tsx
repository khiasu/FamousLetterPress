"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";

interface WorkItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  categoryLabel: string;
  featuredImage: string;
  year?: string;
}

interface SelectedWorkClientProps {
  items: WorkItem[];
}

export function SelectedWorkClient({ items }: SelectedWorkClientProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Horizontal scroll driven by vertical scroll
  const x = useTransform(scrollYProgress, [0.15, 0.85], ["4%", "-40%"]);
  const smoothX = useSpring(x, { stiffness: 90, damping: 28 });

  return (
    <section
      ref={sectionRef}
      className="relative bg-ivory overflow-hidden"
      aria-label="Selected work"
      style={{
        paddingTop: "clamp(5rem, 10vw, 10rem)",
        paddingBottom: "clamp(5rem, 10vw, 10rem)",
      }}
    >
      {/* Section header */}
      <div className="container-wide mb-12 lg:mb-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-gold/50" />
              <span className="eyebrow text-taupe tracking-[0.2em]">
                Selected Work
              </span>
            </span>
            <h2>
              Made by{" "}
              <span className="italic font-light text-taupe">hand</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <MagneticButton
              href="/work"
              className="text-xs tracking-[0.2em] uppercase text-taupe hover:text-gold transition-colors duration-500 pb-1 border-b border-sand hover:border-gold"
            >
              View all work →
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* Horizontal scrolling gallery */}
      <motion.div
        style={{ x: smoothX }}
        className="flex gap-5 lg:gap-8 pl-[clamp(1.25rem,4vw,3rem)] will-change-transform"
      >
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex-shrink-0 w-[75vw] sm:w-[48vw] lg:w-[30vw] group"
          >
            <Link href="/work" className="block cursor-view">
              <div className="aspect-[3/4] rounded-sm overflow-hidden relative shadow-md group-hover:shadow-2xl transition-shadow duration-700 mb-4 bg-sand/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.featuredImage}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-108"
                />

                {/* Cinematic overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Gold frame border on hover */}
                <div className="absolute inset-3 border border-gold/0 group-hover:border-gold/30 transition-all duration-700 rounded-sm pointer-events-none" />

                {/* Hover content */}
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-ivory font-serif text-lg mb-1">
                    {item.title}
                  </p>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-gold">
                    View project →
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="eyebrow text-taupe text-[0.6rem]">
                  {item.categoryLabel}
                </span>
                <span className="w-3 h-px bg-sand" />
                <h4 className="text-base font-serif text-charcoal group-hover:text-gold transition-colors duration-500 truncate">
                  {item.title}
                </h4>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
