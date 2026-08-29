import { PERSONAL } from "../../data/personal";
import SocialLinks from "../ui/SocialLinks";
import Icon from "../icons/Icon";

export default function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="signal-line absolute inset-x-0 top-0 max-w-none opacity-40" />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between">
        <p className="font-mono text-xs text-muted">
          <span className="text-signal">© {new Date().getFullYear()}</span> {PERSONAL.handle} —
          built with React, TypeScript &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          <SocialLinks />
          <a
            href="#hero"
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition-colors hover:border-signal hover:text-signal hover:shadow-[0_0_12px_-2px_var(--color-signal)]"
          >
            <Icon name="chevron-up" />
          </a>
        </div>
      </div>
    </footer>
  );
}
