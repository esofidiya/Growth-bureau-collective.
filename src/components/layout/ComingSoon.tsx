import { GbcEmblem } from "@/components/brand/GbcEmblem";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Eyebrow } from "@/components/ui/Layout";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

export function ComingSoon({ eyebrow = "Coming soon", title, note }: { eyebrow?: string; title: string; note: string }) {
  return (
    <>
      <Nav />
      <main id="main" className="relative flex flex-1 items-center overflow-hidden bg-ink pb-24 pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[60vmax] w-[60vmax] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[radial-gradient(circle,rgb(212_163_122/0.16)_0%,transparent_60%)]"
        />
        <Container className="relative flex flex-col items-center text-center">
          <GbcEmblem size={72} decorative />
          <Eyebrow className="mt-8">{eyebrow}</Eyebrow>
          <h1 className="mt-5 font-display text-5xl font-semibold tracking-tight text-cream sm:text-6xl">{title}</h1>
          <p className="mt-5 max-w-md text-lg text-smoke">{note}</p>
          <ButtonLink href="/" variant="outline" className="mt-10">
            Back to home
          </ButtonLink>
        </Container>
      </main>
      <Footer />
    </>
  );
}
