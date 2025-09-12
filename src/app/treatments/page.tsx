// app/medical-treatments/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import websiteData from "@/data/websiteData.json";

export default async function MedicalTreatmentsPage() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/treatments/treatment.json`,
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Failed to load treatments JSON");

  const data = await res.json();
  const { pageData, treatments, whyChooseIndia, consultation } = data;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50/30">
      <Header navigation={websiteData.navigation} siteInfo={websiteData.siteInfo} />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 bg-gradient-to-br from-gray-50 via-white to-green-50/30">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#7AE5F5]/20 to-[#56DDEF]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-yellow-200/20 to-[#7AE5F5]/20 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white rounded-full mb-6 shadow-lg text-4xl">
              💊
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {pageData.headline}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              {pageData.introText}
            </p>
            <button className="px-8 py-4 bg-[#56DDEF] text-white font-semibold rounded-xl hover:bg-[#56DDEF]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
              {pageData.ctaButton}
            </button>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {pageData.mainBenefits.map((benefit: string, i: number) => (
                <div
                  key={i}
                  className="group bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-8 text-center"
                >
                  <div className="text-3xl mb-4">✨</div>
                  <p className="text-lg font-semibold text-gray-800 group-hover:text-[#56DDEF] transition-colors duration-300">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatments Section */}
        <section className="relative overflow-hidden py-20 bg-gradient-to-br from-gray-50 via-white to-green-50">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 via-teal-600/5 to-cyan-600/5"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-green-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white rounded-full mb-6 shadow-lg text-3xl sm:text-4xl">
                🏥
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                {pageData.sectionTitle}
              </h2>
              <p className="text-sm sm:text-base md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {pageData.sectionSubtitle}
              </p>
            </div>

            {/* Treatments Grid */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-16">
              {treatments.map((treatment: any, index: number) => (
                <div
                  key={treatment.id}
                  className={`group bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-8 hover:shadow-xl transition-all duration-300 border border-white/20 relative overflow-hidden ${
                    index % 4 === 0 ? 'hover:border-[#7AE5F5]' : 
                    index % 4 === 1 ? 'hover:border-[#56DDEF]' : 
                    index % 4 === 2 ? 'hover:border-yellow-400' :
                    'hover:border-green-500'
                  }`}
                >
                  {/* Hover Effect Background */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer ${
                    index % 4 === 0 ? 'bg-[#7AE5F5]/10' : 
                    index % 4 === 1 ? 'bg-[#56DDEF]/10' : 
                    index % 4 === 2 ? 'bg-yellow-100/50' :
                    'bg-green-100/50'
                  }`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 cursor-pointer">
                    <div className="text-2xl sm:text-3xl md:text-4xl mb-4">{treatment.emoji}</div>
                    
                    <h3 className={`text-base sm:text-lg md:text-xl font-bold text-gray-900 transition-colors duration-300 mb-3 ${
                      index % 4 === 0 ? 'group-hover:text-[#7AE5F5]' : 
                      index % 4 === 1 ? 'group-hover:text-[#56DDEF]' : 
                      index % 4 === 2 ? 'group-hover:text-yellow-500' :
                      'group-hover:text-green-600'
                    }`}>
                      {treatment.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed mb-4">
                      {treatment.description}
                    </p>
                    
                    {/* Learn More Link */}
                    <a
                      href={`/treatments/${treatment.slug}`}
                      className={`inline-flex items-center transition-colors duration-300 font-medium ${
                        index % 4 === 0 ? 'text-[#7AE5F5] group-hover:text-[#7AE5F5]/80' : 
                        index % 4 === 1 ? 'text-[#56DDEF] group-hover:text-[#56DDEF]/80' : 
                        index % 4 === 2 ? 'text-yellow-500 group-hover:text-yellow-400' :
                        'text-green-600 group-hover:text-green-500'
                      }`}
                    >
                      {treatment.ctaText}
                      <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose India */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              {whyChooseIndia.title}
            </h2>
            <ul className="space-y-4 text-lg text-gray-700">
              {whyChooseIndia.reasons.map((reason: string, i: number) => (
                <li key={i} className="flex items-center justify-center">
                  <span className="text-[#56DDEF] mr-3">✔</span>
                  {reason}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Consultation Section */}
        <section className="bg-gradient-to-br from-[#7AE5F5]/20 via-white to-[#56DDEF]/20 py-20 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-white/50"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#7AE5F5]/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#56DDEF]/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Header */}
            <div className="mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6 shadow-lg text-4xl">
                📩
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {consultation.title}
              </h2>
              <ul className="mt-6 space-y-3 text-gray-700 text-base sm:text-lg">
                {consultation.benefits.map((b: string, i: number) => (
                  <li key={i} className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">🌟</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Main CTA */}
            <div className="mb-16">
              <button className="px-8 py-4 bg-[#56DDEF] text-white font-semibold rounded-xl hover:bg-[#56DDEF]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
                {consultation.ctaButton}
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer footer={websiteData.footer} />
    </div>
  );
}
