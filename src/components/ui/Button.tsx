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
    "bg-ink-deep hover:bg-[#222] active:bg-ink-deep text-paper-creme",
  outline:
    "bg-transparent border border-border-hairline hover:border-ink-deep/30 text-ink-deep",
  ghost:
    "bg-transparent hover:bg-paper-sand/50 text-ink-muted hover:text-ink-deep",
};

const sizes = {
  sm: "px-4 py-2 text-[11px] tracking-[0.14em] uppercase",
  md: "px-6 py-3 text-[11px] tracking-[0.14em] uppercase",
  lg: "px-8 py-3.5 text-[11px] tracking-[0.14em] uppercase",
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
