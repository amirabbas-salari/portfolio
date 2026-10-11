/**
 * Gaze-regression network: frame → face mesh → features → gaze vector.
 * Hand-plotted nodes, CSS pulses travelling along the edges.
 */

const LAYERS = [
  { label: "FRAME", count: 3 },
  { label: "MESH", count: 5 },
  { label: "FEATURES", count: 4 },
  { label: "GAZE", count: 2 },
];

const X = [38, 106, 174, 246];
const CY = 78;
const STEP = 26;

interface Point {
  x: number;
  y: number;
}

const nodeLayers: Point[][] = LAYERS.map((layer, layerIndex) =>
  Array.from({ length: layer.count }, (_, i) => ({
    x: X[layerIndex],
    y: CY + (i - (layer.count - 1) / 2) * STEP,
  })),
);

const nodes: Point[] = nodeLayers.flat();

interface Edge extends Point {
  x2: number;
  y2: number;
  delay: number;
}

const edges: Edge[] = [];

for (let layer = 0; layer < nodeLayers.length - 1; layer += 1) {
  nodeLayers[layer].forEach((from, i) => {
    nodeLayers[layer + 1].forEach((to, j) => {
      edges.push({
        ...from,
        x2: to.x,
        y2: to.y,
        delay: (i * 0.41 + j * 0.23 + layer * 0.17) % 2.6,
      });
    });
  });
}

export default function NeuralPulse() {
  return (
    <div className="flex h-full flex-col bg-ink">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-line/70 px-5 py-3.5">
        <span className="label">{"// network"}</span>

        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-cream-3">
          3 · 5 · 4 · 2
        </span>
      </div>

      {/* Graph */}
      <div className="flex flex-1 items-center justify-center px-4 py-4">
        <svg
          viewBox="0 0 284 156"
          className="h-auto w-full max-w-[320px]"
          role="img"
          aria-label="Diagram of a gaze estimation network"
        >
          {/* Base edges */}
          {edges.map((edge, index) => (
            <line
              key={`base-${index}`}
              x1={edge.x}
              y1={edge.y}
              x2={edge.x2}
              y2={edge.y2}
              stroke="var(--color-cream)"
              strokeOpacity={0.14}
              strokeWidth={0.6}
            />
          ))}

          {/* Travelling pulses */}
          {edges.map((edge, index) => (
            <line
              key={`pulse-${index}`}
              x1={edge.x}
              y1={edge.y}
              x2={edge.x2}
              y2={edge.y2}
              stroke="var(--color-sepia)"
              strokeWidth={1.1}
              strokeLinecap="round"
              pathLength={1}
              strokeDasharray="0.16 0.84"
              className="edge-pulse"
              style={{ animationDelay: `${edge.delay}s` }}
            />
          ))}

          {/* Nodes */}
          {nodes.map((node, index) => (
            <g key={`node-${index}`}>
              <circle
                cx={node.x}
                cy={node.y}
                r={5.5}
                fill="var(--color-ink)"
                stroke="var(--color-cream)"
                strokeOpacity={0.35}
                strokeWidth={0.8}
              />

              <circle
                cx={node.x}
                cy={node.y}
                r={2.4}
                fill="var(--color-sepia)"
                className="node-blink"
                style={{ animationDelay: `${(index * 0.23) % 3}s` }}
              />
            </g>
          ))}
        </svg>
      </div>

      {/* Layer labels */}
      <div className="grid grid-cols-4 gap-2 px-5 pb-1">
        {LAYERS.map((layer) => (
          <span
            key={layer.label}
            className="text-center font-mono text-[8.5px] uppercase tracking-[0.18em] text-cream-3"
          >
            {layer.label}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-auto border-t border-line/70 px-5 py-3.5">
        <p className="font-mono text-[9px] uppercase leading-5 tracking-[0.16em] text-cream-3">
          MediaPipe face mesh → L2CS-Net gaze regression
        </p>
      </div>
    </div>
  );
}
