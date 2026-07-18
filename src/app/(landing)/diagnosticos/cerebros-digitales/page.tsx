import type { Metadata } from "next";

import DiagnosticClient from "./DiagnosticClient";

export const metadata: Metadata = {
  title: "Diagnóstico Cerebros Digitales | Carlos Alberto Jiménez",
  description:
    "Explora tus estilos de pensamiento y consumo con dos diagnósticos educativos inspirados en Cerebros Digitales.",
};

export default function CerebrosDigitalesDiagnosticPage() {
  return <DiagnosticClient />;
}
