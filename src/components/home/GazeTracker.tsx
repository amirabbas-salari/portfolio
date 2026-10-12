"use client";

import { useEffect, useRef, useState } from "react";

import { useReducedMotion } from "framer-motion";

const BARS = 26;
const IDLE_AFTER = 2400;

const signed = (value: number) =>
  `${value >= 0 ? "+" : "-"}${Math.abs(value).toFixed(2)}`;

/**
 * Interactive gaze instrument: the eye follows your cursor across the card,
 * the attention heat map below it re-centres on the fixation point.
 */
export default function GazeTracker() {
  const reduceMotion = useReducedMotion();

  const [gaze, setGaze] = useState({ x: 0, y: 0 });
  const [tracking, setTracking] = useState(false);

  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* Idle demo sweep — runs whenever the pointer is away. */
  useEffect(() => {
    if (reduceMotion || tracking) return;

    let timer: ReturnType<typeof setTimeout>;
    const start = performance.now();

    const loop = () => {
      const t = (performance.now() - start) / 1000;

      setGaze({
        x: Math.sin(t * 0.62) * 0.72,
        y: Math.sin(t * 0.41 + 1.1) * 0.42,
      });

      timer = setTimeout(loop, 70);
    };

    timer = setTimeout(loop, 70);

    return () => clearTimeout(timer);
  }, [reduceMotion, tracking]);

  useEffect(
    () => () => {
      if (idleTimer.current) clearTimeout(idleTimer.current);
    },
    [],
  );

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();

    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((event.clientY - rect.top) / rect.height) * 2 - 1;

    const clamp = (value: number) => Math.max(-1, Math.min(1, value));

    setGaze({ x: clamp(x), y: clamp(y) });
    setTracking(true);

    if (idleTimer.current) clearTimeout(idleTimer.current);

    idleTimer.current = setTimeout(() => setTracking(false), IDLE_AFTER);
  };

  const handleLeave = () => {
    if (idleTimer.current) clearTimeout(idleTimer.current);
    setTracking(false);
  };

  const pupilX = 110 + gaze.x * 17;
  const pupilY = 65 + gaze.y * 10;
  const center = (gaze.x + 1) / 2;
  const focus = Math.round(
    (1 - Math.min(1, Math.hypot(gaze.x, gaze.y) / 1.35)) * 100,
  );
  const zone = center < 0.34 ? "A" : center < 0.67 ? "B" : "C";

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="flex h-full flex-col bg-ink"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-line/70 px-5 py-3.5">
        <span className="label">{"// gaze"}</span>

        <span className="flex items-center gap-2">
          <span
            className={`h-1.5 w-1.5 ${tracking ? "bg-sepia" : "soft-pulse bg-cream-3"}`}
          />
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-cream-3">
            {tracking ? "tracking" : "idle sweep"}
          </span>
        </span>
      </div>

      {/* Eye */}
      <div className="flex-1 px-4 py-4">
        <svg
          viewBox="0 0 220 130"
          className="h-auto w-full"
          role="img"
          aria-label="An eye that tracks the pointer"
        >
          <defs>
            <pattern
              id="gaze-grid"
              width="11"
              height="11"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M11 0H0v11"
                fill="none"
                stroke="var(--color-cream)"
                strokeOpacity={0.1}
                strokeWidth={0.5}
              />
            </pattern>
          </defs>

          <rect width="220" height="130" fill="url(#gaze-grid)" />

          {/* Scanner */}
          <rect
            x="0"
            y="0"
            width="220"
            height="1.5"
            fill="var(--color-sepia)"
            opacity={0.45}
            className="scan-sweep"
          />

          {/* Guides */}
          <line
            x1="0"
            y1={pupilY}
            x2="220"
            y2={pupilY}
            stroke="var(--color-cream)"
            strokeOpacity={0.16}
            strokeWidth={0.5}
            strokeDasharray="3 4"
          />
          <line
            x1={pupilX}
            y1="0"
            x2={pupilX}
            y2="130"
            stroke="var(--color-cream)"
            strokeOpacity={0.16}
            strokeWidth={0.5}
            strokeDasharray="3 4"
          />

          {/* Eye */}
          <path
            d="M14 65 Q110 12 206 65 Q110 118 14 65 Z"
            fill="var(--color-ink-2)"
            stroke="var(--color-cream)"
            strokeOpacity={0.45}
            strokeWidth={1.3}
          />

          {/* Gaze vector */}
          <line
            x1="110"
            y1="65"
            x2={pupilX}
            y2={pupilY}
            stroke="var(--color-sepia)"
            strokeWidth={0.8}
            strokeDasharray="2 3"
          />

          {/* Iris + pupil */}
          <circle
            cx={pupilX}
            cy={pupilY}
            r={21}
            fill="var(--color-ink)"
            stroke="var(--color-sepia)"
            strokeWidth={1.3}
          />
          <circle cx={pupilX} cy={pupilY} r={8} fill="var(--color-sepia)" />
          <circle cx={pupilX} cy={pupilY} r={3} fill="var(--color-ink)" />
          <circle
            cx={pupilX - 6}
            cy={pupilY - 7}
            r={2.4}
            fill="var(--color-cream)"
            opacity={0.5}
          />
        </svg>

        {/* Attention heat map */}
        <div className="mt-3 flex h-[26px] items-end gap-[3px]">
          {Array.from({ length: BARS }).map((_, index) => {
            const position = index / (BARS - 1);
            const distance = (position - center) / 0.16;
            const intensity = Math.exp(-distance * distance);

            return (
              <span
                key={index}
                className="flex-1 bg-sepia"
                style={{
                  height: `${(4 + intensity * 22).toFixed(1)}px`,
                  opacity: Number((0.18 + intensity * 0.82).toFixed(3)),
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Footer readout */}
      <div className="flex items-center justify-between gap-3 border-t border-line/70 px-5 py-3.5">
        <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-cream-2">
          {`yaw ${signed(gaze.x)} · pitch ${signed(gaze.y)}`}
        </span>

        <span className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.16em] text-cream-3">
          <span>{`aoi ${zone}`}</span>
          <span>{`focus ${focus}%`}</span>
        </span>
      </div>
    </div>
  );
}
