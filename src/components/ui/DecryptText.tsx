import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&*";

interface DecryptTextProps {
  text: string;
  className?: string;
}

export default function DecryptText({ text, className }: DecryptTextProps) {
  const reduced = usePrefersReducedMotion();
  const [display, setDisplay] = useState(reduced ? text : "");
  const frame = useRef(0);

  useEffect(() => {
    if (reduced) {
      setDisplay(text);
      return;
    }

    let raf: number;
    const totalFrames = 24;

    const tick = () => {
      frame.current += 1;
      const progress = Math.min(frame.current / totalFrames, 1);
      const resolvedCount = Math.floor(progress * text.length);

      const next = text
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (i < resolvedCount) return char;
          return CHARSET[Math.floor(Math.random() * CHARSET.length)];
        })
        .join("");

      setDisplay(next);

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setDisplay(text);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [text, reduced]);

  return (
    <span className={className} aria-label={text}>
      {display}
    </span>
  );
}
