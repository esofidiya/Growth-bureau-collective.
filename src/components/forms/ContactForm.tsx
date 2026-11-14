"use client";

import Link from "next/link";
import { useActionState } from "react";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { site } from "@/content/site";
import { submitContact } from "@/lib/enquiries/actions";
import type { FormState } from "@/lib/enquiries/schema";
import { Checkbox, errorOf, FormOutcome, valueOf } from "./FormBits";

export function ContactForm() {
  const [state, action, pending] = useActionState<FormState, FormData>(submitContact, { status: "idle" });
  const v = (k: string) => valueOf(state, k);
  const e = (k: string) => errorOf(state, k);

  if (state.status === "success") return <FormOutcome state={state} email={site.contact.email} mailSubject="" mailBody="" />;

  return (
    <form action={action} noValidate className="space-y-6" aria-describedby="contact-required">
      <p id="contact-required" className="text-sm text-smoke">
        Fields marked * are required.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        <Input label="Name *" name="name" autoComplete="name" required defaultValue={v("name")} error={e("name")} />
        <Input label="Email *" name="email" type="email" autoComplete="email" required defaultValue={v("email")} error={e("email")} />
      </div>
      <Input label="Business" name="business" autoComplete="organization" defaultValue={v("business")} error={e("business")} />
      <Input label="Subject *" name="subject" required defaultValue={v("subject")} error={e("subject")} />
      <Textarea label="Message *" name="message" required rows={6} defaultValue={v("message")} error={e("message")} />
      <Checkbox
        name="consent"
        defaultChecked={v("consent") === "on"}
        error={e("consent")}
        label={
          <>
            I have read the{" "}
            <Link href="/privacy" className="text-gold underline underline-offset-2">
              privacy policy
            </Link>{" "}
            and agree to GBC using my details to respond to this message. *
          </>
        }
      />
      <Checkbox name="marketing" defaultChecked={v("marketing") === "on"} label="Send me occasional GBC insights and news. You can unsubscribe at any time." />
      <FormOutcome
        state={state}
        email={site.contact.email}
        mailSubject={v("subject") || "Enquiry"}
        mailBody={`Name: ${v("name")}\nBusiness: ${v("business")}\n\n${v("message")}`}
      />
      <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
        {pending ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
