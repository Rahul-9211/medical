
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import websiteData from "@/data/websiteData.json";
import React from "react";

type Params = Promise<{ slug: string }>

  
export default async function HeartSurgeryCostPage(props: { params : Params }) {
  const { slug } = await props.params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/treatmentCost/${slug}.json`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load treatments JSON");
  console.log(res);
  const data = await res.json();
  return (
    <>
    <Header navigation={websiteData.navigation} siteInfo={websiteData.siteInfo} />
    <div className="bg-white py-16 px-6 sm:px-12 lg:px-24">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          {data.title}
        </h1>
        <p className="text-lg text-gray-600">{data.subtitle}</p>
      </div>

      {/* Why India */}
      <div className="max-w-4xl mx-auto mb-12 text-gray-700 leading-relaxed">
        <p>{data.why_india}</p>
      </div>
      <Link
          href={data.treatment_page.link}
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow hover:bg-blue-700 transition"
        >
          {data.treatment_page.label}
        </Link>
     
      {/* Cost Table */}
      <div className="overflow-x-auto mb-12">
        <table className="w-full border border-gray-200 text-sm sm:text-base">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Cardiac Procedure</th>
              <th className="p-3 text-left">India (USD)</th>
              <th className="p-3 text-left">USA (USD)</th>
              <th className="p-3 text-left">You Save</th>
            </tr>
          </thead>
          <tbody>
            {data.procedures.map((p : { name : string , india : string , usa : string , saving : string }, i : number ) => (
              <tr key={i} className="border-t">
                <td className="p-3 font-medium">{p.name}</td>
                <td className="p-3">{p.india}</td>
                <td className="p-3">{p.usa}</td>
                <td className="p-3 text-green-600 font-semibold">{p.saving}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Inclusions & Exclusions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">✅ Inclusions</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {data.inclusions.map((item : string, i : number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">❌ Exclusions</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {data.exclusions.map((item : string, i : number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Cost Factors */}
      <div className="mb-12">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          🏥 Factors That Affect the Cost
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {data.cost_factors.map((item : string,  i : number) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Why India is Best */}
      <div className="mb-12">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          📌 Cost vs Quality – Why India is the Best Choice
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {data.why_best_choice.map((item : string, i : number) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Specialists */}
      <div className="mb-12">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          👨‍⚕️ Consult with Top Heart Specialists
        </h3>
        <ul className="space-y-3 text-gray-700">
          {data.specialists.map((doc : {name : string , hospital : string}, i : number) => (
            <li key={i}>
              <span className="font-semibold">{doc.name}</span> – {doc.hospital}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="text-center bg-blue-50 rounded-2xl p-8 border border-blue-100 shadow">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          {data.final_cta.headline}
        </h3>
        <ul className="list-disc list-inside text-gray-700 text-left max-w-md mx-auto mb-6 space-y-2">
          {data.final_cta.points.map((point : string, i : number) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
        <Link
          href={data.final_cta.button.link}
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow hover:bg-blue-700 transition"
        >
          {data.final_cta.button.label}
        </Link>
      </div>
    </div>
    <Footer footer={websiteData.footer} />
    </>
  );
}
