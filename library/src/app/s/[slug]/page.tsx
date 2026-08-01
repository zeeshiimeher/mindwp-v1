import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LibraryHeader } from "@/components/catalogue/LibraryHeader";
import { ScrollRoom } from "@/components/catalogue/ScrollRoom";
import { TagList } from "@/components/catalogue/TagList";
import { ENTRIES } from "@/lib/entries";
import { entryRef, getEntry, SURFACE_CLASS, toTags } from "@/lib/registry";

type RouteParams = { slug: string };

export function generateStaticParams(): RouteParams[] {
  return ENTRIES.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntry(ENTRIES, slug);
  return {
    title: entry ? `${entry.title} · MindWP section laboratory` : "Not found",
    robots: { index: false, follow: false },
  };
}

/**
 * One section, alone.
 *
 * The catalogue home shows sections in sequence, which is how a page reads. This
 * route removes the neighbours so a section can be judged on its own.
 *
 * Scroll room is requested by the entry, exactly as it is on the catalogue home:
 * `needsScrollRoom` means the section's entry and exit are half its behaviour
 * and cannot be judged with nothing either side. A still section that is given
 * that room anyway is not being shown neutrally — the empty regions become part
 * of what the capture says about it.
 */
export default async function SectionPage({ params }: { params: Promise<RouteParams> }) {
  const { slug } = await params;
  const entry = getEntry(ENTRIES, slug);
  if (!entry) notFound();

  const Section = entry.component;

  return (
    <>
      <LibraryHeader entryCount={ENTRIES.length} back={{ href: "/", label: "All entries" }} />

      <div className="border-b border-hairline bg-sunken">
        <div className="mx-auto w-full max-w-page px-page-margin py-step-5">
          <h1 className="catalogue-label">{entry.title}</h1>
          <p className="measure-copy mt-step-2">{entry.summary}</p>
          <div className="mt-step-4 flex flex-wrap items-baseline gap-x-step-5 gap-y-step-2">
            <small className="text-muted">
              {entryRef(entry)} · {entry.namespace} · {entry.surface}
            </small>
            <TagList tags={toTags(entry)} />
          </div>
        </div>
      </div>

      <main>
        {entry.needsScrollRoom ? <ScrollRoom label="Scroll room — approach" /> : null}
        <div className={SURFACE_CLASS[entry.surface]}>
          <Section />
        </div>
        {entry.needsScrollRoom ? (
          <ScrollRoom label="Scroll room — release" height="120svh" />
        ) : null}
      </main>
    </>
  );
}
