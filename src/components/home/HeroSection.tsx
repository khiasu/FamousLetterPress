"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type Variants,
} from "framer-motion";
import { GoldShimmer } from "@/components/ui/GoldShimmer";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TiltCard } from "@/components/ui/TiltCard";

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0px", "50px"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0px", "-40px"]);
  const smoothTextY = useSpring(textY, { stiffness: 100, damping: 30 });
  const smoothImageY = useSpring(imageY, { stiffness: 100, damping: 30 });

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: easeOutExpo,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center bg-cream overflow-hidden grain-overlay"
      aria-label="Welcome to Famous Letterpress"
      style={{
        paddingTop: "clamp(3rem, 6vw, 6rem)",
        paddingBottom: "clamp(4rem, 8vw, 8rem)",
      }}
    >
      {/* ── Soft warm champagne ambient glow ── */}
      <div
        className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(184,150,62,0.07) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(232,213,204,0.3) 0%, transparent 70%)",
        }}
      />

      <div className="container-wide relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ── Left Column: Editorial Story & CTAs (7 cols) ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ y: smoothTextY }}
            className="lg:col-span-7 max-w-2xl"
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-3">
                <span className="w-8 h-px bg-gold" />
                <span className="eyebrow text-taupe tracking-[0.2em]">
                  Handcrafted in Nagaland, India
                </span>
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-charcoal mb-6 leading-[1.05]"
            >
              Designers turned{" "}
              <GoldShimmer className="italic font-light">printers</GoldShimmer>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-lg lg:text-xl text-taupe leading-relaxed mb-10 font-light"
            >
              We craft premium letterpress and foil stamped wedding invitations,
              business cards, and personalised stationery — designed and printed
              entirely under one roof.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <MagneticButton
                href="/start-a-project"
                className="px-8 py-4 bg-charcoal text-ivory text-xs tracking-[0.2em] uppercase font-medium hover:bg-gold hover:text-ivory transition-colors duration-500 rounded-sm shadow-sm"
              >
                Start a Project
              </MagneticButton>
              <MagneticButton
                href="/work"
                className="px-8 py-4 border border-sand hover:border-gold text-charcoal hover:text-gold text-xs tracking-[0.2em] uppercase font-medium transition-colors duration-500 rounded-sm bg-ivory/60"
              >
                View Our Work
              </MagneticButton>
            </motion.div>

            {/* Atelier Craft Badge */}
            <motion.div variants={itemVariants}>
              <div className="glass-panel px-5 py-3 rounded-sm inline-flex items-center gap-4 border border-sand/60 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                <div>
                  <p className="font-serif text-sm text-charcoal font-medium">
                    Bespoke 600gsm Cotton Suite
                  </p>
                  <p className="text-[11px] text-taupe font-light">
                    Deep mechanical impression & matte gold foil
                  </p>
                </div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-gold bg-gold/10 px-2.5 py-1 rounded ml-2">
                  Atelier
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right Column: 3D Visual Showcase (5 cols) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: easeOutExpo }}
            style={{ y: smoothImageY }}
            className="lg:col-span-5 relative"
          >
            <TiltCard maxTilt={5}>
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl border border-sand/60 bg-ivory cursor-view group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://famousletterpress.com/wp-content/uploads/2026/05/FMS_4395-2000x2500.jpg"
                  alt="Handcrafted letterpress wedding stationery by Famous Letterpress"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-106"
                />

                {/* Subtle paper vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent pointer-events-none" />

                {/* Delicate gold border frame */}
                <div className="absolute inset-3 border border-gold/20 rounded-sm pointer-events-none group-hover:border-gold/40 transition-colors duration-500" />

                {/* Floating caption tag on image */}
                <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                  <div className="glass-panel px-4 py-2 rounded-sm inline-block shadow-sm">
                    <p className="font-serif text-xs text-charcoal italic">
                      Traditional Heidelberg & Platen Impression
                    </p>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
