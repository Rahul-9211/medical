import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import websiteData from "@/data/websiteData.json";
import WhatsAppButton from "@/components/WhatsAppButton";

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
    <>
      <Header navigation={websiteData.navigation} siteInfo={websiteData.siteInfo} />
      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Doctor Details */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
          {doctor.media?.images?.[0]?.url && (
            <img
              src={doctor.media.images[0].url}
              alt={doctor.name}
              className="w-48 h-48 object-cover rounded-lg shadow-lg"
            />
          )}
          <div>
            <h1 className="text-4xl font-bold">{doctor.name}</h1>
            <p className="text-lg">{doctor.designation}</p>
            <p className="text-gray-600">{doctor.specialty}</p>
            <p className="text-sm text-gray-500">{doctor.hospital}</p>
            <p className="text-sm text-gray-500">
              {doctor.experienceYears}+ years of experience
            </p>
          </div>
        </div>

        {/* About */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">About</h2>
          <p>{doctor.about}</p>
        </section>

        {/* Education */}
        {doctor.education?.length > 0 && (
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Education</h2>
            <ul className="list-disc list-inside">
              {doctor.education.map((edu, i) => (
                <li key={i}>{edu}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Expertise */}
        {doctor.expertise?.length > 0 && (
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Expertise</h2>
            <ul className="list-disc list-inside">
              {doctor.expertise.map((exp, i) => (
                <li key={i}>{exp}</li>
              ))}
            </ul>
          </section>
        )}
      </main>
      <Footer footer={websiteData.footer} />
      <WhatsAppButton></WhatsAppButton>
    </>
  );
};

export default DoctorProfilePage;
