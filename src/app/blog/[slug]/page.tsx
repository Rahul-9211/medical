import React from "react";
import BackgroundCarousel from "@/components/BackgroundCarousel";

interface Treatment {
  name: string;
  url: string;
}

interface BlogSection {
  title: string;
  points?: string[];
  treatments?: Treatment[];
}

interface CTA {
  text: string;
  url: string;
  benefits: string[];
}

interface Blog {
  slug: string;
  title: string;
  subtitle: string;
  introduction: string;
  sections: BlogSection[];
  cta: CTA;
}

interface BlogData {
  blogs: Blog[];
}
interface PageProps {
  params : Promise<{ slug: string }>;
}

export default async function BlogPage({ params }: PageProps) {
  const { slug } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/allblog.json`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to load blog data");

  const blogsData: BlogData = await res.json();
  const blog = blogsData.blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto py-10 text-center text-red-600">
        Blog not found
      </div>
    );
  }

  const getCardColor = (index: number) => {
    const colors = [
      { bg: "bg-[#7AE5F5]/10", hover: "hover:bg-[#7AE5F5]/20", text: "text-[#7AE5F5]" },
      { bg: "bg-[#56DDEF]/10", hover: "hover:bg-[#56DDEF]/20", text: "text-[#56DDEF]" },
      { bg: "bg-yellow-100", hover: "hover:bg-yellow-200", text: "text-yellow-500" },
      { bg: "bg-green-100", hover: "hover:bg-green-200", text: "text-green-600" },
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
              {blog.slug.includes("guide") ? "📚" : "✨"}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{blog.title}</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4">{blog.subtitle}</p>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">{blog.introduction}</p>
          </div>
        </section>

        {/* Content Sections */}
        <section className="relative overflow-hidden py-20 bg-gradient-to-br from-gray-50 via-white to-green-50">
          <div className="relative max-w-4xl mx-auto px-6 space-y-12">
            {blog.sections.map((section, idx) => {
              const color = getCardColor(idx);
              return (
                <div key={idx}>
                  <h2 className={`text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3 ${color.text}`}>
                    {section.title}
                  </h2>

                  {/* Points */}
                  {section.points && (
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 mb-6">
                      <ul className="space-y-2">
                        {section.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className={`flex-shrink-0 ${color.text}`}>•</span>
                            <span className="text-gray-700">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Treatments */}
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
                              <span className="font-medium group-hover:${treatColor.text}">{treat.name}</span>
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
          <div className="relative max-w-4xl mx-auto px-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 shadow-lg text-3xl">
                📩
              </div>
              <br />
              <a
                href={blog.cta.url}
                className="inline-block px-8 py-4 bg-[#56DDEF] text-white font-semibold rounded-xl hover:bg-[#56DDEF]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg mb-8"
              >
                {blog.cta.text}
              </a>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {blog.cta.benefits.map((benefit, i) => {
                  const benefitColor = getCardColor(i);
                  return (
                    <div key={i} className="flex items-start gap-3">
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
    </div>
  );
}
