import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: process.env.BLOG_TITLE,
  description: process.env.BLOG_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="p-8 bg-slate-200 w-full text-slate-900">
          <a href="/">
            <h1 className="text-3xl font-bold">{metadata.title as string}</h1>
            <p className="text-lg">{metadata.description}</p>
          </a>
        </header>
        {children}
      </body>
    </html>
  );
}
