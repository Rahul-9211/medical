import React from "react";
import websiteData from "@/data/websiteData.json";
import QuoteForm from "@/components/QuoteForm";

interface Hospital {
  id: string;
  name: string;
  specialties: string[];
  rating?: {
    value: number;
    reviews: number;
  };
  url : string;
  accreditations?: string[];
  beds?: number;
  established?: string;
  patientsRecommended?: {
    percent: number;
  };
  media?: {
    images: {
      url: string;
      visible: boolean;
    }[];
  };
}

interface HospitalData {
  title: string;
  subtitle: string;
  introduction: string;
  whyChooseUs: string[];
  cta: {
    text: string;
    url: string;
  };
}

const HospitalPage = async () => {
  // List of hospital IDs from the public folder
  const hospitalIds = [
    'artemis',
    'ck-birla',
    'fortis-memorial',
    'manipal',
    'marengo-asia',
    'max-super-speciality',
    'medanta',
    'paras'
  ];

  // Fetch all hospitals data
  const hospitals: Hospital[] = [];
  for (const id of hospitalIds) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/hospitaldata/${id}.json`, { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      hospitals.push({
        id,
        ...data
      });
    }
  }

  // Create page data (since we don't have page.json)
  const pageData: HospitalData = {
    title: "Leading Hospitals in India",
    subtitle: "World-Class Healthcare Facilities",
    introduction: "Discover India's premier hospitals offering advanced medical treatments, state-of-the-art facilities, and exceptional patient care. Our network includes JCI-accredited hospitals with internationally trained doctors and modern medical technology.",
    whyChooseUs: [
      "Internationally Accredited Facilities",
      "World-Renowned Medical Experts",
      "Latest Medical Technology",
      "Comprehensive Care Programs",
      "Affordable Treatment Costs",
      "Dedicated Patient Support",
      "High Success Rates",
      "Multi-Specialty Hospitals"
    ],
    cta: {
      text: "Get Free Consultation",
      url: "/free-consultation"
    }
  };

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50/80">

        {/* Page Layout with Sidebar */}
        <main className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 bg-gradient-to-br from-gray-50 via-white to-green-50/80">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#7AE5F5]/20 to-[#56DDEF]/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-yellow-200/20 to-[#7AE5F5]/20 rounded-full blur-3xl"></div>
              
              <div className="relative max-w-4xl mx-auto px-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white rounded-full mb-6 shadow-lg text-4xl">
                🏥
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">{pageData.title}</h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-4">{pageData.subtitle}</p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">{pageData.introduction}</p>
            </div>
          </section>

          {/* Hospitals Grid */}
          <section className="relative overflow-hidden py-20 bg-gradient-to-br from-gray-50 via-white to-green-50">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 via-teal-600/5 to-cyan-600/5"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-green-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
            
            <div className="relative max-w-7xl mx-auto px-6">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full mb-4 shadow-lg text-2xl">
                  🌟
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured Hospitals</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {hospitals.map((hospital, i) => {
                  const color = getCardColor(i);
                  const imageUrl = hospital.media?.images?.find(img => img.visible)?.url || 
                    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80";

                  return (
                    <a
                      key={hospital.id}
                      href={`${hospital.url}`}
                      className={`group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden ${color.hover}`}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={imageUrl} 
                          alt={hospital.name || 'Hospital Image'}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                        {hospital.rating?.value && hospital.rating?.reviews && (
                          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-sm font-medium">
                            ⭐ {hospital.rating.value} ({hospital.rating.reviews} reviews)
                          </div>
                        )}
                      </div>
                      
                      <div className="p-6">
                        <h3 className={`text-xl font-bold mb-2 group-hover:${color.text} transition-colors duration-300`}>
                          {hospital.name}
                        </h3>
                        {hospital.specialties && hospital.specialties.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {hospital.specialties.slice(0, 3).map((specialty, j) => (
                              <span key={j} className={`text-sm px-2 py-1 rounded-full ${color.bg}`}>
                                {specialty}
                              </span>
                            ))}
                            {hospital.specialties.length > 3 && (
                              <span className="text-sm px-2 py-1 rounded-full bg-gray-100">
                                +{hospital.specialties.length - 3} more
                              </span>
                            )}
                          </div>
                        )}
                        {hospital.accreditations && (
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <span>🏆</span>
                            <span>{hospital.accreditations.length} Accreditations</span>
                          </div>
                        )}
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="py-20 bg-white">
            <div className="max-w-5xl mx-auto px-6">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full mb-4 shadow-lg text-2xl">
                  ✨
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Why Choose Our Network?</h2>
              </div>
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {pageData.whyChooseUs.map((point, i) => {
                    const color = getCardColor(i);
                    return (
                      <div key={i} className="flex items-start space-x-3">
                        <span className={`flex-shrink-0 ${color.text}`}>
                          {i % 4 === 0 ? '🏥' : i % 4 === 1 ? '👨‍⚕️' : i % 4 === 2 ? '🌟' : '💰'}
                        </span>
                        <span className="text-gray-700">{point}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-br from-[#7AE5F5]/20 via-white to-[#56DDEF]/20 py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/50"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#7AE5F5]/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#56DDEF]/30 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl"></div>
            
            <div className="relative max-w-4xl mx-auto px-6 text-center">
              <div className="mb-16">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6 shadow-lg text-4xl">
                  📞
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Need Help Choosing?</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                  Our medical experts are here to help you find the right hospital for your specific needs.
                </p>
                <a
                  href={pageData.cta.url}
                  className="inline-block px-8 py-4 bg-[#56DDEF] text-white font-semibold rounded-xl hover:bg-[#56DDEF]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
                >
                  {pageData.cta.text}
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Right: Quote Form Sidebar */}
        <aside>
          <div className="sticky top-28">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 lg:p-6 shadow-2xl border border-white/20">
              <QuoteForm 
                quoteForm={websiteData.quoteForm} 
                countries={websiteData.countries}
                pageSource="Hospital Page Lead"
              />
            </div>
          </div>
        </aside>
      </main>

    </div>
  );
};

export default HospitalPage;
