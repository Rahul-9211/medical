'use client';

import Link from 'next/link';
import Image from 'next/image';

interface Hospital {
  name: string;
  location: string;
  image: string;
  url: string;
  description: string;
}

interface HospitalsSectionProps {
  hospitals: {
    title: string;
    list: Hospital[];
  };
}

export default function HospitalsSection({ hospitals }: HospitalsSectionProps) {
  // Function to get Unsplash hospital images
  const getHospitalImage = (index: number) => {
    const hospitalImages = [
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=450&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=450&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=450&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=450&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1576091160399-112c8f9c6b9c?w=800&h=450&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=450&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=450&fit=crop&crop=center'
    ];
    return hospitalImages[index % hospitalImages.length];
  };

  return (
    <section className="bg-white from-green-50 via-white to-teal-50 py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white rounded-full mb-6 shadow-lg text-3xl sm:text-4xl">
          🏥
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            {hospitals.title}
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Get Treated at India's Top JCI & NABH-Accredited Hospitals
          </p>
        </div>

        {/* Hospitals Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-16">
          {hospitals.list.map((hospital, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Hospital Image */}
              <div className="aspect-video rounded-t-2xl overflow-hidden mb-4 relative">
                <Image 
                  src={getHospitalImage(index)} 
                  alt={`${hospital.name} hospital`}
                  width={400}
                  height={225}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={() => {
                    // Fallback to colored background if image fails to load
                    const fallback = document.querySelector(`[data-fallback="${index}"]`) as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                {/* Fallback colored background */}
                <div 
                  data-fallback={index}
                  className={`w-full h-full hidden items-center justify-center ${
                    index % 4 === 0 ? 'bg-[#7AE5F5]/20' : 
                    index % 4 === 1 ? 'bg-[#56DDEF]/20' : 
                    index % 4 === 2 ? 'bg-yellow-100' :
                    'bg-green-100'
                  }`}
                >
                  <span className={`font-bold text-xl sm:text-2xl ${
                    index % 4 === 0 ? 'text-[#7AE5F5]' : 
                    index % 4 === 1 ? 'text-[#56DDEF]' : 
                    index % 4 === 2 ? 'text-yellow-600' :
                    'text-green-600'
                  }`}>
                    {hospital.name.charAt(0)}
                  </span>
                </div>
                {/* Hover Overlay */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  index % 4 === 0 ? 'bg-[#7AE5F5]/20' : 
                  index % 4 === 1 ? 'bg-[#56DDEF]/20' : 
                  index % 4 === 2 ? 'bg-yellow-400/20' :
                  'bg-green-400/20'
                }`}></div>
              </div>
              
              {/* Hospital Info */}
              <div className="p-4 sm:p-6">
                <h4 className={`text-base sm:text-lg md:text-xl font-bold text-gray-900 transition-colors duration-300 mb-2 ${
                  index % 4 === 0 ? 'group-hover:text-[#7AE5F5]' : 
                  index % 4 === 1 ? 'group-hover:text-[#56DDEF]' : 
                  index % 4 === 2 ? 'group-hover:text-yellow-500' :
                  'group-hover:text-green-600'
                }`}>
                  {hospital.name}
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  {hospital.location}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {hospital.description}
                </p>
                
                {/* Accreditation Badge */}
                <div className={`flex items-center text-xs font-medium ${
                  index % 4 === 0 ? 'text-[#7AE5F5]' : 
                  index % 4 === 1 ? 'text-[#56DDEF]' : 
                  index % 4 === 2 ? 'text-yellow-500' :
                  'text-green-600'
                }`}>
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  JCI & NABH Accredited
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-[#7AE5F5]/10 rounded-3xl p-8 border border-[#7AE5F5]/30 shadow-lg">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Ready to Choose Your Hospital?
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
              Our medical coordinators will help you select the best hospital based on your specific treatment needs, budget, and preferences.
            </p>
            <Link
              href="/hospital"
              className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-[#56DDEF] text-white font-semibold rounded-xl hover:bg-[#56DDEF]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-base sm:text-lg"
            >
              See All Hospitals
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