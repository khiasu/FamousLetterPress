"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";

interface GoldShimmerProps {
  children: ReactNode;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "p";
}

export function GoldShimmer({
  children,
  className = "",
  as: Tag = "span",
}: GoldShimmerProps) {
  return (
    <Tag
      className={`relative inline-block gold-shimmer-text ${className}`}
      style={{
        background:
          "linear-gradient(90deg, #B8963E 0%, #D4B86A 25%, #E8D5A0 50%, #D4B86A 75%, #B8963E 100%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        animation: "goldShimmer 4s ease-in-out infinite",
      }}
    >
      {children}
    </Tag>
  );
}

/* Horizontal marquee for social proof / brand credos */
interface MarqueeProps {
  children: ReactNode;
  speed?: number; // seconds per cycle
  className?: string;
  separator?: string;
  reverse?: boolean;
}

export function HorizontalMarquee({
  children,
  speed = 30,
  className = "",
  separator = "·",
  reverse = false,
}: MarqueeProps) {
  return (
    <div className={`overflow-hidden ${className}`} aria-hidden="true">
      <motion.div
        className="flex whitespace-nowrap will-change-transform"
        animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* Duplicate content for seamless loop */}
        <div className="flex items-center shrink-0">
          {children}
          <span className="mx-8 text-gold/40">{separator}</span>
        </div>
        <div className="flex items-center shrink-0">
          {children}
          <span className="mx-8 text-gold/40">{separator}</span>
        </div>
        <div className="flex items-center shrink-0">
          {children}
          <span className="mx-8 text-gold/40">{separator}</span>
        </div>
        <div className="flex items-center shrink-0">
          {children}
          <span className="mx-8 text-gold/40">{separator}</span>
        </div>
      </motion.div>
    </div>
  );
}
