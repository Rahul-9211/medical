// app/ayurveda/page.tsx
import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import websiteData from "@/data/websiteData.json";

interface Service {
  name: string;
  description?: string;
  url?: string;
}

interface AyurvedaData {
  name: string;
  url: string;
  services: Service[];
}

const AyurvedaPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Ayurveda/Ayurveda.json`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load treatments JSON");
  const data: AyurvedaData = await res.json();

  return (
    <>
      <Header navigation={websiteData.navigation} siteInfo={websiteData.siteInfo} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-100 to-green-50 py-16 text-center">
        <h1 className="text-5xl font-bold text-green-900 mb-4">{data.name}</h1>
        <p className="text-lg text-green-800 max-w-2xl mx-auto mb-6">
          India is the birthplace of Ayurveda – the world’s oldest system of natural healing. 
          Our Ayurveda & wellness centers combine ancient therapies with modern medical care for holistic health.
        </p>
        <Link
          href="/ayurveda/online-consultations"
          className="inline-block bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800 transition"
        >
          Book Online Ayurvedic Consultation
        </Link>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Ayurveda & Holistic Care Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.services.map((service, index) => (
            <div key={index} className="border rounded-lg p-6 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">
                {service.url ? (
                  <Link href={service.url} className="text-green-700 hover:underline">
                    {service.name}
                  </Link>
                ) : (
                  service.name
                )}
              </h3>
              {service.description && <p className="text-gray-700">{service.description}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Ayurveda Section */}
      <section className="bg-green-50 py-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Why International Patients Choose Ayurveda in India</h2>
          <ul className="space-y-3 text-green-900 text-lg">
            <li>✅ 5,000+ years of proven healing traditions</li>
            <li>✅ No side effects, safe & natural methods</li>
            <li>✅ Personalized treatment plans by expert Vaidyas</li>
            <li>✅ Combines well with modern medicine for faster recovery</li>
            <li>✅ Affordable & holistic care options</li>
          </ul>
        </div>
      </section>

      <Footer footer={websiteData.footer} />
    </>
  );
};

export default AyurvedaPage;
