import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ConsultationCta } from "@/components/home/ConsultationCta";
import { Process } from "@/components/home/Process";
import { PageHero } from "@/components/layout/PageHero";
import { PageShell } from "@/components/layout/PageShell";
import { Reveal } from "@/components/motion/Reveal";
import { ServiceIcon } from "@/components/services/ServiceIcon";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Layout";
import { services } from "@/content/services";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Social media management, content creation, brand strategy, digital marketing and growth consultancy for ambitious UK businesses.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Services"
        title="Expertise that builds influence."
        intro="Five disciplines working towards one goal: a brand that is recognised, remembered and chosen."
      >
        <ButtonLink href="/packages" variant="outline" size="lg">
          Compare packages
        </ButtonLink>
      </PageHero>

      <section aria-label="All services" className="bg-cream py-20 text-charcoal sm:py-28">
        <Container>
          <ul className="divide-y divide-line-light border-y border-line-light">
            {services.map((s, i) => (
              <Reveal as="li" key={s.slug} delay={0.05}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group grid gap-6 py-10 transition-colors md:grid-cols-[auto_1fr_1.2fr_auto] md:items-start md:gap-10"
                >
                  <span className="font-display text-2xl text-gold-deep">{String(i + 1).padStart(2, "0")}</span>
                  <div className="flex items-start gap-4">
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-ink text-gold">
                      <ServiceIcon icon={s.icon} className="size-5" />
                    </span>
                    <h2 className="font-display text-3xl font-semibold leading-tight text-ink transition-colors group-hover:text-gold-deep">
                      {s.title}
                    </h2>
                  </div>
                  <div>
                    <p className="text-lg leading-relaxed text-stone">{s.summary}</p>
                    <p className="mt-3 text-sm text-charcoal/80">{s.includes.join(" · ")}</p>
                  </div>
                  <ArrowUpRight className="hidden size-6 text-stone transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-deep md:block" aria-hidden />
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <Process />
      <ConsultationCta />
    </PageShell>
  );
}
