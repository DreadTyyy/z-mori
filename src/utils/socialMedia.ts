import type { SocialMedia } from "@/types/socialMedia";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";

export const socialMedia: SocialMedia[] = [
  {
    name: "Instagram",
    username: "@adib.zky",
    url: "https://www.instagram.com/adib.zaky_/",
    icon: FaInstagram,
  },
  {
    name: "LinkedIn",
    username: "Adib Zaky",
    url: "https://www.linkedin.com/in/adibhzaky/",
    icon: SlSocialLinkedin,
  },
  {
    name: "Github",
    username: "DreadTyyy",
    url: "https://github.com/DreadTyyy/",
    icon: FaGithub,
  },
];
