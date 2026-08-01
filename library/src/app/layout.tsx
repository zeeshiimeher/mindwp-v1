import "../styles/library.css";

import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import type { ReactNode } from "react";

// Reproduced exactly from the website's src/app/layout.tsx. SOFT and WONK are
// loaded so the display scale's font-variation-settings (styles/foundation/typography.css)
// actually resolve; opsz lets the browser size Fraunces optically instead of
// scaling one master across 17px–84px. A static webfont substitute would not
// carry these axes, and the loss would be quiet rather than obvious.
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK", "opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MindWP section laboratory",
  description: "Private catalogue of section compositions. Not part of the MindWP website.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = { themeColor: "#071629", colorScheme: "light" };

export default function LibraryLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
