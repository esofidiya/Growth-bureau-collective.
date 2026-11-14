/**
 * Portfolio and testimonials.
 *
 * Both lists are deliberately EMPTY. The brief forbids invented clients,
 * results or testimonials. Add real entries here (or, from Phase 9, in the
 * admin dashboard) and the homepage sections will display them.
 *
 * - With no portfolio items, the portfolio section shows an invitation to
 *   view selected work during a consultation.
 * - With no testimonials, the testimonials section is not rendered at all.
 */

export type PortfolioItem = {
  slug: string;
  client: string;
  title: string;
  services: string[];
  image?: { src: string; alt: string };
  summary: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role?: string;
  company?: string;
  /** Confirm written permission to publish before adding. */
  permissionConfirmed: true;
};

export const portfolio: PortfolioItem[] = [];

export const testimonials: Testimonial[] = [];
