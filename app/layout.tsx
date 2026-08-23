import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { hero } from "../content/site";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const jetBrainsMono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"], display: "swap" });

const configuredHost = process.env.RAILWAY_PUBLIC_DOMAIN ?? process.env.SITE_URL ?? "http://localhost:3000";
const siteUrl = configuredHost.startsWith("http") ? configuredHost : `https://${configuredHost}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Sheridan Labs | Software for Exacting Technical Work", template: "%s | Sheridan Labs" },
  description: hero.standfirst,
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon-32.png",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Sheridan Labs | Software for Exacting Technical Work",
    description: hero.standfirst,
    type: "website",
    images: [{ url: new URL("/og.png", siteUrl), width: 1731, height: 909, alt: "Sheridan Labs — Software for work where a wrong answer is expensive" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sheridan Labs | Software for Exacting Technical Work",
    description: hero.standfirst,
    images: [new URL("/og.png", siteUrl)],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetBrainsMono.variable}`}>{children}</body>
    </html>
  );
}
