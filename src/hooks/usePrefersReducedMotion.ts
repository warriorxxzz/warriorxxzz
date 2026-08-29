import { useReducedMotion } from "motion/react";

export function usePrefersReducedMotion(): boolean {
  return useReducedMotion() ?? false;
}
