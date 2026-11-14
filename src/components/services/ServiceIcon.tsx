import { Clapperboard, Compass, Gem, Megaphone, Share2 } from "lucide-react";
import type { Service } from "@/content/services";

const icons = { share: Share2, clapperboard: Clapperboard, gem: Gem, megaphone: Megaphone, compass: Compass } as const;

export function ServiceIcon({ icon, className }: { icon: Service["icon"]; className?: string }) {
  const Icon = icons[icon];
  return <Icon className={className} aria-hidden />;
}
