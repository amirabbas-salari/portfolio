import { skillCategories } from "@/data/skills";

/** Tech drawn from the real skill data, in file order. */
const stack = Array.from(
  new Set(skillCategories.flatMap((category) => category.skills)),
).slice(0, 18);

const signals = [
  "Real-time computer vision",
  "Face analysis",
  "Gaze estimation",
  "Gesture recognition",
  "Production REST APIs",
  "Embedded systems",
];

/**
 * Each copy of the track is repeated so it always stays wider than the
 * viewport — otherwise the -50% loop would show a gap on wide screens.
 */
const REPEAT = 3;

function Row({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  const filled = Array.from({ length: REPEAT }, () => items).flat();

  return (
    <div className="marquee-mask relative overflow-hidden py-3.5">
      <div
        className={`marquee-track ${reverse ? "marquee-track-slow" : ""} hover:[animation-play-state:paused]`}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {filled.map((item, index) => (
              <span
                key={`${copy}-${index}-${item}`}
                aria-hidden={copy === 1}
                className="flex shrink-0 items-center gap-6 px-6"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-ink">
                  {item}
                </span>

                <span className="h-1 w-1 shrink-0 bg-[#6b5335]" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Printed ticker band — the cream stripe from the poster, now running.
 */
export default function TechMarquee() {
  return (
    <section
      aria-label="Technology stack"
      className="relative border-y border-cream/25 bg-cream text-ink"
    >
      <Row items={stack} />

      <div className="h-px w-full bg-ink/15" />

      <Row items={signals} reverse />
    </section>
  );
}
