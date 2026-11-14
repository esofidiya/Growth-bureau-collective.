/**
 * Site-wide content. Edit here rather than in components.
 * Routes listed here are built in Phase 2; until then they return 404.
 */
export const site = {
  name: "Growth Bureau Collective",
  tagline: "Where ambition becomes identity.",
  pillars: "Growth with purpose. Influence with intention.",
  nav: [
    { label: "Growth Hub", href: "/growth-hub" },
    { label: "Academy", href: "/academy" },
    { label: "Resources", href: "/resources" },
    { label: "Community", href: "/community" },
    { label: "Membership", href: "/membership" },
  ],
  cta: { label: "Book a consultation", href: "/book" },
  signIn: { label: "Sign in", href: "/sign-in" },
  footer: {
    groups: [
      {
        title: "Explore",
        links: [
          { label: "Growth Hub", href: "/growth-hub" },
          { label: "Academy", href: "/academy" },
          { label: "Resource Library", href: "/resources" },
          { label: "Community", href: "/community" },
        ],
      },
      {
        title: "Collective",
        links: [
          { label: "About", href: "/about" },
          { label: "Membership", href: "/membership" },
          { label: "Book a consultation", href: "/book" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        title: "Legal",
        // PLACEHOLDER: legal pages need real, reviewed copy before launch.
        links: [
          { label: "Privacy", href: "/privacy" },
          { label: "Terms", href: "/terms" },
        ],
      },
    ],
  },
} as const;

export const hero = {
  // Headline and eyebrow come from the brand lockup artwork.
  eyebrow: "Growth with purpose · Influence with intention",
  titleLead: "Where ambition",
  titleAccent: "becomes identity.",
  // PLACEHOLDER COPY: replace with the approved intro from the brief.
  intro:
    "Strategy, learning and a private community for founders building with intent — gathered in one place.",
  primary: { label: "Book a consultation", href: "/book" },
  secondary: { label: "Explore membership", href: "/membership" },
} as const;
