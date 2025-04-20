import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mini Social | Aplikasi Media Sosial Teks",
  description:
    "Aplikasi media sosial sederhana untuk berbagi teks atau pikiran dan ide secara singkat.",
  keywords: [
    "media sosial",
    "teks",
    "postingan",
    "berbagi pikiran",
    "berbagi ide",
    "mini social",
    "Next.js",
  ],
  authors: [{ name: "Andina Pasha Rahmania", url: "https://github.com/andina-pasha" }],
  openGraph: {
    title: "Mini Social",
    description:
      "Aplikasi media sosial sederhana untuk berbagi teks atau pikiran dan ide secara singkat.",
    url: "https://mini-social.vercel.app",
    siteName: "Mini Social",
    images: [
      {
        url: "https://mini-social.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mini Social Preview",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}