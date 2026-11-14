"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GbcEmblem, GbcSerifMark } from "@/components/brand/GbcEmblem";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Eyebrow } from "@/components/ui/Layout";
import { hero } from "@/content/site";
import { GoldParticles } from "./GoldParticles";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1.1, ease, delay },
        };

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink pb-20 pt-32"
    >
      {/* gold lighting */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-20%] h-[70vmax] w-[70vmax] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgb(212_163_122/0.22)_0%,rgb(212_163_122/0.06)_35%,transparent_65%)]" />
        <div className="absolute bottom-[-30%] right-[-10%] h-[50vmax] w-[50vmax] rounded-full bg-[radial-gradient(circle,rgb(212_163_122/0.10)_0%,transparent_60%)]" />
        {/* background logo watermark */}
        <GbcSerifMark
          sizes="(min-width: 1024px) 1100px, 140vw"
          className="absolute left-1/2 top-1/2 h-auto w-[140vw] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-[0.06] lg:w-[1100px]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,#0B0B0B_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px hairline-gold opacity-30" />
      </div>
      <GoldParticles className="pointer-events-none absolute inset-0 -z-10 h-full w-full" />

      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div {...rise(0.1)}>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
          </motion.div>
          <motion.h1
            id="hero-title"
            {...rise(0.25)}
            className="mt-7 font-display text-[clamp(3rem,7.5vw,6.5rem)] font-semibold leading-[0.92] tracking-tight text-cream"
          >
            {hero.titleLead}
            <br />
            <em className="text-gold-gradient font-medium">{hero.titleAccent}</em>
          </motion.h1>
          <motion.p {...rise(0.45)} className="mt-8 max-w-xl text-lg leading-relaxed text-smoke sm:text-xl">
            {hero.intro}
          </motion.p>
          <motion.div {...rise(0.6)} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={hero.primary.href} size="lg">
              {hero.primary.label}
              <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
            <ButtonLink href={hero.secondary.href} variant="outline" size="lg">
              {hero.secondary.label}
            </ButtonLink>
          </motion.div>
        </div>

        <motion.div
          aria-hidden
          className="relative mx-auto hidden aspect-square w-full max-w-md sm:block"
          {...(reduce
            ? {}
            : {
                initial: { opacity: 0, scale: 0.92 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 1.6, ease, delay: 0.3 },
              })}
        >
          <div className="absolute inset-[12%] rounded-full bg-[radial-gradient(circle,rgb(212_163_122/0.35)_0%,transparent_65%)] blur-2xl" />
          <motion.div
            className="relative h-full w-full"
            animate={reduce ? undefined : { rotate: [0, 2, 0, -2, 0] }}
            transition={reduce ? undefined : { duration: 14, repeat: Infinity, ease: "easeInOut" }}
          >
            <GbcEmblem size={480} decorative priority className="h-full w-full object-contain drop-shadow-[0_0_40px_rgb(212_163_122/0.3)]" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
