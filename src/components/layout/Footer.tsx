import { PERSONAL } from "../../data/personal";
import Icon from "../icons/Icon";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 sm:flex-row sm:justify-between">
        <p className="font-display text-sm italic text-muted">
          {PERSONAL.name} — {new Date().getFullYear()}
        </p>
        <a
          href="#hero"
          aria-label="Back to top"
          className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-text"
        >
          Back to top
          <Icon name="chevron-up" className="h-3.5 w-3.5" />
        </a>
      </div>
    </footer>
  );
}
