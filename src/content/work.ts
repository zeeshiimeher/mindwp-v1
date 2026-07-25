/**
 * The proof catalogue, owned in one place.
 *
 * Both the Homepage work section and the Smart Website Systems Built Work
 * section render these items, and their status labels are truth-critical: a
 * divergent copy is how a page ends up claiming something about its evidence
 * that is no longer true. Change the status here or nowhere.
 *
 * Every item below was verified individually and is a live client website.
 * The assets are NOT anonymised — a blur covers the top-left logo area only,
 * and trading names, telephone numbers, email and street addresses, towns and
 * (on the home services and SaaS items) strips of named reviewers all remain
 * legible. Source PNGs are 1440x1728 and are served from /public/work at full
 * resolution however small a tile renders, so display size hides nothing.
 * Never describe these as anonymised, obscured or redacted.
 *
 * Metrics visible inside a client's own screenshot are that client's published
 * claim. They are never restated in MindWP copy and never presented as a MindWP
 * measured outcome.
 */

export const WORK_STATUS = {
  published: "Published client website",
  anonymised: "Anonymised client work",
  demonstration: "Demonstration build",
  concept: "Design concept",
} as const;

export type WorkStatus = (typeof WORK_STATUS)[keyof typeof WORK_STATUS];

export interface WorkItem {
  category: string;
  title: string;
  tone: "blue" | "sage" | "steel" | "sand" | "aqua";
  file: string;
  status: WorkStatus;
}

/** The single large specimen both pages lead with. */
export const WORK_FEATURE = {
  category: "Home services",
  title: "Home services lead-gen site",
  file: "work-home-services-site.png",
  status: WORK_STATUS.published,
  note: "A clear offer, local proof and an obvious next step — built into one working homepage, not just described in a proposal.",
} as const;

export const WORK_ITEMS: readonly WorkItem[] = [
  {
    category: "Healthcare",
    title: "Clinic treatment page",
    tone: "blue",
    file: "work-healthcare-service-page.png",
    status: WORK_STATUS.published,
  },
  {
    category: "Retail",
    title: "Optical retail website",
    tone: "sage",
    file: "work-optical-retail-site.png",
    status: WORK_STATUS.published,
  },
  {
    category: "Property",
    title: "Property management website",
    tone: "steel",
    file: "work-property-management-site.png",
    status: WORK_STATUS.published,
  },
  {
    category: "Product",
    title: "SaaS product website",
    tone: "blue",
    file: "work-saas-product-site.png",
    status: WORK_STATUS.published,
  },
  {
    category: "Support",
    title: "Support program website",
    tone: "sand",
    file: "work-support-program-site.png",
    status: WORK_STATUS.published,
  },
  {
    category: "Tourism",
    title: "Tourism service website",
    tone: "aqua",
    file: "work-tourism-service-site.png",
    status: WORK_STATUS.published,
  },
];
