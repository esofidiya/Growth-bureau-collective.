import Image from "next/image";
import monogram from "../../../public/brand/gbc-monogram.webp";
import serifMark from "../../../public/brand/gbc-serif-mark.webp";
import lockup from "../../../public/brand/gbc-lockup.webp";
import { cn } from "@/lib/cn";

/**
 * Brand marks. All three are transparent-background versions of the supplied
 * artwork (originals in /brand-source), so they sit on any dark surface.
 *
 * - GbcEmblem:   the geometric GBC monogram (primary logo)
 * - GbcSerifMark: the serif GBC with growth bars, used as a background watermark
 * - GbcLockup:   the full lockup with name and taglines
 */
export function GbcEmblem({
  size = 48,
  className,
  title = "Growth Bureau Collective",
  decorative = false,
  priority = false,
}: {
  size?: number;
  className?: string;
  title?: string;
  decorative?: boolean;
  priority?: boolean;
}) {
  const height = Math.round((size * monogram.height) / monogram.width);
  return (
    <Image
      src={monogram}
      alt={decorative ? "" : title}
      width={size}
      height={height}
      priority={priority}
      sizes={`${size}px`}
      className={cn("shrink-0 select-none", className)}
      draggable={false}
    />
  );
}

export function GbcSerifMark({ className, sizes = "100vw" }: { className?: string; sizes?: string }) {
  return (
    <Image src={serifMark} alt="" sizes={sizes} className={cn("select-none", className)} draggable={false} />
  );
}

export function GbcLockup({ className, sizes = "(min-width: 768px) 560px, 90vw", priority = false }: { className?: string; sizes?: string; priority?: boolean }) {
  return (
    <Image
      src={lockup}
      alt="Growth Bureau Collective — Where ambition becomes identity. Growth with purpose, influence with intention."
      sizes={sizes}
      priority={priority}
      className={cn("h-auto w-full select-none", className)}
      draggable={false}
    />
  );
}

export function GbcWordmark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <GbcEmblem size={36} decorative priority />
      <span className="flex flex-col whitespace-nowrap leading-none">
        <span className="font-display text-lg font-semibold tracking-[0.08em] text-cream uppercase">Growth Bureau</span>
        <span className="mt-1 text-[0.62rem] font-medium uppercase tracking-[0.42em] text-gold">Collective</span>
      </span>
    </span>
  );
}
