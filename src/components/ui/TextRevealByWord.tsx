"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TextRevealByWordProps {
  text: string;
  className?: string;
  highlightWords?: string[]; // words to highlight with gold
}

export function TextRevealByWord({
  text,
  className = "",
  highlightWords = [],
}: TextRevealByWordProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.2"],
  });

  const words = text.split(" ");

  return (
    <div ref={ref} className={className}>
      <p className="flex flex-wrap font-serif leading-[1.3] gap-x-[0.3em]">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          const isHighlight = highlightWords.some((hw) =>
            word.toLowerCase().includes(hw.toLowerCase())
          );

          return (
            <Word
              key={`${word}-${i}`}
              progress={scrollYProgress}
              range={[start, end]}
              isHighlight={isHighlight}
            >
              {word}
            </Word>
          );
        })}
      </p>
    </div>
  );
}

function Word({
  children,
  progress,
  range,
  isHighlight,
}: {
  children: string;
  progress: any;
  range: [number, number];
  isHighlight: boolean;
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);

  return (
    <span className="relative inline-block">
      {/* Ghost text for layout */}
      <span className="opacity-0">{children}</span>
      <motion.span
        style={{ opacity }}
        className={`absolute left-0 top-0 ${
          isHighlight ? "text-gold italic" : ""
        }`}
      >
        {children}
      </motion.span>
    </span>
  );
}
