import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Container({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10", className)} {...props} />;
}

type SectionTone = "ink" | "charcoal" | "cream" | "white";

const toneMap: Record<SectionTone, string> = {
  ink: "bg-ink text-cream",
  charcoal: "bg-charcoal text-cream",
  cream: "bg-cream text-charcoal",
  white: "bg-white text-charcoal",
};

export function Section({
  tone = "ink",
  className,
  children,
  ...props
}: ComponentProps<"section"> & { tone?: SectionTone }) {
  return (
    <section className={cn("relative py-20 sm:py-28", toneMap[tone], className)} {...props}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children, tone = "dark", className }: { children: ReactNode; tone?: "dark" | "light"; className?: string }) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em]",
        tone === "dark" ? "text-gold" : "text-gold-deep",
        className,
      )}
    >
      <span aria-hidden className="h-px w-8 bg-current opacity-70" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "dark",
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center [&>p:first-child]:justify-center")}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {intro && (
        <p className={cn("mt-6 text-lg leading-relaxed text-pretty", tone === "dark" ? "text-smoke" : "text-stone")}>{intro}</p>
      )}
    </div>
  );
}
