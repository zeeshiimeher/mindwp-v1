import { z } from "zod";

/** Plain-language diagnostic fields for the website review request. */
export const PROBLEM_AREAS = [
  { value: "missed-calls", label: "Missed calls / slow response" },
  { value: "follow-up", label: "Follow-up nobody owns" },
  { value: "reviews", label: "Reviews not being requested" },
  { value: "local-visibility", label: "Nearby customers can't find us" },
  { value: "website-clarity", label: "Site doesn't explain the offer / build trust" },
  { value: "other", label: "Something else" },
] as const;

export const CONTACT_METHODS = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone" },
  { value: "text", label: "Text" },
  { value: "whatsapp", label: "WhatsApp" },
] as const;

const optionalText = (max: number) => z.string().trim().max(max).optional().or(z.literal(""));

export const reviewRequestSchema = z.object({
  name: z.string().trim().min(1, "Your name is required").max(100),
  email: z.string().trim().email("Enter a valid email"),
  businessName: z.string().trim().min(1, "Business or clinic name is required").max(150),
  websiteUrl: optionalText(200),
  industry: optionalText(100),
  serviceArea: optionalText(120),
  problemArea: z.enum(PROBLEM_AREAS.map((p) => p.value) as [string, ...string[]]).optional(),
  afterEnquiry: optionalText(1500),
  contactMethod: z
    .enum(CONTACT_METHODS.map((c) => c.value) as [string, ...string[]])
    .default("email"),
  // Attribution (hidden) + anti-spam
  system: optionalText(60),
  source: optionalText(120),
  turnstileToken: optionalText(2048),
});

export type ReviewRequest = z.infer<typeof reviewRequestSchema>;
