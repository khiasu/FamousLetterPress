"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { TiltCard } from "@/components/ui/TiltCard";

interface SampleKit {
  title: string;
  description: string;
  href: string;
  label: string;
  price: string;
  image: string;
}

interface SampleKitsClientProps {
  sampleKits: SampleKit[];
}

export function SampleKitsClient({ sampleKits }: SampleKitsClientProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });

  return (
    <section
      className="relative bg-cream overflow-hidden grain-overlay"
      aria-label="Sample kits"
      style={{
        paddingTop: "clamp(5rem, 10vw, 10rem)",
        paddingBottom: "clamp(5rem, 10vw, 10rem)",
      }}
    >
      <div className="container-wide">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-px bg-gold/50" />
              <span className="eyebrow text-taupe tracking-[0.2em]">
                Sample Kits
              </span>
              <span className="w-8 h-px bg-gold/50" />
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4"
          >
            See it. Touch it.{" "}
            <span className="italic font-light text-taupe">Feel it.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-taupe mx-auto max-w-lg font-light"
          >
            Our sample kits let you experience the quality of our work before
            starting a project. Order a kit and see the difference for yourself.
          </motion.p>
        </div>

        {/* Kit cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {sampleKits.map((kit, index) => (
            <KitCard key={kit.href} kit={kit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function KitCard({
  kit,
  index,
}: {
  kit: SampleKit;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.9,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <TiltCard maxTilt={5}>
        <Link
          href={kit.href}
          className="group block bg-ivory p-6 lg:p-8 rounded-sm border border-sand/40 hover:border-gold/30 hover:shadow-2xl transition-all duration-700 cursor-view"
        >
          {/* Image */}
          <div className="aspect-[16/10] rounded-sm mb-6 overflow-hidden relative shadow-md group-hover:shadow-xl transition-shadow duration-700">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={kit.image}
              alt={kit.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-108"
            />
            {/* Gold frame on hover */}
            <div className="absolute inset-2 border border-gold/0 group-hover:border-gold/20 transition-all duration-700 rounded-sm pointer-events-none" />

            {/* Price badge */}
            <div className="absolute top-4 right-4 glass-panel px-3 py-1.5 rounded-sm">
              <span className="font-mono text-xs text-gold font-medium">
                {kit.price}
              </span>
            </div>
          </div>

          {/* Text */}
          <div className="flex items-center gap-3 mb-3">
            <span className="w-5 h-px bg-gold/40 group-hover:w-8 group-hover:bg-gold transition-all duration-500" />
            <h3 className="text-xl font-serif group-hover:text-gold transition-colors duration-500">
              {kit.title}
            </h3>
          </div>
          <p className="text-sm text-taupe leading-relaxed mb-5 pl-8 font-light">
            {kit.description}
          </p>
          <span className="pl-8 text-[11px] tracking-[0.2em] uppercase text-taupe/60 group-hover:text-gold transition-colors duration-500 font-medium">
            {kit.label} →
          </span>
        </Link>
      </TiltCard>
    </motion.div>
  );
}
