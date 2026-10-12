"use client";

import { useEffect, useRef, useState } from "react";

import { animate, useInView, useReducedMotion } from "framer-motion";

interface CountUpProps {
  value: number;
  pad?: number;
  duration?: number;
}

export default function CountUp({
  value,
  pad = 2,
  duration = 1.1,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduceMotion = useReducedMotion();

  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const controls = animate(0, value, {
      duration: reduceMotion ? 0.001 : duration,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });

    return () => controls.stop();
  }, [inView, value, duration, reduceMotion]);

  return <span ref={ref}>{String(display).padStart(pad, "0")}</span>;
}
