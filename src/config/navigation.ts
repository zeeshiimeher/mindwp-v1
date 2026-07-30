/**
 * The single navigation source. Header, mobile drawer and footer are all built
 * from this file so a label or destination cannot drift between them.
 *
 * Planned structure and live route membership are deliberately separate
 * concerns. An entry describes where it *will* live via `planned`; it becomes
 * a real link only when `href` is set. `href: null` means the destination does
 * not exist yet — never an empty string, never "#", never a route that 404s.
 *
 * Rendering rule (see `visibleItems` / `visibleGroups`): on the public site an
 * entry without an `href` is hidden entirely, and a group with no visible
 * children is hidden with it. Publishing a page is therefore a deliberate act:
 * add the route to LIVE_ROUTES and set `href` here.
 */

export interface NavItem {
  label: string;
  /** Live destination. `null` while the page is planned but not built. */
  href: string | null;
  /** Where this entry is intended to live once it is approved and built. */
  planned?: string;
  /** Short description of the entry's real responsibility, not marketing copy. */
  description?: string;
}

export interface NavGroup {
  label: string;
  href: string | null;
  planned?: string;
  /** The one entry presented as the principal offer, not a peer of the rest. */
  featured?: NavItem;
  items: NavItem[];
}

/* ---------------------------------------------------------------- services */

/**
 * Smart Website Systems is the principal offer and is presented as such. The
 * four supporting services surround it; they are never four co-equal reasons
 * for MindWP to exist. Descriptions follow each service's approved
 * responsibility from docs/STRATEGY.md.
 */
export const SERVICES: NavGroup = {
  label: "Services",
  href: null,
  planned: "/services",
  featured: {
    label: "Smart Website Systems",
    href: null,
    planned: "/services/smart-website-systems",
    description:
      "The principal engagement: strategy, structure, copy, design and build, owned through to a useful enquiry.",
  },
  items: [
    {
      label: "Local SEO Authority",
      href: null,
      planned: "/services/local-seo-authority",
      description: "Ongoing local discovery and evaluation, so suitable people nearby find you.",
    },
    {
      label: "Lead Response & Handling",
      href: null,
      planned: "/services/lead-response-handling",
      description:
        "Truthful acknowledgement, useful context and routing to a named owner — with automation doing the acknowledging and routing, not the deciding.",
    },
    {
      label: "Follow-Up & CRM",
      href: null,
      planned: "/services/follow-up-crm",
      description:
        "Justified next actions after the first response, organised in one shared record and prompted where a reminder genuinely helps.",
    },
    {
      label: "Reputation & Review",
      href: null,
      planned: "/services/reputation-review",
      description:
        "Ethical review requests, responsible replies and proof placed where people decide.",
    },
  ],
};

/* -------------------------------------------------------------- industries */

/**
 * Grouped rather than flattened: the industry catalogue is long, and a single
 * dropdown of every vertical would misrepresent both the depth and the shape
 * of the work.
 */
export const INDUSTRIES: NavGroup = {
  label: "Industries",
  href: null,
  planned: "/industries",
  items: [
    { label: "Clinics & Healthcare", href: null, planned: "/industries/clinics-healthcare" },
    {
      label: "Legal, Finance & Advisory",
      href: null,
      planned: "/industries/legal-finance-advisory",
    },
    {
      label: "Premium Travel, Venues & Events",
      href: null,
      planned: "/industries/travel-venues-events",
    },
    {
      label: "Craft, Automotive & Marine",
      href: null,
      planned: "/industries/craft-automotive-marine",
    },
    {
      label: "Education & Specialist Support",
      href: null,
      planned: "/industries/education-specialist-support",
    },
    { label: "Explore all industries", href: null, planned: "/industries" },
  ],
};

/* ------------------------------------------------------------ top level nav */

export const PRIMARY_NAV: (NavItem | NavGroup)[] = [
  SERVICES,
  INDUSTRIES,
  { label: "Work", href: "/#work", planned: "/work" },
  { label: "About", href: null, planned: "/about" },
  { label: "Contact", href: "/contact" },
];

/* ------------------------------------------------------------------ footer */

export const FOOTER_GROUPS: NavGroup[] = [
  {
    label: "Services",
    href: null,
    items: [SERVICES.featured!, ...SERVICES.items],
  },
  {
    label: "Industries",
    href: null,
    items: INDUSTRIES.items.map((item) =>
      item.label === "Explore all industries" ? { ...item, label: "All industries" } : item,
    ),
  },
  {
    label: "Company",
    href: null,
    items: [
      { label: "Work", href: "/#work", planned: "/work" },
      { label: "About MindWP", href: null, planned: "/about" },
      { label: "How we work", href: "/#review", planned: "/how-we-work" },
      { label: "Visibility & Enquiry Review", href: "/contact" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    label: "Information",
    href: null,
    items: [
      { label: "Privacy", href: null, planned: "/privacy" },
      { label: "Terms", href: null, planned: "/terms" },
      { label: "Accessibility", href: null, planned: "/accessibility" },
      { label: "Sitemap", href: null, planned: "/sitemap" },
    ],
  },
];

/* ----------------------------------------------------------------- helpers */

export function isGroup(entry: NavItem | NavGroup): entry is NavGroup {
  return "items" in entry;
}

/** Entries with a real destination. Planned entries never reach the public site. */
export function visibleItems(items: NavItem[]): NavItem[] {
  return items.filter((item) => item.href !== null);
}

/**
 * Top-level entries worth rendering: a plain item needs an href, a group needs
 * at least one child (or featured entry) that has one.
 */
export function visibleNav(entries: (NavItem | NavGroup)[]): (NavItem | NavGroup)[] {
  return entries.filter((entry) => {
    if (!isGroup(entry)) return entry.href !== null;
    const children = [...(entry.featured ? [entry.featured] : []), ...entry.items];
    return entry.href !== null || visibleItems(children).length > 0;
  });
}

export function visibleGroups(groups: NavGroup[]): NavGroup[] {
  return groups
    .map((group) => ({ ...group, items: visibleItems(group.items) }))
    .filter((group) => group.items.length > 0);
}
