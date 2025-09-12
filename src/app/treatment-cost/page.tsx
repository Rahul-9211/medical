
import Link from 'next/link';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import websiteData from "@/data/websiteData.json";

export default async function LandingPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/treatmentCost/treatmentCost.json`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to load treatments JSON");
    const landing = await res.json();
    return (
    <>
    <Header navigation={websiteData.navigation} siteInfo={websiteData.siteInfo} />
    <section className="bg-white py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 shadow-lg text-4xl">
            💸
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            {landing.headline}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {landing.intro}
          </p>
        </div>

        {/* Highlights */}
        <ul className="grid sm:grid-cols-3 gap-4 mb-12 text-center">
          {landing.highlights.map((item: string, idx: number) => (
            <li key={idx} className="p-4 rounded-xl bg-green-50 shadow-sm">
              ✅ {item}
            </li>
          ))}
        </ul>

        {/* Primary CTA */}
        <div className="text-center mb-16">
          <Link
            href={landing.cta_primary.link}
            className="inline-block px-8 py-4 bg-green-600 text-white rounded-xl font-semibold shadow-lg hover:bg-green-700 transition"
          >
            {landing.cta_primary.text} ⟶
          </Link>
        </div>

        {/* Cost Comparison */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
          📊 Average Cost Comparison: India vs. USA / UK / UAE
        </h2>
        <div className="overflow-x-auto mb-12">
          <table className="min-w-full border border-gray-200 text-sm md:text-base">
            <thead className="bg-gray-100">
              <tr>
                {landing.cost_comparison.columns.map((col: string, idx: number) => (
                  <th key={idx} className="border p-2 text-gray-700 font-semibold">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {landing.cost_comparison.data.map((row: any, idx: number) => (
                <tr key={idx} className="text-center">
                  <td className="border p-2 font-medium">{row.treatment}</td>
                  <td className="border p-2">{row.india}</td>
                  <td className="border p-2">{row.usa}</td>
                  <td className="border p-2">{row.uk}</td>
                  <td className="border p-2">{row.uae}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-sm text-gray-500 mt-2">{landing.cost_comparison.note}</p>
        </div>

        {/* Why Lower Costs */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
          🏥 Why Treatment Costs Are Lower in India
        </h2>
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {landing.why_lower_costs.map((point: string, idx: number) => (
            <li key={idx} className="p-4 bg-blue-50 rounded-xl shadow-sm">
              {point}
            </li>
          ))}
        </ul>

        {/* Specialty Guides */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
          🩺 Cost Guides by Specialty
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {landing.specialty_guides.map((item: any, idx: number) => (
            <Link
              key={idx}
              href={item.link}
              className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg hover:text-green-600 transition"
            >
              👉 {item.name}
            </Link>
          ))}
        </div>

        {/* Secondary CTA */}
        <div className="text-center bg-green-50 rounded-3xl p-8 border border-green-200 shadow-lg">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            {landing.cta_secondary.text}
          </h3>
          <ul className="mb-4 text-gray-700">
            {landing.cta_secondary.benefits.map((benefit: string, idx: number) => (
              <li key={idx}>✅ {benefit}</li>
            ))}
          </ul>
          <Link
            href={landing.cta_secondary.link}
            className="inline-block px-8 py-4 bg-green-600 text-white rounded-xl font-semibold shadow-lg hover:bg-green-700 transition"
          >
            {landing.cta_secondary.text} ⟶
          </Link>
        </div>
      </div>
    </section>
    <Footer footer={websiteData.footer} />
    </>
  );
}
