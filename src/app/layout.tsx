import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import websiteData from '@/data/websiteData.json';
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Medical Tourism in India | Shivanand Global – World-Class Surgery & Ayurveda",
  description: "Discover India’s gateway to world-class surgery & authentic Ayurveda with Shivanand Global Medical Tourism. Top hospitals, expert doctors & complete patient care. worldwide. 1,00,000+ patients assisted since 2016.",
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
    title: "Medical Tourism in India | Shivanand Global – World-Class Surgery & Ayurveda",
    description: "Discover India’s gateway to world-class surgery & authentic Ayurveda with Shivanand Global Medical Tourism. Top hospitals, expert doctors & complete patient care. worldwide.",
    url: 'https://ShivanandGlobal.com',
    siteName: 'Shivanand Global',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Shivanand Global - Medical Tourism Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Medical Tourism in India | Shivanand Global – World-Class Surgery & Ayurveda",
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
      <Head>
        <title>Medical Tourism in India | Shivanand Global – World-Class Surgery & Ayurveda</title>
        <meta name="description" content="Discover India’s gateway to world-class surgery & authentic Ayurveda with Shivanand Global Medical Tourism. Top hospitals, expert doctors & complete patient care. " />
        <meta name="keywords" content="medical tourism, healthcare, hospitals, doctors, treatment, surgery, medical travel, international healthcare" />
        <meta name="author" content="Shivanand Global" />
        <meta name="publisher" content="Shivanand Global" />
        <meta name="google-site-verification" content="IdQJtCunltJwMLN83a64BxpIpDsH4Tl96zPTg3yaG38" />
        <meta name="googlebot" content="index, follow" />
        <meta name="googlebot" content="max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
        <meta name="google" content="notranslate" />
        <meta name="google" content="notranslate" />
      </Head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50/80">
          <Header 
            navigation={websiteData.navigation} 
            siteInfo={websiteData.siteInfo} 
          />
          {children}
          <Footer footer={websiteData.footer} />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
