import type { Metadata } from "next";

import PaymentResult from "@/components/PaymentResult";

export const metadata: Metadata = {
  title: "Resultado del pago | Carlos Alberto Jimenez",
  robots: { index: false, follow: false },
};

export default async function ResultadoPago({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const { id = "" } = await searchParams;

  return (
    <section className="payment-page">
      <div className="container payment-page__inner">
        <PaymentResult transactionId={id} />
      </div>
    </section>
  );
}
