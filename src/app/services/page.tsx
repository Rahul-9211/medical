import React from "react";
import Link from "next/link";
import BackgroundCarousel from '@/components/BackgroundCarousel';

interface Service {
  title: string;
  description: string;
  url : string
}

interface CTA {
  text: string;
  buttonText: string;
  link: string;
  features: string[];
}

interface PatientServicesData {
  name: string;
  headline: string;
  intro: string;
  highlights: string[];
  services: Service[];
  whyChooseUs: string[];
  cta: CTA;
}

const PatientServicesPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/patientservices/patientservices.json`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load patient services JSON");
  const data: PatientServicesData = await res.json();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50/80">
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <BackgroundCarousel />
          
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-full mb-6 shadow-lg text-4xl backdrop-blur-sm">
              🌟
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{data.headline}</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">{data.intro}</p>
            <Link
              href={data.cta.link}
              className="px-8 py-4 bg-[#56DDEF] text-white font-semibold rounded-xl hover:bg-[#56DDEF]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-md sm:text-lg"
            >
              {data.cta.buttonText}
            </Link>
          </div>
        </section>

        {/* Highlights Grid */}
        <section className="relative overflow-hidden py-20 bg-gradient-to-br from-gray-50 via-white to-green-50">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 via-teal-600/5 to-cyan-600/5"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-green-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {data.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className={`group bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-white/20 relative overflow-hidden ${
                    idx % 3 === 0 ? 'hover:border-[#7AE5F5]' : 
                    idx % 3 === 1 ? 'hover:border-[#56DDEF]' : 
                    'hover:border-green-500'
                  }`}
                >
                  {/* Hover Effect Background */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    idx % 3 === 0 ? 'bg-[#7AE5F5]/10' : 
                    idx % 3 === 1 ? 'bg-[#56DDEF]/10' : 
                    'bg-green-100/50'
                  }`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <div className="text-3xl mb-4">
                      {idx % 3 === 0 ? '✨' : idx % 3 === 1 ? '🌟' : '💫'}
                    </div>
                    <p className={`font-semibold text-lg transition-colors duration-300 ${
                      idx % 3 === 0 ? 'group-hover:text-[#7AE5F5]' : 
                      idx % 3 === 1 ? 'group-hover:text-[#56DDEF]' : 
                      'group-hover:text-green-600'
                    }`}>
                      {highlight}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Our Patient Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.services.map((service, idx) => (
              <Link href={`/services/${service.url}`} key={idx}>
                <div
                  className={`group cursor-pointer bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border border-white/20 relative overflow-hidden ${
                    idx % 3 === 0 ? 'hover:border-[#7AE5F5]' : 
                    idx % 3 === 1 ? 'hover:border-[#56DDEF]' : 
                    'hover:border-green-500'
                  }`}
                >
                  {/* Hover Effect Background */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    idx % 3 === 0 ? 'bg-[#7AE5F5]/10' : 
                    idx % 3 === 1 ? 'bg-[#56DDEF]/10' : 
                    'bg-green-100/50'
                  }`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="text-3xl mb-4">
                      {idx % 3 === 0 ? '🌟' : idx % 3 === 1 ? '✨' : '💫'}
                    </div>
                    
                    <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                      idx % 3 === 0 ? 'group-hover:text-[#7AE5F5]' : 
                      idx % 3 === 1 ? 'group-hover:text-[#56DDEF]' : 
                      'group-hover:text-green-600'
                    }`}>
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}

            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Patients Trust Us</h2>
            <ul className="space-y-3 text-lg text-gray-700">
              {data.whyChooseUs.map((item, idx) => (
                <li key={idx} className="flex items-center justify-center">
                  <span className="text-[#56DDEF] mr-3">✅</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-green-50/80">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-2xl font-bold mb-6 text-gray-900">{data.cta.text}</p>
            <Link
              href={data.cta.link}
              className="inline-block px-8 py-4 bg-[#56DDEF] text-white font-semibold rounded-xl hover:bg-[#56DDEF]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-md sm:text-lg mb-8"
            >
              {data.cta.buttonText}
            </Link>
            <div className="flex flex-wrap gap-4 justify-center">
              {data.cta.features.map((feature, idx) => (
                <span key={idx} className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-[#56DDEF] text-sm border border-[#56DDEF]/20">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default PatientServicesPage;
