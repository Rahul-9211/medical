import React from "react";
import BackgroundCarousel from '@/components/BackgroundCarousel';

interface FeaturedStory {
  title: string;
  story: string;
  patient: string;
}

interface SuccessStoriesData {
  title: string;
  subtitle: string;
  overview: string;
  featuredStories: FeaturedStory[];
  trustReasons: string[];
  cta: {
    text: string;
    url: string;
  };
}

const SuccessStoriesPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/successstories/successstories.json`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load success stories");
  const data: SuccessStoriesData = await res.json();

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
        <section className="relative overflow-hidden py-20">
          <BackgroundCarousel />
          
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-full mb-6 shadow-lg text-4xl backdrop-blur-sm">
              💝
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{data.title}</h1>
            <h2 className="text-xl md:text-2xl text-white/90 mb-4">{data.subtitle}</h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">{data.overview}</p>
          </div>
        </section>

        {/* Featured Stories Section */}
        <section className="relative overflow-hidden py-20 bg-gradient-to-br from-gray-50 via-white to-green-50">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 via-teal-600/5 to-cyan-600/5"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-green-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full mb-4 shadow-lg text-2xl">
                ✨
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured Patient Stories</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.featuredStories.map((story, i) => {
                const color = getCardColor(i);
                return (
                  <div key={i} className={`group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden ${color.hover}`}>
                    <div className="text-3xl mb-4">
                      {i % 3 === 0 ? '❤️' : i % 3 === 1 ? '🌟' : '💪'}
                    </div>
                    <h3 className={`text-xl font-bold mb-3 ${color.text}`}>{story.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{story.story}</p>
                    <p className="text-sm font-medium text-gray-700 italic">– {story.patient}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Trust Us Section */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full mb-4 shadow-lg text-2xl">
                🌍
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Why Patients Trust Us</h2>
            </div>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.trustReasons.map((item, i) => {
                  const color = getCardColor(i);
                  return (
                    <div key={i} className="flex items-start space-x-3">
                      <span className={`flex-shrink-0 ${color.text}`}>
                        {i % 4 === 0 ? '🏥' : i % 4 === 1 ? '👨‍⚕️' : i % 4 === 2 ? '🤝' : '⭐'}
                      </span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-[#7AE5F5]/20 via-white to-[#56DDEF]/20 py-20 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-white/50"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#7AE5F5]/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#56DDEF]/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-6xl mx-auto px-6 text-center">
            <div className="mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6 shadow-lg text-4xl">
                📩
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Start Your Healthcare Journey</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                Join thousands of satisfied patients who have trusted us with their medical care. Let us help you find the right treatment.
              </p>
              <a
                href={data.cta.url}
                className="inline-block px-8 py-4 bg-[#56DDEF] text-white font-semibold rounded-xl hover:bg-[#56DDEF]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
              >
                {data.cta.text}
              </a>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default SuccessStoriesPage;
