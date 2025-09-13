import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import websiteData from "@/data/websiteData.json";

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

  return (
    <>
      <Header navigation={websiteData.navigation} siteInfo={websiteData.siteInfo} />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-2">{data.title}</h1>
        <h2 className="text-xl text-gray-600 mb-6">{data.subtitle}</h2>
        <p className="mb-8">{data.overview}</p>

        <h2 className="text-2xl font-semibold mb-4">✨ Featured Patient Stories</h2>
        <div className="space-y-6 mb-8">
          {data.featuredStories.map((story, i) => (
            <div key={i} className="p-4 border rounded-lg bg-gray-50">
              <h3 className="text-lg font-semibold mb-1">❤️ {story.title}</h3>
              <p className="mb-1">{story.story}</p>
              <p className="text-sm font-medium text-gray-700">– {story.patient}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-4">🌍 Why Patients Trust Us</h2>
        <ul className="list-disc list-inside mb-8">
          {data.trustReasons.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <div className="mt-8 text-center">
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

export default SuccessStoriesPage;
