
import Link from 'next/link';

export default async function LandingPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/treatmentCost/treatmentCost.json`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to load treatments JSON");
    const landing = await res.json();

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50/80">
    
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-gray-50 via-white to-green-50/80">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#7AE5F5]/20 to-[#56DDEF]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-yellow-200/20 to-[#7AE5F5]/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white rounded-full mb-6 shadow-lg text-4xl">
              💸
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              {landing.headline}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {landing.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className={`grid grid-cols-1 md:grid-cols-2 ${landing.highlights.length >= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-6 mb-16 text-center`}>
            {landing.highlights.map((item: string, idx: number) => {
              const color = getCardColor(idx);
              return (
                <li key={idx} className={`group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden ${color.hover}`}>
                  <div className="text-2xl mb-3">✅</div>
                  <p className="text-gray-700 font-medium">{item}</p>
                </li>
              );
            })}
          </ul>

          {/* Primary CTA */}
          <div className="text-center">
            <Link
              href={landing.cta_primary.link}
              className="inline-block px-8 py-4 bg-[#56DDEF] text-white rounded-xl font-semibold shadow-lg hover:bg-[#56DDEF]/90 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 text-lg"
            >
              {landing.cta_primary.text} ⟶
            </Link>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            📊 Average Cost Comparison: India vs. USA / UK / UAE
          </h2>
          <div className="overflow-x-auto mb-12">
            <table className="min-w-full border border-gray-200 text-sm md:text-base bg-white rounded-2xl shadow-lg">
              <thead className="bg-gray-50">
                <tr>
                  {landing.cost_comparison.columns.map((col: string, idx: number) => (
                    <th key={idx} className="border p-4 text-gray-700 font-semibold">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {landing.cost_comparison.data.map((row: any, idx: number) => (
                  <tr key={idx} className="text-center hover:bg-gray-50 transition-colors duration-200">
                    <td className="border p-4 font-medium">{row.treatment}</td>
                    <td className="border p-4">{row.india}</td>
                    <td className="border p-4">{row.usa}</td>
                    <td className="border p-4">{row.uk}</td>
                    <td className="border p-4">{row.uae}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-sm text-gray-500 mt-4 text-center">{landing.cost_comparison.note}</p>
          </div>
        </div>
      </section>

      {/* Why Lower Costs */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-gray-50 via-white to-green-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 via-teal-600/5 to-cyan-600/5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-green-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            🏥 Why Treatment Costs Are Lower in India
          </h2>
          <ul className={`grid grid-cols-1 md:grid-cols-2 ${landing.why_lower_costs.length >= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-6 mb-16`}>
            {landing.why_lower_costs.map((point: string, idx: number) => {
              const color = getCardColor(idx);
              return (
                <li key={idx} className={`group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden ${color.hover}`}>
                  <p className="text-gray-700 leading-relaxed">{point}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Specialty Guides */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            🩺 Cost Guides by Specialty
          </h2>
          <div className={`grid grid-cols-1 md:grid-cols-2 ${landing.specialty_guides.length >= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-6 mb-16`}>
            {landing.specialty_guides.map((item: any, idx: number) => {
              const color = getCardColor(idx);
              return (
                <Link
                  key={idx}
                  href={item.link}
                  className={`group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden ${color.hover}`}
                >
                  <div className="text-2xl mb-3">👉</div>
                  <p className={`text-gray-900 font-semibold ${color.text}`}>{item.name}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Secondary CTA */}
      <section className="bg-gradient-to-br from-[#7AE5F5]/20 via-white to-[#56DDEF]/20 py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-white/50"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#7AE5F5]/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#56DDEF]/30 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 lg:p-12 border border-white/20">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              {landing.cta_secondary.text}
            </h3>
            <ul className="mb-6 text-gray-700 space-y-2">
              {landing.cta_secondary.benefits.map((benefit: string, idx: number) => (
                <li key={idx} className="flex items-center justify-center">
                  <span className="text-[#56DDEF] mr-3">✅</span>
                  {benefit}
                </li>
              ))}
            </ul>
            <Link
              href={landing.cta_secondary.link}
              className="inline-block px-8 py-4 bg-[#56DDEF] text-white rounded-xl font-semibold shadow-lg hover:bg-[#56DDEF]/90 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 text-lg"
            >
              {landing.cta_secondary.text} ⟶
            </Link>
          </div>
        </div>
      </section>
    </main>
    
 
    </div>
  );
}
