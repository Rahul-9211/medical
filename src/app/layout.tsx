import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Shivanand Global - Medical Treatment With Unmatched Personal Care",
  description: "World's Most Trusted Medical Travel Assistance Platform. Get personalized medical treatment quotes from top hospitals worldwide. 1,00,000+ patients assisted since 2016.",
  keywords: "medical tourism, healthcare, hospitals, doctors, treatment, surgery, medical travel, international healthcare",
  authors: [{ name: "Shivanand Global" }],
  creator: "Shivanand Global",
  publisher: "Shivanand Global",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ShivanandGlobal.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Shivanand Global - Medical Treatment With Unmatched Personal Care",
    description: "World's Most Trusted Medical Travel Assistance Platform. Get personalized medical treatment quotes from top hospitals worldwide.",
    url: 'https://ShivanandGlobal.com',
    siteName: 'MediCare',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'MediCare - Medical Tourism Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "MediCare - Medical Treatment With Unmatched Personal Care",
    description: "World's Most Trusted Medical Travel Assistance Platform",
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
