import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import websiteData from "@/data/websiteData.json";
import Image from "next/image";
import Link from "next/link";

interface Blog {
  id: number;
  title: string;
  heroImage: string;
  altText: string;
  introduction: string;
  sections?: { title: string; points?: string[]; steps?: string[] }[];
  internalLinks?: { label: string; url: string }[];
  cta?: string;
}

interface BlogData {
  blogs: Blog[];
}

interface PageProps {
  params: { id: string };
}

export default async function SingleBlogPage({ params }: PageProps) {
  const { id } = params;

  // Fetch all blogs
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/latestblog/allblog.json`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load blog data");

  const blogs: Blog[] = await res.json();
  const blog = blogs.find((b) => b.id === Number(id));


  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto py-20 text-center text-red-600">
        Blog not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50/30">
      {/* Header */}
      <Header navigation={websiteData.navigation} siteInfo={websiteData.siteInfo} />
      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{blog.title}</h1>
          <p className="mt-4 text-lg text-gray-600">{blog.introduction}</p>
          {blog.cta && (
            <div className="mt-6">
              <span className="inline-block px-6 py-3 bg-[#56DDEF] text-white font-semibold rounded-xl shadow hover:bg-[#56DDEF]/90 transition-all">
                {blog.cta}
              </span>
            </div>
          )}
        </div>

        {/* Hero Image */}
        {blog.heroImage && (
          <div className="relative w-full h-80 mb-12 rounded-2xl overflow-hidden shadow-lg">
            <Image src={blog.heroImage} alt={blog.altText} fill className="object-cover" />
          </div>
        )}

        {/* Sections */}
        {blog.sections?.map((section, idx) => (
          <div key={idx} className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>

            {section.points && (
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {section.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}

            {section.steps && (
              <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                {section.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            )}
          </div>
        ))}

        {/* Internal Links */}
        {blog.internalLinks && (
          <div className="mt-12 flex flex-wrap gap-4">
            {blog.internalLinks.map((link, i) => (
              <Link key={i} href={link.url} className="px-4 py-2 bg-[#7AE5F5]/30 text-[#056DDEF] font-semibold rounded-lg hover:bg-[#7AE5F5]/50 transition">
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </main>

      <Footer footer={websiteData.footer} />
      <WhatsAppButton />
    </div>
  );
}
