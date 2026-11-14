import { Mail } from "lucide-react";
import { InstagramIcon } from "@/components/brand/InstagramIcon";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/layout/PageHero";
import { PageShell } from "@/components/layout/PageShell";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Layout";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description: "Contact Growth Bureau Collective about social media management, content creation, brand strategy and digital growth.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Contact" title="Let’s talk about your ambition." intro="Tell us about your business and what you want your brand to become. We will reply as soon as we can." />
      <section className="bg-ink pb-24 text-cream sm:pb-32">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <aside aria-label="Contact details" className="space-y-8 lg:pt-4">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Email</h2>
              <a href={`mailto:${site.contact.email}`} className="mt-3 flex items-center gap-3 break-all font-display text-2xl text-cream hover:text-gold">
                <Mail className="size-5 shrink-0 text-gold" aria-hidden />
                {site.contact.email}
              </a>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Instagram</h2>
              <a href={site.contact.instagram.url} target="_blank" rel="noopener noreferrer" className="mt-3 flex items-center gap-3 break-all font-display text-2xl text-cream hover:text-gold">
                <InstagramIcon className="size-5 shrink-0 text-gold" />
                {site.contact.instagram.handle}
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
            <div className="rounded-md border border-line-dark bg-charcoal/50 p-6">
              <h2 className="font-display text-2xl font-semibold">Ready to start?</h2>
              <p className="mt-2 text-sm text-smoke">Book a consultation and tell us about your goals in more detail.</p>
              <ButtonLink href="/book" className="mt-5">
                Book a consultation
              </ButtonLink>
            </div>
          </aside>
          <div className="rounded-md border border-line-dark bg-charcoal/40 p-6 sm:p-10">
            <h2 className="mb-6 font-display text-3xl font-semibold">Send a message</h2>
            <ContactForm />
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
