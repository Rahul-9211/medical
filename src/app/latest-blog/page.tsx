import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Blog {
  id: number;
  title: string;
  heroImage: string;
  altText: string;
  introduction: string;
  cta: string;
}

export default async function LatestBlogPage() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/blog/latestblog/allblog.json`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to load blog data");
  }

  const blogs: Blog[] = await res.json();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50/80">

      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            📰 Latest Blog Articles on Medical Tourism in India
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Stay Updated with Expert Insights, Patient Stories & Healthcare News
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 mb-12">
          <p className="text-gray-700 leading-relaxed">
            Our blog is designed to keep international patients informed about
            treatment options, cost updates, healthcare trends, and patient
            experiences in India. We regularly publish guides, comparisons, and
            success stories to help you make the right decision about your
            treatment abroad.
          </p>
        </div>

        {/* Categories */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">✍️ Popular Blog Categories</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <li>📘 Medical Treatment Guides → Detailed insights on surgeries & therapies</li>
            <li>💰 Cost Comparisons → India vs USA/UK/UAE treatment pricing</li>
            <li>👩‍⚕️ Patient Success Stories → Real international patient journeys</li>
            <li>🛫 Travel & Visa Advice → Step-by-step help for medical travelers</li>
            <li>🌿 Ayurveda & Holistic Care → Natural therapies & recovery support</li>
            <li>📰 Latest Healthcare News → Hospitals, technology & innovations</li>
          </ul>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/latest-blog/${blog.id}`}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Blog Image */}
              <div className="relative w-full h-56">
                <Image
                  src={blog.heroImage}
                  alt={blog.altText}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-[#56DDEF] transition-colors">
                  {blog.title}
                </h2>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {blog.introduction}
                </p>
                <div className="mt-5">
                  <span className="inline-block px-4 py-2 bg-[#56DDEF] text-white text-sm font-semibold rounded-lg shadow hover:bg-[#56DDEF]/90 transition-all">
                    {blog.cta}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Why Read Section */}
        <div className="mt-20 bg-gradient-to-r from-[#56DDEF]/10 via-white to-[#7AE5F5]/10 rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🌍 Why Read Our Blog?</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <li>✅ Trusted medical information for patients worldwide</li>
            <li>✅ SEO-optimized guides written in simple language</li>
            <li>✅ Real success stories to build confidence</li>
            <li>✅ Transparent cost comparisons</li>
            <li>✅ Practical tips for travel & recovery in India</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/free-consultation"
            className="inline-block px-8 py-4 bg-[#56DDEF] text-white font-semibold rounded-xl hover:bg-[#56DDEF]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-md sm:text-lg"
          >
            📞 Book Free Consultation →
          </Link>
          <p className="mt-4 text-gray-600">
            ✅ Regularly updated articles · ✅ Transparent treatment info · ✅ International patient focus
          </p>
        </div>
      </main>

    </div>
  );
}
