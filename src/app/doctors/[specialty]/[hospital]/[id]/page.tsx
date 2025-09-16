import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import websiteData from "@/data/websiteData.json";
import WhatsAppButton from "@/components/WhatsAppButton";
import QuoteForm from "@/components/QuoteForm";

interface Doctor {
  id: string;
  name: string;
  designation: string;
  specialty: string;
  hospital : string;
  hospitalslug: string;
  about: string;
  experienceYears: number;
  education: string[];
  expertise: string[];
  media: { images: { url: string; visible: boolean }[] };
}

interface PageProps {
  params: {
    specialty: string;
    hospital: string;
    id: string;
  };
}

const DoctorProfilePage = async ({ params }: PageProps) => {
  const { specialty, hospital, id } = await params;
  console.log(specialty,'weewfjwrjvwrbvberhvberv');
  console.log(hospital,'weewfjwrjvwrbvberhvberv');
  console.log(id,"w3");
  // fetch the JSON
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/doctors/doctor.json`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to load doctor data");

  const json = await res.json();
  console.log(json);
  const doctor: Doctor | undefined = json.doctors.find(
    (doc: Doctor) =>
      doc.id === id &&
      doc.specialty.toLowerCase().replace(/\s+/g, "-") === specialty &&
      doc.hospitalslug.toLowerCase().replace(/\s+/g, "-") === hospital
  );

  if (!doctor) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-red-600">Doctor not found</h1>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50/30">
      <Header navigation={websiteData.navigation} siteInfo={websiteData.siteInfo} />

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Background blur circles like home */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#7AE5F5]/20 to-[#56DDEF]/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-yellow-200/20 to-[#7AE5F5]/20 rounded-full blur-3xl -z-10"></div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Left Side - Doctor Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {doctor.media?.images?.[0]?.url && (
                <img
                  src={doctor.media.images[0].url}
                  alt={doctor.name}
                  className="w-48 h-48 object-cover rounded-2xl shadow-xl border border-gray-200"
                />
              )}
              <div>
                <h1 className="text-4xl font-bold text-gray-900">{doctor.name}</h1>
                <p className="text-lg text-gray-700">{doctor.designation}</p>
                <p className="text-gray-600">{doctor.specialty}</p>
                <p className="text-sm text-gray-500">{doctor.hospital}</p>
                <p className="text-sm text-gray-500">
                  {doctor.experienceYears}+ years of experience
                </p>
              </div>
            </div>

            {/* About */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">About</h2>
              <p className="text-gray-700 leading-relaxed">{doctor.about}</p>
            </section>

            {/* Education */}
            {doctor.education?.length > 0 && (
              <section>
                <h2 className="text-2xl font-semibold mb-3">Education</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {doctor.education.map((edu, i) => (
                    <li key={i}>{edu}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Expertise */}
            {doctor.expertise?.length > 0 && (
              <section>
                <h2 className="text-2xl font-semibold mb-3">Expertise</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {doctor.expertise.map((exp, i) => (
                    <li key={i}>{exp}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Right Side - Quote Form */}
          <aside className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Book a Free Consultation
            </h2>
            <QuoteForm
              quoteForm={websiteData.quoteForm}
              countries={websiteData.countries}
            />
          </aside>
        </div>
      </main>

      <Footer footer={websiteData.footer} />
      <WhatsAppButton />
    </div>
  );
};

export default DoctorProfilePage;
