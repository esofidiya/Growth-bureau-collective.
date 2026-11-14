import { Reveal } from "@/components/motion/Reveal";
import { Section, SectionHeading } from "@/components/ui/Layout";
import { process } from "@/content/home";

export function Process() {
  return (
    <Section tone="ink" aria-labelledby="process-title">
      <Reveal>
        <SectionHeading id="process-title" eyebrow={process.eyebrow} title={process.title} align="center" />
      </Reveal>
      <ol className="relative mt-20 grid gap-12 lg:grid-cols-5 lg:gap-6">
        {/* connecting line */}
        <div aria-hidden className="hairline-gold absolute left-0 right-0 top-6 hidden h-px opacity-50 lg:block" />
        {process.steps.map((step, i) => (
          <Reveal as="li" key={step.title} delay={i * 0.1} className="relative flex gap-6 lg:flex-col lg:gap-0 lg:text-center">
            <span className="relative z-10 inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-gold bg-ink font-display text-lg text-gold lg:mx-auto">
              {i + 1}
            </span>
            <div>
              <h3 className="font-display text-2xl font-semibold text-cream lg:mt-8">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-smoke">{step.body}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
