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
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Content - Hero Text */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {heroSection.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                {heroSection.subtitle}
              </p>
            </div>

            {/* Statistics */}
            <div className="flex space-x-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                  {stats.patientsAssisted}
                </div>
                <div className="text-gray-600 text-sm">
                  {stats.patientsAssistedText}
                </div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mr-2">
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

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>NABH Accredited</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Free Consultation</span>
              </div>
            </div>
          </div>

          {/* Right Content - Form Placeholder */}
          <div className="bg-gray-50 rounded-lg p-6 lg:p-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Get Your Free Quote
              </h3>
              <p className="text-gray-600 mb-6">
                Fill the form to get personalized treatment quotes
              </p>
              <div className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium">
                Form will be integrated here
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 