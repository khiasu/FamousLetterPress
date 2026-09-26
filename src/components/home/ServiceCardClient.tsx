"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { TiltCard } from "@/components/ui/TiltCard";

interface Service {
  title: string;
  description: string;
  href: string;
  label: string;
  image: string;
}

interface ServiceCardClientProps {
  services: Service[];
}

export function ServiceCardClient({ services }: ServiceCardClientProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });

  return (
    <>
      {/* Section Header */}
      <div ref={headerRef} className="mb-16 lg:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-gold/50" />
            <span className="eyebrow text-taupe tracking-[0.2em]">
              What We Create
            </span>
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          Three things,{" "}
          <span className="italic font-light text-taupe">done exceptionally</span>
        </motion.h2>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
        {services.map((service, index) => (
          <ServiceCardItem key={service.href} service={service} index={index} />
        ))}
      </div>
    </>
  );
}

function ServiceCardItem({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.9,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="h-full"
    >
      <TiltCard maxTilt={6} className="h-full">
        <Link
          href={service.href}
          className="group block h-full bg-ivory/80 rounded-sm border border-sand/50 p-5 lg:p-6 hover:border-gold/40 hover:shadow-2xl transition-all duration-700 cursor-view flex flex-col justify-between"
        >
          <div>
            {/* Image */}
            <div className="aspect-[4/5] bg-sand/30 rounded-sm mb-6 overflow-hidden relative shadow-sm group-hover:shadow-xl transition-shadow duration-700">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-500" />

              {/* Number badge */}
              <div className="absolute top-3 left-3 glass-panel px-2.5 py-1 rounded-sm">
                <span className="font-serif text-xs text-charcoal/70">
                  0{index + 1}
                </span>
              </div>

              {/* Hover gold frame */}
              <div className="absolute inset-2 border border-gold/0 group-hover:border-gold/30 transition-all duration-700 rounded-sm pointer-events-none" />
            </div>

            <div className="flex items-center gap-3 mb-2.5">
              <span className="w-4 h-px bg-gold/50 group-hover:w-7 group-hover:bg-gold transition-all duration-500" />
              <h3 className="text-xl font-serif text-charcoal group-hover:text-gold transition-colors duration-500">
                {service.title}
              </h3>
            </div>

            <p className="text-sm text-taupe leading-relaxed font-light pl-7 mb-6">
              {service.description}
            </p>
          </div>

          <div className="pl-7 pt-4 border-t border-sand/30 flex items-center justify-between">
            <span className="text-xs tracking-[0.2em] uppercase text-taupe group-hover:text-gold transition-colors duration-500 font-medium">
              {service.label}
            </span>
            <span className="text-taupe group-hover:text-gold group-hover:translate-x-1 transition-all duration-300">
              →
            </span>
          </div>
        </Link>
      </TiltCard>
    </motion.div>
  );
}
