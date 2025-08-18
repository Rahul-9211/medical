'use client';

import Link from 'next/link';

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
  const partnerHospitals = [
    {
      name: "Medanta, Gurugram",
      location: "Gurugram, Haryana",
      description: "Multi-specialty hospital with world-class cardiac care",
      image: "/hospitals/medanta.jpg"
    },
    {
      name: "Fortis Memorial Research Institute",
      location: "Gurugram, Haryana",
      description: "Advanced medical research and treatment facility",
      image: "/hospitals/fortis.jpg"
    },
    {
      name: "Apollo Hospitals",
      location: "Multiple Locations",
      description: "India's largest healthcare network with international standards",
      image: "/hospitals/apollo.jpg"
    },
    {
      name: "Artemis & Max Super Speciality",
      location: "Gurugram, Haryana",
      description: "Specialized care in multiple medical disciplines",
      image: "/hospitals/artemis.jpg"
    },
    {
      name: "BLK-Max & Ganga Ram, Delhi",
      location: "New Delhi",
      description: "Century-old hospital with modern medical technology",
      image: "/hospitals/blk.jpg"
    }
  ];

  return (
    <section className="bg-white from-orange-50 via-white to-red-50 py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 via-red-500 to-teal-500 rounded-full mb-6 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Partner Hospitals in India
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Get Treated at India's Top JCI & NABH-Accredited Hospitals
          </p>
        </div>

        {/* Hospitals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {partnerHospitals.map((hospital, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Hospital Image */}
              <div className="aspect-video bg-gradient-to-br from-orange-50 to-red-50 rounded-t-2xl overflow-hidden mb-4 relative">
                <div className="w-full h-full bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-2xl">
                    {hospital.name.charAt(0)}
                  </span>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Hospital Info */}
              <div className="p-6">
                <h4 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300 mb-2">
                  {hospital.name}
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  {hospital.location}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {hospital.description}
                </p>
                
                {/* Accreditation Badge */}
                <div className="flex items-center text-xs text-orange-600 font-medium">
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
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-3xl p-8 border border-orange-100 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Choose Your Hospital?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
              Our medical coordinators will help you select the best hospital based on your specific treatment needs, budget, and preferences.
            </p>
            <Link
              href="/hospitals"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 via-red-600 to-teal-600 text-white font-semibold rounded-xl hover:from-orange-700 hover:via-red-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
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