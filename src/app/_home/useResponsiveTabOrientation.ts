"use client";

import { useEffect, useState } from "react";

type TabOrientation = "horizontal" | "vertical";

const MOBILE_TAB_QUERY = "(max-width: 48rem)";

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
