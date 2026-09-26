"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Share your vision, timeline, and preferences. We listen carefully to understand what makes your project unique.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We create a bespoke design tailored to your project — from typography to paper selection and finishing.",
  },
  {
    number: "03",
    title: "Proofing",
    description:
      "Review, refine, and approve before we go to press. We iterate until every detail is perfect.",
  },
  {
    number: "04",
    title: "Production",
    description:
      "Printed and finished by hand in our Nagaland studio. Each sheet pressed individually with care.",
  },
];

function ProcessStep({
  step,
  index,
  isLast,
}: {
  step: (typeof steps)[0];
  index: number;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative flex gap-8 lg:gap-12"
    >
      {/* Timeline line & dot */}
      <div className="flex flex-col items-center flex-shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.15 + 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative w-12 h-12 rounded-full border border-sand flex items-center justify-center bg-ivory z-10 group-hover:border-gold transition-colors"
        >
          <span className="font-serif text-sm text-gold">{step.number}</span>
          {/* Pulse ring */}
          <motion.div
            initial={{ scale: 1, opacity: 0.5 }}
            animate={
              isInView
                ? { scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }
                : {}
            }
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: index * 0.15 + 0.5,
            }}
            className="absolute inset-0 rounded-full border border-gold/20"
          />
        </motion.div>

        {/* Connecting line */}
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.15 + 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="w-px flex-1 bg-gradient-to-b from-gold/30 to-sand/30 origin-top"
          />
        )}
      </div>

      {/* Content */}
      <div className={`pb-12 lg:pb-16 ${isLast ? "pb-0" : ""}`}>
        <h4 className="text-xl lg:text-2xl font-serif mb-3 text-charcoal">
          {step.title}
        </h4>
        <p className="text-sm text-taupe leading-relaxed max-w-md font-light">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative bg-ivory overflow-hidden grain-overlay"
      aria-label="Our process"
      style={{
        paddingTop: "clamp(5rem, 10vw, 10rem)",
        paddingBottom: "clamp(5rem, 10vw, 10rem)",
      }}
    >
      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: header */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-gold/50" />
                <span className="eyebrow text-taupe tracking-[0.2em]">
                  How We Work
                </span>
              </span>
              <h2 className="mb-6">
                From idea to{" "}
                <span className="italic font-light text-taupe">impression</span>
              </h2>
              <p className="text-taupe leading-relaxed mb-8 max-w-md font-light">
                Every project follows a considered path from concept to finished
                print. No shortcuts, no compromises — just attentive craft at
                every stage.
              </p>
              <MagneticButton
                href="/process"
                className="text-xs tracking-[0.2em] uppercase text-taupe hover:text-gold transition-colors duration-500 pb-1 border-b border-sand hover:border-gold"
              >
                See the full process →
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right: timeline */}
          <div>
            {steps.map((step, index) => (
              <ProcessStep
                key={step.number}
                step={step}
                index={index}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
