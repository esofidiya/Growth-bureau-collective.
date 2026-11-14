/**
 * Insights articles. Empty until real articles are written.
 * From Phase 9, admins publish articles from the dashboard.
 */
export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string; // ISO date
  readingMinutes: number;
  body: string[]; // paragraphs
};

export const articles: Article[] = [];

export const insightCategories = ["Social media", "Brand strategy", "Content creation", "Digital marketing", "Business growth", "AI & innovation"];
