import "server-only";

/**
 * Minimal single-user admin session handling.
 *
 * A session is a signed token stored in an httpOnly cookie. The token is
 * `<payload>.<signature>` where the signature is an HMAC-SHA256 of the payload
 * using ADMIN_SESSION_SECRET. No database or user table is involved — this
 * gates the admin area for a single operator.
 *
 * Implemented with the Web Crypto API so it runs in both the Node.js and the
 * Edge (middleware) runtimes.
 */

export const SESSION_COOKIE = "admin_session";

// 7 days, in seconds.
export const SESSION_MAX_AGE = 60 * 60 * 24 * 7;

function getSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret || secret.length < 16) {
    throw new Error(
      "ADMIN_SESSION_SECRET is missing or too short. Set a strong value (32+ chars) in .env.local.",
    );
  }
  return secret;
}

const encoder = new TextEncoder();

function base64UrlEncode(bytes: ArrayBuffer | Uint8Array): string {
  const arr = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  let binary = "";
  for (const byte of arr) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function importKey(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"],
  );
}

async function sign(payload: string): Promise<string> {
  const key = await importKey(getSecret());
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    encoder.encode(payload),
  );
  return base64UrlEncode(signature);
}

/**
 * Create a signed session token with an expiry baked into the payload.
 */
export async function createSessionToken(): Promise<string> {
  const expires = Date.now() + SESSION_MAX_AGE * 1000;
  const payload = base64UrlEncode(encoder.encode(String(expires)));
  const signature = await sign(payload);
  return `${payload}.${signature}`;
}

/**
 * Verify a session token's signature and expiry. Uses a constant-time-ish
 * comparison for the signature. Returns true only for a valid, unexpired token.
 */
export async function verifySessionToken(
  token: string | undefined | null,
): Promise<boolean> {
  if (!token) return false;
  const dot = token.lastIndexOf(".");
  if (dot <= 0) return false;

  const payload = token.slice(0, dot);
  const signature = token.slice(dot + 1);

  const expected = await sign(payload);
  if (!timingSafeEqual(signature, expected)) return false;

  try {
    const expires = Number(
      new TextDecoder().decode(base64UrlDecode(payload)),
    );
    if (!Number.isFinite(expires) || Date.now() > expires) return false;
  } catch {
    return false;
  }
  return true;
}

function base64UrlDecode(input: string): Uint8Array {
  const padded = input.replace(/-/g, "+").replace(/_/g, "/");
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let i = 0; i < a.length; i++) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return mismatch === 0;
}

/**
 * Compare a submitted password against ADMIN_PASSWORD in constant time.
 */
export function verifyPassword(submitted: string): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) {
    throw new Error("ADMIN_PASSWORD is not set. Add it to .env.local.");
  }
  return timingSafeEqual(submitted, expected);
}
