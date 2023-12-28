import type { Metadata } from 'next'
import "./globals.css";

import { Mulish } from "next/font/google";

const font = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wedding",
  description: "Wedding website for Rebeka and Roland",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={font.className}>{children}</body>
    </html>
  );
}
