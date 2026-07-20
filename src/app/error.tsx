"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="status-page">
      <div className="status-page__inner">
        <p className="status-page__kicker">Something went wrong</p>
        <h1>A page slipped.</h1>
        <p>An unexpected error occurred. Try again, or return to the homepage.</p>
        <div className="status-page__actions">
          <button type="button" className="btn" onClick={reset}>
            Try again
          </button>
          <Link href="/" className="btn btn-outline">
            Back home
          </Link>
        </div>
      </div>
    </section>
  );
}
