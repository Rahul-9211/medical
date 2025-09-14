import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import websiteData from "@/data/websiteData.json";

interface PatientServiceData {
  name: string;
  description: string;
  highlights?: string[];         // Key points / bullet list
  travelSupport?: string[];     // Optional, only for services like Visa, Pickup, etc.
  whyChooseUs?: string[];
  postTreatmentServices : string[];
  cost: string[];
  cta: {
    text: string;
    url: string;
  };
}


interface PageProps {
    slug: string;
}

const PatientServicePage = async ({ params }: { params: Promise<PageProps> }) => {
  const { slug } =await params;

  // Fetch JSON file from public folder
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/patientservices/${slug}.json`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load service data");
  const data: PatientServiceData = await res.json();

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
              {slug === 'medical-visa-travel' ? '🛂' :
               slug === 'airport-pickup' ? '🚗' :
               slug === 'accommodation' ? '🏨' :
               slug === 'assistance' ? '🤝' :
               slug === 'affordable-treatment' ? '💰' :
               slug === 'air-ambulance' ? '🚁' :
               slug === 'post-treatment-recovery' ? '🏥' :
               slug === 'second-opinion' ? '👨‍⚕️' : '🌟'}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">{data.name}</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">{data.description}</p>
            <a
              href={data.cta.url}
              className="inline-block px-8 py-4 bg-[#56DDEF] text-white font-semibold rounded-xl hover:bg-[#56DDEF]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
            >
              {data.cta.text}
            </a>
          </div>
        </section>

        {/* Highlights Section */}
        {data.highlights && data.highlights.length > 0 && (
          <section className="relative overflow-hidden py-20 bg-gradient-to-br from-gray-50 via-white to-green-50">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 via-teal-600/5 to-cyan-600/5"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-green-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
            
            <div className="relative max-w-7xl mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">Key Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.highlights.map((highlight, i) => {
                  const color = getCardColor(i);
                  return (
                    <div key={i} className={`group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden ${color.hover}`}>
                      <div className="text-3xl mb-4">
                        {slug === 'medical-visa-travel' ? ['📋', '✈️', '🛂', '📅'][i % 4] :
                         slug === 'airport-pickup' ? ['🚗', '🛬', '📍', '⏰'][i % 4] :
                         slug === 'accommodation' ? ['🏨', '🛏️', '🍽️', '🏥'][i % 4] :
                         slug === 'assistance' ? ['🤝', '📱', '💬', '📋'][i % 4] :
                         slug === 'affordable-treatment' ? ['💰', '💳', '📊', '🏥'][i % 4] :
                         slug === 'air-ambulance' ? ['🚁', '👨‍⚕️', '🏥', '⚡'][i % 4] :
                         slug === 'post-treatment-recovery' ? ['🏥', '👨‍⚕️', '💪', '❤️'][i % 4] :
                         slug === 'second-opinion' ? ['👨‍⚕️', '🔍', '📋', '💡'][i % 4] :
                         ['⭐', '✨', '🌟', '💫'][i % 4]}
                      </div>
                      <p className={`text-lg ${color.text}`}>{highlight}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Travel Support Section */}
        {data.travelSupport && data.travelSupport.length > 0 && (
          <section className="py-20 bg-white">
            <div className="max-w-5xl mx-auto px-6">
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Travel Support</h2>
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {data.travelSupport.map((item, i) => {
                    const color = getCardColor(i);
                    return (
                      <div key={i} className="flex items-start space-x-3">
                        <span className={`flex-shrink-0 ${color.text}`}>
                          {slug === 'medical-visa-travel' ? ['🛂', '✈️', '📋', '🌍'][i % 4] :
                           slug === 'airport-pickup' ? ['🚗', '🛬', '📍', '🧳'][i % 4] :
                           slug === 'accommodation' ? ['🏨', '🛏️', '🍽️', '🚕'][i % 4] :
                           slug === 'assistance' ? ['🤝', '📱', '🌍', '💼'][i % 4] :
                           slug === 'affordable-treatment' ? ['💰', '💳', '🏥', '📊'][i % 4] :
                           slug === 'air-ambulance' ? ['🚁', '🚑', '👨‍⚕️', '🌍'][i % 4] :
                           slug === 'post-treatment-recovery' ? ['🏥', '👨‍⚕️', '🍲', '🏡'][i % 4] :
                           slug === 'second-opinion' ? ['👨‍⚕️', '🔍', '📱', '📋'][i % 4] :
                           ['✈️', '🌍', '🏥', '🤝'][i % 4]}
                        </span>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Choose Us</h2>
            <ul className="space-y-3 text-lg text-gray-700">
              {data.whyChooseUs && data.whyChooseUs.map((item, i) => (
                <li key={i} className="flex items-center justify-center">
                  <span className="text-[#56DDEF] mr-3">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Cost Section */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Cost Details</h2>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.cost.map((item, i) => {
                  const color = getCardColor(i);
                  return (
                    <div key={i} className="flex items-start space-x-3">
                      <span className={`flex-shrink-0 ${color.text}`}>
                        {slug === 'medical-visa-travel' ? ['💳', '💰', '📊', '💵'][i % 4] :
                         slug === 'airport-pickup' ? ['🚗', '💰', '💳', '📊'][i % 4] :
                         slug === 'accommodation' ? ['🏨', '💰', '💳', '📊'][i % 4] :
                         slug === 'assistance' ? ['🤝', '💰', '💳', '📊'][i % 4] :
                         slug === 'affordable-treatment' ? ['💰', '💳', '📊', '💵'][i % 4] :
                         slug === 'air-ambulance' ? ['🚁', '💰', '💳', '📊'][i % 4] :
                         slug === 'post-treatment-recovery' ? ['🏥', '💰', '💳', '📊'][i % 4] :
                         slug === 'second-opinion' ? ['👨‍⚕️', '💰', '💳', '📊'][i % 4] :
                         ['💰', '💳', '📊', '💵'][i % 4]}
                      </span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-[#7AE5F5]/20 via-white to-[#56DDEF]/20 py-20 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-white/50"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#7AE5F5]/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#56DDEF]/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-6xl mx-auto px-6 text-center">
            <div className="mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6 shadow-lg text-4xl">
                📩
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
                Take the first step towards your healthcare journey. Our team is here to help you every step of the way.
              </p>
              <a
                href={data.cta.url}
                className="inline-block px-8 py-4 bg-[#56DDEF] text-white font-semibold rounded-xl hover:bg-[#56DDEF]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
              >
                {data.cta.text}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer footer={websiteData.footer} />
    </div>
  );
};

export default PatientServicePage;
