import Link from 'next/link';

export default function ConsultationCTASection() {
  return (
    <section className="bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50 py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-white-to-br from-green-600/5 via-teal-600/5 to-cyan-600/5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-green-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6 shadow-lg text-4xl">
          📩
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Start Your Healing Journey with a 100% Free Consultation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            No fees. No obligations. Just expert medical guidance from India's top specialists.
          </p>
        </div>

        {/* Main CTA */}
        <div className="mb-16">
          <Link
            href="/get-free-consultation"
            className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl border-2 border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
          >
            Get My Free Opinion Now
            <svg className="ml-4 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Reviewed by Board-Certified Doctors</h3>
            <p className="text-gray-600 text-sm">Your case is reviewed by qualified specialists with international experience</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Response Within 24 Hours</h3>
            <p className="text-gray-600 text-sm">Quick turnaround time for all your medical queries and concerns</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.5 0h.01M19 10.5v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6m18 0v-1a2 2 0 00-2-2H7a2 2 0 00-2 2v1m18 0H3m0 0h18" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Multilingual Support Available</h3>
            <p className="text-gray-600 text-sm">We speak your language to ensure clear communication</p>
          </div>
        </div>

        {/* Trust Statement */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <h3 className="text-xl font-bold text-gray-900">Your Health, Our Priority</h3>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            "We focus on healing, not billing. Your health comes first — always."
          </p>
        </div>
      </div>
    </section>
  );
}
