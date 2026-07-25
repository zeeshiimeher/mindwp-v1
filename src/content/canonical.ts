export type SystemRole = "core" | "entry" | "response" | "operation" | "trust";

export interface CanonicalSystem {
  slug: string;
  label: string;
  role: SystemRole;
  flagship?: boolean;
}

/** Strategy data. These entries do not create public routes automatically. */
export const CANONICAL_SYSTEMS = [
  { slug: "smart-website-systems", label: "Smart Website Systems", role: "core", flagship: true },
  { slug: "local-seo-authority", label: "Local SEO Authority", role: "entry" },
  { slug: "lead-response-handling", label: "Lead Response & Handling", role: "response" },
  { slug: "follow-up-crm", label: "Follow-Up & CRM", role: "operation" },
  { slug: "reputation-review", label: "Reputation & Review", role: "trust" },
] as const satisfies readonly CanonicalSystem[];

export const CANONICAL_IMPLEMENTATIONS = [
  { slug: "wordpress-development", label: "WordPress Development" },
  { slug: "elementor", label: "Elementor" },
  { slug: "bricks-builder", label: "Bricks" },
  { slug: "divi", label: "Divi" },
  { slug: "woocommerce", label: "WooCommerce" },
  { slug: "website-rebuild", label: "Website Rebuild" },
] as const;

/**
 * Audience lanes, clinic-first (docs/STRATEGY.md, Settled decisions). This is
 * audience taxonomy only: it does not govern which work appears in the proof
 * catalogue, and past work outside these lanes remains valid evidence of craft.
 */
export const CANONICAL_INDUSTRY_LANES = [
  {
    slug: "specialist-clinics",
    label: "Specialist Clinics",
    verticals: [
      { slug: "dental-implants", label: "Dental Implant Clinics" },
      { slug: "orthodontics", label: "Orthodontics" },
      { slug: "oral-surgery", label: "Oral Surgery" },
      { slug: "dermatology", label: "Dermatology" },
      { slug: "ent-sinus", label: "ENT / Sinus" },
      { slug: "podiatry", label: "Podiatry" },
      { slug: "audiology", label: "Audiology" },
      { slug: "physiotherapy", label: "Physiotherapy" },
      { slug: "optometry", label: "Optometry" },
      { slug: "orthopaedics", label: "Orthopaedics" },
    ],
  },
  {
    slug: "expert-led-advisers",
    label: "Expert-Led Advisers",
    verticals: [
      { slug: "sponsor-licence-immigration", label: "Sponsor-Licence & Corporate Immigration" },
      { slug: "estate-planning-probate", label: "Estate Planning & Probate" },
      { slug: "forensic-accounting", label: "Forensic Accounting & Valuation" },
      { slug: "tax-investigation", label: "Tax Investigation" },
      { slug: "medical-director-compliance", label: "Medical-Director & Compliance Consultancy" },
      { slug: "business-brokers", label: "Business Brokers & Succession" },
    ],
  },
] as const;

export type SystemSlug = (typeof CANONICAL_SYSTEMS)[number]["slug"];

const SYSTEM_SLUGS = new Set<string>(CANONICAL_SYSTEMS.map((system) => system.slug));

export const isSystemSlug = (slug: string): slug is SystemSlug => SYSTEM_SLUGS.has(slug);

export const getSystem = (slug: string): CanonicalSystem | undefined =>
  CANONICAL_SYSTEMS.find((system) => system.slug === slug);
