/**
 * Type definitions for the portfolio data.
 *
 * These interfaces are the single contract for `data/portfolio-data.js`.
 * `tsconfig.json` runs `tsc --noEmit` in checkJs mode, so a missing or
 * mistyped field in the data file becomes a compile-time error.
 */

/** Social / external profile links. Only the keys you fill in are rendered. */
export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  facebook?: string;
  website?: string;
}

/** Top-level identity shown in the sidebar + hero. */
export interface Profile {
  name: string;
  /** Role / job title, e.g. "Flutter & Mobile App Developer". */
  title: string;
  /** Short one-line intro shown above the name in the hero. */
  tagline: string;
  /** Longer one/two sentence bio (optional secondary line). */
  shortBio?: string;
  /** Path to the profile image, relative to index.html. */
  profileImage: string;
  location?: string;
  birthday?: string;
  email: string;
  /** Optional secondary email. */
  altEmail?: string;
  phone?: string;
  /** Strings cycled by the typing animation in the hero. */
  typedRoles: string[];
  social: SocialLinks;
}

/** A single sidebar navigation entry. `href` is an in-page anchor. */
export interface NavItem {
  label: string;
  href: string;
  /** Bootstrap-icon class, e.g. "bi bi-house-door". */
  icon: string;
}

/** The downloadable resume/CV. */
export interface Resume {
  /** Path to the PDF, relative to index.html. */
  file: string;
  /** Filename used when the visitor downloads the file. */
  downloadName: string;
}

/** A key/value fact row in the About section. */
export interface AboutFact {
  label: string;
  value: string;
  /** If set, `value` is rendered as a link to this URL. */
  link?: string;
}

export interface About {
  /** Each string is rendered as its own paragraph. */
  description: string[];
  /** Optional short bullet points. */
  highlights?: string[];
  facts: AboutFact[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  startDate: string;
  /** End date, or "Present". */
  endDate: string;
  location?: string;
  /** e.g. "Remote" | "Onsite" | "Hybrid". */
  mode?: string;
  description?: string;
  responsibilities?: string[];
  techUsed?: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  location?: string;
}

export interface SkillItem {
  name: string;
  /** Optional icon class. */
  icon?: string;
  /** Optional proficiency 0-100. */
  level?: number;
}

export interface SkillGroup {
  category: string;
  items: SkillItem[];
}

/** A row in the "Programming Languages & Tools" table. */
export interface ToolRow {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  /** Short blurb used on the card. */
  shortDescription: string;
  /** Full description. */
  description: string;
  techStack: string[];
  /** Screenshot/thumbnail paths (may be empty). */
  images: string[];
  appStoreLink: string | null;
  playStoreLink: string | null;
  webLink: string | null;
  githubLink: string | null;
  featured: boolean;
  /** e.g. "Mobile" | "Web" | "AI". */
  category?: string;
}

export interface SpokenLanguage {
  name: string;
  /** Proficiency 0-100 (drives the progress bar). */
  level: number;
}

export interface Reference {
  name: string;
  /** Role / relationship line. */
  detail: string;
  email?: string;
}

export interface Contact {
  emails: string[];
}

/** The complete portfolio content. One object = the entire site. */
export interface PortfolioData {
  profile: Profile;
  navigation: NavItem[];
  resume: Resume;
  professionalInterests: string[];
  about: About;
  experience: ExperienceItem[];
  education: EducationItem[];
  /** Primary professional skills, grouped by category. */
  skills: SkillGroup[];
  /** Secondary / soft skills, grouped by category. */
  otherSkills: SkillGroup[];
  tools: ToolRow[];
  projects: Project[];
  spokenLanguages: SpokenLanguage[];
  interests: string[];
  references: Reference[];
  contact: Contact;
}
