// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Load fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Haider Jalal - Full Stack Engineer",
  description:
    "Portfolio of Haider Jalal, a Full Stack Engineer specializing in modern web development, 3D animations, and digital experiences.",
  keywords: [
    "Full Stack Engineer",
    "Web Developer",
    "Portfolio",
    "React",
    "Next.js",
    "3D Animation",
  ],
  authors: [{ name: "Haider Jalal" }],
  robots: "index, follow",
};

// Next 15 requires `viewport` as its own export, not a metadata field.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="dns-prefetch" href="https://prod.spline.design" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
