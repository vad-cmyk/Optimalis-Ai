import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://optimalis-ai.com"),
  title: {
    default: "Optimalis AI — Your business, optimised by AI",
    template: "%s | Optimalis AI",
  },
  description:
    "Norwich-based AI agency helping local businesses save time and win more customers with AI automation, custom websites, and chatbots.",
  keywords: [
    "AI automation Norwich",
    "website design Norwich",
    "chatbots for small business UK",
    "AI agency Norfolk",
    "business automation UK",
  ],
  authors: [{ name: "Optimalis AI" }],
  creator: "Optimalis AI",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://optimalis-ai.com",
    siteName: "Optimalis AI",
    title: "Optimalis AI — Your business, optimised by AI",
    description:
      "AI automation, custom websites, and chatbots for Norwich & Norfolk businesses.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Optimalis AI — Your business, optimised by AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Optimalis AI — Your business, optimised by AI",
    description:
      "AI automation, custom websites, and chatbots for Norwich & Norfolk businesses.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased bg-background text-text-primary">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
        {/* Google Analytics 4 — uncomment and add your tracking ID */}
        {/* <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" /> */}
        {/* <Script id="ga4" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}</Script> */}
      </body>
    </html>
  );
}
