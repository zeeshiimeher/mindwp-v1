import Link from "next/link";

export default function NotFound() {
  return (
    <section className="status-page">
      <div className="status-page__inner">
        <p className="status-page__kicker">404</p>
        <h1>Page not found.</h1>
        <p>The page you requested does not exist or is not public yet.</p>
        <div className="status-page__actions">
          <Link href="/" className="btn">
            Back home
          </Link>
        </div>
      </div>
    </section>
  );
}
