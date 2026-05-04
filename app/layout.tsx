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

import TopNavigation from "@/components/TopNavigation";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-black text-white antialiased`}>
      <body className="flex flex-col min-h-screen">
        <TopNavigation />
        <div className="flex-grow pt-[98px]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
