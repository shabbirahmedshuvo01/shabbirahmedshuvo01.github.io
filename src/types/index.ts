export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  iconName: string;
  ariaLabel: string;
}

export interface QuickMetric {
  value: string;
  label: string;
  detail?: string;
}

export interface SkillItem {
  name: string;
  icon?: string;
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  locationType: "On-site" | "Hybrid" | "Remote";
  period: string;
  startDate: string;
  endDate: string;
  description?: string;
  achievements: string[];
  technologies: string[];
  isCurrent?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  role?: string;
  metrics?: string;
  technologies: string[];
  architectureHighlights?: string[];
  liveUrl?: string;
  githubUrl?: string;
  npmUrl?: string;
  packageName?: string;
  version?: string;
  installCommand?: string;
  isFeatured?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  institutionUrl?: string;
  location: string;
  period: string;
  status: "In Progress" | "Completed";
  notes?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description?: string;
}

export interface ProfileData {
  name: string;
  title: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  about: string;
  location: string;
  email: string;
  phone: string;
  resumeUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  metrics: QuickMetric[];
}
