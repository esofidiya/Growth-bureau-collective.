import Link from "next/link";
import { GbcWordmark } from "@/components/brand/GbcEmblem";
import { Container } from "@/components/ui/Layout";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-line-dark bg-ink text-cream">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div className="max-w-xs">
          <GbcWordmark />
          <p className="mt-5 text-sm leading-relaxed text-smoke">
            {/* PLACEHOLDER: short brand statement from the brief */}
            Strategy, learning and community for ambitious founders.
          </p>
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
