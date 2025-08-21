import type { Metadata } from "next";
import "./globals.css";

import { goblinFont } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "KrenkoHelper",
  description: "Manage your Krenko deck with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${goblinFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
