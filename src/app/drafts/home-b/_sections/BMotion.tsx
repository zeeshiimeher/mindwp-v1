"use client";

import { useEffect } from "react";

/**
 * Variant B motion island. One scoped GSAP + ScrollTrigger context for the whole
 * draft. Every animation is additive: the static DOM is already complete, so
 * reduced-motion and the pre-hydration paint both show the finished composition.
 *
 * Sections opt in with data-attributes:
 *   data-anim="hero"     — one-shot load reveal of [data-hero-in] children
 *   data-anim="rise"     — reveal on scroll
 *   data-anim="stagger"  — reveal direct children on scroll, staggered
 *   data-anim="pop"      — pop [data-pop] descendants on scroll
 *   data-draw            — draw an SVG path (stroke-dashoffset) on scroll
 *   data-parallax="0.12" — gentle scroll parallax (fraction of travel)
 */
export function BMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let killed = false;
    let ctx: { revert: () => void } | undefined;

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (killed) return;
      gsap.registerPlugin(ScrollTrigger);

      const scope = document.getElementById("main") ?? undefined;

      ctx = gsap.context(() => {
        // Hero: one-shot load reveal.
        const hero = document.querySelector("[data-anim='hero']");
        if (hero) {
          gsap.from(hero.querySelectorAll("[data-hero-in]"), {
            y: 22,
            opacity: 0,
            duration: 0.75,
            ease: "power2.out",
            stagger: 0.1,
            delay: 0.06,
          });
        }

        // Simple rise-in on scroll.
        gsap.utils.toArray<HTMLElement>("[data-anim='rise']").forEach((el) => {
          gsap.from(el, {
            y: 30,
            opacity: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 86%", once: true },
          });
        });

        // Staggered children.
        gsap.utils.toArray<HTMLElement>("[data-anim='stagger']").forEach((group) => {
          gsap.from(Array.from(group.children), {
            y: 26,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.09,
            scrollTrigger: { trigger: group, start: "top 82%", once: true },
          });
        });

        // Pop nodes (diagram markers).
        gsap.utils.toArray<HTMLElement>("[data-anim='pop']").forEach((group) => {
          const marks = group.querySelectorAll("[data-pop]");
          if (!marks.length) return;
          gsap.from(marks, {
            scale: 0.4,
            opacity: 0,
            transformOrigin: "center",
            duration: 0.5,
            ease: "back.out(2)",
            stagger: 0.13,
            scrollTrigger: { trigger: group, start: "top 80%", once: true },
          });
        });

        // Draw SVG paths.
        gsap.utils.toArray<SVGGeometryElement>("[data-draw]").forEach((path) => {
          const len = path.getTotalLength();
          if (!len) return;
          gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
          gsap.to(path, {
            strokeDashoffset: 0,
            duration: 1.15,
            ease: "power1.inOut",
            scrollTrigger: { trigger: path, start: "top 84%", once: true },
          });
        });

        // Gentle parallax.
        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
          const amount = parseFloat(el.dataset.parallax || "0.1");
          gsap.to(el, {
            yPercent: -amount * 100,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        });
      }, scope);

      // Fonts/images can shift positions; recompute once settled.
      ScrollTrigger.refresh();
    })();

    return () => {
      killed = true;
      ctx?.revert();
    };
  }, []);

  return null;
}
