/**
 * Site-wide content. Edit here rather than in components.
 * In Phase 9 this moves to the database so admins can edit it.
 */
export const site = {
  name: "Growth Bureau Collective",
  shortName: "GBC",
  tagline: "Where ambition becomes identity.",
  pillars: "Growth with purpose. Influence with intention.",
  description:
    "Growth Bureau Collective is a premium social media marketing, brand development and digital growth agency for ambitious entrepreneurs, startups and established brands.",
  nav: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Packages", href: "/packages" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Academy", href: "/academy" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
  growthHub: { label: "Growth Hub", href: "/growth-hub" },
  cta: { label: "Book a consultation", href: "/book" },
  signIn: { label: "Log in", href: "/login" },
  footer: {
    groups: [
      {
        title: "Agency",
        links: [
          { label: "About GBC", href: "/about" },
          { label: "Services", href: "/services" },
          { label: "Packages & pricing", href: "/packages" },
          { label: "Portfolio", href: "/portfolio" },
          { label: "Insights", href: "/insights" },
        ],
      },
      {
        title: "Growth Hub",
        links: [
          { label: "The Growth Hub", href: "/growth-hub" },
          { label: "Learning Academy", href: "/academy" },
          { label: "Log in", href: "/login" },
          { label: "Create an account", href: "/register" },
        ],
      },
      {
        title: "Connect",
        links: [
          { label: "Book a consultation", href: "/book" },
          { label: "Contact", href: "/contact" },
          { label: "Privacy policy", href: "/privacy" },
          { label: "Terms & conditions", href: "/terms" },
        ],
      },
    ],
  },
} as const;

export const hero = {
  eyebrow: "Growth with purpose · Influence with intention",
  titleLead: "Where ambition",
  titleAccent: "becomes identity.",
  intro:
    "We transform ambitious businesses into influential brands through strategic creativity, digital innovation and purposeful growth.",
  primary: { label: "Discover Your Growth Potential", href: "/book" },
  secondary: { label: "Explore Our Services", href: "/services" },
} as const;
