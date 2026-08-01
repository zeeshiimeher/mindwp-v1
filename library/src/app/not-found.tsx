import Link from "next/link";

import { ENTRIES } from "@/lib/entries";

export default function NotFound() {
  return (
    <main className="bg-page py-step-10">
      <div className="mx-auto w-full max-w-content px-page-margin">
        <p className="eyebrow">404</p>
        <h1>
          No entry with that <em>slug.</em>
        </h1>
        <p className="text-lead measure-intro mt-step-5">
          The catalogue currently holds {ENTRIES.length} entries.
        </p>
        <p className="mt-step-6">
          <Link href="/" className="text-emerald-deep">
            Back to the catalogue
          </Link>
        </p>
      </div>
    </main>
  );
}
