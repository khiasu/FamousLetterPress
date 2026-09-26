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
    "bg-ink hover:bg-charcoal active:bg-ink text-[#FAF8F5] !text-[#FAF8F5]",
  secondary:
    "bg-sage hover:bg-sage-dark active:bg-sage text-[#FAF8F5] !text-[#FAF8F5]",
  outline:
    "bg-transparent border border-ink/20 hover:border-ink/40 hover:bg-cream active:bg-sand text-ink !text-ink",
  ghost:
    "bg-transparent hover:bg-cream/50 active:bg-cream text-charcoal !text-charcoal hover:text-ink hover:!text-ink",
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
  const colorStyle = (variant === "primary" || variant === "secondary")
    ? { color: "#FAF8F5" }
    : undefined;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          style={colorStyle}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} style={colorStyle} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      style={colorStyle}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
