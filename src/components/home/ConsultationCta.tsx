import { ArrowRight } from "lucide-react";
import { GbcSerifMark } from "@/components/brand/GbcEmblem";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Eyebrow } from "@/components/ui/Layout";
import { consultationCta } from "@/content/home";

export function ConsultationCta() {
  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden bg-ink py-28 sm:py-36">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[45rem] w-[45rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(212_163_122/0.18)_0%,transparent_60%)]" />
        <GbcSerifMark
          sizes="1200px"
          className="absolute left-1/2 top-1/2 h-auto w-[1200px] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-[0.05]"
        />
        <div className="hairline-gold absolute inset-x-0 top-0 h-px opacity-40" />
      </div>
      <Container className="relative">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Eyebrow>{consultationCta.eyebrow}</Eyebrow>
          <h2 id="cta-title" className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance text-cream sm:text-6xl">
            {consultationCta.title}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-smoke">{consultationCta.body}</p>
          <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <ButtonLink href={consultationCta.primary.href} size="lg">
              {consultationCta.primary.label}
              <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
            <ButtonLink href={consultationCta.secondary.href} variant="outline" size="lg">
              {consultationCta.secondary.label}
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
