"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type Variants,
} from "framer-motion";
import { GoldShimmer, HorizontalMarquee } from "@/components/ui/GoldShimmer";
import { MagneticButton } from "@/components/ui/MagneticButton";

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax & zoom transforms
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.65]);

  // Spring physics for smooth motion
  const smoothScale = useSpring(imageScale, { stiffness: 100, damping: 30 });
  const smoothImageY = useSpring(imageY, { stiffness: 100, damping: 30 });
  const smoothTextY = useSpring(textY, { stiffness: 100, damping: 30 });

  // Staggered entrance variants
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: easeOutExpo,
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 1.08, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.6,
        ease: easeOutExpo,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden bg-ink grain-overlay"
      aria-label="Welcome to Famous Letterpress"
    >
      {/* ── Fullscreen Background Image with Parallax ── */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ scale: smoothScale, y: smoothImageY }}
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://famousletterpress.com/wp-content/uploads/2026/05/FMS_4395-2000x2500.jpg"
          alt="Handcrafted letterpress wedding stationery by Famous Letterpress"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* ── Cinematic gradient overlays ── */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent"
        style={{ opacity: overlayOpacity }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />

      {/* ── Decorative floating elements ── */}
      <div className="absolute top-[15%] right-[8%] w-px h-20 bg-gradient-to-b from-transparent via-gold/30 to-transparent float-gentle hidden lg:block" />
      <div className="absolute top-[25%] left-[5%] w-16 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent float-gentle hidden lg:block" style={{ animationDelay: "2s" }} />

      {/* ── Content ── */}
      <div className="relative z-10 container-wide pb-12 pt-32 lg:pt-0 lg:pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ y: smoothTextY }}
          className="max-w-2xl"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-3">
              <span className="w-8 h-px bg-gold" />
              <span className="eyebrow !text-ivory/50 tracking-[0.2em]">
                Handcrafted in Nagaland
              </span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="!text-ivory mb-6 leading-[1.05]"
          >
            Designers turned{" "}
            <GoldShimmer className="italic font-light">printers</GoldShimmer>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-lg lg:text-xl text-ivory/60 leading-relaxed mb-10 max-w-lg font-light"
          >
            We craft premium letterpress and foil stamped wedding invitations,
            business cards, and personalised stationery — designed and printed
            entirely under one roof.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <MagneticButton
              href="/start-a-project"
              className="px-8 py-4 bg-ivory text-ink text-sm tracking-widest uppercase font-medium hover:bg-gold hover:text-ivory transition-colors duration-500 rounded-sm"
            >
              Start a Project
            </MagneticButton>
            <MagneticButton
              href="/work"
              className="px-8 py-4 border border-ivory/25 text-ivory text-sm tracking-widest uppercase font-medium hover:border-gold hover:text-gold transition-colors duration-500 rounded-sm"
            >
              View Our Work
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* ── Bottom bar: product badge + scroll indicator ── */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="flex items-end justify-between mt-16 lg:mt-24"
        >
          {/* Product badge — glass panel */}
          <div className="glass-panel-dark px-5 py-3 rounded-sm hidden sm:flex items-center gap-4">
            <div>
              <p className="font-serif text-sm text-ivory/90 font-medium">
                Bespoke 600gsm Cotton Suite
              </p>
              <p className="text-[11px] text-ivory/40 font-light">
                Deep mechanical impression & matte gold foil
              </p>
            </div>
            <span className="font-mono text-[9px] uppercase tracking-widest text-gold bg-gold/10 px-2.5 py-1 rounded">
              Atelier
            </span>
          </div>

          {/* Scroll indicator */}
          <div className="hidden lg:flex flex-col items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-ivory/30 font-light">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-10 bg-gradient-to-b from-gold/60 to-transparent"
            />
          </div>
        </motion.div>
      </div>

      {/* ── Marquee strip at the very bottom ── */}
      <div className="relative z-10 border-t border-ivory/5 py-3 bg-ink/30 backdrop-blur-sm">
        <HorizontalMarquee speed={40} className="text-ivory/25">
          <span className="text-[11px] tracking-[0.3em] uppercase font-light flex items-center gap-8">
            <span>Letterpress</span>
            <span className="text-gold/40">·</span>
            <span>Foil Stamping</span>
            <span className="text-gold/40">·</span>
            <span>600gsm Cotton</span>
            <span className="text-gold/40">·</span>
            <span>Handmade in Nagaland</span>
            <span className="text-gold/40">·</span>
            <span>Bespoke Design</span>
            <span className="text-gold/40">·</span>
            <span>Premium Stationery</span>
          </span>
        </HorizontalMarquee>
      </div>
    </section>
  );
}
