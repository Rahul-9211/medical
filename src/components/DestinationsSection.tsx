'use client';

import { Camera, Icon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
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

  const benefits = [
    {
      icon: "🌍",
      title: "Global-Standard Hospitals & Surgeons",
      description: "JCI & NABH accredited facilities with internationally trained medical professionals"
    },
    {
      icon: "💸",
      title: "Save Up to 70% on Treatment Costs",
      description: "World-class care at a fraction of US/UK/UAE prices without compromising quality"
    },
    {
      icon: "📞",
      title: "Free Online Consultations with Top Doctors",
      description: "Get expert medical opinions from India's leading specialists at no cost"
    },
    {
      icon: "✈️",
      title: "Fast-Tracked Medical Visa Assistance",
      description: "Streamlined visa process with dedicated support for medical travelers"
    },
    {
      icon: "🏥",
      title: "Personalized Support from Arrival to Recovery",
      description: "End-to-end assistance including airport pickup, accommodation, and follow-up care"
    },
    {
      icon: "🌿",
      title: "Ayurveda & Holistic Healing Options Available",
      description: "Traditional wellness treatments alongside modern medical procedures"
    },
    {
      icon: "🫶",
      title: "Patient-First Approach — Not Profit-Driven",
      description: "We focus on healing, not billing. Your health comes first — always."
    }
  ];

  return (
    <section className="bg-white py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6 shadow-lg  text-4xl border border-gray-100">
          <ReactCountryFlag countryCode="IN" svg style={{
            fontSize: '1.2em',
            lineHeight: '1.2em',
          }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Patients Choose India for Medical Tourism
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Affordable, Reliable & World-Renowned — Discover Why India Is the Preferred Healthcare Destination
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className={`group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
              index % 4 === 0 ? 'hover:border-[#7AE5F5]/30' : 
              index % 4 === 1 ? 'hover:border-[#56DDEF]/30' : 
              index % 4 === 2 ? 'hover:border-yellow-300/30' :
              'hover:border-green-500/30'
            }`}>
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className={`text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 ${
                index % 4 === 0 ? 'group-hover:text-[#7AE5F5]' : 
                index % 4 === 1 ? 'group-hover:text-[#56DDEF]' : 
                index % 4 === 2 ? 'group-hover:text-yellow-500' :
                'group-hover:text-green-600'
              }`}>
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-[#7AE5F5]/20 via-[#56DDEF]/20 to-yellow-100/50 rounded-3xl p-8 border border-[#7AE5F5]/30 shadow-lg max-w-4xl mx-auto">
            <div className="text-6xl mb-4">🫶</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Patient-First Philosophy
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed italic">
              "We focus on healing, not billing. Your health comes first — always."
            </p>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-gradient-to-r from-[#7AE5F5]/20 via-[#56DDEF]/20 to-yellow-100/50 rounded-3xl p-8 border border-[#7AE5F5]/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#7AE5F5] mb-2">500,000+</div>
              <div className="text-gray-700 font-medium">International Patients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#56DDEF] mb-2">50+</div>
              <div className="text-gray-700 font-medium">JCI Accredited Hospitals</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">70%</div>
              <div className="text-gray-700 font-medium">Cost Savings</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 