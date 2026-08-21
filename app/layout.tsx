import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const jetBrainsMono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"], display: "swap" });

const configuredHost = process.env.RAILWAY_PUBLIC_DOMAIN ?? process.env.SITE_URL ?? "http://localhost:3000";
const siteUrl = configuredHost.startsWith("http") ? configuredHost : `https://${configuredHost}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Sheridan Labs", template: "%s" },
  description: "Industrial precision through AI.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Sheridan Labs | Industrial Precision Through AI",
    description: "Reliable intelligence for the systems that keep industry moving.",
    type: "website",
    images: [{ url: new URL("/og.png", siteUrl), width: 1733, height: 910, alt: "Sheridan Labs — Industrial Precision Through AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sheridan Labs | Industrial Precision Through AI",
    description: "Reliable intelligence for the systems that keep industry moving.",
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
