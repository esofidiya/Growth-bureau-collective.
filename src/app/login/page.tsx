import { ComingSoon } from "@/components/layout/ComingSoon";
import { pageMetadata } from "@/lib/metadata";

// Replaced by the real login page in Phase 3.
export const metadata = { ...pageMetadata({ title: "Log in", description: "Log in to the GBC Growth Hub.", path: "/login" }), robots: { index: false } };

export default function LoginPage() {
  return <ComingSoon eyebrow="Growth Hub" title="Log in" note="Member accounts open soon. Explore the Growth Hub in the meantime." />;
}
