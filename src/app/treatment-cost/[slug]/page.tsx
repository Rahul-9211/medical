
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import websiteData from "@/data/websiteData.json";
import React from "react";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackgroundCarousel from "@/components/BackgroundCarousel";

type Params = Promise<{ slug: string }>

  
export default async function TreatmentCostSlugPage(props: { params : Params }) {
  const { slug } = await props.params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/treatmentCost/${slug}.json`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load treatments JSON");
  const data = await res.json();

  const getCardColor = (index: number) => {
    const colors = [
      { bg: 'bg-[#7AE5F5]/10', hover: 'hover:bg-[#7AE5F5]/20', text: 'text-[#7AE5F5]' },
      { bg: 'bg-[#56DDEF]/10', hover: 'hover:bg-[#56DDEF]/20', text: 'text-[#56DDEF]' },
      { bg: 'bg-yellow-100', hover: 'hover:bg-yellow-200', text: 'text-yellow-500' },
      { bg: 'bg-green-100', hover: 'hover:bg-green-200', text: 'text-green-600' }
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50/30">
      <Header navigation={websiteData.navigation} siteInfo={websiteData.siteInfo} />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <BackgroundCarousel />
          
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-full mb-6 shadow-lg text-4xl backdrop-blur-sm">
              💸
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{data.title}</h1>
            <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">{data.subtitle}</p>
            <Link
              href={data.treatment_page.link}
              className="inline-block px-8 py-4 bg-[#56DDEF] text-white font-semibold rounded-xl hover:bg-[#56DDEF]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg backdrop-blur-sm"
            >
              {data.treatment_page.label}
            </Link>
          </div>
        </section>

        {/* Why India */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 lg:p-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Choose India for Treatment?</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{data.why_india}</p>
            </div>
          </div>
        </section>

        {/* Cost Table */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Treatment Cost Comparison</h2>
            <div className="overflow-x-auto mb-12">
              <table className="min-w-full border border-gray-200 text-sm md:text-base bg-white rounded-2xl shadow-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border p-4 text-gray-700 font-semibold">Procedure</th>
                    <th className="border p-4 text-gray-700 font-semibold">India (USD)</th>
                    <th className="border p-4 text-gray-700 font-semibold">USA (USD)</th>
                    <th className="border p-4 text-gray-700 font-semibold">You Save</th>
                  </tr>
                </thead>
                <tbody>
                  {data.procedures.map((p : { name : string , india : string , usa : string , saving : string }, i : number ) => (
                    <tr key={i} className="text-center hover:bg-gray-50 transition-colors duration-200">
                      <td className="border p-4 font-medium">{p.name}</td>
                      <td className="border p-4">{p.india}</td>
                      <td className="border p-4">{p.usa}</td>
                      <td className="border p-4 text-green-600 font-semibold">{p.saving}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Inclusions & Exclusions */}
        <section className="relative overflow-hidden py-20 bg-gradient-to-br from-gray-50 via-white to-green-50">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 via-teal-600/5 to-cyan-600/5"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-green-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">✅ Inclusions</h3>
                <ul className="space-y-2 text-gray-700">
                  {data.inclusions.map((item : string, i : number) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#56DDEF] mr-3 mt-1">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">❌ Exclusions</h3>
                <ul className="space-y-2 text-gray-700">
                  {data.exclusions.map((item : string, i : number) => (
                    <li key={i} className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Factors */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-12">
              <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
                🏥 Factors That Affect the Cost
              </h2>
              <ul className="space-y-3 text-lg text-gray-700">
                {data.cost_factors.map((item : string,  i : number) => (
                  <li key={i} className="flex items-start">
                    <span className="text-[#56DDEF] mr-3 mt-1">📊</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Why India is Best */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-12">
              <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
                📌 Cost vs Quality – Why India is the Best Choice
              </h2>
              <ul className="space-y-3 text-lg text-gray-700">
                {data.why_best_choice.map((item : string, i : number) => (
                  <li key={i} className="flex items-start">
                    <span className="text-[#56DDEF] mr-3 mt-1">✅</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Specialists */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">👨‍⚕️ Consult with Top Specialists</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.specialists.map((doc : {name : string , hospital : string}, i : number) => {
                const color = getCardColor(i);
                return (
                  <div key={i} className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <h3 className={`text-xl font-bold mb-2 ${color.text}`}>{doc.name}</h3>
                    <p className="text-gray-700">{doc.hospital}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-[#7AE5F5]/20 via-white to-[#56DDEF]/20 py-20 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-white/50"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#7AE5F5]/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#56DDEF]/30 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-6xl mx-auto px-6 text-center">
            {/* Header */}
            <div className="mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6 shadow-lg text-4xl">
                📩
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{data.final_cta.headline}</h2>
            </div>

            {/* Features */}
            <div className="mb-16">
              <ul className="space-y-3 text-lg text-gray-700">
                {data.final_cta.points.map((point : string, i : number) => (
                  <li key={i} className="flex items-center justify-center">
                    <span className="text-[#56DDEF] mr-3">✅</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Main CTA */}
            <div>
              <Link
                href={data.final_cta.button.link}
                className="px-8 py-4 bg-[#56DDEF] text-white font-semibold rounded-xl hover:bg-[#56DDEF]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
              >
                {data.final_cta.button.label}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer footer={websiteData.footer} />
      <WhatsAppButton></WhatsAppButton>
    </div>
  );
}
