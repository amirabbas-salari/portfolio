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
  "group inline-flex items-center justify-center gap-2 border px-6 py-3.5 font-mono text-[10.5px] uppercase tracking-[0.2em] transition-all duration-300";

const variants: Record<Variant, string> = {
  primary:
    "border-cream/35 text-cream hover:border-cream hover:bg-cream hover:text-ink",
  ghost:
    "border-line text-cream-2 hover:border-cream/45 hover:text-cream",
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
