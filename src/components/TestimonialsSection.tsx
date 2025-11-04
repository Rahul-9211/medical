'use client';

import Link from 'next/link';
import { useState } from 'react';

interface Patient {
  name: string;
  country: string;
  treatment: string;
  text: string;
  image: string;
}

interface TestimonialsSectionProps {
  testimonials: {
    title: string;
    subtitle: string;
    patients: Patient[];
  };
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const [currentPatient, setCurrentPatient] = useState(0);

  const patientStories = [
    {
      name: "Ahmed S.",
      country: "UAE",
      treatment: "Spine Surgery",
      text: "I was quoted $30,000 for spine surgery in the U.S. — here I paid under $6,000, and the care was exceptional."
    },
    {
      name: "Maria G.",
      country: "Kenya",
      treatment: "Cardiac Treatment",
      text: "From airport pickup to post-op recovery, they supported me like family. Highly recommended!"
    },
    {
      name: "John D.",
      country: "UK",
      treatment: "Hip Replacement",
      text: "The quality of care was outstanding and the cost was just 30% of what I would have paid back home."
    },
    {
      name: "Sarah M.",
      country: "Australia",
      treatment: "Dental Implants",
      text: "Professional service, modern facilities, and incredible savings. My dental work looks perfect!"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-green-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 text-4xl">
           💭
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Patient Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Healing Beyond Borders — Stories That Inspire
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/20 mb-12">
          <div className="text-center">
            {/* Patient Photo */}
            <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center">
              <span className="text-3xl font-bold text-green-600">
                {patientStories[currentPatient].name.charAt(0)}
              </span>
            </div>
            
            {/* Testimonial Text */}
            <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed italic mb-6 max-w-4xl mx-auto">
              "{patientStories[currentPatient].text}"
            </blockquote>
            
            {/* Patient Info */}
            <div className="flex items-center justify-center text-sm text-gray-500">
              <span className="mr-4">
                <strong>Treatment:</strong> {patientStories[currentPatient].treatment}
              </span>
              <span>
                <strong>From:</strong> {patientStories[currentPatient].country}
              </span>
            </div>
          </div>
        </div>

        {/* Patient Navigation */}
        <div className="flex justify-center space-x-2 mb-8">
          {patientStories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPatient(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentPatient ? 'bg-green-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            href="/testimonials"
            className="inline-flex items-center px-8 py-4 bg-[#7AE5F5] text-white font-semibold rounded-xl hover:bg-[#7AE5F5]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
          >
            See More Patient Testimonials
            <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 