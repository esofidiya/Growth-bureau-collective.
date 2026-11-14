import { Check } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Section, SectionHeading } from "@/components/ui/Layout";
import { whyGbc } from "@/content/home";

export function WhyGbc() {
  return (
    <Section tone="cream" aria-labelledby="why-title">
      <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading id="why-title" tone="light" eyebrow={whyGbc.eyebrow} title={whyGbc.title} />
        </Reveal>
        <ul className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {whyGbc.reasons.map((r, i) => (
            <Reveal as="li" key={r.title} delay={(i % 2) * 0.08} className="border-t border-line-light pt-6">
              <span className="inline-flex size-8 items-center justify-center rounded-full bg-ink text-gold">
                <Check className="size-4" aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold text-ink">{r.title}</h3>
              <p className="mt-2 leading-relaxed text-stone">{r.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
