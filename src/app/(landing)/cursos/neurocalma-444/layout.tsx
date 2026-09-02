import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Neurocalma 444 | Guía práctica en video para manejar el estrés",
  description:
    "Aprende respiración consciente, tapping y prácticas de estimulación corporal para comprender el estrés y crear momentos de calma.",
};

export default function NeurocalmaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
