import { Reveal } from "@/components/motion/Reveal";
import { Section, SectionHeading } from "@/components/ui/Layout";
import { approach } from "@/content/home";

export function Approach() {
  return (
    <Section tone="ink" aria-labelledby="approach-title" className="overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-20%] top-0 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle,rgb(212_163_122/0.10)_0%,transparent_65%)]"
      />
      <Reveal>
        <SectionHeading id="approach-title" eyebrow={approach.eyebrow} title={approach.title} intro={approach.intro} />
      </Reveal>
      <ol className="mt-16 grid gap-px overflow-hidden rounded-md border border-line-dark bg-line-dark sm:grid-cols-2 lg:grid-cols-4">
        {approach.pillars.map((p, i) => (
          <Reveal as="li" key={p.title} delay={i * 0.08} className="group relative bg-ink p-8 transition-colors duration-500 hover:bg-charcoal">
            <span className="font-display text-5xl font-medium text-gold/40 transition-colors duration-500 group-hover:text-gold">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-8 font-display text-2xl font-semibold text-cream">{p.title}</h3>
            <p className="mt-3 leading-relaxed text-smoke">{p.body}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
