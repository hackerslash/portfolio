import cv from "@cv"

export type LinkKind = "live" | "github"

export interface Project {
  name: string
  slug: string
  tagline: string
  description: string
  image: string
  imageAlt: string
  year: string
  featured: boolean
  isActive: boolean
  stack: string[]
  highlights: string[]
  url: string
  github: string
  /** Resolved destination for a whole-tile click. Null only if a project has no links at all. */
  href: string | null
  /** Which of the two the tile click resolves to — drives the hover chip's label. */
  hrefKind: LinkKind | null
}

interface ProjectsConfig {
  featuredCount: number
  defaultLink: LinkKind
  showYear: boolean
}

const DEFAULTS: ProjectsConfig = {
  featuredCount: 4,
  defaultLink: "live",
  showYear: true,
}

export const projectsConfig: ProjectsConfig = {
  ...DEFAULTS,
  ...((cv as any).site?.projects ?? {}),
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

// cv.json has historically carried "true" as a string; accept both.
function truthy(value: unknown): boolean {
  return value === true || value === "true"
}

function resolveHref(url: string, github: string, primary?: string): { href: string | null; hrefKind: LinkKind | null } {
  const preference = (primary === "live" || primary === "github" ? primary : projectsConfig.defaultLink) as LinkKind

  if (preference === "live" && url) return { href: url, hrefKind: "live" }
  if (preference === "github" && github) return { href: github, hrefKind: "github" }
  if (url) return { href: url, hrefKind: "live" }
  if (github) return { href: github, hrefKind: "github" }
  return { href: null, hrefKind: null }
}

function normalise(raw: any): Project {
  const name: string = raw.name ?? "Untitled"
  const url: string = raw.url ?? ""
  const github: string = raw.github ?? ""
  const description: string = raw.description ?? ""

  return {
    name,
    slug: raw.slug || slugify(name),
    tagline: raw.tagline || description,
    description,
    image: raw.image ?? "",
    imageAlt: raw.imageAlt ?? "",
    year: raw.year ?? "",
    featured: truthy(raw.featured),
    isActive: truthy(raw.isActive),
    stack: Array.isArray(raw.stack) && raw.stack.length ? raw.stack : (raw.highlights ?? []).slice(0, 3),
    highlights: raw.highlights ?? [],
    url,
    github,
    ...resolveHref(url, github, raw.primary),
  }
}

/** Every project, in `cv.json` order — treated as most-recent-first. */
export const allProjects: Project[] = ((cv as any).projects ?? []).map(normalise)

/** Projects flagged `featured`, falling back to the first N so the home page is never empty. */
export const featuredProjects: Project[] = (
  allProjects.some((p) => p.featured) ? allProjects.filter((p) => p.featured) : allProjects
).slice(0, projectsConfig.featuredCount)

export const hasYears: boolean = projectsConfig.showYear && allProjects.some((p) => Boolean(p.year))
