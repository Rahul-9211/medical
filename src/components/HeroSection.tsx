import Link from 'next/link';

interface HeroSectionProps {
  heroSection: {
    title: string;
    subtitle: string;
    ctaButton: string;
    ctaUrl: string;
  };
  stats: {
    patientsAssisted: string;
    patientsAssistedText: string;
    googleRating: string;
    ratingStars: number;
  };
}

export default function HeroSection({ heroSection, stats }: HeroSectionProps) {
  const renderStars = (count: number) => {
    return Array.from({ length: count }, (_, i) => (
      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {heroSection.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                {heroSection.subtitle}
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {stats.patientsAssisted}
                </div>
                <div className="text-gray-600 text-sm">
                  {stats.patientsAssistedText}
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-2">
                  <div className="text-3xl font-bold text-blue-600 mr-2">
                    {stats.googleRating}
                  </div>
                  <div className="flex">
                    {renderStars(stats.ratingStars)}
                  </div>
                </div>
                <div className="text-gray-600 text-sm">
                  Google Rating
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href={heroSection.ctaUrl}
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {heroSection.ctaButton}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Content - Medical Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="text-center space-y-6">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  World-Class Healthcare
                </h3>
                <p className="text-gray-600">
                  Access to the best hospitals, doctors, and medical facilities worldwide with personalized care and support.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>24/7 Support</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Best Doctors</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Affordable Cost</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Quality Care</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 