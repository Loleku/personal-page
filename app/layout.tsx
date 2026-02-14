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
  title: {
    default: "Tomasz Zając — Full Stack Developer",
    template: "%s | Tomasz Zając",
  },
  description:
    "Portfolio Tomasza Zająca — Full Stack Developer. Strona w budowie. Zapraszam do kontaktu!",
  keywords: [
    "Tomasz Zając",
    "Full Stack Developer",
    "Portfolio",
    "Programista",
    "Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Tomasz Zając" }],
  creator: "Tomasz Zając",
  publisher: "Tomasz Zając",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Tomasz Zając — Full Stack Developer",
    description: "Portfolio Tomasza Zająca — strona w budowie.",
    url: "https://tomaszzajac.pl", // Zmień na swój docelowy adres
    siteName: "Tomasz Zając Portfolio",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tomasz Zając — Full Stack Developer",
    description: "Portfolio Tomasza Zająca — strona w budowie.",
    creator: "@tomaszzajac", // Opcjonalnie zmień na swój handle
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
