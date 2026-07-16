import type { WompiTransaction } from "@/lib/wompi";

function requiredEnv(name: string) {
  const value = process.env[name]?.trim();
  if (!value) throw new Error(`Falta configurar ${name}.`);
  return value;
}

export async function deliverCourseAccess(transaction: WompiTransaction) {
  if (!transaction.customer_email) {
    throw new Error("Wompi no envio el correo del comprador.");
  }

  const endpoint = requiredEnv("COURSE_APPS_SCRIPT_URL");
  const secret = requiredEnv("COURSE_AUTOMATION_SECRET");
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      secret,
      transactionId: transaction.id,
      reference: transaction.reference,
      email: transaction.customer_email,
      amountInCents: transaction.amount_in_cents,
      currency: transaction.currency,
    }),
    cache: "no-store",
  });

  const body = (await response.json().catch(() => null)) as {
    ok?: boolean;
    error?: string;
  } | null;

  if (!response.ok || !body?.ok) {
    throw new Error(body?.error || "Apps Script no pudo conceder el acceso.");
  }

  return { email: transaction.customer_email.toLowerCase() };
}
