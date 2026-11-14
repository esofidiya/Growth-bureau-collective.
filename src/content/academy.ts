/** Learning Academy course categories, from the master brief (section 9). Courses arrive in Phase 5. */
export const academyCategories = [
  { slug: "brand-blueprint", title: "The Brand Blueprint", topics: ["Brand identity", "Brand positioning", "Brand strategy", "Brand guidelines"], icon: "gem" },
  { slug: "social-media-mastery", title: "Social Media Mastery", topics: ["Social media platforms", "Audience development", "Engagement", "Content strategy"], icon: "share" },
  { slug: "content-creation-studio", title: "Content Creation Studio", topics: ["Reels", "Short-form video", "Storytelling", "Content planning"], icon: "clapperboard" },
  { slug: "ai-digital-innovation", title: "AI & Digital Innovation", topics: ["AI tools", "AI content creation", "Productivity", "Marketing automation"], icon: "sparkles" },
  { slug: "business-growth", title: "Business Growth", topics: ["Customer acquisition", "Brand authority", "Marketing campaigns", "Business development"], icon: "trending" },
] as const;

export const academyFeatures = [
  "Video and written lessons",
  "Downloadable worksheets",
  "Progress tracking and bookmarks",
  "Resume where you left off",
  "Certificates of completion",
  "Search and filters",
];
