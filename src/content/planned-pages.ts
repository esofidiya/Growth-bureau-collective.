/**
 * Pages from the brief that are linked from the site but built in later phases.
 * Each renders a branded "coming soon" page until its real route exists.
 * When you build a real page (e.g. src/app/about/page.tsx), delete its entry here.
 */
export const plannedPages: Record<string, { title: string; phase: string }> = {
  about: { title: "About GBC", phase: "Phase 2" },
  services: { title: "Services", phase: "Phase 2" },
  packages: { title: "Packages & pricing", phase: "Phase 2" },
  portfolio: { title: "Portfolio", phase: "Phase 2" },
  "growth-hub": { title: "The GBC Growth Hub", phase: "Phase 2" },
  academy: { title: "Learning Academy", phase: "Phase 2" },
  insights: { title: "Insights", phase: "Phase 2" },
  contact: { title: "Contact", phase: "Phase 2" },
  book: { title: "Book a consultation", phase: "Phase 2" },
  login: { title: "Log in", phase: "Phase 3" },
  register: { title: "Create an account", phase: "Phase 3" },
  privacy: { title: "Privacy policy", phase: "Phase 2" },
  terms: { title: "Terms & conditions", phase: "Phase 2" },
};
