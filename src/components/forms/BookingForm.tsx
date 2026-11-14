"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useActionState } from "react";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { agencyPackages } from "@/content/packages";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { submitBooking } from "@/lib/enquiries/actions";
import type { FormState } from "@/lib/enquiries/schema";
import { Checkbox, errorOf, FormOutcome, Select, valueOf } from "./FormBits";

function todayISO() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export function BookingForm() {
  const params = useSearchParams();
  const [state, action, pending] = useActionState<FormState, FormData>(submitBooking, { status: "idle" });
  const v = (k: string) => valueOf(state, k);
  const e = (k: string) => errorOf(state, k);
  const chosenServices =
    state.status === "invalid" || state.status === "unavailable" || state.status === "error"
      ? ((state.values.services as string[] | undefined) ?? [])
      : [];
  const initialPackage = state.status === "idle" ? (params.get("package") ?? "") : v("package");

  if (state.status === "success") return <FormOutcome state={state} email={site.contact.email} mailSubject="" mailBody="" />;

  const serviceNames = chosenServices.map((s) => services.find((x) => x.slug === s)?.title ?? s).join(", ");

  return (
    <form action={action} noValidate className="space-y-8" aria-describedby="booking-required">
      <p id="booking-required" className="text-sm text-smoke">
        Fields marked * are required.
      </p>

      <fieldset className="space-y-6">
        <legend className="mb-2 font-display text-2xl font-semibold text-cream">About you</legend>
        <div className="grid gap-6 sm:grid-cols-2">
          <Input label="Name *" name="name" autoComplete="name" required defaultValue={v("name")} error={e("name")} />
          <Input label="Email *" name="email" type="email" autoComplete="email" required defaultValue={v("email")} error={e("email")} />
          <Input label="Business name *" name="business" autoComplete="organization" required defaultValue={v("business")} error={e("business")} />
          <Input label="Website" name="website" inputMode="url" autoComplete="url" placeholder="yourbusiness.co.uk" defaultValue={v("website")} error={e("website")} />
        </div>
        <Input label="Industry *" name="industry" required defaultValue={v("industry")} error={e("industry")} />
      </fieldset>

      <fieldset className="space-y-4" aria-describedby={e("services") ? "services-error" : undefined}>
        <legend className="mb-2 font-display text-2xl font-semibold text-cream">Services you are interested in *</legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {services.map((s) => (
            <label
              key={s.slug}
              className="flex cursor-pointer items-center gap-3 rounded-sm border border-line-dark bg-ink/60 px-4 py-3 text-sm text-cream transition-colors has-[:checked]:border-gold has-[:checked]:bg-gold/10"
            >
              <input type="checkbox" name="services" value={s.slug} defaultChecked={chosenServices.includes(s.slug)} className="size-4 accent-[#D4A37A]" />
              {s.title}
            </label>
          ))}
        </div>
        {e("services") && (
          <p id="services-error" role="alert" className="text-sm text-red-400">
            {e("services")}
          </p>
        )}
        <Select label="Package of interest" name="package" defaultValue={initialPackage} error={e("package")}>
          <option value="">No preference yet</option>
          {agencyPackages.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
          <option value="unsure">Not sure, please advise</option>
        </Select>
      </fieldset>

      <fieldset className="space-y-6">
        <legend className="mb-2 font-display text-2xl font-semibold text-cream">Your goals</legend>
        <Textarea label="Business goals *" name="goals" required rows={5} defaultValue={v("goals")} error={e("goals")} hint="What would you like your brand to achieve in the next 6 to 12 months?" />
        <Input label="Preferred consultation date *" name="preferredDate" type="date" min={todayISO()} required defaultValue={v("preferredDate")} error={e("preferredDate")} />
        <Textarea label="Additional information" name="additional" rows={4} defaultValue={v("additional")} error={e("additional")} />
      </fieldset>

      <div className="space-y-4">
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
              and agree to GBC using my details to arrange this consultation. *
            </>
          }
        />
        <Checkbox name="marketing" defaultChecked={v("marketing") === "on"} label="Send me occasional GBC insights and news. You can unsubscribe at any time." />
      </div>

      <FormOutcome
        state={state}
        email={site.contact.email}
        mailSubject={`Consultation request: ${v("business") || v("name")}`}
        mailBody={[
          `Name: ${v("name")}`,
          `Business: ${v("business")}`,
          `Email: ${v("email")}`,
          `Website: ${v("website")}`,
          `Industry: ${v("industry")}`,
          `Services: ${serviceNames}`,
          `Package: ${v("package")}`,
          `Preferred date: ${v("preferredDate")}`,
          ``,
          `Goals:`,
          v("goals"),
          ``,
          `Additional information:`,
          v("additional"),
        ].join("\n")}
      />

      <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
        {pending ? "Sending…" : "Request consultation"}
      </Button>
    </form>
  );
}
