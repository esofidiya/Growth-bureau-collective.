/**
 * GBC services, from the master brief (section 7).
 * Used by the homepage now and by the Services pages in Phase 2.
 */
export type Service = {
  slug: string;
  title: string;
  summary: string;
  includes: string[];
  icon: "share" | "clapperboard" | "gem" | "megaphone" | "compass";
};

export const services: Service[] = [
  {
    slug: "social-media-management",
    title: "Social Media Management",
    summary: "Strategic, consistent management of your channels, so your brand shows up with intention every day.",
    includes: ["Social media strategy", "Content calendars", "Account management", "Community engagement", "Performance reporting"],
    icon: "share",
  },
  {
    slug: "content-creation",
    title: "Content Creation",
    summary: "Reels, short-form video and campaign creative that tell your story and hold attention.",
    includes: ["Reels", "Short-form videos", "Social media graphics", "Creative campaigns", "Brand storytelling"],
    icon: "clapperboard",
  },
  {
    slug: "brand-strategy",
    title: "Brand Strategy",
    summary: "Positioning, identity and messaging that make your brand unmistakable and give every decision a reference point.",
    includes: ["Brand positioning", "Brand identity development", "Brand messaging", "Visual direction", "Brand consistency"],
    icon: "gem",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    summary: "Campaigns built to reach the right audience, generate qualified leads and improve with every iteration.",
    includes: ["Marketing campaigns", "Audience targeting", "Lead generation", "Campaign optimisation"],
    icon: "megaphone",
  },
  {
    slug: "growth-consultancy",
    title: "Growth Consultancy",
    summary: "Clear-eyed business development and marketing roadmaps for the next stage of your growth.",
    includes: ["Business development", "Marketing roadmaps", "Competitor research", "Growth planning"],
    icon: "compass",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
