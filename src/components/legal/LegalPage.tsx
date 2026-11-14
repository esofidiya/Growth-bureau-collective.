import { PageHero } from "@/components/layout/PageHero";
import { PageShell } from "@/components/layout/PageShell";
import { Container } from "@/components/ui/Layout";
import { site } from "@/content/site";

export type LegalSection = { heading: string; body?: string[]; placeholder?: string };

/**
 * Structured legal page. Sections with a `placeholder` need professionally
 * reviewed wording before launch. Nothing here is legal advice.
 */
export function LegalPage({ eyebrow, title, intro, sections }: { eyebrow: string; title: string; intro: string; sections: LegalSection[] }) {
  return (
    <PageShell>
      <PageHero eyebrow={eyebrow} title={title} intro={intro} />
      <section className="bg-cream py-20 text-charcoal sm:py-24">
        <Container className="max-w-3xl">
          <div role="note" className="mb-12 rounded-md border border-gold-deep/40 bg-white p-5 text-sm text-stone">
            <strong className="text-ink">Draft.</strong> This page is being finalised. Sections marked “to be confirmed” will be completed before launch. Questions:{" "}
            <a href={`mailto:${site.contact.email}`} className="text-gold-deep underline underline-offset-2">
              {site.contact.email}
            </a>
            .
          </div>
          <ol className="space-y-12">
            {sections.map((s, i) => (
              <li key={s.heading}>
                <h2 className="font-display text-3xl font-semibold text-ink">
                  {i + 1}. {s.heading}
                </h2>
                <div className="mt-4 space-y-4 text-lg leading-relaxed text-stone">
                  {s.body?.map((p) => <p key={p}>{p}</p>)}
                  {s.placeholder && (
                    <p className="rounded-sm border border-dashed border-line-light bg-white/60 p-4 text-base italic">To be confirmed: {s.placeholder}</p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </PageShell>
  );
}
