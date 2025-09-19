import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import websiteData from "@/data/websiteData.json";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackgroundCarousel from "@/components/BackgroundCarousel";

interface Therapy {
  name: string;
  description: string;
}

interface Cost {
  package: string;
  price: string;
}

interface PanchakarmaData {
  name: string;
  headline: string;
  intro: string;
  why_choose?: string[];
  benefits?: string[];
  core_therapies?: Therapy[];
  therapies?: Therapy[];
  supportive_therapies?: string[];
  why_choose_india?: string[];
  costs?: Cost[];
  cta: {
    text: string;
    url: string;
    features: string[];
  };
}

const AyurvedaSlugPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Ayurveda/${slug}.json`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load Ayurveda JSON");
  const data: PanchakarmaData = await res.json();

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
        <section className="relative overflow-hidden py-20">
          <BackgroundCarousel />
          
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-full mb-6 shadow-lg text-4xl backdrop-blur-sm">
              🧘
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{data.name}</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white/90">{data.headline}</h2>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">{data.intro}</p>
          </div>
        </section>

        {/* Why Choose */}
        {data.why_choose && data.why_choose.length > 0 && (
          <section className="relative overflow-hidden py-20 bg-gradient-to-br from-gray-50 via-white to-green-50">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 via-teal-600/5 to-cyan-600/5"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-green-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
            
            <div className="relative max-w-5xl mx-auto px-6">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full mb-4 shadow-lg text-2xl">
                  🌿
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Ayurveda in India</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.why_choose.map((item, idx) => (
                  <div key={idx} className={`group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden ${
                    idx % 2 === 0 ? 'hover:border-[#7AE5F5]' : 'hover:border-[#56DDEF]'
                  }`}>
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      idx % 2 === 0 ? 'bg-[#7AE5F5]/10' : 'bg-[#56DDEF]/10'
                    }`}></div>
                    <div className="relative z-10 flex items-start">
                      <span className={`flex-shrink-0 text-2xl mr-4 ${
                        idx % 2 === 0 ? 'text-[#7AE5F5]' : 'text-[#56DDEF]'
                      }`}>
                        {idx % 2 === 0 ? '🌟' : '✨'}
                      </span>
                      <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Benefits */}
        {data.benefits && data.benefits.length > 0 && (
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#7AE5F5] to-[#56DDEF] rounded-full mb-4 shadow-lg">
                  <span className="text-2xl">✨</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Benefits of Ayurveda</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.benefits.map((item, idx) => (
                  <div key={idx} className="group bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-8">
                    <div className="flex items-center mb-4">
                      <span className={`text-2xl ${
                        idx % 3 === 0 ? 'text-[#7AE5F5]' : 
                        idx % 3 === 1 ? 'text-[#56DDEF]' : 
                        'text-green-500'
                      }`}>
                        {idx % 3 === 0 ? '🌿' : idx % 3 === 1 ? '🎯' : '💫'}
                      </span>
                    </div>
                    <p className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Core Therapies */}
        <section className="relative overflow-hidden py-20 bg-gradient-to-br from-gray-50 via-white to-green-50">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 via-teal-600/5 to-cyan-600/5"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-green-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
              {data.core_therapies ? 'Core Panchakarma Therapies' : 'Ayurvedic Therapies'}
            </h2>
            <div className={`grid grid-cols-1 md:grid-cols-2 ${(data.core_therapies || data.therapies || []).length >= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-6`}>
              {(data.core_therapies || data.therapies || []).map((therapy: any, idx: number) => {
                const color = getCardColor(idx);
                return (
                  <div key={idx} className={`group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden ${color.hover}`}>
                    <h3 className={`text-xl font-bold mb-3 ${color.text}`}>{therapy.name}</h3>
                    <p className="text-gray-600 leading-relaxed">{therapy.description}</p>
                  </div>
                );
              })}
            </div>
            {data.supportive_therapies && (
              <div className="mt-6 bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <p className="text-gray-700">
                  <span className="font-semibold">Supportive therapies include:</span> {data.supportive_therapies.join(", ")}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Why Choose India */}
        {data.why_choose_india && (
          <section className="py-20 bg-white">
            <div className="max-w-5xl mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Choose Ayurveda in India?</h2>
              <ul className="space-y-3 text-lg text-gray-700">
                {data.why_choose_india.map((item, idx) => (
                  <li key={idx} className="flex items-center justify-center">
                    <span className="text-[#56DDEF] mr-3">✅</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Cost Section */}
        {data.costs && data.costs.length > 0 && (
          <section className="py-20 bg-white">
            <div className="max-w-5xl mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Cost of Ayurveda Therapy</h2>
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <ul className="space-y-3 text-lg text-gray-700">
                  {data.costs.map((item, idx) => (
                    <li key={idx} className="flex items-center justify-center">
                      <span className="text-[#56DDEF] mr-3">💰</span>
                      <strong className="text-gray-900">{item.package}:</strong> <span className="ml-2">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="bg-gradient-to-br from-[#7AE5F5]/20 via-white to-[#56DDEF]/20 py-20 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-white/50"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#7AE5F5]/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#56DDEF]/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-6xl mx-auto px-6 text-center">
            {/* Header */}
            <div className="mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6 shadow-lg text-4xl">
                📩
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{data.cta.text}</h2>
            </div>

            {/* Main CTA */}
            <div className="mb-16">
              <Link
                href={data.cta.url}
                className="px-8 py-4 bg-[#56DDEF] text-white font-semibold rounded-xl hover:bg-[#56DDEF]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
              >
                {data.cta.text}
              </Link>
            </div>

            {/* Features */}
            <ul className="space-y-3 text-lg text-gray-700">
              {data.cta.features.map((feature, idx) => (
                <li key={idx} className="flex items-center justify-center">
                  <span className="text-[#56DDEF] mr-3">✅</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer footer={websiteData.footer} />
      <WhatsAppButton></WhatsAppButton>
    </div>
  );
};

export default AyurvedaSlugPage;
