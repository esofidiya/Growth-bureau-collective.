import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { ConsultationCta } from "@/components/home/ConsultationCta";
import { PageHero } from "@/components/layout/PageHero";
import { PageShell } from "@/components/layout/PageShell";
import { Reveal } from "@/components/motion/Reveal";
import { ServiceIcon } from "@/components/services/ServiceIcon";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Eyebrow, Section, SectionHeading } from "@/components/ui/Layout";
import { process } from "@/content/home";
import { getService, services } from "@/content/services";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({ title: service.title, description: `${service.summary} ${service.title} by Growth Bureau Collective.`, path: `/services/${slug}` });
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const others = services.filter((s) => s.slug !== slug);

  return (
    <PageShell>
      <PageHero eyebrow="Services" title={service.title} intro={service.summary}>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/book" size="lg">
            Book a consultation
            <ArrowRight className="size-4" aria-hidden />
          </ButtonLink>
          <ButtonLink href="/packages" variant="outline" size="lg">
            View packages
          </ButtonLink>
        </div>
      </PageHero>

      <section aria-labelledby="includes-title" className="bg-cream py-20 text-charcoal sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <span className="inline-flex size-14 items-center justify-center rounded-full bg-ink text-gold">
              <ServiceIcon icon={service.icon} className="size-6" />
            </span>
            <Eyebrow tone="light" className="mt-8">
              What is included
            </Eyebrow>
            <h2 id="includes-title" className="mt-5 font-display text-4xl font-semibold leading-tight text-ink">
              Everything {service.title.toLowerCase()} needs to work.
            </h2>
          </Reveal>
          <ul className="grid gap-4 sm:grid-cols-2">
            {service.includes.map((item, i) => (
              <Reveal as="li" key={item} delay={(i % 2) * 0.06} className="flex items-start gap-4 rounded-md border border-line-light bg-white p-6">
                <span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-ink text-gold">
                  <Check className="size-4" aria-hidden />
                </span>
                <span className="font-display text-xl font-semibold text-ink">{item}</span>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <Section tone="ink" aria-labelledby="how-title">
        <Reveal>
          <SectionHeading id="how-title" eyebrow="How we work" title="A deliberate process, every time." />
        </Reveal>
        <ol className="mt-14 grid gap-px overflow-hidden rounded-md border border-line-dark bg-line-dark sm:grid-cols-2 lg:grid-cols-5">
          {process.steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 0.06} className="bg-ink p-6">
              <span className="font-display text-3xl text-gold/60">{i + 1}</span>
              <h3 className="mt-4 font-display text-xl font-semibold text-cream">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-smoke">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section tone="charcoal" aria-labelledby="other-title">
        <div className="flex items-end justify-between gap-6">
          <h2 id="other-title" className="font-display text-3xl font-semibold text-cream sm:text-4xl">
            Other services
          </h2>
          <Link href="/services" className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold-light">
            <ArrowLeft className="size-4" aria-hidden />
            All services
          </Link>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="flex h-full flex-col rounded-md border border-line-dark bg-ink/60 p-6 transition-colors hover:border-gold/50"
              >
                <ServiceIcon icon={s.icon} className="size-5 text-gold" />
                <span className="mt-4 font-display text-xl font-semibold text-cream">{s.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <ConsultationCta />
    </PageShell>
  );
}
