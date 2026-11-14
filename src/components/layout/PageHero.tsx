import type { ReactNode } from "react";
import { GbcSerifMark } from "@/components/brand/GbcEmblem";
import { Reveal } from "@/components/motion/Reveal";
import { Container, Eyebrow } from "@/components/ui/Layout";

/** Header band for interior pages. */
export function PageHero({ eyebrow, title, intro, children }: { eyebrow: string; title: ReactNode; intro?: ReactNode; children?: ReactNode }) {
  return (
    <section className="relative isolate overflow-hidden bg-ink pb-20 pt-40 sm:pb-24 sm:pt-48">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-30%] h-[60vmax] w-[60vmax] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgb(212_163_122/0.16)_0%,transparent_60%)]" />
        <GbcSerifMark
          sizes="1100px"
          className="absolute -right-40 top-1/2 h-auto w-[1100px] max-w-none -translate-y-1/2 opacity-[0.04]"
        />
        <div className="hairline-gold absolute inset-x-0 bottom-0 h-px opacity-30" />
      </div>
      <Container>
        <Reveal className="max-w-4xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-balance text-cream sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {intro && <p className="mt-7 max-w-2xl text-lg leading-relaxed text-pretty text-smoke sm:text-xl">{intro}</p>}
          {children && <div className="mt-10">{children}</div>}
        </Reveal>
      </Container>
    </section>
  );
}
