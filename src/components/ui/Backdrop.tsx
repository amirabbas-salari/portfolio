/**
 * Site-wide atmosphere: technical grid, drifting neon glows, horizon line,
 * vignette and film grain. Sits behind every page.
 */
export default function Backdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-void"
    >
      {/* Technical grid */}
      <div className="tech-grid absolute inset-0 opacity-70 [mask-image:radial-gradient(120%_85%_at_50%_0%,#000_8%,transparent_72%)]" />

      {/* Neon glows */}
      <div className="drift absolute -left-52 -top-64 h-[640px] w-[640px] rounded-full bg-cyan/[0.09] blur-[140px]" />

      <div
        className="drift absolute -right-56 top-[28%] h-[700px] w-[700px] rounded-full bg-magenta/[0.07] blur-[150px]"
        style={{ animationDelay: "-8s" }}
      />

      <div className="absolute -bottom-40 left-1/2 h-[560px] w-[980px] -translate-x-1/2 rounded-full bg-violet/[0.07] blur-[160px]" />

      {/* Horizon */}
      <div className="absolute inset-x-0 bottom-[16%] h-px bg-gradient-to-r from-transparent via-cyan/25 to-transparent" />

      {/* Vignette + grain */}
      <div className="absolute inset-0 shadow-[inset_0_0_220px_rgba(2,3,10,0.92)]" />

      <div className="noise-layer absolute inset-0 opacity-[0.04] mix-blend-overlay" />
    </div>
  );
}
