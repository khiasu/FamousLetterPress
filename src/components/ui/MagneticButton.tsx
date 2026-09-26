"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  strength?: number; // pixels of magnetic pull
  external?: boolean;
}

export function MagneticButton({
  children,
  className = "",
  href,
  onClick,
  strength = 20,
  external = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // Subtle glow rotation
  const rotateX = useTransform(springY, [-strength, strength], [4, -4]);
  const rotateY = useTransform(springX, [-strength, strength], [-4, 4]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distX = (e.clientX - centerX) / rect.width;
    const distY = (e.clientY - centerY) / rect.height;

    x.set(distX * strength);
    y.set(distY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const Tag = href ? "a" : "button";
  const linkProps = href
    ? external
      ? { href, target: "_blank" as const, rel: "noopener noreferrer" }
      : { href }
    : { onClick };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        x: springX,
        y: springY,
        rotateX,
        rotateY,
        perspective: 800,
      }}
      className="inline-block will-change-transform"
    >
      <Tag
        {...(linkProps as any)}
        className={`relative inline-flex items-center justify-center overflow-hidden group ${className}`}
      >
        {/* Shimmer sweep on hover */}
        <span
          className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-700 ${
            isHovered ? "translate-x-full" : ""
          }`}
        />
        <span className="relative z-10">{children}</span>
      </Tag>
    </motion.div>
  );
}
