export interface CV {
  site: Site
  basics: Basics
  work: Array<Work>
  volunteer: Array<Volunteer>
  education: Array<Education>
  awards: Array<Awards>
  certificates: Array<Certificates>
  publications: Array<Publications>
  skills: Array<Skills>
  languages: Array<Languages>
  interests: Array<Interests>
  references: Array<References>
  projects: Array<Projects>
  gallery?: Array<Gallery>
}

interface Site {
  projects: {
    /** How many tiles the homepage shows. */
    featuredCount: number
    /** Where a whole-tile click goes when a project doesn't override it. */
    defaultLink: "live" | "github"
    /** Render the year alongside each project (rows without a year stay bare). */
    showYear: boolean
  }
}

interface Basics {
  name: string
  /** Handle. The fold's identity line glitches between this and `name`. */
  username?: string
  /** Lead-in before the identity line, e.g. "hi, i'm". */
  greeting?: string
  label: string
  /** Marquee statement on the homepage fold. */
  headline: string
  /** Short first-person intro under the headline. */
  intro: string
  image: string
  email: string
  phone: string
  url: string
  summary: string
  location: Location
  profiles: Array<Profiles>
}

interface Location {
  address: string
  postalCode: string
  city: string
  countryCode: string
  region: string
}

interface Profiles {
  network: string
  username: string
  url: string
}

interface Work {
  name: string
  position: string
  url: string
  startDate: DateStr
  endDate: DateStr | null
  summary: string
  highlights: Highlight
}

type DateStr = `${string}-${string}-${string}`

interface Volunteer {
  organization: string
  position: string
  url: string
  startDate: DateStr
  endDate: DateStr
  summary: string
  highlights: Highlight
}

interface Skills {
  name: string
  level: string
  keywords: Array<string>
}

interface Awards {
  title: string
  date: string
  awarder: string
  summary: string
}

interface Certificates {
  name: string,
  date: DateStr,
  issuer: string,
  url: string
}

interface Publications {
  name: string
  publisher: string
  releaseDate: DateStr
  url: string
  summary: string
}

interface Education {
  institution: string
  url: string
  area: string
  studyType: string
  startDate: DateStr
  endDate: DateStr
  score: string
  courses: Array<string>
}

interface Languages {
  language: Language
  fluency: string
}

type Language =
  "Spanish"
  | "English"
  | "German"
  | "France"
  | "Italian"
  | "Korean"
  | "Portuguese"
  | "Chinese"
  | "Arabic"
  | "Dutch"
  | "Finnish"
  | "Russian"
  | "Turkish"
  | "Hindi"
  | "Bengali"
  | string

interface Projects {
  name: string
  /** Stable id — cover plate seed and anchor. Derived from `name` when absent. */
  slug?: string
  /** One line for the homepage tile; falls back to `description`. */
  tagline?: string
  description: string
  /** Real screenshot under /public. Empty renders a generated plate instead. */
  image?: string
  imageAlt?: string
  year?: string
  /** Show on the homepage. */
  featured?: boolean
  isActive: boolean
  /** Tile tags. Falls back to the first three `highlights`. */
  stack?: Array<string>
  highlights: Highlight
  url: string
  github?: string
  /** Overrides `site.projects.defaultLink` for this project only. */
  primary?: "live" | "github"
}

interface Interests {
  name: string
  keywords: Array<string>
}

interface References {
  name: string
  reference: string
}

interface Gallery {
  src: string
  full: string
  w: number
  h: number
  alt: string
  caption?: string
  description?: string
  tag?: string
}

type Highlight = Array<String>
