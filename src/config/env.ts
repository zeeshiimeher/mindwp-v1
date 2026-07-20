/**
 * Environment validation. Kept lenient so a build succeeds without secrets
 * (e.g. CI / preview) — the contact route checks for the keys it needs at
 * request time and degrades gracefully.
 */
import { z } from "zod";

const schema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().optional(),
  // Resend (contact form delivery)
  RESEND_API_KEY: z.string().optional(),
  CONTACT_EMAIL: z.string().email().optional(),
  CONTACT_FROM_EMAIL: z.string().email().optional(),
  // Cloudflare Turnstile (anti-spam)
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: z.string().optional(),
  TURNSTILE_SECRET_KEY: z.string().optional(),
});

export const env = schema.parse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  CONTACT_EMAIL: process.env.CONTACT_EMAIL,
  CONTACT_FROM_EMAIL: process.env.CONTACT_FROM_EMAIL,
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
  TURNSTILE_SECRET_KEY: process.env.TURNSTILE_SECRET_KEY,
});

/** True only when both the email transport and destination are configured. */
export const isEmailConfigured = Boolean(env.RESEND_API_KEY && env.CONTACT_EMAIL);
/** True when Turnstile is configured on both ends. */
export const isTurnstileConfigured = Boolean(
  env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && env.TURNSTILE_SECRET_KEY,
);
