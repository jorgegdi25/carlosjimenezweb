import {
  createHash,
  createHmac,
  timingSafeEqual,
} from "node:crypto";

import type { DigitalProduct } from "@/lib/products";

export type WompiTransaction = {
  id: string;
  amount_in_cents: number;
  reference: string;
  currency: string;
  status: "APPROVED" | "DECLINED" | "ERROR" | "PENDING" | "VOIDED";
  customer_email?: string;
};

type PurchaseSession = {
  reference: string;
  expiresAt: number;
};

function requiredEnv(name: string) {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Falta configurar ${name}.`);
  }

  return value;
}

function wompiApiBase() {
  return process.env.WOMPI_ENVIRONMENT === "production"
    ? "https://production.wompi.co/v1"
    : "https://sandbox.wompi.co/v1";
}

export function wompiCheckoutUrl(options: {
  product: DigitalProduct;
  reference: string;
  redirectUrl: string;
  expirationTime: string;
}) {
  const publicKey = requiredEnv("WOMPI_PUBLIC_KEY");
  const integritySecret = requiredEnv("WOMPI_INTEGRITY_SECRET");
  const { product, reference, redirectUrl, expirationTime } = options;
  const integrity = createHash("sha256")
    .update(
      `${reference}${product.amountInCents}${product.currency}${expirationTime}${integritySecret}`,
    )
    .digest("hex");
  const checkout = new URL("https://checkout.wompi.co/p/");

  checkout.searchParams.set("public-key", publicKey);
  checkout.searchParams.set("currency", product.currency);
  checkout.searchParams.set(
    "amount-in-cents",
    String(product.amountInCents),
  );
  checkout.searchParams.set("reference", reference);
  checkout.searchParams.set("signature:integrity", integrity);
  checkout.searchParams.set("redirect-url", redirectUrl);
  checkout.searchParams.set("expiration-time", expirationTime);

  return checkout;
}

export async function getWompiTransaction(id: string) {
  if (!/^[a-zA-Z0-9-]{8,100}$/.test(id)) {
    return null;
  }

  const response = await fetch(
    `${wompiApiBase()}/transactions/${encodeURIComponent(id)}`,
    { cache: "no-store" },
  );

  if (!response.ok) {
    return null;
  }

  const body = (await response.json()) as { data?: WompiTransaction };
  return body.data ?? null;
}

export function transactionMatchesProduct(
  transaction: WompiTransaction,
  product: DigitalProduct,
) {
  return (
    transaction.reference.startsWith(`CAJ-${product.referenceCode}-`) &&
    transaction.amount_in_cents === product.amountInCents &&
    transaction.currency === product.currency
  );
}

function sessionSignature(payload: string) {
  return createHmac("sha256", requiredEnv("WOMPI_SESSION_SECRET"))
    .update(payload)
    .digest("base64url");
}

export function createPurchaseSession(session: PurchaseSession) {
  const payload = Buffer.from(JSON.stringify(session)).toString("base64url");
  return `${payload}.${sessionSignature(payload)}`;
}

export function verifyPurchaseSession(token?: string) {
  if (!token) return null;

  const [payload, signature] = token.split(".");
  if (!payload || !signature) return null;

  const expected = Buffer.from(sessionSignature(payload));
  const received = Buffer.from(signature);
  if (
    expected.length !== received.length ||
    !timingSafeEqual(expected, received)
  ) {
    return null;
  }

  try {
    const session = JSON.parse(
      Buffer.from(payload, "base64url").toString("utf8"),
    ) as PurchaseSession;

    if (!session.reference || session.expiresAt < Date.now()) return null;
    return session;
  } catch {
    return null;
  }
}

function nestedValue(source: unknown, path: string) {
  return path.split(".").reduce<unknown>((value, key) => {
    if (!value || typeof value !== "object") return undefined;
    return (value as Record<string, unknown>)[key];
  }, source);
}

export function verifyWompiEvent(body: unknown) {
  if (!body || typeof body !== "object") return false;

  const event = body as {
    data?: unknown;
    timestamp?: number;
    signature?: { properties?: string[]; checksum?: string };
  };
  const properties = event.signature?.properties;
  const checksum = event.signature?.checksum;

  if (!properties || !checksum || event.timestamp === undefined) return false;

  const values = properties.map((property) =>
    String(nestedValue(event.data, property) ?? ""),
  );
  const calculated = createHash("sha256")
    .update(
      `${values.join("")}${event.timestamp}${requiredEnv("WOMPI_EVENTS_SECRET")}`,
    )
    .digest("hex");
  const expected = Buffer.from(calculated.toLowerCase());
  const received = Buffer.from(checksum.toLowerCase());

  return (
    expected.length === received.length && timingSafeEqual(expected, received)
  );
}
