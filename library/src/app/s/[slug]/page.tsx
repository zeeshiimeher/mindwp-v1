import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LibraryHeader } from "@/components/catalogue/LibraryHeader";
import { ScrollRoom } from "@/components/catalogue/ScrollRoom";
import { TagList } from "@/components/catalogue/TagList";
import { ENTRIES } from "@/lib/entries";
import { getEntry, SURFACE_CLASS } from "@/lib/registry";

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
 * route removes the neighbours so a section can be judged on its own — and gives
 * scroll-led work generous, deliberate room on both sides.
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
              {entry.slug} · {entry.namespace} · {entry.surface}
            </small>
            <TagList tags={entry.tags} />
          </div>
        </div>
      </div>

      <main>
        <ScrollRoom label="Scroll room — approach" />
        <div className={SURFACE_CLASS[entry.surface]}>
          <Section />
        </div>
        <ScrollRoom label="Scroll room — release" height="120svh" />
      </main>
    </>
  );
}
