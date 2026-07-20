/**
 * Builds the contact link with attribution params so we know which system /
 * page an enquiry came from. Shape: /contact?system=<slug>&source=<type>/<slug>
 */
import { isSystemSlug } from "@/content/canonical";

export type ContactSource =
  | "home"
  | "service"
  | "implementation"
  | "industry"
  | "work"
  | "about"
  | "pricing"
  | "blog"
  | "resource"
  | "nav";

export interface ContactContext {
  /** Owning system slug, when the enquiry maps to one. */
  system?: string;
  source?: ContactSource;
  /** Page slug within the source (e.g. the industry vertical). */
  slug?: string;
}

export function buildContactHref(ctx: ContactContext = {}): string {
  const params = new URLSearchParams();
  if (ctx.system && isSystemSlug(ctx.system)) params.set("system", ctx.system);
  if (ctx.source) params.set("source", ctx.slug ? `${ctx.source}/${ctx.slug}` : ctx.source);
  const qs = params.toString();
  return qs ? `/contact?${qs}` : "/contact";
}
