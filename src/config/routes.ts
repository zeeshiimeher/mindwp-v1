export interface LiveRoute {
  path: string;
  changeFrequency: "weekly" | "monthly";
  priority: number;
}

/** Only built, approved public pages belong here. */
export const LIVE_ROUTES: readonly LiveRoute[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
];

/** The approved destination for every primary review action across the site. */
export const CONTACT_PATH = "/contact";

/**
 * Global header wayfinding. Root-relative fragments so they resolve from any
 * route, and only to sections that actually exist on the Homepage.
 */
export const HEADER_NAV = [
  { href: "/#work", label: "Work" },
  { href: "/#beyond-website", label: "What we build" },
  { href: "/#review", label: "How we start" },
  { href: "/#faq", label: "FAQ" },
] as const;
