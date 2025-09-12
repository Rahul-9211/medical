'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import websiteData from '@/data/websiteData.json';
import { useParams } from 'next/navigation';

interface TreatmentCategory {
  name: string;
  procedures: string[];
}

interface Specialist {
  name: string;
  specialization: string;
  experience: string;
  affiliation: string;
  expertise: string;
  consultation_link?: string;
}

interface TreatmentData {
  title: string;
  headline: string;
  introduction: string;
  treatments: {
    categories: TreatmentCategory[];
  };
  why_choose_india: string[];
  success_rates: Record<string, string>;
  top_specialists: Specialist[];
  free_consultation: {
    title: string;
    description: string;
    cta: string;
    link?: string;
  };
  cost_link?: string;
}

export default function TreatmentPage() {
  const { slug } = useParams();
  const [data, setData] = useState<TreatmentData | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`/treatments/${slug}.json`);
        if (!res.ok) throw new Error('JSON not found');
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [slug]);

  if (!data) return <p className="text-center py-20">Loading...</p>;

  const getCardColor = (index: number) => {
    const colors = [
      { bg: 'bg-[#7AE5F5]/10', hover: 'hover:bg-[#7AE5F5]/20', text: 'text-[#7AE5F5]' },
      { bg: 'bg-[#56DDEF]/10', hover: 'hover:bg-[#56DDEF]/20', text: 'text-[#56DDEF]' },
      { bg: 'bg-yellow-100', hover: 'hover:bg-yellow-200', text: 'text-yellow-500' },
      { bg: 'bg-green-100', hover: 'hover:bg-green-200', text: 'text-green-600' }
    ];
    return colors[index % colors.length];
  };

  return (
    <>
      <Header navigation={websiteData.navigation} siteInfo={websiteData.siteInfo} />

      {/* Hero Section */}
      <section className="bg-white from-green-50 via-white to-teal-50 py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white rounded-full mb-6 shadow-lg text-4xl">💊</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.headline}</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6">{data.introduction}</p>
          {data.cost_link && (
            <Link
              href={data.cost_link}
              className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition"
            >
              Check Treatment Cost
            </Link>
          )}
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-20 bg-gradient-to-b from-white via-green-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Treatments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.treatments.categories.map((category, i) => {
              const color = getCardColor(i);
              return (
                <div key={i} className={`p-6 rounded-2xl shadow-lg border ${color.bg} transition hover:shadow-xl hover:scale-105`}>
                  <h3 className={`text-xl font-bold mb-3 ${color.text}`}>{category.name}</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {category.procedures.map((proc, j) => (
                      <li key={j}>{proc}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose India */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose India?</h2>
        <ul className="max-w-4xl mx-auto space-y-3 text-gray-700">
          {data.why_choose_india.map((reason, i) => (
            <li key={i} className="flex items-center justify-center">
              <span className="text-[#56DDEF] mr-2">✔</span> {reason}
            </li>
          ))}
        </ul>
      </section>

      {/* Success Rates */}
      <section className="py-20 bg-gradient-to-r from-[#7AE5F5]/10 via-white to-[#56DDEF]/10">
        <h2 className="text-3xl font-bold mb-6 text-center">Success Rates</h2>
        <ul className="max-w-4xl mx-auto space-y-3 text-gray-700 list-disc list-inside">
          {Object.entries(data.success_rates).map(([key, value], i) => (
            <li key={i}><strong>{key}:</strong> {value}</li>
          ))}
        </ul>
      </section>

      {/* Top Specialists */}
      <section className="py-20 bg-white">
        <h2 className="text-3xl font-bold mb-10 text-center">Top Specialists</h2>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.top_specialists.map((spec, i) => {
            const color = getCardColor(i);
            return (
              <div key={i} className={`p-6 rounded-2xl shadow-lg border ${color.bg} transition hover:shadow-xl hover:scale-105`}>
                <h3 className={`text-xl font-bold mb-2 ${color.text}`}>{spec.name}</h3>
                <p className="text-gray-700">{spec.specialization}</p>
                <p className="text-gray-700">{spec.experience}</p>
                <p className="text-gray-700">{spec.affiliation}</p>
                <p className="text-gray-700 mb-4">{spec.expertise}</p>
                {spec.consultation_link && (
                  <Link href={spec.consultation_link} className="inline-block px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
                    Request Consultation
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Free Consultation */}
      {data.free_consultation && (
        <section className="py-20 bg-blue-50">
          <div className="max-w-4xl mx-auto px-6 text-center bg-white rounded-3xl shadow-xl p-12 border border-[#7AE5F5]/30">
            <h2 className="text-3xl font-bold mb-4">{data.free_consultation.title}</h2>
            <p className="text-gray-700 mb-6">{data.free_consultation.description}</p>
            {data.free_consultation.link && (
              <Link href={data.free_consultation.link} className="inline-block px-8 py-4 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition">
                {data.free_consultation.cta}
              </Link>
            )}
          </div>
        </section>
      )}

      <Footer footer={websiteData.footer} />
    </>
  );
}
