'use client';

import Link from 'next/link';
import { JSX } from 'react';
interface Step {
  title: string;
  description: string;
  icon: string;
}

interface HowItWorksSectionProps {
  howItWorks: {
    title: string;
    steps: Step[];
  };
}

export default function HowItWorksSection({ howItWorks }: HowItWorksSectionProps) {
  const getIcon = (iconName: string) => {
    const icons: Record<string, JSX.Element> = {
      contact: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      medical: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      flight: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      treatment: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      video: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    };
    
    return icons[iconName] || icons.contact;
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {howItWorks.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {howItWorks.steps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-blue-600">
                  {getIcon(step.icon)}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="bg-white rounded-xl p-8 shadow-md max-w-2xl mx-auto">
          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors duration-200">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded text-sm">
              Watch Video
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link
            href="/get-started"
            className="inline-flex items-center px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200 text-lg"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
} 