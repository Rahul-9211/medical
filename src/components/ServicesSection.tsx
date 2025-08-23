'use client';

import Link from 'next/link';

interface Service {
  name: string;
  icon: string;
  description: string;
}

interface ServicesSectionProps {
  services: {
    title: string;
    list: Service[];
  };
}

export default function ServicesSection({ services }: ServicesSectionProps) {

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-teal-50 py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-white-to-br from-orange-600/5 via-red-600/5 to-orange-600/5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-400/10 to-red-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6 shadow-lg text-4xl">
          💰
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {services.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            More Than Just Treatment — We Take Care of Everything
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.list.map((service, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-orange-200 relative overflow-hidden"
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"></div>
              
              {/* Content */}
              <div className="relative z-10 cursor-pointer">
                <div className="text-4xl mb-4">{service.icon}</div>
                
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300 mb-3">
                  {service.name}
                </h3>
                
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Experience Complete Care
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
              From the moment you contact us until your full recovery, we handle every detail of your medical journey. Focus on healing while we take care of everything else.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-700 hover:via-red-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
            >
              Explore Our Services
              <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 