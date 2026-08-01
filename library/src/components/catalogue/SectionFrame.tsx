import Link from "next/link";

import type { SectionEntry } from "@/lib/registry";
import { SURFACE_CLASS } from "@/lib/registry";

import { TagList } from "./TagList";

/**
 * One catalogue row: a meta bar, then the section rendered live at full width.
 *
 * The section is never scaled, framed in an iframe or constrained to a preview
 * box. Full-section work is judged at real width, with real scroll — which is
 * the reason this catalogue is custom rather than Storybook.
 */
export function SectionFrame({ entry }: { entry: SectionEntry }) {
  const Section = entry.component;

  return (
    <article aria-labelledby={`${entry.slug}-title`}>
      <div className="border-y border-hairline bg-sunken">
        <div className="mx-auto flex w-full max-w-page flex-wrap items-baseline gap-x-step-5 gap-y-step-2 px-page-margin py-step-4">
          <h2 id={`${entry.slug}-title`} className="catalogue-label">
            {entry.title}
          </h2>
          <small className="text-muted">{entry.slug}</small>
          <TagList tags={entry.tags} />
          <Link
            href={`/s/${entry.slug}`}
            className="ml-auto text-emerald-deep transition-colors duration-fast ease-out hover:text-emerald"
          >
            <small>Open isolated →</small>
          </Link>
        </div>
      </div>

      <div className={SURFACE_CLASS[entry.surface]}>
        <Section />
      </div>
    </article>
  );
}
