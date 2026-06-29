import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
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
  title: "Sarauniya Charity Foundation",
  description:
    "Sarauniya Charity Foundation supports vulnerable communities through clean water, education, healthcare, women and youth empowerment, orphan support, emergency relief, and sustainable development.",
  keywords: [
    "Sarauniya Charity Foundation",
    "NGO Nigeria",
    "Charity Foundation Abuja",
    "Clean Water Projects",
    "Girl Child Education",
    "Women Empowerment",
    "Medical Outreach",
    "Humanitarian Foundation Nigeria",
  ],
  openGraph: {
    title: "Sarauniya Charity Foundation",
    description:
      "Transforming lives through clean water, education, healthcare, empowerment, and humanitarian support.",
    url: "https://sarauniya-foundation.vercel.app",
    siteName: "Sarauniya Charity Foundation",
    images: [
      {
        url: "/images/logo/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Sarauniya Charity Foundation",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="flex-1">{children}</div>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
