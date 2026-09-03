import type { Project } from "../types";

export const PROJECTS: Project[] = [
  {
    title: "PyLog-Parser",
    description:
      "A small Python script that reads Nginx logs. It checks for repeated failed logins. Making this to see how brute-force attacks look in logs.",
    technologies: ["Python 3.12", "Linux", "Bash"],
    status: "Working on it",
  },
  {
    title: "Linux Homelab",
    description:
      "Setting up an Ubuntu server at home. Added basic UFW firewall rules. Also testing Docker containers to break and fix things.",
    technologies: ["Bash", "Linux", "Docker", "Networking"],
    status: "In progress",
  },
];
