interface SectionHeadProps {
  index: string;
  title: string;
  meta?: string;
  className?: string;
}

export default function SectionHead({
  index,
  title,
  meta,
  className = "",
}: SectionHeadProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <span className="font-mono text-[9.5px] leading-none text-cyan/70">
        [ {index} ]
      </span>

      <h2 className="font-mono text-[10px] font-medium uppercase leading-none tracking-[0.24em] text-mist">
        {title}
      </h2>

      <span className="h-px flex-1 bg-line" />

      {meta ? (
        <span className="font-mono text-[9px] uppercase leading-none tracking-[0.18em] text-dim">
          {meta}
        </span>
      ) : null}
    </div>
  );
}
