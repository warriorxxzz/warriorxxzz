export default function Tag({ children }: { children: string }) {
  return (
    <span className="badge inline-flex items-center rounded-md border border-border bg-surface-2 px-2.5 py-1 font-mono text-xs text-muted">
      {children}
    </span>
  );
}
