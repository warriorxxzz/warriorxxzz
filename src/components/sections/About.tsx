import { PERSONAL } from "../../data/personal";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

function StatChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="panel panel-hover px-4 py-3">
      <p className="font-mono text-[10px] uppercase tracking-widest text-muted">{label}</p>
      <p className="mt-1.5 font-display text-sm font-semibold leading-snug text-text">
        {value}
      </p>
    </div>
  );
}

function DataRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0 border-b border-border/50 py-3 last:border-0">
      <p className="font-mono text-[10px] uppercase tracking-widest text-muted">{label}</p>
      <p className="mt-1 break-words font-mono text-sm leading-relaxed text-text">
        {value || "—"}
      </p>
    </div>
  );
}

export default function About() {
  const [lead, ...rest] = PERSONAL.bio;
  const displayName = PERSONAL.name?.trim() || PERSONAL.handle;

  return (
    <section id="about" className="scroll-mt-16 border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="about" title="Who's behind the handle" />

        {/* PROFILE PHOTO + IDENTITY */}
        <Reveal>
          <div className="mb-14 flex flex-col items-center gap-7 sm:flex-row sm:items-center">
            <div className="relative h-40 w-40 shrink-0">
              {/* ambient halo */}
              <div className="absolute -inset-4 rounded-2xl bg-signal/15 blur-2xl" />

              {/* positioning wrapper (plain, no conflicting position rule) */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl border border-signal/50 bg-surface-2 shadow-[0_0_36px_-6px_var(--color-signal)]">
                {/* scan-frame lives on its own relative wrapper so it doesn't fight the outer "absolute" */}
                <div className="scan-frame relative h-full w-full">
                  <img
                    src="/projects/image3.png"
                    alt={displayName}
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5" />
                </div>
              </div>

              {/* corner brackets — offset outside the frame */}
              <span className="absolute -left-2 -top-2 h-5 w-5 border-l-2 border-t-2 border-signal" />
              <span className="absolute -right-2 -top-2 h-5 w-5 border-r-2 border-t-2 border-signal" />
              <span className="absolute -bottom-2 -left-2 h-5 w-5 border-b-2 border-l-2 border-signal" />
              <span className="absolute -bottom-2 -right-2 h-5 w-5 border-b-2 border-r-2 border-signal" />

              {/* floating badges */}
              <span className="glow-pill absolute -left-4 top-6 flex items-center gap-1 rounded-full border border-signal/40 bg-bg px-2 py-1 font-mono text-[10px] text-signal">
                &lt;/&gt; dev
              </span>
              <span className="glow-pill absolute -right-4 bottom-6 flex items-center gap-1 rounded-full border border-signal/40 bg-bg px-2 py-1 font-mono text-[10px] text-signal">
                ● sec
              </span>
            </div>

            <div className="text-center sm:text-left">
              <p className="font-mono text-xs uppercase tracking-widest text-signal">identity</p>
              <h3 className="mt-1 font-display text-2xl font-semibold text-text">
                {displayName}
              </h3>
              <p className="mt-1 font-mono text-xs text-muted">
                {PERSONAL.handle} · student · developer · cybersecurity learner
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          {/* BIO */}
          <Reveal delay={0.05}>
            <div>
              <blockquote className="border-l-2 border-signal/60 pl-5 font-display text-xl font-medium leading-relaxed text-text sm:text-2xl">
                {lead}
              </blockquote>

              <div className="mt-6 space-y-4">
                {rest.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-relaxed text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <StatChip label="Role" value={PERSONAL.role.split(" • ")[0]} />
                <StatChip label="Location" value={PERSONAL.location} />
                <StatChip label="Status" value={PERSONAL.availability} />
              </div>
            </div>
          </Reveal>

          {/* WHOAMI PANEL */}
          <Reveal delay={0.1}>
            <div className="panel overflow-hidden">
              <div className="h-[2px] w-full bg-gradient-to-r from-signal via-cyan to-transparent" />
              <div className="p-6 font-mono text-sm">
                <p className="mb-4 flex items-center justify-between text-xs uppercase tracking-widest text-muted">
                  whoami
                  <span className="glow-pill flex items-center gap-1.5 rounded-full border border-signal/40 bg-signal/10 px-2.5 py-1 text-[10px] text-signal">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal" />
                    verified
                  </span>
                </p>
                <DataRow label="name" value={displayName} />
                <DataRow label="handle" value={PERSONAL.handle} />
                <DataRow label="role" value={PERSONAL.role} />
                <DataRow label="location" value={PERSONAL.location} />
                <DataRow label="status" value={PERSONAL.availability} />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
