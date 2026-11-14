import { GraduationCap, LayoutDashboard, Library, Sparkles, Target, Users } from "lucide-react";
import { GbcEmblem } from "@/components/brand/GbcEmblem";
import { PageHero } from "@/components/layout/PageHero";
import { PageShell } from "@/components/layout/PageShell";
import { Reveal } from "@/components/motion/Reveal";
import { PriceCard } from "@/components/pricing/PriceCard";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Section, SectionHeading } from "@/components/ui/Layout";
import { growthHub } from "@/content/home";
import { formatGBP, hubTiers } from "@/content/packages";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "The GBC Growth Hub",
  description:
    "A private business growth platform: growth planner, Learning Academy, resource library, AI Growth Assistant and member community. Memberships from £9.99 per month.",
  path: "/growth-hub",
});

const icons = { layout: LayoutDashboard, target: Target, graduation: GraduationCap, library: Library, sparkles: Sparkles, users: Users } as const;

export default function GrowthHubPage() {
  return (
    <PageShell>
      <PageHero eyebrow={growthHub.eyebrow} title={growthHub.title} intro={growthHub.intro}>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="#membership" size="lg">
            View memberships
          </ButtonLink>
          <ButtonLink href="/login" variant="outline" size="lg">
            Member log in
          </ButtonLink>
        </div>
      </PageHero>

      <Section tone="ink" aria-labelledby="features-title">
        <Reveal>
          <SectionHeading id="features-title" eyebrow="Inside the Growth Hub" title="Everything you need to grow with intent." />
        </Reveal>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {growthHub.features.map((f, i) => {
            const Icon = icons[f.icon];
            return (
              <Reveal as="li" key={f.title} delay={(i % 3) * 0.08} className="rounded-md border border-line-dark bg-charcoal/50 p-8">
                <Icon className="size-7 text-gold" aria-hidden />
                <h3 className="mt-6 font-display text-2xl font-semibold text-cream">{f.title}</h3>
                <p className="mt-2 leading-relaxed text-smoke">{f.body}</p>
              </Reveal>
            );
          })}
        </ul>
      </Section>

      <Section tone="charcoal" id="membership" aria-labelledby="membership-title" className="scroll-mt-20">
        <Reveal className="flex flex-col items-center text-center">
          <GbcEmblem size={56} decorative className="mb-6" />
          <SectionHeading id="membership-title" eyebrow="Membership" title="Choose your membership." align="center" />
        </Reveal>
        <ul className="mt-16 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {hubTiers.map((t, i) => (
            <Reveal as="li" key={t.id} delay={i * 0.08}>
              <PriceCard
                name={t.name}
                price={formatGBP(t.price)}
                summary={t.summary}
                features={t.features}
                featured={t.featured}
                cta={{ label: `Join ${t.name.replace("Growth Hub ", "")}`, href: `/register?plan=${t.id}` }}
              />
            </Reveal>
          ))}
        </ul>
        <p className="mt-8 text-center text-sm text-smoke">
          Billed monthly. Memberships open when accounts and payments launch.
        </p>
      </Section>

      <section className="bg-cream py-20 text-charcoal sm:py-24">
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">Want us to do it with you?</h2>
            <p className="mt-2 text-lg text-stone">Our agency packages pair hands-on support with Growth Hub access.</p>
          </div>
          <ButtonLink href="/packages" variant="dark" size="lg">
            View agency packages
          </ButtonLink>
        </Container>
      </section>
    </PageShell>
  );
}
