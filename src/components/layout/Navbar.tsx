import { useEffect, useState } from "react";
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#hero" onClick={close} className="font-display text-sm font-semibold text-text">
          {PERSONAL.handle}
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "text-sm transition-colors",
                  active === link.href.replace("#", "") ? "text-text" : "text-muted hover:text-text"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-text md:hidden"
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-[60] bg-bg md:hidden">
          <div className="flex h-full flex-col justify-between px-6 pb-10 pt-24">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href} className="border-b border-border/60 py-4">
                  <a
                    href={link.href}
                    onClick={close}
                    className={cn(
                      "font-display text-2xl font-semibold",
                      active === link.href.replace("#", "") ? "text-text" : "text-muted"
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-muted">Connect</p>
              <SocialLinks />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
