const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const CAPI_TOKEN = process.env.META_PIXEL_CAPI_TOKEN;
const CAPI_URL = `https://graph.facebook.com/v19.0/${PIXEL_ID}/events`;

type UserData = {
  email?: string;
  phone?: string;
  ipAddress?: string;
  userAgent?: string;
};

async function sha256(value: string): Promise<string> {
  const buffer = new TextEncoder().encode(value.trim().toLowerCase());
  const hash = await crypto.subtle.digest("SHA-256", buffer);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/**
 * Send a server-side Conversions API event to Meta.
 * Call this from Server Actions or API Routes — never from client components.
 * Pair with a browser pixel event of the same name + eventId for deduplication.
 *
 * Example usage in a form Server Action:
 *   const eventId = crypto.randomUUID();
 *   await sendCapiEvent("Lead", { email, ipAddress, userAgent }, eventId);
 *   // Pass eventId back to the client and use it in fbq('track', 'Lead', {}, { eventID: eventId })
 */
export async function sendCapiEvent(
  eventName: string,
  userData?: UserData,
  eventId?: string,
): Promise<void> {
  if (!CAPI_TOKEN || !PIXEL_ID) return;

  const hashedEmail = userData?.email ? await sha256(userData.email) : undefined;
  const hashedPhone = userData?.phone
    ? await sha256(userData.phone.replace(/\D/g, ""))
    : undefined;

  const payload = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        action_source: "website",
        user_data: {
          ...(hashedEmail && { em: [hashedEmail] }),
          ...(hashedPhone && { ph: [hashedPhone] }),
          ...(userData?.ipAddress && { client_ip_address: userData.ipAddress }),
          ...(userData?.userAgent && { client_user_agent: userData.userAgent }),
        },
      },
    ],
    access_token: CAPI_TOKEN,
  };

  try {
    await fetch(CAPI_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    // CAPI failure should never block the user flow
  }
}
