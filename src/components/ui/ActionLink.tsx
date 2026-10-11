import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "ghost";

interface ActionLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
  ariaLabel?: string;
}

const base =
  "group relative inline-flex items-center justify-center gap-2 notch-sm px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] transition-all duration-300";

const variants: Record<Variant, string> = {
  primary:
    "border border-cyan/45 bg-cyan/10 text-chalk hover:border-cyan hover:bg-cyan/20 hover:shadow-[0_0_34px_-8px_rgba(53,230,255,0.65)]",
  ghost:
    "border border-line text-mist hover:border-cyan/45 hover:text-chalk hover:shadow-[0_0_28px_-12px_rgba(53,230,255,0.5)]",
};

export default function ActionLink({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
  ariaLabel,
}: ActionLinkProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} aria-label={ariaLabel} className={classes}>
      {children}
    </Link>
  );
}
