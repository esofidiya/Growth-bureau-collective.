import "server-only";
import type { BookingInput, ContactInput } from "./schema";

export type StoreResult = { ok: true; reference: string } | { ok: false; reason: "not_configured" | "failed" };

/**
 * Persists enquiries. The database arrives in Phase 3; until then this
 * reports "not_configured" so the UI never claims a submission succeeded.
 */
export async function storeEnquiry(
  kind: "contact" | "booking",
  data: ContactInput | BookingInput,
): Promise<StoreResult> {
  const configured = Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
  if (!configured) return { ok: false, reason: "not_configured" };

  // Phase 3: insert into the `enquiries` table and notify the admin (Phase 9).
  void kind;
  void data;
  return { ok: false, reason: "not_configured" };
}
