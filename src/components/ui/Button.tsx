import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "link" | "on-dark";

interface CommonProps {
  children: ReactNode;
  className?: string;
  variant?: Variant;
}

type AnchorProps = CommonProps & { href: string } & Omit<
    ComponentProps<typeof Link>,
    "href" | "className"
  >;
type NativeProps = CommonProps & { href?: undefined } & Omit<ComponentProps<"button">, "className">;

export function Button(props: AnchorProps | NativeProps) {
  const variant = props.variant ?? "primary";
  const classes = cn("btn", variant !== "primary" && `btn-${variant}`, props.className);

  if (props.href !== undefined) {
    const { href, variant: _variant, className: _className, children, ...rest } = props;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant: _variant, className: _className, children, ...rest } = props;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
