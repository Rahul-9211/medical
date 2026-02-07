// app/ayurveda/page.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import BackgroundCarousel from "@/components/BackgroundCarousel";

interface Service {
  name: string;
  description?: string;
  url?: string;
}

interface AyurvedaData {
  slug: string;
  title: string;
  h1: string;
  intro: string;
  highlights: string[];
  cta_main: { label: string; link: string };
  services: Service[];
  why_choose_india: string[];
  cta_final: {
    headline: string;
    points: string[];
    button: { label: string; link: string };
  };
}

const AyurvedaPage = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "";
  const res = await fetch(`${baseUrl}/Ayurveda/ayurveda.json`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load treatments JSON");
  const data: AyurvedaData = await res.json();

  const getCardColor = (index: number) => {
    const colors = [
      { bg: 'bg-[#7AE5F5]/10', hover: 'hover:bg-[#7AE5F5]/20', text: 'text-[#7AE5F5]' },
      { bg: 'bg-[#56DDEF]/10', hover: 'hover:bg-[#56DDEF]/20', text: 'text-[#56DDEF]' },
      { bg: 'bg-yellow-100', hover: 'hover:bg-yellow-200', text: 'text-yellow-500' },
      { bg: 'bg-green-100', hover: 'hover:bg-green-200', text: 'text-green-600' }
    ];
    return colors[index % colors.length];
  };

  // Function to get image path for each service
  const getServiceImage = (serviceUrl: string | undefined): string => {
    if (!serviceUrl) return '/Images/ayurveda/ayurveda-1.jpg';
    
    // Extract slug from URL (e.g., "/ayurveda/panchakarma-detox" -> "panchakarma-detox")
    const slug = serviceUrl.replace('/ayurveda/', '');
    
    // Map of available images
    const imageMap: { [key: string]: string } = {
      'panchakarma-detox': '/Images/ayurveda/services/panchakarma-detox.jpg',
      'post-surgery-recovery': '/Images/ayurveda/services/post-surgery-recovery.jpg',
      'weight-management': '/Images/ayurveda/services/weight-management.jpg',
      'skin-hair': '/Images/ayurveda/services/skin-hair.jpg',
      'pcod-pcos': '/Images/ayurveda/services/pcod-pcos.jpg',
      'stress-sleep': '/Images/ayurveda/services/stress-sleep.jpg',
      'wellness-retreats': '/Images/ayurveda/services/wellness-retreats.jpg',
    };
    
    // Return mapped image or fallback
    return imageMap[slug] || '/Images/ayurveda/ayurveda-1.jpg';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50/80">

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <BackgroundCarousel variant="ayurveda" />

          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-full mb-6 shadow-lg text-4xl backdrop-blur-sm">
              🌿
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{data.h1}</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
              {data.intro}
            </p>

            {/* Highlights */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-6">
              {data.highlights.map((h, i) => (
                <span key={i} className="px-4 py-2 bg-white/80 rounded-full shadow text-gray-700 text-sm font-medium">
                  ✅ {h}
                </span>
              ))}
            </div>

            {/* Main CTA */}
            <Link
              href={data.cta_main.link}
              className="px-8 py-4 bg-[#56DDEF] text-white font-semibold rounded-xl hover:bg-[#56DDEF]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-md sm:text-lg"
            >
              {data.cta_main.label}
            </Link>
          </div>
        </section>

        {/* Services List - Hospital Style (Image Left, Text Right) */}
        <section className="relative overflow-hidden py-20 bg-gradient-to-br from-gray-50 via-white to-green-50">
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 via-teal-600/5 to-cyan-600/5"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-green-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full mb-4 shadow-lg text-2xl">
                🌿
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Ayurveda & Holistic Care Services</h2>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {data.services.map((service, index) => {
                const color = getCardColor(index);
                const imageUrl = getServiceImage(service.url);

                return (
                  <Link
                    key={index}
                    href={service.url || '#'}
                    className={`group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden flex flex-col md:flex-row ${color.hover}`}
                  >
                    <div className="relative w-full md:w-64 lg:w-80 h-48 md:h-auto flex-shrink-0 overflow-hidden">
                      <Image
                        src={imageUrl}
                        alt={service.name || 'Ayurveda Service'}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent md:bg-gradient-to-r md:from-black/50 md:via-black/20 md:to-transparent"></div>
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className={`text-xl font-bold mb-2 group-hover:${color.text} transition-colors duration-300`}>
                          {service.name}
                        </h3>
                        {service.description && (
                          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                            {service.description}
                          </p>
                        )}
                      </div>
                      
                      {/* View Details Link */}
                      <div className="mt-4 pt-4 border-t border-gray-200/50">
                        <span className={`inline-flex items-center text-sm font-medium ${color.text} group-hover:${color.text} transition-colors duration-300`}>
                          View Service Details
                          <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Ayurveda Section */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Why International Patients Choose Ayurveda in India</h2>
            <ul className="space-y-3 text-lg text-gray-700">
              {data.why_choose_india.map((point, i) => (
                <li key={i} className="flex items-center justify-center">
                  <span className="text-[#56DDEF] mr-3">✅</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-gradient-to-br from-green-50 via-white to-teal-50 text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">{data.cta_final.headline}</h2>
            <ul className="space-y-3 text-lg text-gray-700 mb-8">
              {data.cta_final.points.map((point, i) => (
                <li key={i} className="flex items-center justify-center">
                  <span className="text-green-500 mr-2">✅</span> {point}
                </li>
              ))}
            </ul>
            <Link
              href={data.cta_final.button.link}
              className="px-8 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
            >
              {data.cta_final.button.label}
            </Link>
          </div>
        </section>
      </main>

    </div>
  );
};

export default AyurvedaPage;
