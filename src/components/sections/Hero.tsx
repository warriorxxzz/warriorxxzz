import { PERSONAL } from "../../data/personal";
import Button from "../ui/Button";
import DecryptText from "../ui/DecryptText";
import Icon from "../icons/Icon";
import Reveal from "../ui/Reveal";
import { useUptime } from "../../hooks/useUptime";

function ReadoutRow({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-border/60 py-2.5 last:border-0">
      <span className="shrink-0 text-muted">{label}</span>
      <span className={accent ? "text-right text-signal" : "text-right text-text"}>{value}</span>
    </div>
  );
}

export default function Hero() {
  const uptime = useUptime();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen scroll-mt-16 flex-col justify-center px-6 pt-20"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface-2/60 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-muted">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-status" />
                available · {PERSONAL.location}
              </span>
            </Reveal>

            <h1 className="mt-6 font-display text-6xl font-semibold uppercase leading-[0.92] tracking-tight sm:text-7xl lg:text-8xl">
              <span className="glitch" data-text={PERSONAL.handle}>
                <span className="glow-text bg-gradient-to-b from-text via-text to-signal bg-clip-text text-transparent">
                  <DecryptText text={PERSONAL.handle} />
                </span>
              </span>
              <span className="cursor-blink ml-1 inline-block h-[0.7em] w-[0.5ch] translate-y-1 bg-signal align-middle" />
            </h1>

            <Reveal delay={0.15}>
              <p className="mt-6 font-mono text-sm sm:text-base" style={{ color: "var(--color-cyan)" }}>
                {PERSONAL.role}
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                {PERSONAL.tagline}
              </p>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="#projects">
                  View Projects
                  <Icon name="arrow-right" />
                </Button>
                <Button href="#contact" variant="outline">
                  Get in Touch
                </Button>
              </div>
            </Reveal>

            <div className="signal-line mt-14 max-w-xs" />
          </div>

          <Reveal delay={0.2}>
            <div className="panel p-5 font-mono text-xs">
              <div className="mb-3 flex items-center justify-between text-muted">
                <span className="uppercase tracking-widest">readout</span>
                <span className="flex items-center gap-1.5 text-status">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-status" />
                  live
                </span>
              </div>
              <ReadoutRow label="status" value="online" accent />
              <ReadoutRow label="session" value={uptime} />
              <ReadoutRow label="location" value={PERSONAL.location} />
              <ReadoutRow label="mode" value={PERSONAL.availability} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
