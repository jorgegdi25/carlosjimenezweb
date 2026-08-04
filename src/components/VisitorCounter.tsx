"use client";

import { useEffect, useState } from "react";
import styles from "./VisitorCounter.module.css";

type VisitsResponse = {
  count?: number;
};

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadCount() {
      try {
        const response = await fetch("/api/visits", {
          cache: "no-store",
          signal: controller.signal,
        });

        if (!response.ok) return;

        const data = (await response.json()) as VisitsResponse;
        if (typeof data.count === "number") setCount(data.count);
      } catch (error) {
        if (!(error instanceof DOMException && error.name === "AbortError")) {
          console.warn("El contador de visitas no está disponible.");
        }
      }
    }

    void loadCount();
    return () => controller.abort();
  }, []);

  if (count === null) return null;

  return (
    <span className={styles.counter} title="Visitas registradas desde la activación del contador">
      <span className={styles.dot} aria-hidden="true" />
      <span className={styles.number}>{count.toLocaleString("es-CO")}</span>
      <span>visitas</span>
    </span>
  );
}
