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

export const CANONICAL_INDUSTRY_LANES = [
  {
    slug: "home-services",
    label: "Home Services",
    verticals: [
      { slug: "roofing", label: "Roofing" },
      { slug: "hvac", label: "HVAC" },
      { slug: "plumbing", label: "Plumbing" },
      { slug: "foundation-repair", label: "Foundation Repair" },
      { slug: "septic", label: "Septic Services" },
      { slug: "tree-service", label: "Tree Service" },
    ],
  },
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
] as const;

export type SystemSlug = (typeof CANONICAL_SYSTEMS)[number]["slug"];

const SYSTEM_SLUGS = new Set<string>(CANONICAL_SYSTEMS.map((system) => system.slug));

export const isSystemSlug = (slug: string): slug is SystemSlug => SYSTEM_SLUGS.has(slug);

export const getSystem = (slug: string): CanonicalSystem | undefined =>
  CANONICAL_SYSTEMS.find((system) => system.slug === slug);
