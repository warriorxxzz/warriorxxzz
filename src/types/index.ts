export type ProjectStatus = "Completed" | "Working on it" | "In progress" | "Planned";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  status?: ProjectStatus;
  featured?: boolean;
  whyBuilt?: string;
  whatLearned?: string;
  whatBroke?: string;
}

export interface Skill {
  name: string;
  category: string;
  note: string;
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
  | "facebook"
  | "mail"
  | "whatsapp"
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

export interface JourneyStep {
  stage: string;
  title: string;
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
  whatsapp: string;
  facebook: string;
  githubUsername: string;
  now: {
    learning: string;
    building: string;
    exploring: string;
  };
  lessonsLearned: string[];
}
