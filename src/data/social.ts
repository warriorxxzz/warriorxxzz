import type { SocialLink } from "../types";
import { PERSONAL } from "./personal";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "GitHub",
    url: "https://github.com/warriorxxzz",
    icon: "github",
  },
  {
    label: "WhatsApp",
    url: "https://wa.me/9779815240112",
    icon: "whatsapp",
  },
  {
    label: "Email",
    url: `mailto:${PERSONAL.email}`,
    icon: "mail",
  },
];
