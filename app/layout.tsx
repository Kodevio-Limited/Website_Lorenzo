import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Nexus Property & Business Services",
    template: "%s | Nexus Property & Business Services",
  },
  description:
    "You Can't Be Everywhere. We Are. Independent property verification, documentation, and business representation services across all 14 parishes of Jamaica.",
  keywords: [
    "property verification Jamaica",
    "property inspection Jamaica",
    "Nexus Property Business Services",
    "Jamaica property management",
    "diaspora property services",
  ],
  openGraph: {
    siteName: "Nexus Property & Business Services",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
