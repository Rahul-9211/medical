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
    <>
      <Header navigation={websiteData.navigation} siteInfo={websiteData.siteInfo} />

      {/* Hero Section */}
      <section className="bg-white from-green-50 via-white to-teal-50 py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white rounded-full mb-6 shadow-lg text-4xl">
            💊
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {pageData.headline}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {pageData.introText}
          </p>
          <button className="mt-8 px-8 py-4 bg-[#56DDEF] text-white font-semibold rounded-xl hover:bg-[#56DDEF]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
            {pageData.ctaButton}
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-20">
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
      <section className="bg-gradient-to-b from-white via-green-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {pageData.sectionTitle}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {pageData.sectionSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment: any, index: number) => (
              <div
                key={treatment.id}
                className="group bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 flex flex-col"
              >
                <div className="text-4xl mb-4">{treatment.emoji}</div>
                <h3
                  className={`text-xl font-bold text-gray-900 mb-2 group-hover:text-${
                    index % 4 === 0
                      ? "[#7AE5F5]"
                      : index % 4 === 1
                      ? "[#56DDEF]"
                      : index % 4 === 2
                      ? "yellow-500"
                      : "green-600"
                  } transition-colors duration-300`}
                >
                  {treatment.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  {treatment.description}
                </p>
                <a
                  href={`/treatments/${treatment.slug}`}
                  className="inline-flex items-center mt-6 px-4 py-2 bg-[#7AE5F5] text-white text-sm font-medium rounded-lg hover:bg-[#7AE5F5]/90 transition-all duration-300 shadow hover:shadow-md"
                >
                  {treatment.ctaText}
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose India */}
      <section className="bg-white py-20">
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
      <section className="py-20 bg-gradient-to-r from-[#7AE5F5]/10 via-white to-[#56DDEF]/10">
        <div className="max-w-5xl mx-auto px-6 text-center bg-white rounded-3xl shadow-xl p-12 border border-[#7AE5F5]/30">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
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
          <button className="mt-10 px-8 py-4 bg-[#56DDEF] text-white font-semibold rounded-xl hover:bg-[#56DDEF]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
            {consultation.ctaButton}
          </button>
        </div>
      </section>

      <Footer footer={websiteData.footer} />
    </>
  );
}
