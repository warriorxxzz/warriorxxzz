import { useState } from "react";
import { PERSONAL } from "../../data/personal";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import SocialLinks from "../ui/SocialLinks";
import Icon from "../icons/Icon";
import Reveal from "../ui/Reveal";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-muted">
        {label}
      </label>
      {children}
    </div>
  );
}

const inputClasses =
  "w-full rounded-lg border border-border bg-surface-2/60 px-4 py-3 text-sm text-text placeholder:text-muted/50 outline-none transition-colors focus:border-signal focus:shadow-[0_0_0_3px_rgba(43,255,140,0.1)]";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${name || "a visitor"}`);
    const body = encodeURIComponent(
      `${message}\n\n—\n${name}\n${email}`
    );
    window.location.href = `mailto:${PERSONAL.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="scroll-mt-16 border-t border-border px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <SectionHeading
          eyebrow="contact"
          title="Establish connection"
          description={PERSONAL.availability}
        />

        <Reveal>
          <form onSubmit={handleSubmit} className="scan-frame panel relative overflow-hidden p-6 sm:p-8">
            <div className="space-y-5">
              <Field label="your full name">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  className={inputClasses}
                />
              </Field>

              <Field label="your email address">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@example.com"
                  className={inputClasses}
                />
              </Field>

              <Field label="detailed message">
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
                Transmit Message
                <Icon name="arrow-right" />
              </Button>
            </div>

            <p className="mt-4 text-center font-mono text-[11px] text-muted">
              opens your email app with this pre-filled
            </p>
          </form>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col items-center gap-3">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
              or reach out directly
            </p>
            <SocialLinks />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
