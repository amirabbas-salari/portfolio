"use client";

import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

import CodeTerminal from "./CodeTerminal";
import GazeTracker from "./GazeTracker";
import NeuralPulse from "./NeuralPulse";

export default function Lab() {
  return (
    <section
      id="lab"
      className="relative border-t border-line/70 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <Reveal>
          <SectionHeading
            kicker="Lab"
            title={
              <>
                Live Instruments
                <br />
                From The Stack
              </>
            }
            aside={<span className="label">{"// Move your cursor"}</span>}
          />

          <p className="mt-8 max-w-2xl text-[15px] leading-8 text-cream-3">
            Three small machines I actually build with: the vision pipeline
            that estimates where a person is looking, the network behind it,
            and a live read-out of both.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-px bg-line/70 md:grid-cols-2 lg:grid-cols-3">
          <Reveal delay={0.05} className="h-full">
            <CodeTerminal />
          </Reveal>

          <Reveal delay={0.1} className="h-full">
            <NeuralPulse />
          </Reveal>

          <Reveal delay={0.15} className="h-full md:col-span-2 lg:col-span-1">
            <GazeTracker />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
