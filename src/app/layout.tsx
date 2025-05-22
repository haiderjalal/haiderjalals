
// src/app/layout.tsx
import { ReactNode,} from "react";
import ClientLoadingWrapper from "../components/ClientLoadingWrapper"; // Import your loading wrapper component
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Load fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Haider Jalal",
  description: "Portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Render loading screen before the page */}
        <ClientLoadingWrapper>{children}</ClientLoadingWrapper>
      </body>
    </html>
  );
}
