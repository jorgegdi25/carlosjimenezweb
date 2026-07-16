"use client";

import { useEffect, useState } from "react";

type PaymentResponse = {
  status?: "APPROVED" | "DECLINED" | "ERROR" | "PENDING" | "VOIDED";
  productName?: string;
  downloadUrl?: string;
  downloadFilename?: string;
  expiresInMinutes?: number;
  error?: string;
};

export default function PaymentResult({ transactionId }: { transactionId: string }) {
  const [result, setResult] = useState<PaymentResponse>(() =>
    transactionId
      ? { status: "PENDING" }
      : { error: "Wompi no envio el identificador de la transaccion." },
  );
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    if (!transactionId) {
      return;
    }

    const controller = new AbortController();

    async function confirmPayment() {
      try {
        const response = await fetch(
          `/api/wompi/confirm?id=${encodeURIComponent(transactionId)}`,
          { cache: "no-store", signal: controller.signal },
        );
        const body = (await response.json()) as PaymentResponse;
        setResult(body);

        if (body.status === "PENDING" && attempt < 20) {
          window.setTimeout(() => setAttempt((value) => value + 1), 3000);
        }
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error(error);
          setResult({ error: "No pudimos consultar el pago. Intenta recargar." });
        }
      }
    }

    void confirmPayment();
    return () => controller.abort();
  }, [attempt, transactionId]);

  if (result.error) {
    return (
      <div className="payment-status payment-status--error">
        <p className="payment-status__label">No pudimos completar la entrega</p>
        <h1>Necesitamos revisar el pago</h1>
        <p>{result.error}</p>
        <a className="button button--primary" href="/contacto">Solicitar ayuda</a>
      </div>
    );
  }

  if (result.status === "APPROVED" && result.downloadUrl) {
    return (
      <div className="payment-status payment-status--approved">
        <p className="payment-status__label">Pago aprobado</p>
        <h1>Tu libro esta listo</h1>
        <p>
          Gracias por comprar <strong>{result.productName}</strong>. El boton de
          descarga es privado y estara activo durante {result.expiresInMinutes} minutos.
        </p>
        <a
          className="button button--primary"
          href={result.downloadUrl}
          download={result.downloadFilename}
        >
          Descargar PDF
        </a>
      </div>
    );
  }

  if (result.status === "PENDING") {
    return (
      <div className="payment-status payment-status--pending" aria-live="polite">
        <span className="payment-spinner" aria-hidden="true" />
        <p className="payment-status__label">Confirmando con Wompi</p>
        <h1>Estamos verificando tu pago</h1>
        <p>Esta pantalla se actualiza automaticamente. No necesitas pagar de nuevo.</p>
      </div>
    );
  }

  return (
    <div className="payment-status payment-status--declined">
      <p className="payment-status__label">Pago no aprobado</p>
      <h1>La transaccion no se completo</h1>
      <p>Wompi reporto el estado {result.status}. No se habilito ninguna descarga.</p>
      <a className="button button--primary" href="/tienda">Volver a la tienda</a>
    </div>
  );
}
