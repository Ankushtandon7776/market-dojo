import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Market Dojo | Learn Stock Market Trading",
  description: "Master the art of stock market trading with expert mentors through live sessions, recorded courses, and personalized mentorship. Join Market Dojo today!",
  keywords: ["stock market", "trading", "courses", "education", "technical analysis", "options trading", "investment"],
  authors: [{ name: "Market Dojo" }],
  creator: "Market Dojo",
  publisher: "Market Dojo",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://marketdojo.com",
    title: "Market Dojo | Learn Stock Market Trading",
    description: "Master the art of stock market trading with expert mentors",
    siteName: "Market Dojo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Market Dojo | Learn Stock Market Trading",
    description: "Master the art of stock market trading with expert mentors",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
