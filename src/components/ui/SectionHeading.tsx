import type { ReactNode } from "react";

interface SectionHeadingProps {
  index: string;
  title: string;
  hint?: string;
  children?: ReactNode;
}

export default function SectionHeading({
  index,
  title,
  hint,
  children,
}: SectionHeadingProps) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
      <span className="label text-cyan/70">[ {index} ]</span>

      <span className="h-px w-8 shrink-0 bg-gradient-to-r from-cyan/60 to-transparent" />

      <h2 className="font-display text-xl font-semibold uppercase tracking-[0.16em] text-chalk sm:text-2xl">
        {title}
      </h2>

      <span className="hidden h-px flex-1 bg-line sm:block" />

      {hint ? (
        <span className="label hidden text-dim md:block">{hint}</span>
      ) : null}

      {children}
    </div>
  );
}
