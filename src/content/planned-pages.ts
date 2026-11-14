/**
 * Pages linked from the nav and footer that are built in later phases.
 * Each one renders a branded "coming soon" page until its real route exists.
 * When you build a real page (e.g. src/app/academy/page.tsx), delete its entry here.
 */
export const plannedPages: Record<string, { title: string; phase: string }> = {
  "growth-hub": { title: "Growth Hub", phase: "Phase 4" },
  academy: { title: "Learning Academy", phase: "Phase 5" },
  resources: { title: "Resource Library", phase: "Phase 5" },
  community: { title: "Community", phase: "Phase 7" },
  membership: { title: "Membership", phase: "Phase 8" },
  "sign-in": { title: "Sign in", phase: "Phase 3" },
  book: { title: "Book a consultation", phase: "Phase 9" },
  about: { title: "About", phase: "Phase 2" },
  contact: { title: "Contact", phase: "Phase 2" },
  privacy: { title: "Privacy", phase: "Phase 2" },
  terms: { title: "Terms", phase: "Phase 2" },
};
