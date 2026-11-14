import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GbcSerifMark } from "@/components/brand/GbcEmblem";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Layout";
import { portfolio } from "@/content/showcase";

export function PortfolioShowcase() {
  return (
    <Section tone="charcoal" aria-labelledby="portfolio-title">
      <Reveal>
        <SectionHeading
          id="portfolio-title"
          eyebrow="Portfolio"
          title="Selected work."
          intro="Brands shaped with intention, from identity to everyday content."
        />
      </Reveal>

      {portfolio.length > 0 ? (
        <>
          <ul className="mt-16 grid gap-6 md:grid-cols-2">
            {portfolio.slice(0, 4).map((item, i) => (
              <Reveal as="li" key={item.slug} delay={(i % 2) * 0.1}>
                <Link href={`/portfolio/${item.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-line-dark bg-ink">
                    {item.image && (
                      <Image
                        src={item.image.src}
                        alt={item.image.alt}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-luxe group-hover:scale-[1.03]"
                      />
                    )}
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-gold">{item.client}</p>
                      <h3 className="mt-2 font-display text-2xl font-semibold text-cream">{item.title}</h3>
                      <p className="mt-1 text-sm text-smoke">{item.services.join(" · ")}</p>
                    </div>
                    <ArrowUpRight className="mt-1 size-5 text-smoke transition-colors group-hover:text-gold" aria-hidden />
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
          <div className="mt-12">
            <ButtonLink href="/portfolio" variant="outline">
              View the full portfolio
            </ButtonLink>
          </div>
        </>
      ) : (
        <Reveal delay={0.1}>
          <div className="relative mt-16 overflow-hidden rounded-md border border-line-dark bg-ink px-6 py-16 text-center sm:px-12 sm:py-20">
            <GbcSerifMark
              sizes="900px"
              className="pointer-events-none absolute left-1/2 top-1/2 h-auto w-[900px] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-[0.05]"
            />
            <p className="relative text-xs font-semibold uppercase tracking-[0.3em] text-gold">Case studies in preparation</p>
            <p className="relative mx-auto mt-5 max-w-2xl font-display text-3xl leading-snug text-cream sm:text-4xl">
              Our published portfolio is being curated. Selected work is available to view during a consultation.
            </p>
            <div className="relative mt-10 flex justify-center">
              <ButtonLink href="/book">Request a portfolio walkthrough</ButtonLink>
            </div>
          </div>
        </Reveal>
      )}
    </Section>
  );
}
