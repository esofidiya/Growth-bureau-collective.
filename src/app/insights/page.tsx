import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { PageShell } from "@/components/layout/PageShell";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Layout";
import { articles, insightCategories } from "@/content/insights";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Insights",
  description: "Ideas on social media, brand strategy, content creation and digital growth from Growth Bureau Collective.",
  path: "/insights",
});

const dateFmt = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" });

export default function InsightsPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Insights" title="Thinking on brand, content and growth." intro="Perspectives from the collective on building influence with intention." />
      <Section tone="ink" aria-label="Articles">
        <ul className="flex flex-wrap gap-2" aria-label="Topics">
          {insightCategories.map((c) => (
            <li key={c} className="rounded-full border border-line-dark px-4 py-1.5 text-sm text-cream/80">
              {c}
            </li>
          ))}
        </ul>
        {articles.length > 0 ? (
          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((a, i) => (
              <Reveal as="li" key={a.slug} delay={(i % 3) * 0.08}>
                <Link href={`/insights/${a.slug}`} className="group flex h-full flex-col rounded-md border border-line-dark bg-charcoal/50 p-8 transition-colors hover:border-gold/50">
                  <p className="text-xs uppercase tracking-[0.2em] text-gold">{a.category}</p>
                  <h2 className="mt-4 font-display text-2xl font-semibold text-cream">{a.title}</h2>
                  <p className="mt-3 flex-1 text-smoke">{a.excerpt}</p>
                  <p className="mt-6 flex items-center justify-between text-sm text-smoke">
                    <time dateTime={a.publishedAt}>{dateFmt.format(new Date(a.publishedAt))}</time>
                    <ArrowUpRight className="size-4 group-hover:text-gold" aria-hidden />
                  </p>
                </Link>
              </Reveal>
            ))}
          </ul>
        ) : (
          <div className="mt-12 rounded-md border border-line-dark bg-charcoal/40 px-6 py-16 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">First articles in preparation</p>
            <p className="mx-auto mt-4 max-w-xl font-display text-3xl text-cream">Our first insights are being written. Follow us on Instagram for updates in the meantime.</p>
            <div className="mt-8 flex justify-center">
              <ButtonLink href="/contact" variant="outline">
                Get in touch
              </ButtonLink>
            </div>
          </div>
        )}
      </Section>
    </PageShell>
  );
}
