import "server-only";

import { Resend } from "resend";

export type SendEmailInput = {
  to: string | string[];
  subject: string;
  text: string;
  html?: string;
  replyTo?: string;
};

export type SendEmailResult =
  | { ok: true; id: string }
  | { ok: false; error: string };

// Resend's shared sandbox sender. It only delivers to the account owner's
// address, so set RESEND_FROM_EMAIL to an address on a verified domain for
// production use.
const DEFAULT_FROM = "Portfolio <onboarding@resend.dev>";

let client: Resend | null = null;

function getClient(): Resend {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not set. Add it to .env.local.");
  }
  client ??= new Resend(apiKey);
  return client;
}

/**
 * Send an email through Resend. Errors are returned, not thrown, so callers
 * can show a message to the user without a try/catch of their own.
 */
export async function sendEmail(
  input: SendEmailInput,
): Promise<SendEmailResult> {
  try {
    const { data, error } = await getClient().emails.send({
      from: process.env.RESEND_FROM_EMAIL || DEFAULT_FROM,
      to: input.to,
      subject: input.subject,
      text: input.text,
      html: input.html,
      replyTo: input.replyTo,
    });

    if (error) {
      return { ok: false, error: error.message };
    }
    return { ok: true, id: data.id };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return { ok: false, error: message };
  }
}
