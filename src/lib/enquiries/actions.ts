"use server";

import { z } from "zod";
import { bookingSchema, contactSchema, type FormState } from "./schema";
import { storeEnquiry } from "./store";

function snapshot(formData: FormData) {
  const values: Record<string, string | string[]> = {};
  for (const key of new Set(formData.keys())) {
    if (key.startsWith("$")) continue;
    const all = formData.getAll(key).filter((v): v is string => typeof v === "string");
    values[key] = key === "services" ? all : (all[0] ?? "");
  }
  return values;
}

export async function submitContact(_prev: FormState, formData: FormData): Promise<FormState> {
  const values = snapshot(formData);
  const parsed = contactSchema.safeParse(values);
  if (!parsed.success) return { status: "invalid", fieldErrors: z.flattenError(parsed.error).fieldErrors, values };
  const result = await storeEnquiry("contact", parsed.data);
  if (result.ok) return { status: "success", reference: result.reference };
  return { status: result.reason === "not_configured" ? "unavailable" : "error", values };
}

export async function submitBooking(_prev: FormState, formData: FormData): Promise<FormState> {
  const values = snapshot(formData);
  const parsed = bookingSchema.safeParse({ ...values, services: values.services ?? [] });
  if (!parsed.success) return { status: "invalid", fieldErrors: z.flattenError(parsed.error).fieldErrors, values };
  const result = await storeEnquiry("booking", parsed.data);
  if (result.ok) return { status: "success", reference: result.reference };
  return { status: result.reason === "not_configured" ? "unavailable" : "error", values };
}
