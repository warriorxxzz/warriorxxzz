import type { Skill } from "../types";

export const SKILLS: Skill[] = [
  { name: "Python", category: "Languages", note: "Building projects" },
  { name: "JavaScript", category: "Languages", note: "Learning & experimenting" },
  { name: "TypeScript", category: "Languages", note: "Learning" },
  { name: "C", category: "Languages", note: "Fundamentals" },
  { name: "Bash", category: "Languages", note: "Linux & automation" },

  { name: "React", category: "Frameworks & Tools", note: "Building with it" },
  { name: "Node.js", category: "Frameworks & Tools", note: "Learning & projects" },
  { name: "Tailwind CSS", category: "Frameworks & Tools", note: "Building interfaces" },
  { name: "Git", category: "Frameworks & Tools", note: "Daily development workflow" },

  { name: "Linux", category: "Foundations", note: "Command line, daily driver" },
  { name: "Networking", category: "Foundations", note: "Learning the fundamentals" },
  { name: "Web fundamentals", category: "Foundations", note: "HTTP, DNS, how the web works" },
  { name: "Cybersecurity fundamentals", category: "Foundations", note: "OWASP basics, still early" },
];
