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

  const lineWidth = useTransform(scrollYProgress, [0.2, 0.5], ["0%", "60%"]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-ink overflow-hidden grain-overlay"
      aria-label="Start a project"
      style={{
        paddingTop: "clamp(6rem, 14vw, 14rem)",
        paddingBottom: "clamp(6rem, 14vw, 14rem)",
      }}
    >
      {/* ── Subtle texture background ── */}
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        style={{ y: bgY }}
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </motion.div>

      {/* ── Ambient glow ── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(184,150,62,0.06) 0%, transparent 70%)",
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
          className="!text-ivory mb-6"
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
          className="text-lg text-ivory/50 mb-12 max-w-lg mx-auto font-light"
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
            className="px-10 py-4 bg-gold text-ink text-sm tracking-widest uppercase font-medium hover:bg-gold-light transition-colors duration-500 rounded-sm"
          >
            Start a Project
          </MagneticButton>
          <MagneticButton
            href="https://wa.me/919366012345"
            external
            className="px-10 py-4 border border-ivory/15 text-ivory/80 text-sm tracking-widest uppercase font-medium hover:border-gold hover:text-gold transition-colors duration-500 rounded-sm"
          >
            WhatsApp Us
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
