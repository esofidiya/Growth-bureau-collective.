import Link from "next/link";
import { Mail } from "lucide-react";
import { GbcWordmark } from "@/components/brand/GbcEmblem";
import { InstagramIcon } from "@/components/brand/InstagramIcon";
import { Container } from "@/components/ui/Layout";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-line-dark bg-ink text-cream">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div className="max-w-xs">
          <GbcWordmark />
          <p className="mt-5 font-display text-xl italic text-cream">{site.tagline}</p>
          <p className="mt-2 text-sm leading-relaxed text-smoke">{site.pillars}</p>
          <ul className="mt-6 space-y-3 text-sm">
            <li>
              <a href={`mailto:${site.contact.email}`} className="inline-flex items-center gap-2 break-all text-cream/80 hover:text-gold">
                <Mail className="size-4 shrink-0 text-gold" aria-hidden />
                {site.contact.email}
              </a>
            </li>
            <li>
              <a href={site.contact.instagram.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cream/80 hover:text-gold">
                <InstagramIcon className="size-4 shrink-0 text-gold" />
                {site.contact.instagram.handle}
                <span className="sr-only">on Instagram (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </div>
        {site.footer.groups.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">{group.title}</h2>
            <ul className="mt-5 space-y-3">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-cream/75 transition-colors hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </Container>
      <div className="hairline-gold h-px opacity-40" aria-hidden />
      <Container className="flex flex-col gap-2 py-6 text-xs text-smoke sm:flex-row sm:items-center sm:justify-between">
        <p>
          © <CopyrightYear /> {site.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

async function CopyrightYear() {
  "use cache";
  return new Date().getFullYear();
}
