import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import websiteData from "@/data/websiteData.json";

interface PatientServiceData {
  name: string;
  description: string;
  highlights: string[];         // Key points / bullet list
  travelSupport?: string[];     // Optional, only for services like Visa, Pickup, etc.
  whyChooseUs: string[];
  postTreatmentServices : string[];
  cost: string[];
  cta: {
    text: string;
    url: string;
  };
}


interface PageProps {
  params: {
    slug: string;
  };
}

const PatientServicePage = async ({ params }: PageProps) => {
  const { slug } = params;

  // Fetch JSON file from public folder
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/patientservices/${slug}.json`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load service data");
  const data: PatientServiceData = await res.json();

  return (
    <>
      <Header navigation={websiteData.navigation} siteInfo={websiteData.siteInfo} />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">{data.name}</h1>
        <p className="mb-6">{data.description}</p>

        {data.highlights.length > 0 && (
          <>
            <h2 className="text-2xl font-semibold mb-2">Key Highlights:</h2>
            <ul className="list-disc list-inside mb-6">
              {data.highlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </>
        )}

        {data.travelSupport && (
          <>
            <h2 className="text-2xl font-semibold mb-2">Travel Support:</h2>
            <ul className="list-disc list-inside mb-6">
              {data.travelSupport.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </>
        )}

        <h2 className="text-2xl font-semibold mb-2">Why Choose Us:</h2>
        <ul className="list-disc list-inside mb-6">
          {data.whyChooseUs.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-2">Cost:</h2>
        <ul className="list-disc list-inside mb-6">
          {data.cost.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

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

export default PatientServicePage;
