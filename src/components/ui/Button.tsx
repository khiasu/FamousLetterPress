import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
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
    "bg-ink hover:bg-charcoal active:bg-ink [color:var(--color-ivory)]",
  secondary:
    "bg-sage hover:bg-sage-dark active:bg-sage [color:var(--color-ivory)]",
  outline:
    "bg-transparent border border-ink/20 hover:border-ink/40 hover:bg-cream active:bg-sand [color:var(--color-ink)]",
  ghost:
    "bg-transparent hover:bg-cream/50 active:bg-cream [color:var(--color-charcoal)] hover:[color:var(--color-ink)]",
};

const sizes = {
  sm: "px-4 py-2 text-xs tracking-wider",
  md: "px-6 py-3 text-sm tracking-wide",
  lg: "px-8 py-3.5 text-sm tracking-wide",
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
  const baseClasses = `inline-flex items-center justify-center font-sans font-medium transition-all duration-300 ease-[var(--ease-out-quart)] rounded-sm select-none ${
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
