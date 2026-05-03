import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-luxury",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maison Himala | Miracle of Light",
  description: "A living legacy, woven with you. A vetting process worthy of a luxury asset.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-black text-white antialiased`}>
      <body>{children}</body>
    </html>
  );
}
