import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ComingSoon } from "@/components/layout/ComingSoon";
import { getService, services } from "@/content/services";

// Placeholder until the full service pages are built in Phase 2.
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  return service ? { title: service.title, description: service.summary, robots: { index: false, follow: true } } : {};
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  return <ComingSoon eyebrow="Services" title={service.title} note={service.summary} />;
}
