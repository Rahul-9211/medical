import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import websiteData from "@/data/websiteData.json";

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

export default async function BlogPage({ params }: { params: { slug: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/allblog.json`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to load blog data");
  }

  const blogsData = await res.json();
  const blogs: Blog[] = blogsData.blogs;
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto py-10 text-center text-red-600">
        Blog not found
      </div>
    );
  }

  return (
    <>
      <Header navigation={websiteData.navigation} siteInfo={websiteData.siteInfo} />

      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
        <p className="text-lg text-gray-600 mb-6">{blog.subtitle}</p>
        <p className="mb-6">{blog.introduction}</p>

        {blog.sections.map((section, idx) => (
          <div key={idx} className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">{section.title}</h2>

            {section.points && (
              <ul className="list-disc list-inside space-y-1">
                {section.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}

            {section.treatments && (
              <ul className="list-disc list-inside space-y-1">
                {section.treatments.map((treat, i) => (
                  <li key={i}>
                    <a
                      href={treat.url}
                      className="text-blue-600 hover:underline"
                    >
                      {treat.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <div className="bg-gray-100 rounded-lg p-6 mt-10">
          <a
            href="/contact"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg mb-4 hover:bg-indigo-700 transition"
          >
            {blog.cta.text}
          </a>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {blog.cta.benefits.map((benefit, i) => (
              <li key={i}>{benefit}</li>
            ))}
          </ul>
        </div>
      </main>

      <Footer footer={websiteData.footer} />
    </>
  );
}
