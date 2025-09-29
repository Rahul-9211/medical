import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import websiteData from '@/data/websiteData.json';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Medical Tourism in India | Shivanand Global – World-Class Surgery & Ayurveda",
  description: "Discover India's gateway to world-class surgery & authentic Ayurveda with Shivanand Global Medical Tourism. Top hospitals, expert doctors & complete patient care. worldwide. 1,00,000+ patients assisted since 2016.",
  keywords: "medical tourism, healthcare, hospitals, doctors, treatment, surgery, medical travel, international healthcare",
  authors: [{ name: "Shivanand Global" }],
  creator: "Shivanand Global",
  publisher: "Shivanand Global",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://shivanandglobalmedicaltourism.com'),
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'IdQJtCunltJwMLN83a64BxpIpDsH4Tl96zPTg3yaG38',
  },
  openGraph: {
    title: "Medical Tourism in India | Shivanand Global – World-Class Surgery & Ayurveda",
    description: "Discover India's gateway to world-class surgery & authentic Ayurveda with Shivanand Global Medical Tourism. Top hospitals, expert doctors & complete patient care. worldwide.",
    url: 'https://shivanandglobalmedicaltourism.com',
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
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N9STZFGG');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N9STZFGG"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
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
