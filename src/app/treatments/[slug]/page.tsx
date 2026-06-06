'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import BackgroundCarousel from '@/components/BackgroundCarousel';
import {
  getDoctorsForTreatment,
  mergeTreatmentSpecialists,
  type TreatmentDoctor,
  type TreatmentSpecialist,
} from '@/lib/treatmentDoctors';

interface TreatmentCategory {
  name: string;
  procedures: string[];
}

type Specialist = TreatmentSpecialist;

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

// Prefer real doctor image if provided; fallback to placeholder
function getDoctorImage(spec: Specialist): string {
  return (
    spec?.photoUrl ||
    spec?.image ||
    spec?.avatar ||
    spec?.media?.images?.find((img) => img?.visible)?.url ||
    '/doctors/doctor_avatar.png'
  );
}

export default function TreatmentPage() {
  const { slug } = useParams();
  const [data, setData] = useState<TreatmentData | null>(null);
  const [specialists, setSpecialists] = useState<Specialist[]>([]);

  useEffect(() => {
    async function fetchData() {
      if (!slug || typeof slug !== 'string') return;
      try {
        const [treatmentRes, doctorsRes] = await Promise.all([
          fetch(`/treatments/${slug}.json`),
          fetch('/doctors/doctor.json'),
        ]);
        if (!treatmentRes.ok) throw new Error('Treatment JSON not found');

        const treatmentJson = await treatmentRes.json();
        setData(treatmentJson);

        let matchedDoctors: Specialist[] = [];
        if (doctorsRes.ok) {
          const doctorsJson = await doctorsRes.json();
          const doctors: TreatmentDoctor[] = doctorsJson.doctors ?? [];
          matchedDoctors = getDoctorsForTreatment(doctors, slug);
        }

        setSpecialists(
          mergeTreatmentSpecialists(matchedDoctors, treatmentJson.top_specialists ?? [])
        );
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [slug]);

  if (!data) return <p className="text-center py-20">Loading...</p>;

  const specialistsHeading =
    specialists[0]?.specialization ||
    data.top_specialists?.[0]?.specialization ||
    data.title?.replace(/ in India$/i, '') ||
    'Specialists';

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50/80">

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <BackgroundCarousel />
          
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-full mb-6 shadow-lg text-4xl backdrop-blur-sm">💊</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{data.headline}</h1>
            <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">{data.introduction}</p>
            {data.cost_link && (
              <Link
                href={data.cost_link}
                className="inline-block px-8 py-4 bg-[#56DDEF] text-white font-semibold rounded-xl hover:bg-[#56DDEF]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-md sm:text-lg backdrop-blur-sm"
              >
                Check Treatment Cost
              </Link>
            )}
          </div>
        </section>

        {/* Treatments Grid */}
        <section className="relative overflow-hidden py-20 bg-gradient-to-br from-gray-50 via-white to-green-50">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 via-teal-600/5 to-cyan-600/5"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-green-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">Treatments</h2>
            <div className={`grid grid-cols-1 md:grid-cols-2 ${data.treatments.categories.length >= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-6`}>
              {data.treatments.categories.map((category, i) => {
                const color = getCardColor(i);
                return (
                  <div key={i} className={`group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden ${color.hover}`}>
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
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Choose India?</h2>
            <ul className="space-y-3 text-lg text-gray-700">
              {data.why_choose_india.map((reason, i) => (
                <li key={i} className="flex items-center justify-center">
                  <span className="text-[#56DDEF] mr-3">✔</span>
                  {reason}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Success Rates */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Success Rates</h2>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-12">
              <ul className="space-y-3 text-lg text-gray-700">
                {Object.entries(data.success_rates).map(([key, value], i) => (
                  <li key={i} className="flex items-center justify-center">
                    <span className="text-[#56DDEF] mr-3">📊</span>
                    <strong className="text-gray-900">{key}:</strong> <span className="ml-2">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Top Specialists — from doctor.json by treatment, with JSON fallback */}
        {specialists.length > 0 && (
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">
                Top {specialistsHeading}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {specialists.map((spec, i) => {
                  const color = getCardColor(i);
                  return (
                    <div
                      key={spec.id ?? spec.consultation_link ?? i}
                      className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                          <Image
                            src={getDoctorImage(spec)}
                            alt={`${spec.name} - Doctor Avatar`}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className={`text-xl font-bold ${color.text}`}>{spec.name}</h3>
                          {spec.specialization && (
                            <p className="text-gray-700">{spec.specialization}</p>
                          )}
                        </div>
                      </div>
                      {spec.experience && <p className="text-gray-700 mb-1">{spec.experience}</p>}
                      {spec.affiliation && <p className="text-gray-700 mb-1">{spec.affiliation}</p>}
                      {spec.expertise && <p className="text-gray-700 mb-4">{spec.expertise}</p>}
                      {spec.consultation_link && (
                        <Link
                          href={spec.consultation_link}
                          className="inline-block px-6 py-3 bg-[#56DDEF] text-white rounded-xl hover:bg-[#56DDEF]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold"
                        >
                          View Profile
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Free Consultation */}
        {data.free_consultation && (
          <section className="bg-gradient-to-br from-[#7AE5F5]/20 via-white to-[#56DDEF]/20 py-20 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-white/50"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#7AE5F5]/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#56DDEF]/30 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl"></div>
            
            <div className="relative max-w-6xl mx-auto px-6 text-center">
              {/* Header */}
              <div className="mb-16">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6 shadow-lg text-4xl">
                  📩
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{data.free_consultation.title}</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">{data.free_consultation.description}</p>
              </div>

              {/* Main CTA */}
              <div className="mb-16">
                {data.free_consultation.link && (
                  <Link href={data.free_consultation.link} className="px-8 py-4 bg-[#56DDEF] text-white font-semibold rounded-xl hover:bg-[#56DDEF]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-md sm:text-lg">
                    {data.free_consultation.cta}
                  </Link>
                )}
              </div>
            </div>
          </section>
        )}
      </main>

    </div>
  );
}
