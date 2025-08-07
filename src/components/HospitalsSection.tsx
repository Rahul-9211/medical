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

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {hospitals.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {hospitals.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hospitals.countries.map((country) => (
            <div key={country.country} className="bg-white rounded-xl shadow-md p-6 relative">
              {/* Country Flag */}
              <div className="absolute top-4 right-4 w-8 h-6 rounded overflow-hidden">
                <img 
                  src={`/flags/${country.country.toLowerCase()}.svg`} 
                  alt={`${country.country} flag`}
                  className="w-full h-full object-cover"
                  onError={() => handleImageError(`flag-${country.country}`)}
                />
              </div>
              
              {/* Country Name */}
              <h3 className="text-xl font-bold text-gray-900 mb-6 pr-16">
                {country.country}
              </h3>
              
              {/* Hospitals Grid */}
              <div className="grid grid-cols-2 gap-4">
                {country.hospitals.map((hospital) => (
                  <Link
                    key={hospital.name}
                    href={hospital.url}
                    className="group bg-gray-50 rounded-lg p-4 hover:bg-blue-50 transition-all duration-200"
                  >
                    <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-3">
                      {imageErrors[`hospital-${hospital.name}`] ? (
                        <div className="w-full h-full bg-blue-100 flex items-center justify-center">
                          <span className="text-blue-600 font-bold text-sm">
                            {hospital.name.charAt(0)}
                          </span>
                        </div>
                      ) : (
                        <img 
                          src={hospital.image} 
                          alt={hospital.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                          onError={() => handleImageError(`hospital-${hospital.name}`)}
                        />
                      )}
                    </div>
                    <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                      {hospital.name}
                    </h4>
                    <p className="text-xs text-gray-600">
                      {hospital.city}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 