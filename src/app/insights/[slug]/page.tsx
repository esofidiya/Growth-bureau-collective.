import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ConsultationCta } from "@/components/home/ConsultationCta";
import { PageHero } from "@/components/layout/PageHero";
import { PageShell } from "@/components/layout/PageShell";
import { Container } from "@/components/ui/Layout";
import { articles } from "@/content/insights";
import { pageMetadata } from "@/lib/metadata";

const dateFmt = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" });

export function generateStaticParams() {
  // Cache Components needs at least one param at build time; "_" renders a 404.
  return articles.length ? articles.map((a) => ({ slug: a.slug })) : [{ slug: "_" }];
}

export async function generateMetadata({ params }: PageProps<"/insights/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  return a ? pageMetadata({ title: a.title, description: a.excerpt, path: `/insights/${a.slug}` }) : {};
}

export default async function ArticlePage({ params }: PageProps<"/insights/[slug]">) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();
  return (
    <PageShell>
      <PageHero eyebrow={article.category} title={article.title} intro={article.excerpt}>
        <p className="text-sm text-smoke">
          <time dateTime={article.publishedAt}>{dateFmt.format(new Date(article.publishedAt))}</time> · {article.readingMinutes} min read
        </p>
      </PageHero>
      <article className="bg-cream py-20 text-charcoal sm:py-24">
        <Container className="max-w-3xl">
          <div className="space-y-6 text-lg leading-relaxed text-stone">
            {article.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <Link href="/insights" className="mt-12 inline-flex items-center gap-2 text-gold-deep hover:underline">
            <ArrowLeft className="size-4" aria-hidden />
            All insights
          </Link>
        </Container>
      </article>
      <ConsultationCta />
    </PageShell>
  );
}
