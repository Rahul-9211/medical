import React from "react";
import BackgroundCarousel from "@/components/BackgroundCarousel";

interface PatientServiceJSON {
  slug: string;
  title: string;
  h1: string;
  intro: string;
  sections: { heading: string; points: string[] }[];
  cta: { headline: string; points: string[]; button: { label: string; link: string } };
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

const PatientServicePage = async ({ params }: PageProps) => {
  const { slug } = await params;

  // Fetch JSON file from public folder
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/patientservices/${slug}.json`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load service data");
  const data: PatientServiceJSON = await res.json();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50/80">
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <BackgroundCarousel />
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-full mb-6 shadow-lg text-4xl backdrop-blur-sm">
              🌟
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{data.h1}</h1>
            <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">{data.intro}</p>
            <a
              href={data.cta.button.link}
              className="inline-block px-8 py-4 bg-[#56DDEF] text-white font-semibold rounded-xl hover:bg-[#56DDEF]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-md md:text-lg backdrop-blur-sm"
            >
              {data.cta.button.label}
            </a>
          </div>
        </section>

        {/* Sections */}
        {data.sections.map((section, idx) => (
          <section key={idx} className={`py-20 ${idx % 2 === 0 ? 'bg-white' : 'bg-gradient-to-br from-gray-50 via-white to-green-50/80'}`}>
            <div className="max-w-5xl mx-auto px-6">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full mb-4 shadow-lg text-2xl">
                  {idx % 3 === 0 ? '✨' : idx % 3 === 1 ? '🌟' : '💫'}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{section.heading}</h2>
              </div>
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                  {section.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#56DDEF] mr-3 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-[#7AE5F5]/20 via-white to-[#56DDEF]/20 py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-white/50"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#7AE5F5]/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#56DDEF]/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl"></div>

          <div className="relative max-w-6xl mx-auto px-6 text-center">
            <div className="mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6 shadow-lg text-4xl">
                📩
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{data.cta.headline}</h2>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8 max-w-4xl mx-auto mb-8">
                <ul className="text-lg text-gray-700 space-y-3">
                  {data.cta.points.map((point, i) => (
                    <li key={i} className="flex items-center justify-center">
                      <span className="text-[#56DDEF] mr-3">✔</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={data.cta.button.link}
                className="inline-block px-8 py-4 bg-[#56DDEF] text-white font-semibold rounded-xl hover:bg-[#56DDEF]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-md sm:text-lg"
              >
                {data.cta.button.label}
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PatientServicePage;
