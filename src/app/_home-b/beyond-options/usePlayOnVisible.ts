"use client";

import { type RefObject, useEffect } from "react";

/** Runs `play` once when `ref` scrolls into view. Skips entirely under reduced motion. */
export function usePlayOnVisible(
  ref: RefObject<Element | null>,
  play: () => (() => void) | void,
  deps: readonly unknown[],
) {
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let cleanup: (() => void) | void;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          cleanup = play();
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cleanup?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
