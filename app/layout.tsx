import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
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
  metadataBase: new URL("https://www.sarauniyacf.org"),

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

  verification: {
    other: {
      "msvalidate.01": "E2E801A692A0B660A1A1FE7415306926",
    },
  },

  openGraph: {
  title: "Sarauniya Charity Foundation",
  description:
    "Helping the Less Privileged through education, healthcare, clean water, women and youth empowerment, emergency relief, and humanitarian support.",
  url: "https://www.sarauniyacf.org",
  siteName: "Sarauniya Charity Foundation",
  images: [
    {
      url: "https://www.sarauniyacf.org/images/logo/logo.jpg",
      width: 1200,
      height: 630,
      alt: "Sarauniya Charity Foundation",
    },
  ],
  locale: "en_NG",
  type: "website",
},
twitter: {
  card: "summary_large_image",
  title: "Sarauniya Charity Foundation",
  description:
    "Helping the Less Privileged through education, healthcare, clean water, women and youth empowerment, emergency relief, and humanitarian support.",
  images: ["https://www.sarauniyacf.org/images/logo/logo.jpg"],
},

icons: {
  icon: "/images/logo/logo.jpg",
  shortcut: "/images/logo/logo.jpg",
  apple: "/images/logo/logo.jpg",
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
      <Script
  src="https://www.googletagmanager.com/gtag/js?id=G-49VL8KTHSZ"
  strategy="afterInteractive"
/>

<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-49VL8KTHSZ');
  `}
</Script>
        <div className="flex-1">{children}</div>
        <Footer /></body>
    </html>
  );
}




