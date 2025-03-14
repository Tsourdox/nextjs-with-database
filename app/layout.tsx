import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "Instapost",
  description: "Read the most interesting post right now!",
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
        <header className="py-2 px-4 flex justify-between items-center">
          <h1 className="text-3xl">Instapost</h1>
          <Link href="/new" className="hover:bg-slate-100 rounded px-2 py-1">
            Add Post
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
