import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Carlos Alberto Jiménez",
  description: "Consultor, asesor y escritor en lúdica, juego, neuromarketing, neuroeducación y branding empresarial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${outfit.variable}`}>
      <body className="min-h-full flex flex-col font-sans js-enabled">
        {children}
      </body>
      <GoogleAnalytics gaId="G-Y9GQ5FG2BB" />
    </html>
  );
}
