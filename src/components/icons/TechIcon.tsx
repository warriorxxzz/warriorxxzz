import type { ReactNode } from "react";

const wrap = (children: ReactNode) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    {children}
  </svg>
);

const icons: Record<string, ReactNode> = {
  python: wrap(
    <>
      <path d="M12 3c-3 0-4 1-4 3v2h4v1H6c-2 0-3 1.5-3 4s1 4 3 4h1v-2c0-2 1-3 3-3h4c1.7 0 3-1.3 3-3V6c0-2-2-3-5-3Z" />
      <circle cx="9" cy="6" r="0.6" fill="currentColor" stroke="none" />
      <path d="M12 21c3 0 4-1 4-3v-2h-4v-1h6c2 0 3-1.5 3-4s-1-4-3-4h-1v2c0 2-1 3-3 3h-4c-1.7 0-3 1.3-3 3v3c0 2 2 3 5 3Z" />
      <circle cx="15" cy="18" r="0.6" fill="currentColor" stroke="none" />
    </>
  ),
  javascript: wrap(
    <>
      <path d="M8 4c-2 0-3 1-3 3v2c0 1.3-.7 2-2 2 1.3 0 2 .7 2 2v2c0 2 1 3 3 3" />
      <path d="M16 4c2 0 3 1 3 3v2c0 1.3.7 2 2 2-1.3 0-2 .7-2 2v2c0 2-1 3-3 3" />
    </>
  ),
  typescript: wrap(
    <>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M9 10h4M11 10v6" />
      <path d="M16 15.5c.3.4.8.6 1.3.6.8 0 1.4-.4 1.4-1s-.6-.9-1.4-1.1c-.8-.2-1.3-.5-1.3-1.1 0-.6.6-1 1.3-1 .5 0 1 .2 1.3.6" />
    </>
  ),
  react: wrap(
    <>
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)" />
    </>
  ),
  "node.js": wrap(
    <>
      <path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z" />
      <path d="M9 12h6M9 15h4" />
    </>
  ),
  "tailwind css": wrap(
    <>
      <path d="M4 10c1-3 3-4 5-4 2.5 0 3.5 2 6 2s3.5-1 5-2c-1 3-3 4-5 4-2.5 0-3.5-2-6-2s-3.5 1-5 2Z" />
      <path d="M4 15c1-3 3-4 5-4 2.5 0 3.5 2 6 2s3.5-1 5-2c-1 3-3 4-5 4-2.5 0-3.5-2-6-2s-3.5 1-5 2Z" />
    </>
  ),
  git: wrap(
    <>
      <circle cx="7" cy="6" r="1.8" />
      <circle cx="7" cy="18" r="1.8" />
      <circle cx="17" cy="12" r="1.8" />
      <path d="M7 7.8V16.2M8.6 6.8 15.3 10.6M8.6 17.2 15.3 13.4" />
    </>
  ),
  bash: wrap(
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="m7 9 3 3-3 3M12 15h5" />
    </>
  ),
  c: wrap(
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M15 9.5c-.7-.7-1.6-1-2.6-1-2 0-3.6 1.6-3.6 3.5s1.6 3.5 3.6 3.5c1 0 1.9-.4 2.6-1" />
    </>
  ),
  "network fundamentals": wrap(
    <>
      <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
      <path d="M12 4v3M12 17v3M4 12h3M17 12h3M6.3 6.3l2 2M15.7 15.7l2 2M6.3 17.7l2-2M15.7 8.3l2-2" />
    </>
  ),
  "linux hardening": wrap(
    <>
      <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
      <path d="M9.5 12.5 11 14l3.5-4" />
    </>
  ),
  "owasp top 10": wrap(
    <>
      <path d="M12 4 3 8l9 4 9-4-9-4Z" />
      <path d="M3 12l9 4 9-4M3 16l9 4 9-4" />
    </>
  ),
  wireshark: wrap(
    <>
      <path d="M2 12h4l2-6 3 12 2-8 2 4h7" />
    </>
  ),
  "cloud security": wrap(
    <>
      <path d="M7 17a4 4 0 0 1 .3-8 5.5 5.5 0 0 1 10.6 1.5A3.5 3.5 0 0 1 17 17H7Z" />
      <path d="M12 13v5M10 16l2 2 2-2" />
    </>
  ),
  "ethical hacking": wrap(
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none" />
    </>
  ),
};

export function getTechIcon(name: string): ReactNode | null {
  return icons[name.trim().toLowerCase()] ?? null;
}
