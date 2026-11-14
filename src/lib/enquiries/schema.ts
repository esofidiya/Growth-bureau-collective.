import { z } from "zod";
import { services } from "@/content/services";

const trimmed = (max: number) => z.string().trim().max(max, `Please keep this under ${max} characters.`);
const required = (label: string, max = 200) => trimmed(max).min(1, `${label} is required.`);

/** Optional website: accepts "example.com" and adds https:// when missing. */
const website = z
  .string()
  .trim()
  .max(300)
  .transform((v) => (v && !/^https?:\/\//i.test(v) ? `https://${v}` : v))
  .refine((v) => v === "" || z.url().safeParse(v).success, "Please enter a valid website address.");

const email = z.string().trim().min(1, "Email is required.").pipe(z.email("Please enter a valid email address."));

const consent = z.literal("on", { error: "Please confirm you have read the privacy policy." });

export const contactSchema = z.object({
  name: required("Your name", 120),
  email,
  business: trimmed(160).optional().default(""),
  subject: required("Subject", 160),
  message: required("Message", 4000).min(10, "Please tell us a little more (at least 10 characters)."),
  consent,
  marketing: z.literal("on").optional(),
});

export const serviceSlugs = services.map((s) => s.slug) as [string, ...string[]];

export const bookingSchema = z.object({
  name: required("Your name", 120),
  business: required("Business name", 160),
  email,
  website,
  industry: required("Industry", 120),
  services: z.array(z.enum(serviceSlugs)).min(1, "Please choose at least one service."),
  package: z.enum(["", "essentials", "elevate", "elite", "unsure"]).optional().default(""),
  goals: required("Business goals", 4000).min(10, "Please tell us a little more about your goals."),
  preferredDate: z
    .string()
    .min(1, "Please choose a preferred date.")
    .refine((v) => !Number.isNaN(Date.parse(v)), "Please choose a valid date.")
    .refine((v) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return new Date(v) >= today;
    }, "Please choose a date from today onwards."),
  additional: trimmed(4000).optional().default(""),
  consent,
  marketing: z.literal("on").optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type BookingInput = z.infer<typeof bookingSchema>;

export type FormState =
  | { status: "idle" }
  | { status: "invalid"; fieldErrors: Record<string, string[] | undefined>; values: Record<string, string | string[]> }
  | { status: "unavailable"; values: Record<string, string | string[]> }
  | { status: "error"; values: Record<string, string | string[]> }
  | { status: "success"; reference: string };
