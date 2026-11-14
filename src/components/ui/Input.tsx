import { useId, type ComponentProps } from "react";
import { cn } from "@/lib/cn";

type FieldProps = {
  label: string;
  hint?: string;
  error?: string;
  tone?: "dark" | "light";
};

const fieldBase =
  "w-full rounded-sm border px-4 py-3 text-base transition-colors duration-200 placeholder:opacity-50 focus:outline-none focus-visible:outline-none focus:ring-2";

function toneClasses(tone: "dark" | "light", invalid: boolean) {
  if (invalid) return "border-red-400 focus:ring-red-400/40 " + (tone === "dark" ? "bg-ink/60 text-cream" : "bg-white text-charcoal");
  return tone === "dark"
    ? "border-line-dark bg-ink/60 text-cream focus:border-gold focus:ring-gold/30"
    : "border-line-light bg-white text-charcoal focus:border-gold-deep focus:ring-gold-deep/25";
}

function Field({ id, label, hint, error, tone = "dark", children }: FieldProps & { id: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className={cn("text-sm font-medium", tone === "dark" ? "text-cream" : "text-charcoal")}>
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="text-sm text-red-400">
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className={cn("text-sm", tone === "dark" ? "text-smoke" : "text-stone")}>
          {hint}
        </p>
      ) : null}
    </div>
  );
}

export function Input({ label, hint, error, tone = "dark", className, id: idProp, ...props }: FieldProps & ComponentProps<"input">) {
  const autoId = useId();
  const id = idProp ?? autoId;
  return (
    <Field id={id} label={label} hint={hint} error={error} tone={tone}>
      <input
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
        className={cn(fieldBase, toneClasses(tone, !!error), className)}
        {...props}
      />
    </Field>
  );
}

export function Textarea({ label, hint, error, tone = "dark", className, id: idProp, ...props }: FieldProps & ComponentProps<"textarea">) {
  const autoId = useId();
  const id = idProp ?? autoId;
  return (
    <Field id={id} label={label} hint={hint} error={error} tone={tone}>
      <textarea
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
        className={cn(fieldBase, "min-h-32", toneClasses(tone, !!error), className)}
        {...props}
      />
    </Field>
  );
}
