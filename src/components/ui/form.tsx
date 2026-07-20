import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

type WithInvalid<T> = T & { invalid?: boolean };

export function Input({ invalid, className, ...props }: WithInvalid<ComponentProps<"input">>) {
  return (
    <input
      aria-invalid={invalid || undefined}
      className={cn("field-control", invalid && "field-control--invalid", className)}
      {...props}
    />
  );
}

export function Textarea({
  invalid,
  className,
  ...props
}: WithInvalid<ComponentProps<"textarea">>) {
  return (
    <textarea
      aria-invalid={invalid || undefined}
      className={cn(
        "field-control field-control--textarea",
        invalid && "field-control--invalid",
        className,
      )}
      {...props}
    />
  );
}

export function Select({
  invalid,
  className,
  children,
  ...props
}: WithInvalid<ComponentProps<"select">>) {
  return (
    <select
      aria-invalid={invalid || undefined}
      className={cn("field-control", invalid && "field-control--invalid", className)}
      {...props}
    >
      {children}
    </select>
  );
}

export function Label({ className, children, ...props }: ComponentProps<"label">) {
  return (
    <label className={cn("field-label", className)} {...props}>
      {children}
    </label>
  );
}

export function FieldError({ children }: { children?: ReactNode }) {
  if (!children) return null;
  return <p className="field-error">{children}</p>;
}

/** Label + control + error, wired together. */
export function Field({
  label,
  htmlFor,
  error,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  optional?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="field">
      <Label htmlFor={htmlFor}>
        {label}
        {optional && <span className="field-optional"> (optional)</span>}
      </Label>
      {children}
      <FieldError>{error}</FieldError>
    </div>
  );
}
