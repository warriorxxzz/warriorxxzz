import { useState } from "react";
import { PERSONAL } from "../../data/personal";
import { SOCIAL_LINKS } from "../../data/social";
import Icon from "../icons/Icon";
import Reveal from "../ui/Reveal";

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

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${name || "a visitor"}`);
    const body = encodeURIComponent(`${message}\n\n—\n${name}\n${email}`);
    window.location.href = `mailto:${PERSONAL.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="scroll-mt-16 border-t border-border px-6 py-20">
      <div className="mx-auto max-w-xl">
        <Reveal>
          <h2 className="text-display mb-2 font-display font-semibold text-text">Contact</h2>
          <p className="mb-10 text-sm text-muted">{PERSONAL.availability}</p>
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
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  className={inputClasses}
                />
              </Field>

              <Field label="Your email">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@example.com"
                  className={inputClasses}
                />
              </Field>

              <Field label="Message">
                <textarea
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
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-signal/40 bg-surface-2 px-6 py-3.5 font-mono text-sm text-signal shadow-md shadow-signal/5 transition-all duration-200 hover:bg-signal hover:text-bg"
              >
                Send Message
                <Icon name="arrow-right" className="h-4 w-4" />
              </button>
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
