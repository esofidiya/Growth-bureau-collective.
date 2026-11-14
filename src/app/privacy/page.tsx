import { LegalPage } from "@/components/legal/LegalPage";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ title: "Privacy Policy", description: "How Growth Bureau Collective collects, uses and protects personal information.", path: "/privacy" });

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy policy"
      intro="How Growth Bureau Collective collects, uses and protects your personal information."
      sections={[
        { heading: "Who we are", body: [`${site.name} (“GBC”, “we”, “us”). You can contact us about privacy at ${site.contact.email}.`], placeholder: "registered business name, address and, if applicable, company and ICO registration numbers." },
        { heading: "Information we collect", body: ["Information you give us through our contact and consultation forms: your name, email address, business name, website, industry, goals and anything else you choose to tell us.", "If you create a Growth Hub account: your account details, business profile, and the content you create on the platform."], placeholder: "any analytics, cookies or third-party tools used on the website." },
        { heading: "How we use your information", body: ["To respond to your enquiries and arrange consultations.", "To provide our services and the Growth Hub platform to you.", "To send you marketing communications, only if you have opted in. You can unsubscribe at any time."] },
        { heading: "Lawful basis", placeholder: "the lawful bases relied on under UK GDPR for each type of processing." },
        { heading: "Who we share information with", placeholder: "the service providers used (for example hosting, database, email and payment providers) and where they process data." },
        { heading: "How long we keep information", placeholder: "retention periods for enquiries, client records and member accounts." },
        { heading: "Your rights", body: ["You have rights over your personal information, including the right to access it, correct it, ask us to delete it and object to marketing. To make a request, email us at the address above."], placeholder: "full statement of rights and how to complain to the Information Commissioner’s Office." },
        { heading: "Cookies", placeholder: "cookie policy and consent approach." },
        { heading: "Changes to this policy", placeholder: "effective date and how changes are communicated." },
      ]}
    />
  );
}
