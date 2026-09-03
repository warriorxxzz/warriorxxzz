import { useState } from "react";
import { PERSONAL } from "../../data/personal";
import { SOCIAL_LINKS } from "../../data/social";
import Icon from "../icons/Icon";
import Reveal from "../ui/Reveal";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xdeozwob";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-wide text-muted">{label}</label>
      {children}
    </div>
  );
}

const inputClasses =
  "w-full rounded-xl border border-border bg-bg/60 px-4 py-3 text-sm text-text placeholder:text-muted/60 outline-none transition-all focus:border-signal/50 focus:ring-1 focus:ring-signal/50";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target as HTMLFormElement),
      });

      if (res.ok) {
        setStatus("sent");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="scroll-mt-16 border-t border-border px-6 py-20">
      <div className="mx-auto max-w-xl">
        <Reveal>
          <h2 className="text-display mb-2 font-display font-semibold text-text">Contact</h2>
          <p className="mb-2 text-sm text-muted">{PERSONAL.availability}</p>
          <p className="mb-10 text-sm text-muted">
            {PERSONAL.name} · {PERSONAL.email}
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border/80 bg-surface/40 p-6 backdrop-blur-sm md:p-8"
          >
            <div className="space-y-5">
              <Field label="Your name">
                <input
                  type="text"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className={inputClasses}
                />
              </Field>

              <Field label="Your email">
                <input
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className={inputClasses}
                />
              </Field>

              <Field label="Message">
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hi! I saw your work and wanted to connect..."
                  className={`${inputClasses} resize-none`}
                />
              </Field>

              <button
                type="submit"
                disabled={status === "sending"}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-signal/40 bg-surface-2 px-6 py-3.5 font-mono text-sm text-signal shadow-md shadow-signal/5 transition-all duration-200 hover:bg-signal hover:text-bg disabled:opacity-50"
              >
                {status === "sending" ? "Sending..." : "Say hi"}
                {status !== "sending" && <Icon name="arrow-right" className="h-4 w-4" />}
              </button>

              {status === "sent" && (
                <p className="text-center text-sm text-status">Thanks — message sent.</p>
              )}
              {status === "error" && (
                <p className="text-center text-sm text-muted">
                  Something went wrong. Try emailing directly instead.
                </p>
              )}
            </div>
          </form>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex justify-center gap-3 border-t border-border pt-8">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel={link.url.startsWith("http") ? "noreferrer" : undefined}
                aria-label={link.label}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-muted transition-all hover:border-signal/30 hover:text-signal"
              >
                <Icon name={link.icon} />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
