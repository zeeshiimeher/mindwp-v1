import type { IconName } from "@/components/ui/Icon";

export interface Compounder {
  icon: IconName;
  label: string;
  short: string;
  note: string;
}

export const COMPOUND_INTRO =
  "Most websites are treated as a launch date — live, then slowly going stale. A smart website is the opposite: it keeps building, so everything you have just seen keeps paying off long after go-live.";

export const LAUNCH_NODE = {
  icon: "globe" as IconName,
  label: "Launch day",
  note: "Your site goes live — answering clearly and routing every enquiry to someone responsible.",
};

/** What genuinely compounds after launch — qualitative, no metrics implied. */
export const COMPOUNDERS: readonly Compounder[] = [
  {
    icon: "star",
    label: "Proof keeps adding up",
    short: "Proof builds",
    note: "Every satisfied customer can leave a review, and each one makes the next person's decision a little easier.",
  },
  {
    icon: "map-pin",
    label: "Local presence strengthens",
    short: "Local presence",
    note: "As the site, the listing and the reviews stay aligned, the business gets easier to find and trust nearby.",
  },
  {
    icon: "circle-check",
    label: "Each improvement stacks",
    short: "Refinements stack",
    note: "The review keeps finding the next worthwhile fix — building on the last, not starting the site over.",
  },
  {
    icon: "search",
    label: "Every channel works harder",
    short: "Channels compound",
    note: "Search, referrals and ads all keep landing on a site that answers better than it did the month before.",
  },
] as const;

export const COMPOUND_CLOSE =
  "A typical site peaks at launch and drifts. This one keeps building — which is exactly why it is worth getting right from the start.";
