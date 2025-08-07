'use client';

import Link from 'next/link';
import { useState } from 'react';

interface Patient {
  name: string;
  image: string;
  story: string;
}

interface TestimonialsSectionProps {
  testimonials: {
    title: string;
    subtitle: string;
    googleRating: number;
    totalPatients: string;
    testimonial: string;
    patients: Patient[];
  };
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const [currentPatient, setCurrentPatient] = useState(0);

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Google Rating */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-4">
              <span className="text-white text-2xl font-bold">G</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Google Rating</h3>
            <div className="flex items-center justify-center lg:justify-start mb-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(testimonials.googleRating) ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-lg font-bold text-gray-900">{testimonials.googleRating}</span>
            </div>
            <Link href="/reviews" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              See all our reviews
            </Link>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {testimonials.title}
              </h2>
              <Link
                href="/reviews"
                className="inline-flex items-center px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                View All Reviews
              </Link>
            </div>
            
            <p className="text-lg text-gray-600 mb-6">
              {testimonials.subtitle}
            </p>

            {/* Testimonial */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonials.testimonial}"
              </p>
            </div>

            {/* Patient Photos Carousel */}
            <div className="relative">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {testimonials.patients.map((patient, index) => (
                  <div
                    key={index}
                    className={`text-center cursor-pointer transition-all duration-200 ${
                      currentPatient === index ? 'transform scale-105' : ''
                    }`}
                    onClick={() => setCurrentPatient(index)}
                  >
                    <div className="w-16 h-16 mx-auto mb-2 rounded-lg overflow-hidden bg-gray-200">
                      <img
                        src={patient.image}
                        alt={patient.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<div class="w-full h-full bg-blue-100 flex items-center justify-center"><span class="text-blue-600 font-bold text-sm">${patient.name.charAt(0)}</span></div>`;
                          }
                        }}
                      />
                    </div>
                    <p className="text-sm font-medium text-gray-900">{patient.name}</p>
                  </div>
                ))}
              </div>
              
              {/* Carousel Indicator */}
              <div className="flex justify-center mt-4">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 