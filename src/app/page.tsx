import websiteData from '@/data/websiteData.json';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import QuoteForm from '@/components/QuoteForm';
import DestinationsSection from '@/components/DestinationsSection';
import SpecialtiesSection from '@/components/SpecialtiesSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header 
        navigation={websiteData.navigation} 
        siteInfo={websiteData.siteInfo} 
      />
      
      <main>
        <HeroSection 
          heroSection={websiteData.heroSection} 
          stats={websiteData.stats} 
        />
        
        <QuoteForm 
          quoteForm={websiteData.quoteForm} 
          countries={websiteData.countries} 
        />
        
        <DestinationsSection destinations={websiteData.destinations} />
        
        <SpecialtiesSection specialties={websiteData.specialties} />
      </main>
      
      <Footer footer={websiteData.footer} />
    </div>
  );
}
