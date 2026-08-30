import type { JourneyStep } from "../types";

export const JOURNEY: JourneyStep[] = [
  { stage: "Started", title: "Programming fundamentals" },
  { stage: "Next", title: "Python projects" },
  { stage: "Then", title: "Linux & the command line" },
  { stage: "Then", title: "Networking fundamentals" },
  { stage: "Now", title: "Cybersecurity + building projects", active: true },
];
