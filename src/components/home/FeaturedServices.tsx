import Link from "next/link";
import { ArrowUpRight, Clapperboard, Compass, Gem, Megaphone, Share2 } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Layout";
import { services, type Service } from "@/content/services";

const icons: Record<Service["icon"], typeof Share2> = {
  share: Share2,
  clapperboard: Clapperboard,
  gem: Gem,
  megaphone: Megaphone,
  compass: Compass,
};

export function FeaturedServices() {
  return (
    <Section tone="charcoal" aria-labelledby="services-title">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <Reveal>
          <SectionHeading
            id="services-title"
            eyebrow="Featured services"
            title="Expertise that builds influence."
            intro="Five disciplines, one direction: a brand that is recognised, remembered and chosen."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <ButtonLink href="/services" variant="outline">
            All services
          </ButtonLink>
        </Reveal>
      </div>

      <ul className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
        {services.map((s, i) => {
          const Icon = icons[s.icon];
          return (
            <Reveal as="li" key={s.slug} delay={(i % 3) * 0.08} className={i < 2 ? "lg:col-span-3" : "lg:col-span-2"}>
              <Link
                href={`/services/${s.slug}`}
                className="group relative flex h-full flex-col rounded-md border border-line-dark bg-gradient-to-b from-ink/60 to-ink p-8 transition-all duration-500 ease-luxe hover:-translate-y-1 hover:border-gold/50 hover:shadow-gold"
              >
                <div className="flex items-start justify-between">
                  <span className="inline-flex size-12 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-ink">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <ArrowUpRight
                    className="size-5 text-smoke transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold"
                    aria-hidden
                  />
                </div>
                <h3 className="mt-8 font-display text-3xl font-semibold text-cream">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-smoke">{s.summary}</p>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${s.title} includes`}>
                  {s.includes.map((item) => (
                    <li key={item} className="rounded-full border border-line-dark px-3 py-1 text-xs text-cream/75">
                      {item}
                    </li>
                  ))}
                </ul>
              </Link>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
