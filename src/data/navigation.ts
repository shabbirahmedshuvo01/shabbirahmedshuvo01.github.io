import { NavItem, SocialLink } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/shabbirahmedshuvo01",
    iconName: "github",
    ariaLabel: "Visit Shabbir Ahmed Shuvo's GitHub Profile",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/shabbir-ahmed-shuvo",
    iconName: "linkedin",
    ariaLabel: "Connect with Shabbir Ahmed Shuvo on LinkedIn",
  },
  {
    name: "Email",
    url: "mailto:sabbirshuvo006@gmail.com",
    iconName: "email",
    ariaLabel: "Send an email to Shabbir Ahmed Shuvo",
  },
];
