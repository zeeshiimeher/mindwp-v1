import "@/styles/pages/lrh.css";
import "./library.css";

import { ContextForm } from "./ContextForm";
import { ContextThreshold } from "./ContextThreshold";
import { LrhMissedCalls } from "./LrhMissedCalls";
import { LrhRequests } from "./LrhRequests";
import { MissedCallsLedger } from "./MissedCallsLedger";
import { OwnershipHandover } from "./OwnershipHandover";
import { OwnershipNamed } from "./OwnershipNamed";
import { RequestsSlips } from "./RequestsSlips";
import { buildSEO } from "@/lib/seo/metadata";

export const metadata = buildSEO({
  title: "Draft library",
  description: "Preserved gallery variants from the Lead Response & Handling rebuild.",
  path: "/draft/library",
  // Draft route: preserved for reference only. Not in navigation, not in the
  // sitemap, not indexed, and never a candidate for release.
  noindex: true,
});

/**
 * Preserved gallery — every design variant explored for the Lead Response &
 * Handling page that isn't the one currently live, kept here for later
 * reference rather than deleted. Not wired into the live page in any way:
 * `lrh.css` is imported only for the shared section/container utilities, and
 * `library.css` carries every one of these components' own rules as its own
 * copy, duplicated rather than shared with the live stylesheet.
 */
export default function DraftLibraryPage() {
  return (
    <>
      <MissedCallsLedger />
      <LrhMissedCalls />
      <LrhRequests />
      <RequestsSlips />
      <ContextForm />
      <ContextThreshold />
      <OwnershipHandover />
      <OwnershipNamed />
    </>
  );
}
