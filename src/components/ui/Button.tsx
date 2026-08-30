import type { ReactNode, MouseEvent } from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

type Variant = "primary" | "outline";
type ButtonClickEvent = MouseEvent<HTMLAnchorElement | HTMLButtonElement>;

interface ButtonProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: (event: ButtonClickEvent) => void;
  "aria-label"?: string;
}

const base =
  "inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal";

const variants: Record<Variant, string> = {
  primary: "bg-text text-bg hover:bg-text/90",
  outline: "border border-border text-text hover:border-signal/50",
};

export default function Button({
  variant = "primary",
  children,
  className,
  icon,
  href,
  target,
  rel,
  type,
  disabled,
  onClick,
  ...rest
}: ButtonProps) {
  const reduced = usePrefersReducedMotion();
  const hoverProps = reduced ? {} : { whileHover: { y: -1 }, whileTap: { y: 0 } };
  const classes = cn(base, variants[variant], className);
  const ariaLabel = rest["aria-label"];

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        aria-label={ariaLabel}
        className={classes}
        {...hoverProps}
      >
        {children}
        {icon}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type ?? "button"}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
      className={classes}
      {...hoverProps}
    >
      {children}
      {icon}
    </motion.button>
  );
}
