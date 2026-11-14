import { LegalPage } from "@/components/legal/LegalPage";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ title: "Terms & Conditions", description: "Terms and conditions for Growth Bureau Collective services and the GBC Growth Hub.", path: "/terms" });

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & conditions"
      intro="The terms that apply to our agency services, the GBC Growth Hub and this website."
      sections={[
        { heading: "About these terms", body: [`These terms apply when you use the ${site.name} website, engage our agency services or become a Growth Hub member.`], placeholder: "registered business details and governing law." },
        { heading: "Agency services", placeholder: "scope of work, approvals, revisions, client responsibilities and intellectual property in deliverables." },
        { heading: "Fees and payment", body: ["Package prices are shown on our Packages page and are charged monthly."], placeholder: "payment terms, minimum term, notice period and late payment." },
        { heading: "Growth Hub membership", body: ["Growth Hub memberships are billed monthly. Paid features are available only after payment is confirmed."], placeholder: "renewals, upgrades, downgrades, cancellation and refund policy." },
        { heading: "AI features", placeholder: "how AI assistant responses should be used, and their limitations." },
        { heading: "Acceptable use", placeholder: "rules for the community and platform content." },
        { heading: "Liability", placeholder: "limitation of liability." },
        { heading: "Contact", body: [`Questions about these terms: ${site.contact.email}.`] },
      ]}
    />
  );
}
