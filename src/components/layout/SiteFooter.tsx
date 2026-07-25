import Link from "next/link";

import { FOOTER_GROUPS, visibleGroups } from "@/config/navigation";
import { CONTACT_PATH } from "@/config/routes";
import { SITE } from "@/config/site";
import { PRIMARY_CTA_LABEL, SECONDARY_CTA_LABEL } from "@/lib/cta/labels";

/**
 * Built from the shared navigation source, so a column can never list a page
 * the site does not have. Planned entries are hidden until their route exists;
 * a column whose entries are all planned disappears with them.
 *
 * Deliberately quieter than the closing section above it — the footer is
 * wayfinding, not a second call to action.
 */
const GROUPS = visibleGroups(FOOTER_GROUPS);

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer on-dark">
      <div className="container site-footer__top">
        <div className="site-footer__brand">
          <Link href="/">MindWP</Link>
          <p className="site-footer__tagline">{SITE.footerLine}</p>
          <div className="site-footer__brand-links">
            <Link href={CONTACT_PATH}>{PRIMARY_CTA_LABEL}</Link>
            <a href="/#work">{SECONDARY_CTA_LABEL}</a>
          </div>
        </div>

        {GROUPS.length > 0 && (
          <div className="site-footer__columns">
            {GROUPS.map((group) => (
              <div className="site-footer__column" key={group.label}>
                <p className="site-footer__column-title">{group.label}</p>
                {group.items.map((item) => (
                  <a key={item.label} href={item.href!}>
                    {item.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="container site-footer__bottom">
        <p>&copy; {year} MindWP</p>
      </div>
    </footer>
  );
}
