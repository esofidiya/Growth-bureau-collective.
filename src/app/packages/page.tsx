import { Check, Minus } from "lucide-react";
import { ConsultationCta } from "@/components/home/ConsultationCta";
import { PageHero } from "@/components/layout/PageHero";
import { PageShell } from "@/components/layout/PageShell";
import { Reveal } from "@/components/motion/Reveal";
import { PriceCard } from "@/components/pricing/PriceCard";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Section, SectionHeading } from "@/components/ui/Layout";
import { addOns, agencyPackages, formatGBP, packageComparison } from "@/content/packages";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Packages & Pricing",
  description:
    "GBC Essentials, Elevate and Elite: monthly social media management and brand growth packages from £299 per month, with optional add-ons.",
  path: "/packages",
});

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="mx-auto size-5 text-gold" aria-label="Included" />;
  if (value === false) return <Minus className="mx-auto size-4 text-smoke/50" aria-label="Not included" />;
  return <span className="text-sm text-cream/90">{value}</span>;
}

export default function PackagesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Packages & pricing"
        title="Choose the level of support your ambition needs."
        intro="Three monthly packages, from establishing your presence to comprehensive strategic and creative partnership."
      />

      <Section tone="ink" aria-labelledby="packages-title" className="pt-16 sm:pt-20">
        <h2 id="packages-title" className="sr-only">
          Agency packages
        </h2>
        <ul className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {agencyPackages.map((p, i) => (
            <Reveal as="li" key={p.id} delay={i * 0.08}>
              <PriceCard
                name={p.name}
                price={formatGBP(p.price)}
                period={p.period}
                audience={p.audience}
                summary={p.summary}
                features={p.deliverables}
                featured={p.featured}
                cta={{ label: `Enquire about ${p.name.replace("GBC ", "")}`, href: `/book?package=${p.id}` }}
                extra={
                  <dl className="mt-6 grid grid-cols-3 gap-2 rounded-sm border border-line-dark p-3 text-center">
                    {p.allowance.map((a) => (
                      <div key={a.label}>
                        <dt className="text-[0.65rem] uppercase leading-tight tracking-wider text-smoke">{a.label}</dt>
                        <dd className="mt-1 font-display text-2xl text-cream">{a.value}</dd>
                      </div>
                    ))}
                  </dl>
                }
              />
            </Reveal>
          ))}
        </ul>
        <p className="mt-8 text-center text-sm text-smoke">Prices are per month. Every package begins with a consultation.</p>
      </Section>

      <Section tone="charcoal" aria-labelledby="compare-title">
        <Reveal>
          <SectionHeading id="compare-title" eyebrow="Compare" title="Package comparison." />
        </Reveal>
        <p className="mt-10 text-sm text-smoke md:hidden">Swipe the table sideways to compare all three packages.</p>
        <div className="mt-4 overflow-x-auto md:mt-12 rounded-md border border-line-dark" tabIndex={0} role="region" aria-label="Package comparison table">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-line-dark bg-ink">
                <th scope="col" className="p-4 text-xs font-semibold uppercase tracking-[0.2em] text-smoke">
                  Service
                </th>
                {agencyPackages.map((p) => (
                  <th key={p.id} scope="col" className="p-4 text-center font-display text-lg font-semibold text-cream">
                    {p.name.replace("GBC ", "")}
                    <span className="block font-sans text-xs font-normal text-gold">{formatGBP(p.price)}/mo</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {packageComparison.map((row) => (
                <tr key={row.feature} className="border-b border-line-dark last:border-0 odd:bg-ink/40">
                  <th scope="row" className="p-4 text-sm font-normal text-cream">
                    {row.feature}
                  </th>
                  <td className="p-4 text-center">
                    <Cell value={row.essentials} />
                  </td>
                  <td className="p-4 text-center">
                    <Cell value={row.elevate} />
                  </td>
                  <td className="p-4 text-center">
                    <Cell value={row.elite} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <section aria-labelledby="addons-title" className="bg-cream py-20 text-charcoal sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading id="addons-title" tone="light" eyebrow="Optional add-ons" title="Tailor your package." />
          </Reveal>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {addOns.map((a, i) => (
              <Reveal as="li" key={a.name} delay={(i % 3) * 0.06} className="flex flex-col rounded-md border border-line-light bg-white p-6">
                <h3 className="font-display text-xl font-semibold text-ink">{a.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-stone">{a.description}</p>
                <p className="mt-5 text-sm font-semibold text-gold-deep">{a.price ? formatGBP(a.price) : (a.priceNote ?? "Price on request")}</p>
              </Reveal>
            ))}
          </ul>
          <div className="mt-12 flex flex-col items-start gap-4 rounded-md bg-ink p-8 text-cream sm:flex-row sm:items-center sm:justify-between">
            <p className="font-display text-2xl">Looking for the Growth Hub membership?</p>
            <ButtonLink href="/growth-hub#membership">See membership plans</ButtonLink>
          </div>
        </Container>
      </section>

      <ConsultationCta />
    </PageShell>
  );
}
