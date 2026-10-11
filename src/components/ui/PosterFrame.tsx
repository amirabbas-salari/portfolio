/**
 * The printed frame that wraps the whole canvas — a cream hairline with
 * registration marks at two corners, lifted straight from the poster.
 */
export default function PosterFrame() {
  return (
    <div aria-hidden className="no-print">
      <div className="poster-frame" />
      <div className="poster-frame rotate-180" />
    </div>
  );
}
