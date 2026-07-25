"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";

import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import {
  isGroup,
  type NavGroup,
  type NavItem,
  PRIMARY_NAV,
  visibleItems,
  visibleNav,
} from "@/config/navigation";
import { CONTACT_PATH } from "@/config/routes";
import { PRIMARY_CTA_LABEL_SHORT } from "@/lib/cta/labels";
import { cn } from "@/lib/utils";

const NAV = visibleNav(PRIMARY_NAV);

function groupChildren(group: NavGroup): NavItem[] {
  return visibleItems([...(group.featured ? [group.featured] : []), ...group.items]);
}

/* -------------------------------------------------------------- desktop nav */

function DesktopGroup({ group }: { group: NavGroup }) {
  const children = groupChildren(group);
  const featured = group.featured && group.featured.href !== null ? group.featured : null;
  const rest = children.filter((item) => item !== featured);
  const panelId = useId();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onPointer = (event: PointerEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <div
      className="site-nav__group"
      ref={wrapRef}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="site-nav__link site-nav__trigger"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        onFocus={() => setOpen(true)}
      >
        {group.label}
        <Icon name="arrow-right" size={13} className="site-nav__chevron" />
      </button>

      <div className="site-nav__panel" id={panelId} hidden={!open}>
        {featured && (
          <Link href={featured.href!} className="site-nav__featured">
            <strong>{featured.label}</strong>
            {featured.description && <span>{featured.description}</span>}
          </Link>
        )}
        {rest.length > 0 && (
          <ul className="site-nav__list">
            {rest.map((item) => (
              <li key={item.label}>
                <Link href={item.href!}>
                  <strong>{item.label}</strong>
                  {item.description && <span>{item.description}</span>}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

/* --------------------------------------------------------------- mobile nav */

function MobileGroup({ group }: { group: NavGroup }) {
  const children = groupChildren(group);
  const panelId = useId();
  const [open, setOpen] = useState(false);

  return (
    <div className="site-drawer__group">
      <button
        type="button"
        className="site-drawer__disclosure"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        {group.label}
        <Icon name="arrow-right" size={16} className="site-drawer__chevron" />
      </button>
      <ul className="site-drawer__sublist" id={panelId} hidden={!open}>
        {children.map((item) => (
          <li key={item.label}>
            <Link href={item.href!}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ header */

export function SiteHeader() {
  const [solid, setSolid] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Transparent over a dark hero; solid everywhere else and once scrolled past.
  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) {
      setSolid(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => setSolid(!entry.isIntersecting), {
      rootMargin: "-73px 0px 0px 0px",
      threshold: 0,
    });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
    triggerRef.current?.focus();
  }, []);

  // Escape to close, focus kept inside, page scroll locked while open.
  useEffect(() => {
    if (!drawerOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    drawerRef.current?.querySelector<HTMLElement>("a, button")?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeDrawer();
        return;
      }
      if (event.key !== "Tab") return;
      const focusables = drawerRef.current?.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])",
      );
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [drawerOpen, closeDrawer]);

  return (
    <header className={cn("site-header", solid ? "site-header--solid" : "site-header--on-dark")}>
      <div className="container site-header__inner">
        <Link href="/" className="site-header__brand">
          MindWP
        </Link>

        <nav className="site-nav" aria-label="Primary">
          {NAV.map((entry) =>
            isGroup(entry) ? (
              <DesktopGroup key={entry.label} group={entry} />
            ) : (
              <Link key={entry.label} href={entry.href!} className="site-nav__link">
                {entry.label}
              </Link>
            ),
          )}
        </nav>

        <div className="site-header__action">
          <Button href={CONTACT_PATH} variant={solid ? "primary" : "on-dark"} className="btn-sm">
            {PRIMARY_CTA_LABEL_SHORT}
          </Button>

          <button
            ref={triggerRef}
            type="button"
            className="site-header__toggle"
            aria-expanded={drawerOpen}
            aria-controls={drawerId}
            aria-label={drawerOpen ? "Close menu" : "Open menu"}
            onClick={() => (drawerOpen ? closeDrawer() : setDrawerOpen(true))}
          >
            <span className="site-header__bars" aria-hidden="true" />
          </button>
        </div>
      </div>

      {drawerOpen && (
        <>
          <div className="site-drawer__scrim" onClick={closeDrawer} aria-hidden="true" />
          <div
            className="site-drawer"
            id={drawerId}
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
          >
            <nav className="site-drawer__nav">
              {NAV.map((entry) =>
                isGroup(entry) ? (
                  <MobileGroup key={entry.label} group={entry} />
                ) : (
                  <Link
                    key={entry.label}
                    href={entry.href!}
                    className="site-drawer__link"
                    onClick={closeDrawer}
                  >
                    {entry.label}
                  </Link>
                ),
              )}
            </nav>
            <Button href={CONTACT_PATH} className="btn-block-mobile" onClick={closeDrawer}>
              {PRIMARY_CTA_LABEL_SHORT}
            </Button>
          </div>
        </>
      )}
    </header>
  );
}
