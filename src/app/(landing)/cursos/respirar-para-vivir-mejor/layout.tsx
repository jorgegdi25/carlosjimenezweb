import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Respirar para vivir mejor | Curso para reducir el estrés",
};

export default function RespirarParaVivirMejorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
