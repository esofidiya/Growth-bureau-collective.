import { Reveal } from "@/components/motion/Reveal";
import { Container, Eyebrow } from "@/components/ui/Layout";
import { philosophy } from "@/content/home";

export function Philosophy() {
  return (
    <section aria-labelledby="philosophy-title" className="relative bg-cream py-24 text-charcoal sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <Eyebrow tone="light">{philosophy.eyebrow}</Eyebrow>
            <h2
              id="philosophy-title"
              className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance text-ink sm:text-5xl lg:text-6xl"
            >
              {philosophy.title}
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="space-y-6 text-lg leading-relaxed text-stone lg:pt-14">
            {philosophy.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-md border border-line-light bg-line-light md:grid-cols-2">
          {[
            { label: "Our mission", text: philosophy.mission },
            { label: "Our vision", text: philosophy.vision },
          ].map((item, i) => (
            <Reveal key={item.label} delay={i * 0.1} className="bg-cream p-8 sm:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">{item.label}</p>
              <p className="mt-5 font-display text-2xl leading-snug text-ink sm:text-3xl">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
