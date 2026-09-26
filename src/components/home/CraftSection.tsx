"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { GoldShimmer } from "@/components/ui/GoldShimmer";
import { MagneticButton } from "@/components/ui/MagneticButton";

const techniques = [
  {
    name: "Letterpress",
    description: "Deep impressions pressed into cotton stock on vintage cast-iron presses.",
  },
  {
    name: "Foil Stamping",
    description: "Gold, silver, and custom foil pressed with heat and precision pressure.",
  },
  {
    name: "Embossing",
    description: "Raised designs sculpted into paper without ink for tactile elegance.",
  },
  {
    name: "Debossing",
    description: "Impressions pressed into the surface creating permanent tactile depth.",
  },
];

export function CraftSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Macro zoom on scroll
  const imageScale = useTransform(scrollYProgress, [0.2, 0.8], [1, 1.25]);
  const smoothScale = useSpring(imageScale, { stiffness: 100, damping: 30 });

  // Ambient glow intensity
  const glowOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0.3, 0.7]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-ink text-ivory overflow-hidden grain-overlay"
      aria-label="Craft and materials"
      style={{
        paddingTop: "clamp(6rem, 12vw, 14rem)",
        paddingBottom: "clamp(6rem, 12vw, 14rem)",
      }}
    >
      {/* ── Ambient glow behind content ── */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(184,150,62,0.08) 0%, transparent 70%)",
          opacity: glowOpacity,
        }}
      />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-gold/40" />
                <span className="eyebrow !text-ivory/30 tracking-[0.2em]">
                  Craft & Materials
                </span>
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="!text-ivory mb-10"
            >
              Every impression is{" "}
              <GoldShimmer className="italic font-light">intentional</GoldShimmer>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-ivory/50 leading-relaxed mb-12 max-w-lg font-light"
            >
              We work with premium cotton papers, traditional letterpress
              machines, and fine finishing techniques. Every piece is designed,
              set up, and printed in our Nagaland studio.
            </motion.p>

            {/* Technique cards */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 mb-12">
              {techniques.map((tech, index) => (
                <TechniqueCard key={tech.name} tech={tech} index={index} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <MagneticButton
                href="/materials"
                className="px-6 py-3 border border-ivory/15 text-ivory/80 text-xs tracking-[0.2em] uppercase font-light hover:border-gold hover:text-gold transition-colors duration-500 rounded-sm"
              >
                Explore materials →
              </MagneticButton>
            </motion.div>
          </div>

          {/* Image column — macro zoom on scroll */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              ref={imageRef}
              className="aspect-square rounded-sm overflow-hidden relative shadow-2xl cursor-view"
            >
              <motion.div
                className="w-full h-full will-change-transform"
                style={{ scale: smoothScale }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://famousletterpress.com/wp-content/uploads/2026/04/FMS_3749-2500x2500.jpg"
                  alt="Tactile letterpress impression and foil detail close-up"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Cinematic overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/20" />

              {/* Gold frame */}
              <div className="absolute inset-4 border border-gold/15 rounded-sm pointer-events-none" />

              {/* Caption */}
              <div className="absolute bottom-8 left-8 right-8">
                <p className="font-serif text-lg italic text-ivory/90">
                  Cast-Iron Bite & Foil Luster
                </p>
                <p className="text-[11px] text-ivory/40 font-light mt-1">
                  Pressed sheet-by-sheet on 100% cotton boards
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TechniqueCard({
  tech,
  index,
}: {
  tech: { name: string; description: string };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
      transition={{
        duration: 0.6,
        delay: 0.3 + index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group"
    >
      <div className="border-t border-ivory/8 pt-4 group-hover:border-gold/30 transition-colors duration-500">
        <h4 className="text-sm font-sans font-medium !text-ivory/80 mb-1.5 group-hover:text-gold transition-colors duration-500">
          {tech.name}
        </h4>
        <p className="text-xs text-ivory/30 leading-relaxed font-light">
          {tech.description}
        </p>
      </div>
    </motion.div>
  );
}
