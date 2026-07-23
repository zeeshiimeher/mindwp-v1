"use client";

import Script from "next/script";
import { useActionState } from "react";

import { submitReviewRequest, type SubmitState } from "@/app/contact/actions";
import { Button } from "@/components/ui/Button";
import { Field, Input, Select, Textarea } from "@/components/ui/form";
import { CONTACT_METHODS, PROBLEM_AREAS } from "@/lib/contact/schema";
import { PRIMARY_CTA_LABEL } from "@/lib/cta/labels";

const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export function ReviewRequestForm({ system, source }: { system?: string; source?: string }) {
  const [state, action, pending] = useActionState<SubmitState | null, FormData>(
    submitReviewRequest,
    null,
  );

  if (state?.ok) {
    return (
      <div className="form-success">
        <h2>Request received.</h2>
        <p>{state.message}</p>
      </div>
    );
  }

  const err = (k: string) => state?.fieldErrors?.[k];

  return (
    <form action={action} className="review-form">
      {system && <input type="hidden" name="system" value={system} />}
      {source && <input type="hidden" name="source" value={source} />}

      <div className="review-form__row">
        <Field label="Your name" htmlFor="name" error={err("name")}>
          <Input id="name" name="name" autoComplete="name" required invalid={!!err("name")} />
        </Field>
        <Field label="Email" htmlFor="email" error={err("email")}>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            invalid={!!err("email")}
          />
        </Field>
      </div>

      <div className="review-form__row">
        <Field label="Business or clinic name" htmlFor="businessName" error={err("businessName")}>
          <Input id="businessName" name="businessName" required invalid={!!err("businessName")} />
        </Field>
        <Field label="Website URL" htmlFor="websiteUrl" optional>
          <Input id="websiteUrl" name="websiteUrl" placeholder="https://" />
        </Field>
      </div>

      <div className="review-form__row">
        <Field label="Industry / practice type" htmlFor="industry" optional>
          <Input id="industry" name="industry" />
        </Field>
        <Field label="Service area" htmlFor="serviceArea" optional>
          <Input id="serviceArea" name="serviceArea" />
        </Field>
      </div>

      <Field label="Where is work slipping most?" htmlFor="problemArea">
        <Select id="problemArea" name="problemArea" defaultValue="">
          <option value="" disabled>
            Choose the closest…
          </option>
          {PROBLEM_AREAS.map((p) => (
            <option key={p.value} value={p.value}>
              {p.label}
            </option>
          ))}
        </Select>
      </Field>

      <Field label="What happens after an enquiry arrives today?" htmlFor="afterEnquiry" optional>
        <Textarea id="afterEnquiry" name="afterEnquiry" rows={4} />
      </Field>

      <Field label="Best way to reach you" htmlFor="contactMethod">
        <Select id="contactMethod" name="contactMethod" defaultValue="email">
          {CONTACT_METHODS.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </Select>
      </Field>

      {siteKey && (
        <>
          <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />
          <div
            className="turnstile cf-turnstile"
            data-sitekey={siteKey}
            data-response-field-name="turnstileToken"
          />
        </>
      )}

      {state && !state.ok && <p className="form-message">{state.message}</p>}

      <div className="review-form__actions">
        <Button type="submit" disabled={pending}>
          {pending ? "Sending…" : PRIMARY_CTA_LABEL}
        </Button>
      </div>
    </form>
  );
}
