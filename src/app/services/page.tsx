import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import websiteData from "@/data/websiteData.json";

interface Service {
  title: string;
  description: string;
}

interface CTA {
  text: string;
  buttonText: string;
  link: string;
  features: string[];
}

interface PatientServicesData {
  name: string;
  headline: string;
  intro: string;
  highlights: string[];
  services: Service[];
  whyChooseUs: string[];
  cta: CTA;
}

const PatientServicesPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/patientservices/patientServices.json`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load patient services JSON");
  const data: PatientServicesData = await res.json();

  return (
    <>
      <Header navigation={websiteData.navigation} siteInfo={websiteData.siteInfo} />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">{data.headline}</h1>
        <p className="mb-6">{data.intro}</p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {data.highlights.map((highlight, idx) => (
            <div key={idx} className="bg-green-100 text-green-800 p-4 rounded-lg font-semibold">{highlight}</div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-4">Our Patient Services Include:</h2>
        <div className="space-y-4 mb-8">
          {data.services.map((service, idx) => (
            <div key={idx} className="border p-4 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-4">Why Patients Trust Us</h2>
        <ul className="list-disc pl-6 mb-8">
          {data.whyChooseUs.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        {/* CTA Section */}
        <div className="mt-8 text-center">
          <p className="text-xl font-semibold mb-4">{data.cta.text}</p>
          <Link
            href={data.cta.link}
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition mb-4"
          >
            {data.cta.buttonText}
          </Link>
          <ul className="flex gap-4 justify-center flex-wrap">
            {data.cta.features.map((feature, idx) => (
              <li key={idx} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">{feature}</li>
            ))}
          </ul>
        </div>
      </div>
      <Footer footer={websiteData.footer} />
    </>
  );
};

export default PatientServicesPage;
