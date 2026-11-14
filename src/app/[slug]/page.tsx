import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ComingSoon } from "@/components/layout/ComingSoon";
import { plannedPages } from "@/content/planned-pages";

export function generateStaticParams() {
  return Object.keys(plannedPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = plannedPages[slug];
  return page ? { title: page.title, robots: { index: false, follow: true } } : {};
}

export default async function PlannedPage({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const page = plannedPages[slug];
  if (!page) notFound();
  return <ComingSoon title={page.title} note="This page is being built. Check back soon." />;
}
