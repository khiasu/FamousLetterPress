"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GoldShimmer } from "@/components/ui/GoldShimmer";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineWidth = useTransform(scrollYProgress, [0.2, 0.5], ["0%", "50%"]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-cream overflow-hidden grain-overlay"
      aria-label="Start a project"
      style={{
        paddingTop: "clamp(6rem, 12vw, 12rem)",
        paddingBottom: "clamp(6rem, 12vw, 12rem)",
      }}
    >
      {/* ── Soft warm champagne ambient glow ── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(184,150,62,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="container-narrow relative z-10 text-center">
        {/* Gold divider that draws itself */}
        <div className="flex justify-center mb-12">
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
            style={{ width: lineWidth }}
          />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-charcoal mb-6"
          style={{ fontSize: "clamp(2.25rem, 4.5vw + 0.5rem, 4rem)" }}
        >
          Have a project{" "}
          <GoldShimmer className="italic font-light">in mind?</GoldShimmer>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg text-taupe mb-12 max-w-lg mx-auto font-light"
        >
          Whether it&apos;s a wedding invitation, a set of business cards, or
          something entirely new — we&apos;d love to hear about it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center gap-5"
        >
          <MagneticButton
            href="/start-a-project"
            className="px-10 py-4 bg-charcoal text-ivory text-xs tracking-[0.2em] uppercase font-medium hover:bg-gold hover:text-ivory transition-colors duration-500 rounded-sm shadow-sm"
          >
            Start a Project
          </MagneticButton>
          <MagneticButton
            href="https://wa.me/919366012345"
            external
            className="px-10 py-4 border border-sand hover:border-gold text-charcoal hover:text-gold text-xs tracking-[0.2em] uppercase font-medium transition-colors duration-500 rounded-sm bg-ivory/60"
          >
            WhatsApp Us
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
