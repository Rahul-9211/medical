import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import websiteData from "@/data/websiteData.json";

interface Therapy {
  name: string;
  description: string;
}

interface Cost {
  package: string;
  price: string;
}

interface PanchakarmaData {
  name: string;
  headline: string;
  intro: string;
  why_choose: string[];
  benefits: string[];
  core_therapies: Therapy[];
  supportive_therapies: string[];
  why_choose_india: string[];
  costs: Cost[];
  cta: {
    text: string;
    url: string;
    features: string[];
  };
}

const PanchakarmaPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Ayurveda/panchakarma-detox.json`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load Panchakarma JSON");
  const data: PanchakarmaData = await res.json();

  return (
    <>
      <Header navigation={websiteData.navigation} siteInfo={websiteData.siteInfo} />

      {/* Hero */}
      <section className="bg-green-50 py-16 text-center">
        <h1 className="text-4xl font-bold text-green-900 mb-4">{data.name}</h1>
        <h2 className="text-2xl font-semibold text-green-800 mb-4">{data.headline}</h2>
        <p className="max-w-3xl mx-auto text-green-700 mb-6">{data.intro}</p>
      </section>

      {/* Why Choose */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold mb-6">International Patients Choose Panchakarma in India For:</h2>
        <ul className="list-disc list-inside space-y-2 text-green-900">
          {data.why_choose.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
      </section>

      {/* Benefits */}
      <section className="bg-green-50 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-6 text-center">Benefits of Panchakarma Detox</h2>
          <ul className="list-check list-inside space-y-2 text-green-900">
            {data.benefits.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>
      </section>

      {/* Core Therapies */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold mb-6">Core Panchakarma Therapies</h2>
        <div className="space-y-4">
          {data.core_therapies.map((therapy, idx) => (
            <div key={idx} className="border p-4 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">{therapy.name}</h3>
              <p className="text-green-800">{therapy.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-green-700">
          Supportive therapies include: {data.supportive_therapies.join(", ")}
        </p>
      </section>

      {/* Why Choose India */}
      <section className="bg-green-50 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-6 text-center">Why Choose Panchakarma in India?</h2>
          <ul className="list-disc list-inside space-y-2 text-green-900">
            {data.why_choose_india.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>
      </section>

      {/* Cost Section */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Cost of Panchakarma Therapy</h2>
        <ul className="space-y-2 text-green-900 text-lg">
          {data.costs.map((item, idx) => (
            <li key={idx}><strong>{item.package}:</strong> {item.price}</li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="bg-green-700 py-12 text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">{data.cta.text}</h2>
        <Link
          href={data.cta.url}
          className="inline-block bg-white text-green-700 px-8 py-3 rounded-lg hover:bg-gray-200 transition"
        >
          {data.cta.text}
        </Link>
        <ul className="mt-6 space-y-2">
          {data.cta.features.map((feature, idx) => <li key={idx}>✅ {feature}</li>)}
        </ul>
      </section>

      <Footer footer={websiteData.footer} />
    </>
  );
};

export default PanchakarmaPage;
