import type { Metadata } from "next";
import { Raleway } from 'next/font/google';

import "./globals.css";

const raleway = Raleway({
  weight: ['600', '700', '800'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Parenting leader",
  description: "Parenting leader ad",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
