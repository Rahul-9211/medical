'use client'

import Image from 'next/image'

interface Hospital {
  name: string
  location: string
  image: string
  url: string
  description: string
}

interface PartnersHospitalSectionProps {
  hospitals: {
    title: string
    list: Hospital[]
  }
}

const HOSPITAL_LOGOS = [
  { name: 'Medanta', logo: '/Images/hospital/logos/medanta.png' },
  { name: 'Apollo Hospitals', logo: '/Images/hospital/logos/apollo.png' },
  { name: 'Fortis Healthcare', logo: '/Images/hospital/logos/fortis.png' },
  { name: 'Max Healthcare', logo: '/Images/hospital/logos/max.png' },
  { name: 'BLK Super Speciality Hospital', logo: '/Images/hospital/logos/blk.png' },
  { name: 'Manipal Hospitals', logo: '/Images/hospital/logos/manipal.png' },
  { name: 'Artemis Hospital', logo: '/Images/hospital/logos/artemis.png' },
] as const

export default function PartnersHospitalSection({ hospitals }: PartnersHospitalSectionProps) {
  const hospitalLogos = HOSPITAL_LOGOS

  // Triple the logos for truly seamless infinite scroll
  const extendedLogos = [...hospitalLogos, ...hospitalLogos, ...hospitalLogos]

  return (
    <section className="py-12 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Partner
            <span className="bg-gradient-to-r from-[#7AE5F5] via-[#56DDEF] to-blue-500 bg-clip-text text-transparent ml-3">
              Hospitals
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by thousands of international patients, our network includes India's most prestigious hospitals with world-class facilities and internationally trained doctors.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16 text-center">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium text-gray-700">JCI Accredited</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-sm font-medium text-gray-700">NABH Certified</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span className="text-sm font-medium text-gray-700">International Standards</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span className="text-sm font-medium text-gray-700">20+ Years Experience</span>
          </div>
        </div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-5 md:w-20 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-5 md:w-20 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none"></div>
          
          {/* Infinite Marquee */}
          <div 
            className="flex items-center space-x-12 md:space-x-16 lg:space-x-20"
            style={{
              animation: 'marquee 60s linear infinite',
              width: 'max-content'
            }}
          >
            {extendedLogos.map((hospital, index) => (
              <div
                key={`${hospital.name}-${index}`}
                className="flex-shrink-0 flex flex-col items-center gap-3 w-44"
              >
                <div className="bg-white rounded-xl w-full h-20 flex items-center justify-center px-4 border border-gray-100 shadow-sm">
                  <Image
                    src={hospital.logo}
                    alt={`${hospital.name} logo`}
                    width={160}
                    height={56}
                    className="max-w-full max-h-14 w-auto h-auto object-contain"
                    draggable={false}
                  />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-gray-700 text-center leading-tight px-1">
                  {hospital.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-[#56DDEF] mb-2">50+</div>
            <div className="text-sm text-gray-600">Partner Hospitals</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#56DDEF] mb-2">1M+</div>
            <div className="text-sm text-gray-600">Patients Treated</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#56DDEF] mb-2">30+</div>
            <div className="text-sm text-gray-600">Countries Served</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#56DDEF] mb-2">99%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
        </div>
      </div>

      {/* CSS for marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </section>
  )
}
