import { HeartPulse, Icon } from 'lucide-react';
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
    <section className="relative overflow-hidden py-20 bg-gradient-to-br from-gray-50 via-white to-green-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-white-to-br from-green-600/5 via-teal-600/5 to-cyan-600/5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-green-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white rounded-full mb-6 shadow-lg text-3xl sm:text-4xl">
           🏥
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Top Medical Treatments in India
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Low-Cost, High-Quality Treatments Across 20+ Specialties
          </p>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-16">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className={`group bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-8 hover:shadow-xl transition-all duration-300 border border-white/20 relative overflow-hidden ${
                index % 4 === 0 ? 'hover:border-[#7AE5F5]' : 
                index % 4 === 1 ? 'hover:border-[#56DDEF]' : 
                index % 4 === 2 ? 'hover:border-yellow-400' :
                'hover:border-green-500'
              }`}
            >
              {/* Hover Effect Background */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer ${
                index % 4 === 0 ? 'bg-[#7AE5F5]/10' : 
                index % 4 === 1 ? 'bg-[#56DDEF]/10' : 
                index % 4 === 2 ? 'bg-yellow-100/50' :
                'bg-green-100/50'
              }`}></div>
              
              {/* Content */}
              <div className="relative z-10 cursor-pointer">
                <div className="text-2xl sm:text-3xl md:text-4xl mb-4">{treatment.icon}</div>
                
                <h3 className={`text-base sm:text-lg md:text-xl font-bold text-gray-900 transition-colors duration-300 mb-3 ${
                  index % 4 === 0 ? 'group-hover:text-[#7AE5F5]' : 
                  index % 4 === 1 ? 'group-hover:text-[#56DDEF]' : 
                  index % 4 === 2 ? 'group-hover:text-yellow-500' :
                  'group-hover:text-green-600'
                }`}>
                  {treatment.name}
                </h3>
                
                <div className={`text-lg sm:text-xl md:text-2xl font-bold mb-3 ${
                  index % 4 === 0 ? 'text-[#7AE5F5]' : 
                  index % 4 === 1 ? 'text-[#56DDEF]' : 
                  index % 4 === 2 ? 'text-yellow-500' :
                  'text-green-600'
                }`}>
                  {treatment.price}
                </div>
                
                <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed mb-4">
                  {treatment.description}
                </p>
                
                {/* Learn More Link */}
                <Link
                  href={`/treatments/${treatment.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`inline-flex items-center transition-colors duration-300 font-medium ${
                    index % 4 === 0 ? 'text-[#7AE5F5] group-hover:text-[#7AE5F5]/80' : 
                    index % 4 === 1 ? 'text-[#56DDEF] group-hover:text-[#56DDEF]/80' : 
                    index % 4 === 2 ? 'text-yellow-500 group-hover:text-yellow-400' :
                    'text-green-600 group-hover:text-green-500'
                  }`}
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 shadow-lg text-4xl">
          📩
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Specific Treatment?
            </h3>
            
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
              Our medical coordinators can help you find the best doctors and hospitals for your specific medical needs with personalized care.
            </p>
            
            <Link
              href="/treatments"
              className="inline-flex items-center sm:px-8 sm:py-4 px-6 py-3 bg-[#56DDEF] text-white font-semibold rounded-xl hover:bg-[#56DDEF]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
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