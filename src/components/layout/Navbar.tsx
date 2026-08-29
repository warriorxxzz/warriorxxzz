import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { NAV_LINKS } from "../../data/nav";
import { PERSONAL } from "../../data/personal";
import { useActiveSection } from "../../hooks/useActiveSection";
import Icon from "../icons/Icon";
import SocialLinks from "../ui/SocialLinks";
import { cn } from "../../lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(NAV_LINKS.map((l) => l.href.replace("#", "")));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/85 backdrop-blur">
      <nav className="relative z-[70] mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#hero" onClick={close} className="font-mono text-sm text-text">
          <span className="text-signal">&lt;</span>
          {PERSONAL.handle}
          <span className="text-signal">/&gt;</span>
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "font-mono text-xs tracking-wide transition-colors",
                  active === link.href.replace("#", "")
                    ? "text-signal drop-shadow-[0_0_8px_var(--color-signal)]"
                    : "text-muted hover:text-text"
                )}
              >
                {link.path}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded-md border text-text transition-colors md:hidden",
            open ? "border-signal text-signal shadow-[0_0_14px_var(--color-signal)]" : "border-border"
          )}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </nav>

      {open && (
        <div className="bg-grid fixed inset-0 z-[60] bg-bg/98 md:hidden">
          <div className="flex h-full flex-col justify-between overflow-y-auto px-6 pb-10 pt-24">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="border-b border-border/60 py-4"
                >
                  <a href={link.href} onClick={close} className="flex items-baseline justify-between">
                    <span
                      className={cn(
                        "font-display text-2xl font-semibold",
                        active === link.href.replace("#", "") ? "glow-text text-signal" : "text-text"
                      )}
                    >
                      {link.label}
                    </span>
                    <span className="font-mono text-xs text-muted">{link.path}</span>
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col gap-4">
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted">connect</p>
              <SocialLinks />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
