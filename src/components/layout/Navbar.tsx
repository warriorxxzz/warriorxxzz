import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { NAV_LINKS } from "../../data/nav";
import { PERSONAL } from "../../data/personal";
import { useActiveSection } from "../../hooks/useActiveSection";
import Icon from "../icons/Icon";
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-[#09090b]/95 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* W4M Logo restored */}
        <a href="#hero" onClick={close} className="font-display text-sm font-semibold tracking-wide text-white">
          {PERSONAL.handle}
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  active === link.href.replace("#", "") ? "text-white" : "text-zinc-400 hover:text-white"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900 text-white md:hidden"
        >
          <Icon name="menu" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={close}
              className="fixed inset-0 z-40 bg-black/80 md:hidden"
            />

            {/* Right Drawer - Solid Opaque Background (#09090b) */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
              style={{ backgroundColor: "#09090b" }}
              className="fixed inset-y-0 right-0 z-50 flex w-72 flex-col justify-between border-l border-zinc-800 p-6 shadow-2xl md:hidden"
            >
              <div>
                <div className="mb-6 flex items-center justify-between border-b border-zinc-800/80 pb-4">
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-zinc-400">
                    NAVIGATION
                  </span>
                  <button
                    type="button"
                    aria-label="Close menu"
                    onClick={close}
                    className="flex h-8 w-8 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900 text-zinc-300 hover:bg-zinc-800"
                  >
                    <Icon name="close" className="h-4 w-4" />
                  </button>
                </div>

                <ul className="flex flex-col gap-1">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={close}
                        className={cn(
                          "block rounded-md px-3 py-2.5 text-base font-medium transition-all",
                          active === link.href.replace("#", "")
                            ? "bg-zinc-800 text-white"
                            : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                        )}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Status Box */}
              <div className="mt-auto rounded-lg border border-zinc-800 bg-zinc-900/90 p-3.5">
                <div className="mb-1 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400">STATUS</span>
                </div>
                <p className="font-mono text-xs text-zinc-300">
                  {PERSONAL.now?.learning || "Python · Linux · Security"}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
