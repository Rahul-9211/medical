import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import websiteData from "@/data/websiteData.json";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackgroundCarousel from "@/components/BackgroundCarousel";

interface Section {
  heading: string;
  points: string[];
}

interface CTA {
  title: string;
  description: string;
  button: string;
  features: string[];
}

interface AyurvedaPageData {
  slug: string;
  title: string;
  h1: string;
  intro: string;
  sections: Section[];
  cta: CTA[];
}

const AyurvedaSlugPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Ayurveda/${slug}.json`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load Ayurveda JSON");
  const data: AyurvedaPageData = await res.json();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50/80">
      <Header navigation={websiteData.navigation} siteInfo={websiteData.siteInfo} />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <BackgroundCarousel />
          
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#7AE5F5]/20 to-[#56DDEF]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-yellow-200/20 to-[#7AE5F5]/20 rounded-full blur-3xl"></div>

          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-full mb-6 shadow-lg text-4xl backdrop-blur-sm">
              🧘
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">{data.title}</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white/90 drop-shadow-md">{data.h1}</h2>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed backdrop-blur-sm bg-black/10 p-6 rounded-2xl">{data.intro}</p>
          </div>
        </section>

        {/* Sections */}
        {data.sections.map((section, idx) => (
          <section key={idx} className="relative overflow-hidden py-20 bg-gradient-to-br from-gray-50 via-white to-green-50">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 via-teal-600/5 to-cyan-600/5"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-green-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
            
            <div className="relative max-w-7xl mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">{section.heading}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.points.map((point, pidx) => {
                  const color = pidx % 3 === 0 ? 'hover:border-[#7AE5F5] group-hover:text-[#7AE5F5]' : 
                               pidx % 3 === 1 ? 'hover:border-[#56DDEF] group-hover:text-[#56DDEF]' : 
                               'hover:border-green-500 group-hover:text-green-600';
                  const bgColor = pidx % 3 === 0 ? 'bg-[#7AE5F5]/10' : 
                                 pidx % 3 === 1 ? 'bg-[#56DDEF]/10' : 
                                 'bg-green-100/50';
                  return (
                    <div key={pidx} className={`group bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20 relative overflow-hidden ${color}`}>
                      {/* Hover Effect Background */}
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${bgColor}`}></div>
                      <div className="relative z-10">
                        <p className="text-gray-700 group-hover:text-gray-900 text-lg transition-colors duration-300">{point}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        {data.cta.map((ctaItem, idx) => (
          <section key={idx} className="relative overflow-hidden py-20 bg-gradient-to-br from-gray-50 via-white to-green-50">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#7AE5F5]/10 via-white to-[#56DDEF]/10"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#7AE5F5]/20 to-[#56DDEF]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-yellow-200/20 to-[#7AE5F5]/20 rounded-full blur-3xl"></div>
            
            <div className="relative max-w-6xl mx-auto px-6 text-center">
              <div className="mb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6 shadow-lg text-4xl transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
                  📩
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{ctaItem.title}</h2>
                <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-3xl mx-auto">{ctaItem.description}</p>
              </div>

              {ctaItem.button && (
                <div className="mb-16">
                  <Link
                    href="#"
                    className="inline-flex items-center px-8 py-4 bg-[#56DDEF] text-white font-semibold rounded-xl hover:bg-[#56DDEF]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg group"
                  >
                    <span>{ctaItem.button}</span>
                    <svg className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              )}

              {ctaItem.features && ctaItem.features.length > 0 && (
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
                  <ul className="space-y-3 text-lg text-gray-700 max-w-3xl mx-auto">
                    {ctaItem.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-center justify-center group">
                        <span className="text-[#56DDEF] mr-3 transform transition-transform group-hover:scale-110">✨</span>
                        <span className="transition-colors duration-300 group-hover:text-gray-900">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        ))}
      </main>

      <Footer footer={websiteData.footer} />
      <WhatsAppButton />
    </div>
  );
};

export default AyurvedaSlugPage;
