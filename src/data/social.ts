import type { SocialLink } from "../types";
import { PERSONAL } from "./personal";

export const SOCIAL_LINKS: SocialLink[] = [
  { 
    label: "GitHub", 
    url: `https://github.com/${PERSONAL.githubUsername}`, 
    icon: "github" 
  },
  { 
    label: "WhatsApp", 
    url: `https://wa.me/977${PERSONAL.whatsapp}`, 
    icon: "whatsapp" 
  },
  { 
    label: "Facebook", 
    url: PERSONAL.facebook, 
    icon: "facebook" 
  },
  { 
    label: "Email", 
    url: `mailto:${PERSONAL.email}`, 
    icon: "mail" 
  },
];
