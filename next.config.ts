import type { NextConfig } from "next";

const scriptSrc = [
  "script-src 'self' 'unsafe-inline'",
  process.env.NODE_ENV !== "production" ? "'unsafe-eval'" : "",
  "https://www.googletagmanager.com",
  "https://challenges.cloudflare.com",
]
  .filter(Boolean)
  .join(" ");

const CSP = [
  "default-src 'self'",
  "base-uri 'self'",
  "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://challenges.cloudflare.com",
  "font-src 'self' data:",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "frame-src https://challenges.cloudflare.com",
  "img-src 'self' data: blob:",
  "object-src 'none'",
  scriptSrc,
  "style-src 'self' 'unsafe-inline'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: CSP },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Permissions-Policy", value: "camera=(), geolocation=(), microphone=(), payment=()" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  devIndicators: false,
  images: { formats: ["image/avif", "image/webp"] },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
