'use client';

import Link from 'next/link';
import { useState } from 'react';

interface Hospital {
  name: string;
  city: string;
  image: string;
  url: string;
}

interface CountryHospitals {
  country: string;
  flag: string;
  hospitals: Hospital[];
}

interface HospitalsSectionProps {
  hospitals: {
    title: string;
    subtitle: string;
    countries: CountryHospitals[];
  };
}

export default function HospitalsSection({ hospitals }: HospitalsSectionProps) {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (imageKey: string) => {
    setImageErrors(prev => ({ ...prev, [imageKey]: true }));
  };

  // Filter only India
  const indiaData = hospitals.countries.find(country => country.country === 'India');

  if (!indiaData) {
    return null; // Don't render if India data is not available
  }

  return (
    <section className="bg-white from-blue-50 via-white to-purple-50 py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mb-6 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Top Hospitals in India
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We partner with the most prestigious and accredited hospitals across India, ensuring you receive world-class medical care with unmatched expertise.
          </p>
        </div>

        {/* India Hospitals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {indiaData.hospitals.map((hospital) => (
            <Link
              key={hospital.name}
              href={hospital.url}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl overflow-hidden mb-4 relative">
                {imageErrors[`hospital-${hospital.name}`] ? (
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-2xl">
                      {hospital.name.charAt(0)}
                    </span>
                  </div>
                ) : (
                  <img 
                    src={hospital.image} 
                    alt={hospital.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={() => handleImageError(`hospital-${hospital.name}`)}
                  />
                )}
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {hospital.name}
                </h4>
                <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {hospital.city}
                </p>
                <div className="flex items-center text-xs text-blue-600 font-medium">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  JCI Accredited
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Hospital Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">JCI Accredited</h4>
            <p className="text-gray-600 text-sm">All our partner hospitals are internationally accredited for quality and safety standards.</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Quick Access</h4>
            <p className="text-gray-600 text-sm">Immediate appointments with top specialists, no waiting lists or delays.</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Cost Effective</h4>
            <p className="text-gray-600 text-sm">World-class treatment at 60-80% lower costs compared to Western countries.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-lg">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mb-6 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Choose Your Hospital in India?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get personalized recommendations and connect with our medical coordinators to find the perfect hospital for your treatment in India.
            </p>
            <Link
              href="/hospitals/india"
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore Indian Hospitals
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