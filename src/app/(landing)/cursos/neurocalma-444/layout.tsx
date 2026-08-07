import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Neurocalma 444 | Curso para reducir el estrés y la ansiedad",
};

export default function NeurocalmaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
