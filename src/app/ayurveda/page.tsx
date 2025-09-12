// app/ayurveda/page.tsx
import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import websiteData from "@/data/websiteData.json";

interface Service {
  name: string;
  description?: string;
  url?: string;
}

interface AyurvedaData {
  name: string;
  url: string;
  services: Service[];
}

const AyurvedaPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Ayurveda/Ayurveda.json`, { cache: "no-store" });
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50/30">
      <Header navigation={websiteData.navigation} siteInfo={websiteData.siteInfo} />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 bg-gradient-to-br from-gray-50 via-white to-green-50/30">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#7AE5F5]/20 to-[#56DDEF]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-yellow-200/20 to-[#7AE5F5]/20 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white rounded-full mb-6 shadow-lg text-4xl">
              🧘
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">{data.name}</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              India is the birthplace of Ayurveda – the world's oldest system of natural healing. 
              Our Ayurveda & wellness centers combine ancient therapies with modern medical care for holistic health.
            </p>
            <Link
              href="/ayurveda/online-consultations"
              className="px-8 py-4 bg-[#56DDEF] text-white font-semibold rounded-xl hover:bg-[#56DDEF]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
            >
              Book Online Ayurvedic Consultation
            </Link>
          </div>
        </section>

        {/* Services Grid */}
        <section className="relative overflow-hidden py-20 bg-gradient-to-br from-gray-50 via-white to-green-50">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 via-teal-600/5 to-cyan-600/5"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-green-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Our Ayurveda & Holistic Care Services</h2>
            <div className={`grid grid-cols-1 md:grid-cols-2 ${data.services.length >= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-6`}>
              {data.services.map((service, index) => {
                const color = getCardColor(index);
                return (
                  <div key={index} className={`group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden ${color.hover}`}>
                    <h3 className={`text-xl font-bold mb-3 ${color.text}`}>
                      {service.url ? (
                        <Link href={service.url} className="transition-colors duration-300">
                          {service.name}
                        </Link>
                      ) : (
                        service.name
                      )}
                    </h3>
                    {service.description && <p className="text-gray-600 leading-relaxed">{service.description}</p>}
                  </div>
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
              <li className="flex items-center justify-center">
                <span className="text-[#56DDEF] mr-3">✅</span>
                5,000+ years of proven healing traditions
              </li>
              <li className="flex items-center justify-center">
                <span className="text-[#56DDEF] mr-3">✅</span>
                No side effects, safe & natural methods
              </li>
              <li className="flex items-center justify-center">
                <span className="text-[#56DDEF] mr-3">✅</span>
                Personalized treatment plans by expert Vaidyas
              </li>
              <li className="flex items-center justify-center">
                <span className="text-[#56DDEF] mr-3">✅</span>
                Combines well with modern medicine for faster recovery
              </li>
              <li className="flex items-center justify-center">
                <span className="text-[#56DDEF] mr-3">✅</span>
                Affordable & holistic care options
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer footer={websiteData.footer} />
    </div>
  );
};

export default AyurvedaPage;
