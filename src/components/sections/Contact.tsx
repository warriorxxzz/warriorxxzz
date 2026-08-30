import { useState } from "react";
import { PERSONAL } from "../../data/personal";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
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
  "w-full rounded-lg border border-border bg-surface-2 px-4 py-3 text-sm text-text placeholder:text-muted/60 outline-none transition-colors focus:border-signal";

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
    <section id="contact" className="scroll-mt-16 border-t border-border px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <SectionHeading eyebrow="Contact" title="Get in touch" description={PERSONAL.availability} />

        <Reveal>
          <form onSubmit={handleSubmit} className="panel p-6 sm:p-8">
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

              <Button type="submit" className="w-full justify-center">
                Send Message
                <Icon name="arrow-right" />
              </Button>
            </div>
          </form>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 space-y-2 border-t border-border pt-8 text-sm">
            <p className="text-muted">
              Everything here is also on GitHub — commits, work in progress, mistakes included.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
              <a
                href={`https://github.com/${PERSONAL.githubUsername}`}
                target="_blank"
                rel="noreferrer"
                className="text-text underline decoration-border underline-offset-4 hover:decoration-signal"
              >
                GitHub
              </a>
              <a
                href={`mailto:${PERSONAL.email}`}
                className="text-text underline decoration-border underline-offset-4 hover:decoration-signal"
              >
                Email
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
