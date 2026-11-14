import { useId } from "react";
import { cn } from "@/lib/cn";

/**
 * TEMPORARY EMBLEM — a geometric diamond with interlocking G, B, C initials.
 * Swap this single component for the real logo when it is supplied.
 */
export function GbcEmblem({
  size = 48,
  className,
  title = "Growth Bureau Collective",
  decorative = false,
}: {
  size?: number;
  className?: string;
  title?: string;
  decorative?: boolean;
}) {
  const id = useId().replace(/:/g, "");
  const grad = `gbc-gold-${id}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={cn("shrink-0", className)}
      role={decorative ? undefined : "img"}
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : title}
    >
      <defs>
        <linearGradient id={grad} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E8C9A8" />
          <stop offset="50%" stopColor="#D4A37A" />
          <stop offset="100%" stopColor="#9C6B40" />
        </linearGradient>
      </defs>
      {/* outer + inner diamond */}
      <path d="M50 3 L97 50 L50 97 L3 50 Z" fill="none" stroke={`url(#${grad})`} strokeWidth="2.2" />
      <path d="M50 13 L87 50 L50 87 L13 50 Z" fill="none" stroke={`url(#${grad})`} strokeWidth="0.8" opacity="0.6" />
      {/* interlocking monogram */}
      <g fill="none" stroke={`url(#${grad})`} strokeWidth="3.2" strokeLinecap="square">
        {/* G */}
        <path d="M40 41 A12 12 0 1 0 40 59 L40 51.5 L33 51.5" />
        {/* B */}
        <path d="M45 38 L45 62 M45 38 L52 38 A5.5 5.5 0 0 1 52 49 L45 49 M52 49 A6.5 6.5 0 0 1 52 62 L45 62" />
        {/* C */}
        <path d="M79 42 A11.5 11.5 0 1 0 79 58" />
      </g>
    </svg>
  );
}

export function GbcWordmark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <GbcEmblem size={34} decorative />
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-semibold tracking-wide text-cream">Growth Bureau</span>
        <span className="mt-0.5 text-[0.62rem] font-medium uppercase tracking-[0.32em] text-gold">Collective</span>
      </span>
    </span>
  );
}
