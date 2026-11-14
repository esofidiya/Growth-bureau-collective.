import { CheckCircle2, Clapperboard, Gem, Share2, Sparkles, TrendingUp } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { PageShell } from "@/components/layout/PageShell";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Section, SectionHeading } from "@/components/ui/Layout";
import { academyCategories, academyFeatures } from "@/content/academy";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Learning Academy",
  description:
    "The GBC Learning Academy: courses on brand strategy, social media, content creation, AI and business growth for entrepreneurs.",
  path: "/academy",
});

const icons = { gem: Gem, share: Share2, clapperboard: Clapperboard, sparkles: Sparkles, trending: TrendingUp } as const;

export default function AcademyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="GBC Learning Academy"
        title="Learn to build a brand with intent."
        intro="Practical courses on brand, social media, content, AI and business growth, inside the GBC Growth Hub."
      >
        <ButtonLink href="/growth-hub#membership" size="lg">
          View memberships
        </ButtonLink>
      </PageHero>

      <Section tone="ink" aria-labelledby="categories-title">
        <Reveal>
          <SectionHeading id="categories-title" eyebrow="Course categories" title="Five schools of growth." />
        </Reveal>
        <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {academyCategories.map((c, i) => {
            const Icon = icons[c.icon];
            return (
              <Reveal as="li" key={c.slug} delay={(i % 3) * 0.08} className="rounded-md border border-line-dark bg-charcoal/50 p-8">
                <Icon className="size-7 text-gold" aria-hidden />
                <h3 className="mt-6 font-display text-2xl font-semibold text-cream">{c.title}</h3>
                <ul className="mt-5 space-y-2">
                  {c.topics.map((t) => (
                    <li key={t} className="flex items-center gap-3 text-sm text-smoke">
                      <span aria-hidden className="h-px w-4 bg-gold/60" />
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </ul>
        <p className="mt-10 text-sm text-smoke">The course catalogue opens with the Growth Hub.</p>
      </Section>

      <section aria-labelledby="learn-title" className="bg-cream py-20 text-charcoal sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading id="learn-title" tone="light" eyebrow="How you learn" title="Built around your progress." />
          </Reveal>
          <ul className="grid gap-4 sm:grid-cols-2">
            {academyFeatures.map((f) => (
              <li key={f} className="flex items-start gap-3 rounded-md border border-line-light bg-white p-5">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold-deep" aria-hidden />
                <span className="text-charcoal">{f}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </PageShell>
  );
}
