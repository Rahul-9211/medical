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

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            {destinations.title}
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            {destinations.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
          {destinations.countries.map((country) => (
            <Link
              key={country.name}
              href={country.url}
              className="group bg-white rounded-lg px-4 py-6 hover:bg-blue-50 transition-all duration-200 border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md flex flex-col items-center space-y-3"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-100 group-hover:border-blue-200 transition-colors duration-200">
                {imageErrors[country.name] ? (
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center border-2 border-gray-100 group-hover:border-blue-200 transition-colors duration-200">
                    <span className="text-lg font-bold text-blue-600">{country.name.charAt(0)}</span>
                  </div>
                ) : (
                  <img 
                    src={`/flags/${country.name.toLowerCase()}.svg`} 
                    alt={`${country.name} flag`}
                    className="w-full h-full object-cover"
                    onError={() => handleImageError(country.name)}
                  />
                )}
              </div>
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 text-center">
                {country.name}
              </h3>
            </Link>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-8 bg-gray-50 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-sm font-semibold text-gray-900 mb-1">Top Hospitals</h4>
              <p className="text-gray-600 text-xs">
                Internationally accredited facilities
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h4 className="text-sm font-semibold text-gray-900 mb-1">Expert Doctors</h4>
              <p className="text-gray-600 text-xs">
                World-renowned specialists
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h4 className="text-sm font-semibold text-gray-900 mb-1">Affordable Costs</h4>
              <p className="text-gray-600 text-xs">
                60-80% lower than Western countries
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 