import websiteData from '@/data/websiteData.json';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import QuoteForm from '@/components/QuoteForm';
import DestinationsSection from '@/components/DestinationsSection';
import SpecialtiesSection from '@/components/SpecialtiesSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header 
        navigation={websiteData.navigation} 
        siteInfo={websiteData.siteInfo} 
      />
      
      <main>
        {/* Hero Section with Integrated Form - Full Viewport Height */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-indigo-600/5"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              {/* Left Content - Hero Text */}
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="inline-flex items-center px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-3">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Trusted by 100,000+ Patients Worldwide
                  </div>
                  
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Medical Treatment With{' '}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Unmatched Care
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                    {websiteData.heroSection.subtitle}
                  </p>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-2 gap-4 max-w-md">
                  <div className="text-center p-2.5 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg">
                    <div className="text-xl md:text-2xl font-bold text-blue-600 mb-1">
                      {websiteData.stats.patientsAssisted}
                    </div>
                    <div className="text-gray-600 text-xs font-medium">
                      {websiteData.stats.patientsAssistedText}
                    </div>
                  </div>
                  
                  <div className="text-center p-2.5 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg">
                    <div className="flex items-center justify-center mb-1">
                      <div className="text-xl md:text-2xl font-bold text-blue-600 mr-2">
                        {websiteData.stats.googleRating}
                      </div>
                      <div className="flex">
                        {Array.from({ length: websiteData.stats.ratingStars }, (_, i) => (
                          <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <div className="text-gray-600 text-xs font-medium">
                      Google Rating
                    </div>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-2 pt-3">
                  <div className="flex items-center text-xs text-gray-600 bg-white/60 backdrop-blur-sm px-2.5 py-1.5 rounded-full border border-white/20">
                    <svg className="w-3 h-3 text-green-500 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">NABH Accredited</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-600 bg-white/60 backdrop-blur-sm px-2.5 py-1.5 rounded-full border border-white/20">
                    <svg className="w-3 h-3 text-green-500 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">24/7 Support</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-600 bg-white/60 backdrop-blur-sm px-2.5 py-1.5 rounded-full border border-white/20">
                    <svg className="w-3 h-3 text-green-500 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Free Consultation</span>
                  </div>
                </div>
              </div>

              {/* Right Content - Integrated Form */}
              <div className="relative">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 lg:p-6 shadow-2xl border border-white/20">
                  <div className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <QuoteForm 
                    quoteForm={websiteData.quoteForm} 
                    countries={websiteData.countries} 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <DestinationsSection destinations={websiteData.destinations} />
        
        <SpecialtiesSection specialties={websiteData.specialties} />
      </main>
      
      <Footer footer={websiteData.footer} />
    </div>
  );
}
