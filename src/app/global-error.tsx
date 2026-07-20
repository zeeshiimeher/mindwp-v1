"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100dvh",
          display: "grid",
          placeItems: "center",
          padding: "2rem",
          background: "#ffffff",
          color: "#151515",
          fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div style={{ width: "min(100%, 34rem)" }}>
          <h1 style={{ margin: 0, fontSize: "clamp(2rem, 6vw, 4rem)", lineHeight: 1 }}>
            Something went wrong.
          </h1>
          <p style={{ marginTop: "1rem", color: "#5b6470", lineHeight: 1.6 }}>
            A critical error occurred. Please try again.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: "1.5rem",
              minHeight: "44px",
              border: "1px solid #151515",
              borderRadius: "6px",
              background: "#151515",
              color: "#ffffff",
              padding: "0.65rem 1rem",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
