import { GraduationCap, LayoutDashboard, Library, Sparkles, Target, Users } from "lucide-react";
import { GbcEmblem } from "@/components/brand/GbcEmblem";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Layout";
import { growthHub } from "@/content/home";

const icons = {
  layout: LayoutDashboard,
  target: Target,
  graduation: GraduationCap,
  library: Library,
  sparkles: Sparkles,
  users: Users,
} as const;

export function GrowthHubIntro() {
  return (
    <Section tone="ink" aria-labelledby="hub-title" className="overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[50rem] w-[80rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgb(212_163_122/0.14)_0%,transparent_60%)]"
      />
      <div className="relative grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <GbcEmblem size={64} decorative className="mb-8" />
          <SectionHeading id="hub-title" eyebrow={growthHub.eyebrow} title={growthHub.title} intro={growthHub.intro} />
          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-smoke">
            <span>Membership:</span>
            {growthHub.tiers.map((t) => (
              <span key={t} className="rounded-full border border-gold/40 px-3 py-1 text-gold">
                {t}
              </span>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={growthHub.cta.href} size="lg">
              {growthHub.cta.label}
            </ButtonLink>
            <ButtonLink href={growthHub.secondary.href} variant="outline" size="lg">
              {growthHub.secondary.label}
            </ButtonLink>
          </div>
        </Reveal>

        <ul className="grid gap-4 sm:grid-cols-2">
          {growthHub.features.map((f, i) => {
            const Icon = icons[f.icon];
            return (
              <Reveal
                as="li"
                key={f.title}
                delay={(i % 2) * 0.08}
                className="rounded-md border border-line-dark bg-charcoal/50 p-6 backdrop-blur-sm transition-colors duration-500 hover:border-gold/40"
              >
                <Icon className="size-6 text-gold" aria-hidden />
                <h3 className="mt-5 font-display text-xl font-semibold text-cream">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-smoke">{f.body}</p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
