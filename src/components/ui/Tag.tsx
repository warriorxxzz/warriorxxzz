export default function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-md border border-border bg-surface-2/60 px-2.5 py-1 font-mono text-[11px] tracking-wide text-muted">
      {children}
    </span>
  );
}
