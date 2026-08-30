import { PERSONAL } from "../../data/personal";
import SocialLinks from "../ui/SocialLinks";
import Icon from "../icons/Icon";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {PERSONAL.handle} — built with React, TypeScript &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          <SocialLinks />
          <a
            href="#hero"
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition-colors hover:border-signal/50 hover:text-text"
          >
            <Icon name="chevron-up" />
          </a>
        </div>
      </div>
    </footer>
  );
}
