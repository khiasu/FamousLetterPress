"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section
      className="relative min-h-[100svh] flex items-center bg-cream overflow-hidden"
      aria-label="Welcome to Famous Letterpress"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container-wide relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="eyebrow mb-6"
            >
              Handcrafted in Nagaland
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6"
            >
              Designers turned{" "}
              <span className="italic font-light">printers</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg text-taupe leading-relaxed mb-10"
            >
              We craft premium letterpress and foil stamped wedding invitations,
              business cards, and personalised stationery — designed and printed
              entirely under one roof.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-4"
            >
              <Button href="/start-a-project" size="lg">
                Start a Project
              </Button>
              <Button href="/work" variant="outline" size="lg">
                View Our Work
              </Button>
            </motion.div>
          </div>

          {/* Hero image — authentic Famous Letterpress photography */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] lg:aspect-[3/4] bg-sand/40 rounded-sm overflow-hidden shadow-2xl group border border-sand/60"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://famousletterpress.com/wp-content/uploads/2026/05/FMS_4395-2000x2500.jpg"
              alt="Handcrafted letterpress wedding stationery by Famous Letterpress"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Elegant credit badge */}
            <div className="absolute bottom-4 left-4 right-4 bg-ivory/95 backdrop-blur-md border border-sand/80 px-4 py-3 rounded-sm flex items-center justify-between shadow-md">
              <div>
                <p className="font-serif text-sm text-charcoal font-medium">Bespoke 600gsm Cotton Suite</p>
                <p className="text-[11px] text-taupe font-light">Deep mechanical impression & matte gold foil</p>
              </div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-terracotta bg-terracotta/10 px-2 py-1 rounded">
                Nagaland Atelier
              </span>
            </div>
            {/* Subtle grain overlay */}
            <div className="absolute inset-0 opacity-5 mix-blend-multiply pointer-events-none" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
            }} />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-transparent via-stone to-transparent"
        />
      </motion.div>
    </section>
  );
}
