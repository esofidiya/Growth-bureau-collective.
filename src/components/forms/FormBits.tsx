"use client";

import { useId, type ComponentProps, type ReactNode } from "react";
import { AlertCircle, CheckCircle2, Mail } from "lucide-react";
import type { FormState } from "@/lib/enquiries/schema";
import { cn } from "@/lib/cn";

export function valueOf(state: FormState, key: string): string {
  if (state.status === "invalid" || state.status === "unavailable" || state.status === "error") {
    const v = state.values[key];
    return typeof v === "string" ? v : "";
  }
  return "";
}

export function errorOf(state: FormState, key: string): string | undefined {
  return state.status === "invalid" ? state.fieldErrors[key]?.[0] : undefined;
}

export function Select({
  label,
  error,
  children,
  className,
  id: idProp,
  ...props
}: ComponentProps<"select"> & { label: string; error?: string; children: ReactNode }) {
  const auto = useId();
  const id = idProp ?? auto;
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-cream">
        {label}
      </label>
      <select
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "w-full rounded-sm border bg-ink/60 px-4 py-3 text-base text-cream [color-scheme:dark] focus:outline-none focus:ring-2",
          error ? "border-red-400 focus:ring-red-400/40" : "border-line-dark focus:border-gold focus:ring-gold/30",
          className,
        )}
        {...props}
      >
        {children}
      </select>
      {error && (
        <p id={`${id}-error`} role="alert" className="text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

export function Checkbox({ label, error, className, id: idProp, ...props }: ComponentProps<"input"> & { label: ReactNode; error?: string }) {
  const auto = useId();
  const id = idProp ?? auto;
  return (
    <div className={className}>
      <div className="flex items-start gap-3">
        <input
          id={id}
          type="checkbox"
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className="mt-0.5 size-5 shrink-0 cursor-pointer rounded-sm border-line-dark accent-[#D4A37A]"
          {...props}
        />
        <label htmlFor={id} className="cursor-pointer text-sm leading-relaxed text-cream/85">
          {label}
        </label>
      </div>
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-2 text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

/** Honest outcome messages. Success is only shown when the server confirmed storage. */
export function FormOutcome({ state, email, mailSubject, mailBody }: { state: FormState; email: string; mailSubject: string; mailBody: string }) {
  if (state.status === "success") {
    return (
      <div role="status" className="flex items-start gap-3 rounded-md border border-gold/50 bg-gold/10 p-5 text-cream">
        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden />
        <p>
          Thank you. We have received your message (reference <strong>{state.reference}</strong>) and will be in touch soon.
        </p>
      </div>
    );
  }
  if (state.status === "unavailable" || state.status === "error") {
    const href = `mailto:${email}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
    return (
      <div role="alert" className="rounded-md border border-line-dark bg-charcoal p-5 text-cream">
        <div className="flex items-start gap-3">
          <AlertCircle className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden />
          <div>
            <p className="font-semibold">Your message has not been sent.</p>
            <p className="mt-1 text-sm text-smoke">
              {state.status === "unavailable"
                ? "Online submissions are not connected yet. Please email us instead. We have prepared the email with your details."
                : "Something went wrong on our side. Please try again, or email us instead."}
            </p>
            <a
              href={href}
              className="mt-4 inline-flex items-center gap-2 rounded-sm bg-gold px-4 py-2 text-sm font-medium text-ink hover:bg-gold-light"
            >
              <Mail className="size-4" aria-hidden />
              Email {email}
            </a>
          </div>
        </div>
      </div>
    );
  }
  if (state.status === "invalid") {
    return (
      <p role="alert" className="flex items-center gap-2 text-sm text-red-400">
        <AlertCircle className="size-4" aria-hidden />
        Please check the highlighted fields.
      </p>
    );
  }
  return null;
}
