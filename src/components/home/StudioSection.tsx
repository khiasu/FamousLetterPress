"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function StudioSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["30px", "-30px"]);
  const smoothTextY = useSpring(textY, { stiffness: 100, damping: 30 });

  return (
    <section
      ref={sectionRef}
      className="relative bg-cream overflow-hidden grain-overlay"
      aria-label="Our studio"
      style={{
        paddingTop: "clamp(5rem, 10vw, 10rem)",
        paddingBottom: "clamp(5rem, 10vw, 10rem)",
      }}
    >
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Parallax studio image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <ParallaxImage
              src="https://famousletterpress.com/wp-content/uploads/2026/04/banner-01-1365x600.jpg"
              alt="Famous Letterpress studio pressroom and craft workspace in Nagaland"
              speed={0.12}
              overlay="gradient"
              className="aspect-[4/3] rounded-sm shadow-2xl cursor-view"
            >
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="glass-panel px-4 py-2.5 rounded-sm inline-flex items-center gap-2 border border-sand/60 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-charcoal/80 font-medium">
                    Nagaland Pressroom · Vintage Platen Press
                  </span>
                </div>
              </div>
            </ParallaxImage>
          </motion.div>

          {/* Text — different parallax speed */}
          <motion.div style={{ y: smoothTextY }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-gold/50" />
                <span className="eyebrow text-taupe tracking-[0.2em]">
                  Handcrafted in Nagaland
                </span>
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6"
            >
              Designers turned{" "}
              <span className="italic font-light text-taupe">printers</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-taupe leading-relaxed mb-6 font-light"
            >
              Famous Letterpress began with a love for design and a fascination
              with the craft of printing. What started as a creative pursuit
              became a full printing studio — where every project is designed,
              set up, and printed by the same team.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-taupe leading-relaxed mb-10 font-light"
            >
              Based in Nagaland, India, we bring together traditional letterpress
              techniques with modern design sensibility to create stationery that
              people want to keep.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              <MagneticButton
                href="/about"
                className="px-6 py-3 border border-charcoal/15 text-charcoal text-xs tracking-[0.2em] uppercase font-light hover:border-gold hover:text-gold transition-colors duration-500 rounded-sm"
              >
                About the studio →
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
