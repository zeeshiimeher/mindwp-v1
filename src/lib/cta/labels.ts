/**
 * The only approved CTA labels (docs/STRATEGY.md conversion model). Two paths:
 * a diagnostic primary and a lower-commitment secondary. Banned CTAs (book a
 * demo, free trial, get a quote, dominate Google, etc.) must never appear.
 */
export const PRIMARY_CTA_LABEL = "Request a Website Review" as const;
export const SECONDARY_CTA_LABEL = "See the work" as const;

export const APPROVED_CTA_LABELS = [PRIMARY_CTA_LABEL, SECONDARY_CTA_LABEL] as const;
export type ApprovedCtaLabel = (typeof APPROVED_CTA_LABELS)[number];
