"use client";

import { useSyncExternalStore } from "react";

import ResumeSheet from "./ResumeSheet";
import ResumeCompact from "./ResumeCompact";

/** Design canvas — the sheet is authored at this size and scaled to fit. */
const DESIGN_WIDTH = 1600;
const DESIGN_HEIGHT = 930;

/** Below this scale the sheet would get unreadable, so we fall back. */
const MIN_SHEET_SCALE = 0.75;

/** Value used before hydration, when no viewport is available. */
const SERVER_SNAPSHOT = "server";

function subscribe(onChange: () => void) {
  window.addEventListener("resize", onChange);
  window.addEventListener("orientationchange", onChange);

  return () => {
    window.removeEventListener("resize", onChange);
    window.removeEventListener("orientationchange", onChange);
  };
}

function getSnapshot() {
  return `${window.innerWidth}|${window.innerHeight}`;
}

function getServerSnapshot() {
  return SERVER_SNAPSHOT;
}

export default function ResumeScreen() {
  const viewport = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const measured = viewport !== SERVER_SNAPSHOT;
  const [width, height] = measured
    ? viewport.split("|").map(Number)
    : [0, 0];

  const scale = measured
    ? Math.min(width / DESIGN_WIDTH, height / DESIGN_HEIGHT)
    : 0;

  // Compact is also the pre-hydration default, so the résumé content is
  // always present in the server-rendered HTML.
  const useSheet = measured && scale >= MIN_SHEET_SCALE;

  return (
    <main className="resume-screen relative h-[100dvh] w-full overflow-hidden bg-void">
      {/* Viewport backdrop — fills the letterbox area around the sheet */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_0%_0%,rgba(53,230,255,0.08),transparent_55%),radial-gradient(110%_110%_at_100%_100%,rgba(255,61,154,0.07),transparent_55%)]" />

      <div className="tech-grid pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(110%_80%_at_50%_50%,#000,transparent_80%)]" />

      <div data-ready={measured} className="resume-fade h-full w-full">
        {useSheet ? (
          <div
            className="resume-sheet-wrap absolute left-1/2 top-1/2"
            style={{
              width: DESIGN_WIDTH,
              height: DESIGN_HEIGHT,
              transform: `translate(-50%, -50%) scale(${scale})`,
            }}
          >
            <ResumeSheet />
          </div>
        ) : (
          <div className="h-full w-full overflow-y-auto overscroll-contain">
            <ResumeCompact />
          </div>
        )}
      </div>
    </main>
  );
}
