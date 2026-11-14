import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type Tone = "dark" | "light";

export function Card({ tone = "dark", interactive = false, className, ...props }: ComponentProps<"div"> & { tone?: Tone; interactive?: boolean }) {
  return (
    <div
      className={cn(
        "relative rounded-md border p-6 sm:p-8",
        tone === "dark"
          ? "border-line-dark bg-gradient-to-b from-charcoal/70 to-ink/80 text-cream"
          : "border-line-light bg-white text-charcoal",
        interactive &&
          "transition-all duration-300 ease-luxe hover:-translate-y-1 hover:border-gold/50 hover:shadow-gold",
        className,
      )}
      {...props}
    />
  );
}

export function CardTitle({ className, ...props }: ComponentProps<"h3">) {
  return <h3 className={cn("font-display text-2xl font-semibold leading-tight", className)} {...props} />;
}

export function CardBody({ className, ...props }: ComponentProps<"p">) {
  return <p className={cn("mt-3 text-[0.95rem] leading-relaxed opacity-80", className)} {...props} />;
}
