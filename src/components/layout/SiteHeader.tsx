"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/Button";
import { PRIMARY_CTA_LABEL_SHORT } from "@/lib/cta/labels";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [solid, setSolid] = useState(true);

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

  return (
    <header className={cn("site-header", solid ? "site-header--solid" : "site-header--on-dark")}>
      <div className="container site-header__inner">
        <Link href="/" className="site-header__brand">
          MindWP
        </Link>
        <Button href="#review" variant={solid ? "primary" : "on-dark"}>
          {PRIMARY_CTA_LABEL_SHORT}
        </Button>
      </div>
    </header>
  );
}
