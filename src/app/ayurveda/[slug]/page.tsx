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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{data.title}</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white/90">{data.h1}</h2>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">{data.intro}</p>
          </div>
        </section>

        {/* Sections */}
        {data.sections.map((section, idx) => (
          <section key={idx} className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">{section.heading}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.points.map((point, pidx) => (
                  <div key={pidx} className="group bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6">
                    <p className="text-gray-700 group-hover:text-gray-900 text-lg">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        {data.cta.map((ctaItem, idx) => (
          <section key={idx} className="bg-gradient-to-br from-[#7AE5F5]/20 via-white to-[#56DDEF]/20 py-20 relative overflow-hidden">
            <div className="relative max-w-6xl mx-auto px-6 text-center">
              <div className="mb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6 shadow-lg text-4xl">
                  📩
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{ctaItem.title}</h2>
                <p className="text-lg md:text-xl text-gray-700 mb-6">{ctaItem.description}</p>
              </div>

              {ctaItem.button && (
                <div className="mb-16">
                  <Link
                    href="#"
                    className="px-8 py-4 bg-[#56DDEF] text-white font-semibold rounded-xl hover:bg-[#56DDEF]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
                  >
                    {ctaItem.button}
                  </Link>
                </div>
              )}

              {ctaItem.features && ctaItem.features.length > 0 && (
                <ul className="space-y-3 text-lg text-gray-700">
                  {ctaItem.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center justify-center">
                      <span className="text-[#56DDEF] mr-3">✅</span>
                      {feature}
                    </li>
                  ))}
                </ul>
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
