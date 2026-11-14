import { ArrowRight } from "lucide-react";
import { GbcLockup } from "@/components/brand/GbcEmblem";
import { ConsultationCta } from "@/components/home/ConsultationCta";
import { PageHero } from "@/components/layout/PageHero";
import { PageShell } from "@/components/layout/PageShell";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Eyebrow, Section, SectionHeading } from "@/components/ui/Layout";
import { about } from "@/content/about";
import { philosophy } from "@/content/home";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About GBC",
  description:
    "The story, mission and philosophy behind Growth Bureau Collective, a UK social media marketing and brand development agency. Where ambition becomes identity.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero eyebrow="About GBC" title="Where ambition becomes identity." intro={about.story.title}>
        <ButtonLink href="/book" size="lg">
          Book a consultation
          <ArrowRight className="size-4" aria-hidden />
        </ButtonLink>
      </PageHero>

      {/* Our story */}
      <section aria-labelledby="story-title" className="bg-cream py-24 text-charcoal sm:py-32">
        <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-32 lg:self-start">
            <Eyebrow tone="light">Our story</Eyebrow>
            <h2 id="story-title" className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl">
              {about.story.eyebrow}
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-6 text-lg leading-relaxed text-stone">
            {about.story.paragraphs.map((p, i) =>
              i === 1 ? (
                <p key={p} className="font-display text-3xl italic text-gold-deep">
                  {p}
                </p>
              ) : (
                <p key={p}>{p}</p>
              ),
            )}
          </Reveal>
        </Container>
      </section>

      {/* Mission & vision */}
      <Section tone="ink" aria-labelledby="mission-title">
        <h2 id="mission-title" className="sr-only">
          Mission and vision
        </h2>
        <div className="grid gap-px overflow-hidden rounded-md border border-line-dark bg-line-dark md:grid-cols-2">
          {[
            { label: "Our mission", text: philosophy.mission },
            { label: "Our vision", text: philosophy.vision },
          ].map((item, i) => (
            <Reveal key={item.label} delay={i * 0.1} className="bg-ink p-8 sm:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{item.label}</p>
              <p className="mt-5 font-display text-2xl leading-snug text-cream sm:text-3xl">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section tone="charcoal" aria-labelledby="values-title">
        <Reveal>
          <SectionHeading id="values-title" eyebrow="Our values" title="What we stand for." />
        </Reveal>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {about.values.map((v, i) => (
            <Reveal as="li" key={v.title} delay={(i % 3) * 0.08} className="rounded-md border border-line-dark bg-ink/60 p-8">
              <span className="font-display text-4xl text-gold/50">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-6 font-display text-2xl font-semibold text-cream">{v.title}</h3>
              <p className="mt-2 leading-relaxed text-smoke">{v.body}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* Philosophy */}
      <section aria-labelledby="philosophy-title" className="relative overflow-hidden bg-ink py-28 sm:py-36">
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(212_163_122/0.14)_0%,transparent_60%)]" />
        <Container className="relative">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Eyebrow className="justify-center">{about.philosophy.eyebrow}</Eyebrow>
            <h2 id="philosophy-title" className="mt-6 font-display text-4xl font-semibold leading-[1.05] text-cream sm:text-6xl">
              <span className="text-gold-gradient italic">{about.philosophy.title}</span>
            </h2>
            <div className="mt-8 space-y-4 text-lg leading-relaxed text-smoke">
              {about.philosophy.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Approach + collective */}
      <section className="bg-cream py-24 text-charcoal sm:py-32">
        <Container className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {[about.approach, about.collective].map((block, i) => (
            <Reveal key={block.title} delay={i * 0.1}>
              <Eyebrow tone="light">{i === 0 ? "Our approach to growth" : "A collective mindset"}</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">{block.title}</h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-stone">
                {block.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      {/* Why we are different */}
      <Section tone="ink" aria-labelledby="different-title">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <SectionHeading id="different-title" eyebrow="Why we are different" title="More than marketing." />
            </Reveal>
            <ul className="mt-12 space-y-8">
              {about.different.map((d, i) => (
                <Reveal as="li" key={d.title} delay={i * 0.06} className="border-l border-gold/50 pl-6">
                  <h3 className="font-display text-2xl font-semibold text-cream">{d.title}</h3>
                  <p className="mt-1 leading-relaxed text-smoke">{d.body}</p>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal delay={0.15} className="mx-auto w-full max-w-md">
            <GbcLockup />
          </Reveal>
        </div>
      </Section>

      <ConsultationCta />
    </PageShell>
  );
}
