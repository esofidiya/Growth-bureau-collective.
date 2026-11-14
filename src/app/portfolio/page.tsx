import { ConsultationCta } from "@/components/home/ConsultationCta";
import { PortfolioShowcase } from "@/components/home/PortfolioShowcase";
import { PageHero } from "@/components/layout/PageHero";
import { PageShell } from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Portfolio",
  description: "Selected brand, content and social media work by Growth Bureau Collective.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Portfolio" title="Brands shaped with intention." intro="From identity to everyday content, selected work from the collective." />
      <PortfolioShowcase />
      <ConsultationCta />
    </PageShell>
  );
}
