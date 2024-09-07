import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Content from "@/content"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: Content.siteTitle,
  description: Content.siteDescription,
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
