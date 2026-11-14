import type { Metadata } from "next";

/** Standard per-page metadata: title, description, canonical URL and Open Graph. */
export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: `${title} · Growth Bureau Collective`, description, url: path, siteName: "Growth Bureau Collective", locale: "en_GB", type: "website" },
  };
}
