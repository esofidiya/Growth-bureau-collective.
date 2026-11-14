import { ComingSoon } from "@/components/layout/ComingSoon";
import { pageMetadata } from "@/lib/metadata";

// Replaced by the real registration page in Phase 3.
export const metadata = { ...pageMetadata({ title: "Create an account", description: "Join the GBC Growth Hub.", path: "/register" }), robots: { index: false } };

export default function RegisterPage() {
  return <ComingSoon eyebrow="Growth Hub" title="Create an account" note="Member accounts open soon. Explore the Growth Hub in the meantime." />;
}
