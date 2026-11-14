/**
 * Agency packages and Growth Hub memberships.
 *
 * PRICES were supplied by the owner (14 Nov 2026).
 * DELIVERABLES and CONTENT ALLOWANCES below are a DRAFT written by the developer
 * from the brief's package descriptions. They are marked `confirmed: false`
 * and must be reviewed by the owner before launch. In Phase 9 this data moves
 * to the database so admins can edit it.
 */

export type AgencyPackage = {
  id: "essentials" | "elevate" | "elite";
  name: string;
  price: number; // GBP
  period: "month";
  audience: string;
  summary: string;
  allowance: { label: string; value: string }[];
  deliverables: string[];
  featured?: boolean;
  confirmed: boolean;
};

export const agencyPackages: AgencyPackage[] = [
  {
    id: "essentials",
    name: "GBC Essentials",
    price: 299,
    period: "month",
    audience: "For businesses establishing their online presence.",
    summary: "A consistent, professional presence on the platforms that matter most to your audience.",
    allowance: [
      { label: "Platforms managed", value: "2" },
      { label: "Posts per month", value: "12" },
      { label: "Reels / short videos", value: "2" },
    ],
    deliverables: [
      "Social media strategy",
      "Monthly content calendar",
      "Branded post design",
      "Caption writing and scheduling",
      "Monthly performance report",
    ],
    confirmed: false,
  },
  {
    id: "elevate",
    name: "GBC Elevate",
    price: 599,
    period: "month",
    audience: "For businesses looking to improve visibility and strengthen their brand.",
    summary: "Strategy, content and community management working together to grow your visibility.",
    allowance: [
      { label: "Platforms managed", value: "3" },
      { label: "Posts per month", value: "16" },
      { label: "Reels / short videos", value: "4" },
    ],
    deliverables: [
      "Everything in Essentials",
      "Brand messaging review",
      "Community engagement",
      "Short-form video creation",
      "Monthly strategy call",
      "Detailed performance reporting",
    ],
    featured: true,
    confirmed: false,
  },
  {
    id: "elite",
    name: "GBC Elite",
    price: 999,
    period: "month",
    audience: "For ambitious brands seeking comprehensive strategic and creative support.",
    summary: "Full strategic and creative partnership: brand, content, campaigns and growth planning.",
    allowance: [
      { label: "Platforms managed", value: "4" },
      { label: "Posts per month", value: "20" },
      { label: "Reels / short videos", value: "8" },
    ],
    deliverables: [
      "Everything in Elevate",
      "Brand strategy and positioning",
      "Creative campaign per quarter",
      "Digital marketing campaign management",
      "Growth roadmap and competitor research",
      "Priority support",
    ],
    confirmed: false,
  },
];

/** Comparison table rows: which package includes which service. */
export const packageComparison: { feature: string; essentials: boolean | string; elevate: boolean | string; elite: boolean | string }[] = [
  { feature: "Social media strategy", essentials: true, elevate: true, elite: true },
  { feature: "Content calendar", essentials: true, elevate: true, elite: true },
  { feature: "Account management", essentials: true, elevate: true, elite: true },
  { feature: "Performance reporting", essentials: "Monthly", elevate: "Detailed monthly", elite: "Detailed monthly + review" },
  { feature: "Community engagement", essentials: false, elevate: true, elite: true },
  { feature: "Short-form video", essentials: true, elevate: true, elite: true },
  { feature: "Brand messaging", essentials: false, elevate: true, elite: true },
  { feature: "Brand strategy & positioning", essentials: false, elevate: false, elite: true },
  { feature: "Creative campaigns", essentials: false, elevate: false, elite: "Quarterly" },
  { feature: "Digital marketing campaigns", essentials: false, elevate: false, elite: true },
  { feature: "Growth consultancy", essentials: false, elevate: "Monthly call", elite: "Roadmap + monthly call" },
  { feature: "Client workspace", essentials: true, elevate: true, elite: true },
  { feature: "Growth Hub membership", essentials: "Essential", elevate: "Plus", elite: "Elite" },
];

export type AddOn = { name: string; description: string; price?: number; priceNote?: string };

/** Add-on prices were not supplied, so they show "Price on request". */
export const addOns: AddOn[] = [
  { name: "Additional reels", description: "Extra short-form videos on top of your monthly allowance." },
  { name: "Additional platform", description: "Add another social platform to your management plan." },
  { name: "Brand identity project", description: "A one-off brand identity: positioning, visual direction and guidelines." },
  { name: "Paid advertising management", description: "Setup and optimisation of paid social campaigns (ad spend not included)." },
  { name: "Content shoot day", description: "A dedicated day of photo and video content capture." },
  { name: "Strategy workshop", description: "A focused session on positioning, audience or growth planning." },
];

/* -------------------------------------------------------------------------- */

export type HubTier = {
  id: "essential" | "plus" | "elite";
  name: string;
  price: number; // GBP per month
  summary: string;
  features: string[];
  featured?: boolean;
};

/** Growth Hub membership tiers. Prices supplied by the owner; annual prices still to be set. */
export const hubTiers: HubTier[] = [
  {
    id: "essential",
    name: "Growth Hub Essential",
    price: 9.99,
    summary: "Start building with the fundamentals.",
    features: ["Selected introductory lessons", "Essential resources", "Basic business guidance", "Growth planner", "Community access"],
  },
  {
    id: "plus",
    name: "Growth Hub Plus",
    price: 19.99,
    summary: "The tools and learning to grow with intent.",
    features: ["Everything in Essential", "Expanded academy access", "Business growth tools", "Downloadable templates", "Increased AI assistant access"],
    featured: true,
  },
  {
    id: "elite",
    name: "Growth Hub Elite",
    price: 39.99,
    summary: "The complete Growth Hub experience.",
    features: ["Everything in Plus", "Full premium academy", "Advanced resources", "Expanded AI assistant access", "Exclusive business development content"],
  },
];

export function formatGBP(amount: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: Number.isInteger(amount) ? 0 : 2,
  }).format(amount);
}
