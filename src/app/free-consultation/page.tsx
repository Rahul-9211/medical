import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import websiteData from "@/data/websiteData.json";
import QuoteForm from "@/components/QuoteForm";
import WhatsAppButton from "@/components/WhatsAppButton";

const FreeConsultationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50/30">
      <Header navigation={websiteData.navigation} siteInfo={websiteData.siteInfo} />

      <main className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Background blur like homepage */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-[#7AE5F5]/20 to-[#56DDEF]/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-yellow-200/20 to-[#7AE5F5]/20 rounded-full blur-3xl -z-10"></div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Get Your Free Consultation
        </h1>
        <p className="text-center text-lg text-gray-600 mb-10">
          Fill in the form below to connect with India’s top doctors. 
          Our patient care team will get back to you within 24 hours.
        </p>

        {/* Form Card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20">
          <QuoteForm 
            quoteForm={websiteData.quoteForm} 
            countries={websiteData.countries} 
          />
        </div>
      </main>

      <Footer footer={websiteData.footer} />
      <WhatsAppButton />
    </div>
  );
};

export default FreeConsultationPage;
