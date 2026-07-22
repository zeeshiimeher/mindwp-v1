import Link from "next/link";

import { SITE } from "@/config/site";

/* Root-relative fragments so the shared footer resolves from nested routes
   (docs/ENGINEERING.md, Routing). Column labels stay as implemented until the
   approved Homepage rebuild revisits the footer IA. */
const COLUMNS = [
  {
    title: "What we build",
    links: [
      { href: "/#five-systems", label: "Smart Website Systems" },
      { href: "/#five-systems", label: "Lead Response & Handling" },
      { href: "/#five-systems", label: "Follow-Up & CRM" },
      { href: "/#five-systems", label: "Reputation & Review" },
    ],
  },
  {
    title: "Industries",
    links: [
      { href: "/#context", label: "Specialist Clinics" },
      { href: "/#work", label: "Home Services" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/#work", label: "Work" },
      { href: "/#builders", label: "About" },
      { href: "/#review", label: "Contact" },
    ],
  },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer on-dark">
      <div className="container site-footer__top">
        <div className="site-footer__brand">
          <Link href="/">MindWP</Link>
          <p>{SITE.description}</p>
        </div>

        <div className="site-footer__columns">
          {COLUMNS.map((column) => (
            <div className="site-footer__column" key={column.title}>
              <p className="site-footer__column-title">{column.title}</p>
              {column.links.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>&copy; {year} MindWP. Building smart websites since 2015.</p>
      </div>
    </footer>
  );
}
