"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Sparkles, X } from "lucide-react";
import { GbcWordmark } from "@/components/brand/GbcEmblem";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Layout";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-luxe",
        scrolled || open ? "border-b border-line-dark bg-ink/85 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <Container className="flex h-18 items-center justify-between gap-6">
        <Link href="/" aria-label="Growth Bureau Collective home" className="rounded-sm">
          <GbcWordmark />
        </Link>

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-7">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm tracking-wide text-cream/80 transition-colors duration-200 hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 sm:flex">
            <ButtonLink href={site.signIn.href} variant="ghost" size="sm">
              {site.signIn.label}
            </ButtonLink>
            <ButtonLink href={site.growthHub.href} size="sm">
              <Sparkles className="size-4" aria-hidden />
              {site.growthHub.label}
            </ButtonLink>
          </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-sm text-cream xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" aria-hidden /> : <Menu className="size-6" aria-hidden />}
        </button>
        </div>
      </Container>

      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-line-dark bg-ink xl:hidden"
      >
        <Container className="flex flex-col gap-2 py-8">
          <nav aria-label="Mobile">
            <ul className="flex flex-col">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-line-dark py-4 font-display text-2xl text-cream transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <ButtonLink href={site.growthHub.href} size="lg" onClick={() => setOpen(false)}>
              <Sparkles className="size-4" aria-hidden />
              {site.growthHub.label}
            </ButtonLink>
            <ButtonLink href={site.cta.href} variant="outline" size="lg" onClick={() => setOpen(false)}>
              {site.cta.label}
            </ButtonLink>
            <ButtonLink href={site.signIn.href} variant="outline" size="lg" onClick={() => setOpen(false)}>
              {site.signIn.label}
            </ButtonLink>
          </div>
        </Container>
      </div>
    </header>
  );
}
