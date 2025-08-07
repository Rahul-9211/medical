'use client';

import Link from 'next/link';
import { useState } from 'react';

interface Country {
  name: string;
  flag: string;
  url: string;
  description: string;
}

interface DestinationsSectionProps {
  destinations: {
    title: string;
    subtitle: string;
    countries: Country[];
  };
}

export default function DestinationsSection({ destinations }: DestinationsSectionProps) {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (countryName: string) => {
    setImageErrors(prev => ({ ...prev, [countryName]: true }));
  };

  // Focus only on India
  const indiaCountry = destinations.countries.find(country => country.name === 'India');

  return (
    <section className="bg-white py-20 relative">
      {/* Section Divider */}
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mb-6 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose India for Medical Treatment?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            India has emerged as a global leader in medical tourism, offering world-class healthcare at affordable prices with unmatched expertise.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: India Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-2xl border border-blue-100">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg mr-6">
                  {imageErrors[indiaCountry?.name || ''] ? (
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center border-4 border-white">
                      <span className="text-3xl font-bold text-blue-600">I</span>
                    </div>
                  ) : (
                    <img 
                      src="/flags/india.svg" 
                      alt="India flag"
                      className="w-full h-full object-cover"
                      onError={() => handleImageError(indiaCountry?.name || '')}
                    />
                  )}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">India</h3>
                  <p className="text-lg text-gray-600">World's #1 Medical Tourism Destination</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">JCI Accredited Hospitals</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">US Trained Doctors</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">80% Cost Savings</span>
                </div>
              </div>
              
              <Link
                href="/destinations/india"
                className="inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore India's Medical Facilities
                <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right: Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">World-Class Hospitals</h4>
              <p className="text-gray-600">Over 50+ JCI accredited hospitals with state-of-the-art medical infrastructure</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Expert Doctors</h4>
              <p className="text-gray-600">US/UK trained specialists with 15+ years of international experience</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Affordable Costs</h4>
              <p className="text-gray-600">Save 60-80% compared to US/UK with same quality treatment</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Quick Treatment</h4>
              <p className="text-gray-600">No waiting lists, immediate appointments with top specialists</p>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500,000+</div>
              <div className="text-gray-700 font-medium">International Patients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-700 font-medium">JCI Accredited Hospitals</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">80%</div>
              <div className="text-gray-700 font-medium">Cost Savings</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 