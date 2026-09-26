"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number; // 0.1 = slow, 0.5 = medium
  scale?: number; // extra scale for overflow (1.15 default)
  className?: string;
  overlay?: "none" | "subtle" | "dark" | "gradient";
  children?: React.ReactNode;
}

export function ParallaxImage({
  src,
  alt,
  speed = 0.15,
  scale = 1.15,
  className = "",
  overlay = "none",
  children,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [`${-speed * 100}%`, `${speed * 100}%`]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const overlayClass =
    overlay === "subtle"
      ? "after:absolute after:inset-0 after:bg-black/10"
      : overlay === "dark"
      ? "after:absolute after:inset-0 after:bg-black/40"
      : overlay === "gradient"
      ? "after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/60 after:via-transparent after:to-transparent"
      : "";

  return (
    <div
      ref={ref}
      className={`overflow-hidden relative ${overlayClass} ${className}`}
    >
      <motion.div
        style={{ y: smoothY, scale }}
        className="absolute inset-0 will-change-transform"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>
      {children && (
        <div className="relative z-10">{children}</div>
      )}
    </div>
  );
}
