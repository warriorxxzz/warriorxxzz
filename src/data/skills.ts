import type { Skill } from "../types";

// Add or remove freely — Skills section groups by `category` automatically.
export const SKILLS: Skill[] = [
  { name: "Python", category: "Languages", level: 4 },
  { name: "TypeScript", category: "Languages", level: 4 },
  { name: "JavaScript", category: "Languages", level: 4 },
  { name: "C", category: "Languages", level: 2 },
  { name: "Bash", category: "Languages", level: 3 },

  { name: "React", category: "Frameworks & Tools", level: 4 },
  { name: "Node.js", category: "Frameworks & Tools", level: 3 },
  { name: "Tailwind CSS", category: "Frameworks & Tools", level: 4 },
  { name: "Git", category: "Frameworks & Tools", level: 4 },

  { name: "Network Fundamentals", category: "Security", level: 3 },
  { name: "Linux Hardening", category: "Security", level: 3 },
  { name: "OWASP Top 10", category: "Security", level: 3 },
  { name: "Wireshark", category: "Security", level: 2 },

  { name: "Cloud Security", category: "Currently Learning", level: 1 },
  { name: "Ethical Hacking", category: "Currently Learning", level: 2 },
];
