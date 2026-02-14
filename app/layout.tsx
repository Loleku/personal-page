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
  title: "Tomasz Zając",
  description: "Tomasz Zając - Full Stack Developer",
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
    title: "Tomasz Zając",
    description: "Tomasz Zając - Full Stack Developer",
    url: "https://tomaszzajac.dev",
    siteName: "Tomasz Zając",
    locale: "pl_PL",
    type: "website",
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
