"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { TextRevealByWord } from "@/components/ui/TextRevealByWord";

const stats = [
  { value: "600", suffix: "gsm", label: "Cotton Papers" },
  { value: "12", suffix: "+", label: "Foil Colors" },
  { value: "100", suffix: "%", label: "Handcrafted" },
];

function AnimatedCounter({ value, suffix }: { value: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <span ref={ref} className="tabular-nums">
      {isInView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {value}
        </motion.span>
      ) : (
        "0"
      )}
      <span className="text-gold">{suffix}</span>
    </span>
  );
}

export function PositioningSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineWidth = useTransform(scrollYProgress, [0.2, 0.5], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-ivory overflow-hidden grain-overlay"
      aria-label="About Famous Letterpress"
      style={{ paddingTop: "clamp(6rem, 12vw, 12rem)", paddingBottom: "clamp(6rem, 12vw, 12rem)" }}
    >
      {/* Decorative gold lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="container-narrow">
        {/* Word-by-word cinematic text */}
        <div className="text-center mb-16">
          <TextRevealByWord
            text="Famous Letterpress is a premium printing studio in Nagaland, India. We design and print wedding invitations, business cards, and personalised stationery using letterpress, foil stamping, embossing, and other fine print techniques — all under one roof."
            className="editorial-quote text-charcoal text-center mx-auto"
            highlightWords={["premium", "letterpress", "Nagaland", "foil"]}
          />
        </div>

        {/* Stats counter row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center gap-8 sm:gap-16 lg:gap-24"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="eyebrow text-taupe text-[0.6rem] tracking-[0.2em]">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Animated gold divider */}
        <div className="flex justify-center mt-16">
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent max-w-xs w-full"
            style={{ width: lineWidth }}
          />
        </div>
      </div>
    </section>
  );
}
