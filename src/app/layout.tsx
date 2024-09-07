import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Content from "@/content"
import Head from 'next/head';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: Content.homePageTitle,
  description: Content.description,
  keywords : Content.SEOKeywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
