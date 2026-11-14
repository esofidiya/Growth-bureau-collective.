import { Suspense } from "react";
import { CalendarCheck, MessageSquare, Sparkles } from "lucide-react";
import { BookingForm } from "@/components/forms/BookingForm";
import { PageHero } from "@/components/layout/PageHero";
import { PageShell } from "@/components/layout/PageShell";
import { Container } from "@/components/ui/Layout";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Book a Consultation",
  description: "Book a consultation with Growth Bureau Collective to discuss your brand, social media and growth goals.",
  path: "/book",
});

const steps = [
  { icon: MessageSquare, title: "Tell us about you", body: "Share your business, goals and the services you are interested in." },
  { icon: CalendarCheck, title: "We confirm a time", body: "We will contact you to confirm a consultation date that suits you." },
  { icon: Sparkles, title: "Discover your potential", body: "We explore where your brand stands and where it could go." },
];

export default function BookPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Consultation" title="Discover your growth potential." intro="Book a consultation to discuss your brand, your audience and your ambitions." />
      <section className="bg-ink pb-24 text-cream sm:pb-32">
        <Container className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <aside aria-label="What happens next">
            <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">What happens next</h2>
            <ol className="mt-6 space-y-6">
              {steps.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-gold/50 text-gold">
                    <s.icon className="size-4" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold">
                      {i + 1}. {s.title}
                    </h3>
                    <p className="mt-1 text-sm text-smoke">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </aside>
          <div className="rounded-md border border-line-dark bg-charcoal/40 p-6 sm:p-10">
            <Suspense fallback={<p className="text-smoke">Loading form…</p>}>
              <BookingForm />
            </Suspense>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
