import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cerebros Digitales e inteligencia artificial | Libro interactivo",
};

export default function CerebrosDigitalesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
