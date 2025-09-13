import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import websiteData from "@/data/websiteData.json";

interface BlogCategory {
  name: string;
  url: string;
}

interface BlogPost {
  title: string;
  url: string;
}

interface BlogData {
  title: string;
  subtitle: string;
  introduction: string;
  categories: BlogCategory[];
  recentPosts: BlogPost[];
  whyRead: string[];
  cta: {
    text: string;
    url: string;
  };
  highlights: string[];
}

const BlogPage = async () => {
  // Load JSON from public/blog/blog.json
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/blog.json`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to load blog data");

  const data: BlogData = await res.json();

  return (
    <>
      <Header
        navigation={websiteData.navigation}
        siteInfo={websiteData.siteInfo}
      />

      <main className="max-w-5xl mx-auto px-4 py-10">
        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-3">{data.title}</h1>
        <p className="text-lg text-gray-600 mb-8">{data.subtitle}</p>

        {/* Introduction */}
        <section className="mb-10">
          <p className="text-base leading-relaxed">{data.introduction}</p>
        </section>

        {/* Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">✍️ Popular Blog Categories</h2>
          <ul className="list-disc list-inside space-y-2">
            {data.categories.map((cat, i) => (
              <li key={i}>
                <a
                  href={cat.url}
                  className="text-indigo-600 hover:underline font-medium"
                >
                  {cat.name}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Recent Posts */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">🏥 Recent Blog Posts</h2>
          <ul className="space-y-3">
            {data.recentPosts.map((post, i) => (
              <li key={i}>
                <a
                  href={post.url}
                  className="block p-4 border rounded-lg hover:shadow-md transition"
                >
                  {post.title}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Why Read Our Blog */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">🌍 Why Read Our Blog?</h2>
          <ul className="list-disc list-inside space-y-2">
            {data.whyRead.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </section>

        {/* Highlights */}
        <section className="mb-12">
          <ul className="space-y-2">
            {data.highlights.map((item, i) => (
              <li key={i} className="text-green-600 font-medium">
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <div className="mt-8">
          <a
            href={data.cta.url}
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            {data.cta.text}
          </a>
        </div>
      </main>

      <Footer footer={websiteData.footer} />
    </>
  );
};

export default BlogPage;
