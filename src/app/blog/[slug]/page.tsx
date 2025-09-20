import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import websiteData from "@/data/websiteData.json";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackgroundCarousel from "@/components/BackgroundCarousel";

interface BlogSection {
  title: string;
  points?: string[];
  treatments?: { name: string; url: string }[];
}

interface Blog {
  slug: string;
  title: string;
  subtitle: string;
  introduction: string;
  sections: BlogSection[];
  cta: {
    text: string;
    benefits: string[];
  };
}
interface BlogData {
  blogs: Blog[];
}

export default async function BlogPage({params}: {params: Promise<{ slug: string }>}) {
  const { slug } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/allblog.json`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to load blog data");
  }

  const blogsData = await res.json();
  const blogs: Blog[] = blogsData.blogs;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto py-10 text-center text-red-600">
        Blog not found
      </div>
    );
  }

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
      <Header navigation={websiteData.navigation} siteInfo={websiteData.siteInfo} />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <BackgroundCarousel />
          
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-full mb-6 shadow-lg text-4xl backdrop-blur-sm">
              {blog.slug.includes('cost') ? '💰' :
               blog.slug.includes('treatment') ? '💊' :
               blog.slug.includes('surgery') ? '🏥' :
               blog.slug.includes('recovery') ? '💪' :
               blog.slug.includes('guide') ? '📚' : '✨'}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{blog.title}</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4">{blog.subtitle}</p>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">{blog.introduction}</p>
          </div>
        </section>

        {/* Content Sections */}
        <section className="relative overflow-hidden py-20 bg-gradient-to-br from-gray-50 via-white to-green-50">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 via-teal-600/5 to-cyan-600/5"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-green-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-4xl mx-auto px-6">
            {blog.sections.map((section, idx) => {
              const color = getCardColor(idx);
              return (
                <div key={idx} className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <span className={`text-2xl ${color.text}`}>
                      {idx % 4 === 0 ? '📝' : idx % 4 === 1 ? '💡' : idx % 4 === 2 ? '🎯' : '✨'}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{section.title}</h2>
                  </div>

                  {section.points && (
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {section.points.map((point, i) => {
                          const pointColor = getCardColor(i);
                          return (
                            <div key={i} className="flex items-start space-x-3">
                              <span className={`flex-shrink-0 ${pointColor.text}`}>•</span>
                              <span className="text-gray-700">{point}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {section.treatments && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {section.treatments.map((treat, i) => {
                        const treatColor = getCardColor(i);
                        return (
                          <a
                            key={i}
                            href={treat.url}
                            className={`group bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${treatColor.hover}`}
                          >
                            <div className="flex items-center gap-2">
                              <span className={`text-xl ${treatColor.text}`}>💊</span>
                              <span className={`font-medium group-hover:${treatColor.text}`}>{treat.name}</span>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-[#7AE5F5]/20 via-white to-[#56DDEF]/20 py-20 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-white/50"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#7AE5F5]/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#56DDEF]/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-4xl mx-auto px-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 shadow-lg text-3xl">
                📩
              </div>
           <div>   <a
                href="/contact"
                className="inline-block px-8 py-4 bg-[#56DDEF] text-white font-semibold rounded-xl hover:bg-[#56DDEF]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg mb-8"
              >
                {blog.cta.text}
              </a></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {blog.cta.benefits.map((benefit, i) => {
                  const benefitColor = getCardColor(i);
                  return (
                    <div key={i} className="flex items-start space-x-3">
                      <span className={`flex-shrink-0 ${benefitColor.text}`}>✓</span>
                      <span className="text-gray-700 text-left">{benefit}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer footer={websiteData.footer} />
      <WhatsAppButton></WhatsAppButton>
    </div>
  );
}
