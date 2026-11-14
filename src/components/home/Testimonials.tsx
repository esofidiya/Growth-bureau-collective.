import { Reveal } from "@/components/motion/Reveal";
import { Section, SectionHeading } from "@/components/ui/Layout";
import { testimonials } from "@/content/showcase";

/** Renders nothing until real, permissioned testimonials are added. */
export function Testimonials() {
  if (testimonials.length === 0) return null;
  return (
    <Section tone="cream" aria-labelledby="testimonials-title">
      <Reveal>
        <SectionHeading id="testimonials-title" tone="light" eyebrow="Client testimonials" title="In their words." align="center" />
      </Reveal>
      <ul className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal as="li" key={t.name + i} delay={(i % 3) * 0.08}>
            <figure className="flex h-full flex-col rounded-md border border-line-light bg-white p-8">
              <span aria-hidden className="font-display text-6xl leading-none text-gold-deep">
                “
              </span>
              <blockquote className="mt-2 flex-1 font-display text-xl leading-relaxed text-ink">{t.quote}</blockquote>
              <figcaption className="mt-6 border-t border-line-light pt-4 text-sm">
                <span className="font-semibold text-charcoal">{t.name}</span>
                {(t.role || t.company) && (
                  <span className="block text-stone">{[t.role, t.company].filter(Boolean).join(", ")}</span>
                )}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
