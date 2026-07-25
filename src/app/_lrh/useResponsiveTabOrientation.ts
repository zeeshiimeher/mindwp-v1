"use client";

import { useEffect, useState } from "react";

type TabOrientation = "horizontal" | "vertical";

const MOBILE_TAB_QUERY = "(max-width: 64rem)";

/**
 * Vertical while the request rail has room to stand beside its stage;
 * horizontal — meaning stacked accordion rows — once it does not.
 */
export function useResponsiveTabOrientation(): TabOrientation {
  const [orientation, setOrientation] = useState<TabOrientation>("vertical");

  useEffect(() => {
    const media = window.matchMedia(MOBILE_TAB_QUERY);
    const syncOrientation = () => setOrientation(media.matches ? "horizontal" : "vertical");

    syncOrientation();
    media.addEventListener("change", syncOrientation);

    return () => media.removeEventListener("change", syncOrientation);
  }, []);

  return orientation;
}
