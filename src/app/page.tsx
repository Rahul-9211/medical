import websiteData from '@/data/websiteData.json';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import QuoteForm from '@/components/QuoteForm';
import PartnersHospitalSection from '@/components/PartnersHospitalSection';
import DestinationsSection from '@/components/DestinationsSection';
import SpecialtiesSection from '@/components/SpecialtiesSection';
import HospitalsSection from '@/components/HospitalsSection';
import ServicesSection from '@/components/ServicesSection';
import AyurvedaSection from '@/components/AyurvedaSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ConsultationCTASection from '@/components/ConsultationCTASection';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50/30">
      <Header 
        navigation={websiteData.navigation} 
        siteInfo={websiteData.siteInfo} 
      />
      
      <main>
        {/* Hero Section with Integrated Form - Full Viewport Height */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          {/* Background Image Slideshow */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&h=1080&fit=crop&crop=center" 
              alt="Modern hospital background"
              className="w-full h-full object-cover animate-fade-in-out"
              style={{
                animation: 'fadeInOut 12s infinite'
              }}
            />
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&h=1080&fit=crop&crop=center" 
              alt="Hospital facility background"
              className="absolute inset-0 w-full h-full object-cover animate-fade-in-out"
              style={{
                animation: 'fadeInOut 12s infinite 3s'
              }}
            />
            <img 
              src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1920&h=1080&fit=crop&crop=center" 
              alt="Medical center background"
              className="absolute inset-0 w-full h-full object-cover animate-fade-in-out"
              style={{
                animation: 'fadeInOut 12s infinite 6s'
              }}
            />
            
            <div className="absolute inset-0 bg-white/70"></div>
          </div>
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#7AE5F5]/20 to-[#56DDEF]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-yellow-200/20 to-[#7AE5F5]/20 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              {/* Left Content - Hero Text */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    India's Gateway to World-Class Surgery,{' '}
                    <span className="bg-gradient-to-r from-[#7AE5F5] via-[#56DDEF] to-yellow-400 bg-clip-text text-transparent">
                      Ayurveda & Affordable Healthcare
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                    Get treated at India's top hospitals with full support — free consultations, low-cost packages, and compassionate care you can trust.
                  </p>
                </div>

                {/* Trust Points */}
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-700">
                    <svg className="w-5 h-5 text-[#7AE5F5] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">70% Lower Cost Than USA, UK, UAE</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <svg className="w-5 h-5 text-[#56DDEF] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Trusted by 10,000+ Patients from 30+ Countries</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">100% Free Medical Second Opinion</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="bg-[#56DDEF] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#56DDEF]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Get Free Consultation Now
                  </button>
                  <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-yellow-300 hover:bg-yellow-50/50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Explore Treatments
                  </button>
                </div>
              </div>

              {/* Right Content - Integrated Form */}
              <div className="relative">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 lg:p-6 shadow-2xl border border-white/20">
                  <QuoteForm 
                    quoteForm={websiteData.quoteForm} 
                    countries={websiteData.countries}
                    pageSource="Homepage Hero Section"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Partner Hospitals Section */}
        <PartnersHospitalSection hospitals={websiteData.hospitals} />
        
        {/* Top Medical Treatments Section */}
        <SpecialtiesSection specialties={websiteData.specialties} />
        
        {/* Ayurveda & Holistic Recovery Section */}
        <AyurvedaSection />
        
        {/* All-Inclusive Patient Services Section */}
        <ServicesSection services={websiteData.services} />
        
        {/* Partner Hospitals Section */}
        <HospitalsSection hospitals={websiteData.hospitals} />
        
        {/* Why Patients Choose India Section */}
        <DestinationsSection destinations={websiteData.destinations} />
        
        {/* Real Patient Stories Section */}
        <TestimonialsSection testimonials={websiteData.testimonials} />
        
        {/* Free Consultation CTA Section */}
        <ConsultationCTASection />
        
        {/* Blog Section */}
        <BlogSection />
        
        {/* COMMENTED OUT - Not in new structure:
        <PricingSection pricing={websiteData.pricing} />
        <HowItWorksSection howItWorks={websiteData.howItWorks} />
        <CaseStudiesSection 
          caseStudies={websiteData.caseStudies} 
          videoTestimonials={websiteData.videoTestimonials} 
        />
        */}
      </main>
      
      <Footer footer={websiteData.footer} />
      
      {/* WhatsApp Button */}
      <WhatsAppButton />

    </div>
  );
}
