export type ProjectStatus = "Completed" | "In Progress" | "Planned";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  status?: ProjectStatus;
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: string;
  level?: 1 | 2 | 3 | 4 | 5;
}

export interface Achievement {
  title: string;
  description: string;
  date?: string;
  issuer?: string;
  link?: string;
  image?: string;
}

export type IconName =
  | "github"
  | "linkedin"
  | "mail"
  | "external"
  | "arrow-right"
  | "menu"
  | "close"
  | "chevron-up";

export interface SocialLink {
  label: string;
  url: string;
  icon: IconName;
}

export interface NavLink {
  label: string;
  path: string;
  href: string;
}

export interface BuildingItem {
  title: string;
  description: string;
  active?: boolean;
}

export interface PersonalInfo {
  handle: string;
  name: string;
  role: string;
  tagline: string;
  bio: string[];
  location: string;
  availability: string;
  email: string;
  currentlyBuilding: BuildingItem[];
}
