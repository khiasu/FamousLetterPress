import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  ariaLabel?: string;
}

const variants = {
  primary:
    "bg-[#0a0a0a] text-white hover:bg-[#222222] active:bg-black border border-[#0a0a0a] hover:border-[#222222] shadow-[0_3px_12px_-3px_rgba(0,0,0,0.15)] hover:shadow-[0_10px_26px_-6px_rgba(0,0,0,0.25)] hover:-translate-y-px active:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] tracking-[0.22em] hover:tracking-[0.24em]",
  outline:
    "bg-white text-black border border-black hover:bg-black hover:text-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] tracking-[0.22em]",
  ghost:
    "bg-transparent text-black hover:bg-[#F7F7F7] transition-colors tracking-[0.22em]",
};

const sizes = {
  sm: "px-5 py-2.5 text-[10px] uppercase",
  md: "px-7 py-3.5 text-[11px] uppercase",
  lg: "px-8 py-4 text-[11px] sm:text-xs uppercase",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  external = false,
  onClick,
  type = "button",
  disabled = false,
  ariaLabel,
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center font-sans font-medium transition-all duration-300 ease-[var(--ease-out-quart)] select-none ${
    disabled ? "opacity-50 pointer-events-none" : ""
  }`;

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
