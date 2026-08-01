import { LibraryHeader } from "@/components/catalogue/LibraryHeader";
import { ScrollRoom } from "@/components/catalogue/ScrollRoom";
import { SectionFrame } from "@/components/catalogue/SectionFrame";
import { TagList } from "@/components/catalogue/TagList";
import { ENTRIES } from "@/lib/entries";
import { collectTags, listEntries } from "@/lib/registry";

/**
 * Catalogue home.
 *
 * Every entry rendered live, full width, in registry order. Sections that need
 * scroll room get it, so scroll-led behaviour is judged in the same place as
 * everything else rather than only in isolation.
 */
export default function CataloguePage() {
  const entries = listEntries(ENTRIES);
  const tags = collectTags(ENTRIES);

  return (
    <>
      <LibraryHeader entryCount={entries.length} />

      <main>
        <div className="bg-page py-step-8">
          <div className="mx-auto w-full max-w-content px-page-margin">
            <p className="eyebrow">Catalogue</p>
            <h1>
              Sections, built and <em>looked at.</em>
            </h1>
            <p className="text-lead measure-intro mt-step-5">
              A private laboratory for building full sections at real scale, in a real browser, on
              MindWP&rsquo;s own tokens and typography. Nothing here is part of the website.
            </p>
            <div className="mt-step-6">
              <TagList tags={tags} />
            </div>
            <p className="editorial-note mt-step-6">
              Four system checks, then the collection. Wave 1 opens with SEC-182, whose subject is
              the width vocabulary the sections after it inherit.
            </p>
          </div>
        </div>

        {entries.map((entry) => (
          <div key={entry.slug}>
            {entry.needsScrollRoom ? <ScrollRoom label="Scroll room — approach" /> : null}
            <SectionFrame entry={entry} />
            {entry.needsScrollRoom ? <ScrollRoom label="Scroll room — release" /> : null}
          </div>
        ))}

        <div className="border-t border-hairline bg-page py-step-9">
          <div className="mx-auto w-full max-w-content px-page-margin">
            <small>End of catalogue · {entries.length} entries</small>
          </div>
        </div>
      </main>
    </>
  );
}
