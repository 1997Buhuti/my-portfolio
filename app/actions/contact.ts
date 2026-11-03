"use server";

import { portfolioData } from "@/data/portfolio";
import { sendEmail } from "@/lib/email";

export type ContactField = "name" | "email" | "body";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<ContactField, string>>;
};

const LIMITS = { name: 100, email: 254, body: 5000 } as const;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContactMessage(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const body = String(formData.get("body") ?? "").trim();

  const fieldErrors: NonNullable<ContactState["fieldErrors"]> = {};
  if (!name) fieldErrors.name = "Name is required.";
  else if (name.length > LIMITS.name) fieldErrors.name = "Name is too long.";

  if (!email) fieldErrors.email = "Email is required.";
  else if (email.length > LIMITS.email || !EMAIL_PATTERN.test(email))
    fieldErrors.email = "Enter a valid email address.";

  if (!body) fieldErrors.body = "Message is required.";
  else if (body.length > LIMITS.body)
    fieldErrors.body = `Message must be ${LIMITS.body} characters or fewer.`;

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", fieldErrors };
  }

  const result = await sendEmail({
    to: portfolioData.personal.email,
    replyTo: email,
    // Strip line breaks from the name so it cannot inject extra email headers.
    subject: `Portfolio contact: ${name.replace(/[\r\n]+/g, " ")}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${body}`,
  });

  if (!result.ok) {
    return {
      status: "error",
      message: "Your message could not be sent. Please try again later.",
    };
  }

  return {
    status: "success",
    message: "Message sent. Thanks for reaching out, I will reply soon.",
  };
}
