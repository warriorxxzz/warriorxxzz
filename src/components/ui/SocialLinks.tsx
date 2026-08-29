import { SOCIAL_LINKS } from "../../data/social";
import Icon from "../icons/Icon";
import { cn } from "../../lib/utils";

export default function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.label}
          href={link.url}
          target={link.url.startsWith("http") ? "_blank" : undefined}
          rel={link.url.startsWith("http") ? "noreferrer" : undefined}
          aria-label={link.label}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition-colors hover:border-signal hover:text-signal"
        >
          <Icon name={link.icon} />
        </a>
      ))}
    </div>
  );
}
