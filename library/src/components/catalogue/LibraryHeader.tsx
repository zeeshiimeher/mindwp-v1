import Link from "next/link";

/**
 * Top control bar for the catalogue.
 *
 * Deliberately thin. Filtering, search and family navigation wait for the real
 * taxonomy; guessing that structure now would have to be undone.
 */
export function LibraryHeader({
  entryCount,
  back,
}: {
  entryCount: number;
  /** Shown on an isolated section route, absent on the catalogue home. */
  back?: { href: string; label: string };
}) {
  return (
    <header className="on-dark border-b border-navy-hairline bg-navy">
      <div className="mx-auto flex w-full max-w-page flex-wrap items-baseline gap-x-step-5 gap-y-step-2 px-page-margin py-step-4">
        <Link href="/" className="no-underline">
          <strong className="text-inverse">MindWP section laboratory</strong>
        </Link>
        <small>
          {entryCount} {entryCount === 1 ? "entry" : "entries"}
        </small>
        <small className="text-inverse-muted">Private · not part of the website</small>
        {back ? (
          <Link
            href={back.href}
            className="ml-auto text-emerald transition-colors duration-fast ease-out hover:text-emerald-hover"
          >
            <small>← {back.label}</small>
          </Link>
        ) : null}
      </div>
    </header>
  );
}
