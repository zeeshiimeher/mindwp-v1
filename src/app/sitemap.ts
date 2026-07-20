import type { MetadataRoute } from "next";

import { LIVE_ROUTES } from "@/config/routes";
import { absoluteUrl } from "@/config/site";

/** Generated from the route registry so it can't fall out of sync. */
export default function sitemap(): MetadataRoute.Sitemap {
  return LIVE_ROUTES.map((route) => ({
    url: absoluteUrl(route.path),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
