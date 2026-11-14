/**
 * Homepage copy. Facts (mottos, mission, vision, services, membership tiers)
 * come from the master brief. Descriptive copy is written in the brand voice and
 * makes no claims about clients, results, awards or company history.
 */

export const philosophy = {
  eyebrow: "The GBC philosophy",
  title: "We are not a social media company. We are a strategic growth partner.",
  body: [
    "Growth Bureau Collective helps ambitious entrepreneurs, startups, small businesses and established brands develop powerful identities, strengthen their digital presence and build sustainable growth.",
    "We believe a brand is more than what it posts. It is what people recognise, remember and trust. Our work is to make that identity deliberate.",
  ],
  mission:
    "To help ambitious businesses build powerful brands, establish digital influence and unlock opportunities through strategic marketing and creativity.",
  vision: "To become a recognised creative and digital growth collective helping businesses build lasting influence.",
};

export const approach = {
  eyebrow: "Our approach",
  title: "Creativity with a strategy behind it.",
  intro:
    "Every engagement brings together the disciplines that most businesses are forced to buy separately, so they work towards the same goal.",
  pillars: [
    {
      title: "Creative direction",
      body: "A clear visual and verbal identity, applied with care across every touchpoint.",
    },
    {
      title: "Strategic marketing",
      body: "Positioning, audiences and campaigns planned around the outcomes your business needs.",
    },
    {
      title: "Content & community",
      body: "Content created to be seen, and communities managed so it is remembered.",
    },
    {
      title: "Digital innovation",
      body: "Modern tools, AI-assisted workflows and data used to move faster without losing quality.",
    },
  ],
};

export const whyGbc = {
  eyebrow: "Why choose GBC",
  title: "A partner invested in where you are going.",
  reasons: [
    {
      title: "Strategy first",
      body: "We start with your positioning and goals, not a posting schedule. Every deliverable has a reason to exist.",
    },
    {
      title: "Identity-led creative",
      body: "Content that looks and sounds unmistakably like you, built on a consistent brand system.",
    },
    {
      title: "Everything under one roof",
      body: "Brand, content, social and marketing work from one plan, with one team accountable for it.",
    },
    {
      title: "Transparent collaboration",
      body: "A private client workspace for drafts, approvals, files and reports, so you always know where things stand.",
    },
    {
      title: "Growth beyond the brief",
      body: "The Growth Hub gives members tools, learning and AI support to keep building between sessions.",
    },
    {
      title: "Built to scale with you",
      body: "Packages that grow from establishing your presence to comprehensive strategic and creative support.",
    },
  ],
};

export const process = {
  eyebrow: "Our strategic process",
  title: "From ambition to identity, in five deliberate steps.",
  steps: [
    { title: "Discover", body: "A consultation to understand your business, audience, ambitions and where you stand today." },
    { title: "Define", body: "Research and positioning: what makes you distinct, who you serve and what you need to say." },
    { title: "Design", body: "A brand system and content strategy shaped around your goals, ready to apply everywhere." },
    { title: "Deliver", body: "Content, campaigns and channel management, shared for approval in your client workspace." },
    { title: "Develop", body: "Reporting, review and refinement, so the strategy keeps improving as you grow." },
  ],
};

export const growthHub = {
  eyebrow: "The GBC Growth Hub",
  title: "Your private platform for building a business with intent.",
  intro:
    "The Growth Hub brings together business planning tools, a learning academy, a resource library, an AI growth assistant and a private community of ambitious founders.",
  features: [
    { title: "Growth dashboard", body: "Goals, tasks, deadlines and progress in one personal overview.", icon: "layout" },
    { title: "Growth planner", body: "Set goals, milestones and weekly action plans, and review what you achieve.", icon: "target" },
    { title: "Learning Academy", body: "Courses on brand, social media, content, AI and business growth.", icon: "graduation" },
    { title: "Resource library", body: "Templates, worksheets, planners and guides, ready to download.", icon: "library" },
    { title: "AI Growth Assistant", body: "A strategist, brand consultant and content partner, available any time.", icon: "sparkles" },
    { title: "Community", body: "Connect, ask questions and collaborate with other members.", icon: "users" },
  ],
  tiers: ["Essential", "Plus", "Elite"],
  cta: { label: "Explore the Growth Hub", href: "/growth-hub" },
  secondary: { label: "View memberships", href: "/growth-hub#membership" },
} as const;

export const consultationCta = {
  eyebrow: "Begin the conversation",
  title: "Ready to become the brand you are building?",
  body: "Book a consultation and we will look at where your brand stands today, where you want it to go and how we can help you get there.",
  primary: { label: "Book a consultation", href: "/book" },
  secondary: { label: "View packages", href: "/packages" },
};
