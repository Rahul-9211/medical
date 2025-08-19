import Link from 'next/link';
import { JSX } from 'react';

interface Specialty {
  name: string;
  icon: string;
  url: string;
  description: string;
}

interface SpecialtiesSectionProps {
  specialties: {
    title: string;
    list: Specialty[];
  };
}

export default function SpecialtiesSection({ specialties }: SpecialtiesSectionProps) {
  const treatments = [
    {
      icon: "❤️",
      name: "Heart Surgery & Cardiology",
      price: "from $4,000",
      description: "Advanced cardiac procedures with world-class surgeons"
    },
    {
      icon: "🦴",
      name: "Joint Replacement (Knee/Hip)",
      price: "from $3,800",
      description: "Minimally invasive joint replacement surgeries"
    },
    {
      icon: "🎗️",
      name: "Cancer Treatment (Oncology)",
      price: "up to 60% cheaper",
      description: "Comprehensive cancer care with latest technology"
    },
    {
      icon: "🧬",
      name: "IVF & Fertility Treatments",
      price: "starting $2,500",
      description: "Advanced fertility solutions with high success rates"
    },
    {
      icon: "🫀",
      name: "Liver & Kidney Transplants",
      price: "cost-effective & safe",
      description: "Organ transplantation with expert teams"
    },
    {
      icon: "💅",
      name: "Plastic & Cosmetic Surgery",
      price: "world-class results, affordable rates",
      description: "Aesthetic procedures with natural-looking outcomes"
    }
  ];

  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-br from-gray-50 via-white to-orange-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 via-red-600/5 to-orange-600/5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-400/10 to-red-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 via-red-500 to-teal-500 rounded-full mb-6 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Top Medical Treatments in India
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Low-Cost, High-Quality Treatments Across 20+ Specialties
          </p>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-orange-200 relative overflow-hidden"
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="text-4xl mb-4">{treatment.icon}</div>
                
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300 mb-3">
                  {treatment.name}
                </h3>
                
                <div className="text-2xl font-bold text-orange-600 mb-3">
                  {treatment.price}
                </div>
                
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed mb-4">
                  {treatment.description}
                </p>
                
                {/* Learn More Link */}
                <Link
                  href={`/treatments/${treatment.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-orange-600 group-hover:text-orange-700 transition-colors duration-300 font-medium"
                >
                  Learn More
                  <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-lg">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 via-red-500 to-teal-500 rounded-full mb-6 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Specific Treatment?
            </h3>
            
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
              Our medical coordinators can help you find the best doctors and hospitals for your specific medical needs with personalized care.
            </p>
            
            <Link
              href="/treatments"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-700 hover:via-red-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
            >
              Explore All Treatments
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