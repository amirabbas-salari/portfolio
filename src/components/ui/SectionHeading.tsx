import type { ReactNode } from "react";

interface SectionHeadingProps {
  /** Rendered as a mono kicker: "// {kicker}" */
  kicker: string;
  title: ReactNode;
  aside?: ReactNode;
  tone?: "ink" | "paper";
}

export default function SectionHeading({
  kicker,
  title,
  aside,
  tone = "ink",
}: SectionHeadingProps) {
  const paper = tone === "paper";

  return (
    <div>
      <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between md:gap-12">
        <div className="max-w-2xl">
          <p className={`label ${paper ? "label-paper" : ""}`}>
            {`// ${kicker}`}
          </p>

          <h2
            className={`mt-4 font-display text-[clamp(1.9rem,4.2vw,2.9rem)] font-semibold leading-[1.06] tracking-[-0.02em] ${
              paper ? "text-ink" : "text-cream"
            }`}
          >
            {title}
          </h2>
        </div>

        {aside ? (
          <div className="shrink-0 md:pb-1.5">{aside}</div>
        ) : null}
      </div>

      <div className={`mt-8 ${paper ? "rule-ink" : "rule"}`} />
    </div>
  );
}
