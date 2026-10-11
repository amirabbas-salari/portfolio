/**
 * Site-wide atmosphere: a warm graded ground, faint technical grid and a
 * soft vignette — like ink pressed onto dark paper.
 */
export default function Backdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink"
    >
      {/* Warm graded ground */}
      <div className="paper-grain absolute inset-0" />

      {/* Technical grid */}
      <div className="tech-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(120%_85%_at_50%_0%,#000_6%,transparent_70%)]" />

      {/* Warm glows */}
      <div className="drift absolute -left-52 -top-64 h-[620px] w-[620px] rounded-full bg-sepia/[0.13] blur-[140px]" />

      <div
        className="drift absolute -right-56 top-[26%] h-[680px] w-[680px] rounded-full bg-cream/[0.05] blur-[150px]"
        style={{ animationDelay: "-8s" }}
      />

      <div className="absolute -bottom-52 left-1/2 h-[560px] w-[1000px] -translate-x-1/2 rounded-full bg-sepia-soft/[0.11] blur-[160px]" />

      {/* Printed horizon */}
      <div className="absolute inset-x-0 bottom-[18%] h-px bg-gradient-to-r from-transparent via-cream/15 to-transparent" />

      {/* Vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_240px_rgba(6,7,6,0.92)]" />
    </div>
  );
}
