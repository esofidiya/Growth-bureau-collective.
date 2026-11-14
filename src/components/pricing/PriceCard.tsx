import { Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function PriceCard({
  name,
  price,
  period = "month",
  audience,
  summary,
  features,
  featured,
  cta,
  extra,
}: {
  name: string;
  price: string;
  period?: string;
  audience?: string;
  summary?: string;
  features: string[];
  featured?: boolean;
  cta: { label: string; href: string };
  extra?: React.ReactNode;
}) {
  return (
    <article
      className={cn(
        "relative flex h-full flex-col rounded-md border p-8 transition-all duration-500 ease-luxe",
        featured
          ? "border-gold/70 bg-gradient-to-b from-charcoal to-ink shadow-gold lg:-mt-4 lg:pb-12"
          : "border-line-dark bg-ink/70 hover:border-gold/40",
      )}
    >
      {featured && (
        <p className="absolute -top-3 left-8 rounded-full bg-gold px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-ink">
          Most popular
        </p>
      )}
      <h3 className="font-display text-3xl font-semibold text-cream">{name}</h3>
      {audience && <p className="mt-2 text-sm text-smoke">{audience}</p>}
      <p className="mt-8 flex items-baseline gap-2">
        <span className="font-display text-5xl font-semibold text-gold-gradient">{price}</span>
        <span className="text-sm text-smoke">per {period}</span>
      </p>
      {summary && <p className="mt-5 leading-relaxed text-cream/85">{summary}</p>}
      {extra}
      <ul className="mt-8 flex-1 space-y-3 border-t border-line-dark pt-8">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-cream/90">
            <Check className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
            {f}
          </li>
        ))}
      </ul>
      <ButtonLink href={cta.href} variant={featured ? "primary" : "outline"} className="mt-10 w-full">
        {cta.label}
      </ButtonLink>
    </article>
  );
}
