import React from "react";
import BackgroundCarousel from '@/components/BackgroundCarousel';

interface BlogItem {
  title: string;
  description?: string;
  url: string;
}

interface BlogSection {
  title: string;
  items: BlogItem[];
}

interface BlogData {
  title: string;
  introTitle: string;
  introText: string;
  sections: BlogSection[];
  latestArticles: {
    title: string;
    description: string;
    url: string;
  };
  cta: {
    title: string;
    description: string;
    buttonText: string;
    url: string;
  };
}

const BlogPage = async () => {
  // Load JSON from public/blog/blogs.json
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/blog.json`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to load blog data");

  const data: BlogData = await res.json();

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
              📚
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{data.title}</h1>
            <h2 className="text-2xl md:text-3xl text-white/90 mb-4">{data.introTitle}</h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">{data.introText}</p>
          </div>
        </section>

        {/* Sections */}
        {data.sections.map((section, si) => (
          <section key={si} className="py-20 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full mb-4 shadow-lg text-2xl">
                  {si === 0 ? '✈️' : si === 1 ? '🩺' : si === 2 ? '🌍' : '🧘'}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{section.title}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item, i) => {
                  const color = getCardColor(i);
                  return (
                    <a
                      key={i}
                      href={item.url}
                      className={`group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden ${color.hover}`}
                    >
                      <div className="text-2xl mb-2">📖</div>
                      <h3 className={`text-xl font-bold transition-colors duration-300 ${color.text}`}>
                        {item.title}
                      </h3>
                      {item.description && (
                        <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
                      )}
                    </a>
                  );
                })}
              </div>
            </div>
          </section>
        ))}

        {/* Latest Articles */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full mb-4 shadow-lg text-2xl">
              📰
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {data.latestArticles.title}
            </h2>
            <p className="text-gray-700 mb-6">{data.latestArticles.description}</p>
            <a
              href={data.latestArticles.url}
              className="inline-block px-6 py-3 bg-[#7AE5F5] text-white rounded-xl shadow hover:bg-[#56DDEF] transition"
            >
              View All Blogs
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-[#7AE5F5]/20 via-white to-[#56DDEF]/20 py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-white/50"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#7AE5F5]/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#56DDEF]/30 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <div className="mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6 shadow-lg text-4xl">
                📞
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{data.cta.title}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                {data.cta.description}
              </p>
              <a
                href={data.cta.url}
                className="inline-block px-8 py-4 bg-[#56DDEF] text-white font-semibold rounded-xl hover:bg-[#56DDEF]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
              >
                {data.cta.buttonText}
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlogPage;
