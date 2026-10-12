"use client";

import { useEffect, useState } from "react";

import { useReducedMotion } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  The snippet — a real slice of the gaze-analytics pipeline          */
/* ------------------------------------------------------------------ */

const KEY = "text-sepia";
const NAME = "text-cream";
const PUNCT = "text-cream-3";
const COMMENT = "text-cream-3/70 italic";
const BUILTIN = "text-sepia/80";

type Token = [string, string];

const SNIPPET: Token[][] = [
  [["# gaze_analytics/pipeline.py", COMMENT]],
  [
    ["import", KEY],
    [" cv2", NAME],
    [", ", PUNCT],
    ["mediapipe", NAME],
    [" as ", KEY],
    ["mp", NAME],
  ],
  [
    ["from ", KEY],
    ["l2cs", NAME],
    [" import ", KEY],
    ["L2CSNet", NAME],
  ],
  [["", PUNCT]],
  [
    ["def ", KEY],
    ["estimate_gaze", NAME],
    ["(", PUNCT],
    ["frame", NAME],
    [")", PUNCT],
    [":", PUNCT],
  ],
  [
    ["    ", PUNCT],
    ["mesh", NAME],
    [" = ", PUNCT],
    ["mp", BUILTIN],
    [".solutions.face_mesh.FaceMesh(", PUNCT],
    ["refine_landmarks", NAME],
    ["=", PUNCT],
    ["True", BUILTIN],
    [")", PUNCT],
  ],
  [
    ["    ", PUNCT],
    ["landmarks", NAME],
    [" = ", PUNCT],
    ["mesh", BUILTIN],
    [".process(", PUNCT],
    ["cv2", BUILTIN],
    [".cvtColor(frame, ", PUNCT],
    ["cv2", BUILTIN],
    [".COLOR_BGR2RGB))", PUNCT],
  ],
  [
    ["    ", PUNCT],
    ["pitch", NAME],
    [", ", PUNCT],
    ["yaw", NAME],
    [" = ", PUNCT],
    ["L2CSNet", BUILTIN],
    [".predict(landmarks)", PUNCT],
  ],
  [
    ["    ", PUNCT],
    ["return ", KEY],
    ["AttentionMap", BUILTIN],
    ["(pitch, yaw)", PUNCT],
  ],
  [["", PUNCT]],
  [["# → real-time attention heat map", COMMENT]],
];

const TOTAL_CHARS =
  SNIPPET.reduce(
    (sum, line) => sum + line.reduce((acc, [text]) => acc + text.length, 0),
    0,
  ) + (SNIPPET.length - 1);

const TYPE_MS = 17;
const DELETE_MS = 9;
const DELETE_STEP = 3;

type Phase = "typing" | "hold" | "deleting" | "pause";

interface RenderedLine {
  tokens: { text: string; className: string }[];
}

function sliceSnippet(count: number): RenderedLine[] {
  let remaining = count;
  const lines: RenderedLine[] = [];

  for (const line of SNIPPET) {
    if (remaining <= 0) break;

    const tokens: { text: string; className: string }[] = [];

    for (const [text, className] of line) {
      if (remaining <= 0) break;

      const slice = text.slice(0, remaining);
      tokens.push({ text: slice, className });
      remaining -= slice.length;
    }

    lines.push({ tokens });
    remaining -= 1; // the newline itself
  }

  return lines;
}

/* ------------------------------------------------------------------ */
/*  Widget                                                             */
/* ------------------------------------------------------------------ */

export default function CodeTerminal() {
  const reduceMotion = useReducedMotion();

  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");

  useEffect(() => {
    if (reduceMotion) return;

    let timer: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (count >= TOTAL_CHARS) {
        timer = setTimeout(() => setPhase("hold"), 20);
      } else {
        timer = setTimeout(() => setCount(count + 1), TYPE_MS);
      }
    } else if (phase === "hold") {
      timer = setTimeout(() => setPhase("deleting"), 2800);
    } else if (phase === "deleting") {
      if (count <= 0) {
        timer = setTimeout(() => setPhase("pause"), 20);
      } else {
        timer = setTimeout(
          () => setCount(Math.max(0, count - DELETE_STEP)),
          DELETE_MS,
        );
      }
    } else {
      timer = setTimeout(() => setPhase("typing"), 700);
    }

    return () => clearTimeout(timer);
  }, [phase, count, reduceMotion]);

  const lines = sliceSnippet(reduceMotion ? TOTAL_CHARS : count);
  const caretLine = lines.length - 1;

  return (
    <div className="flex h-full flex-col bg-ink">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-line/70 px-5 py-3.5">
        <span className="label">{"// pipeline.py"}</span>

        <span className="flex items-center gap-2">
          <span className="soft-pulse h-1.5 w-1.5 bg-sepia" />
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-cream-3">
            typing
          </span>
        </span>
      </div>

      {/* Code */}
      <div className="min-h-[228px] flex-1 overflow-hidden px-5 py-4">
        <div className="font-mono text-[11px] leading-[19px]">
          {lines.map((line, index) => (
            <div key={index} className="flex gap-3.5">
              <span className="w-4 shrink-0 select-none text-right text-cream-3/40">
                {index + 1}
              </span>

              <span className="whitespace-pre text-cream">
                {line.tokens.map((token, tokenIndex) => (
                  <span key={tokenIndex} className={token.className}>
                    {token.text}
                  </span>
                ))}

                {index === caretLine ? (
                  <span className="caret ml-px inline-block w-[6px] translate-y-[2px] bg-sepia text-transparent">
                    |
                  </span>
                ) : null}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-line/70 px-5 py-3.5">
        {["Python", "OpenCV", "MediaPipe", "L2CS-Net"].map((chip) => (
          <span
            key={chip}
            className="font-mono text-[9px] uppercase tracking-[0.18em] text-cream-3"
          >
            {chip}
          </span>
        ))}
      </div>
    </div>
  );
}
