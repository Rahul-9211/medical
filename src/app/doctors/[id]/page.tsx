import React from "react";
import Image from "next/image";
import websiteData from "@/data/websiteData.json";
import QuoteForm from "@/components/QuoteForm";

interface Doctor {
  id: string;
  name: string;
  designation: string;
  specialty: string;
  hospital: string;
  hospitalslug: string;
  about?: string;
  experienceYears?: number;
  education?: string[];
  expertise?: string[];
  awards?: string[];
  publications?: string[];
  roles?: string[];
  memberships?: string[];
  experience?: string[];
  patientsTreated?: string;
  media?: { images: { url: string; visible: boolean }[] };
}

interface PageProps {
  params: {
    specialty: string;
    hospital: string;
    id: string;
  };
}

const DoctorProfilePage = async ({ params }: { params: Promise<{ specialty: string; hospital: string; id: string }> }) => {
  const { id } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/doctors/doctor.json`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to load doctor data");

  const json = await res.json();
  const doctor: Doctor | undefined = json.doctors.find((doc: Doctor) => doc.id === id);

  if (!doctor) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-primary">Doctor not found</h1>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50/30">

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Background blur circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-teal-light/20 to-teal/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary-light/20 to-teal-light/20 rounded-full blur-3xl -z-10"></div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Left Side - Doctor Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Header */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-48 h-48 rounded-full shadow-xl border-4 border-white/80 relative overflow-hidden">
                <Image 
                  src="/doctors/doctor_avatar.png" 
                  alt={`${doctor.name} - Doctor Avatar`}
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
                {/* Professional Badge */}
                {/* <div className="absolute bottom-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-teal" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div> */}
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal to-teal-light">{doctor.name}</h1>
                <p className="text-lg font-medium text-teal-dark">{doctor.designation}</p>
                <p className="text-teal capitalize font-medium">{doctor.specialty}</p>
                <p className="text-sm text-gray-600">{doctor.hospital}</p>
                {doctor.experienceYears && (
                  <p className="text-sm text-gray-600 mt-2 flex items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-teal mr-2"></span>
                    {doctor.experienceYears}+ years of experience
                  </p>
                )}
              </div>
            </div>

            {/* About */}
            {doctor.about && (
              <section className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-teal/10 hover:border-teal/20 transition-colors">
                <h2 className="text-2xl font-semibold mb-3 text-teal">About</h2>
                <p className="text-gray-700 leading-relaxed">{doctor.about}</p>
              </section>
            )}

            {/* Education */}
            {doctor.education && doctor.education?.length > 0 && (
              <section className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-teal/10 hover:border-teal/20 transition-colors">
                <h2 className="text-2xl font-semibold mb-3 text-teal">Education</h2>
                <ul className="space-y-2">
                  {doctor.education.map((edu, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="inline-block w-2 h-2 rounded-full bg-teal mt-2"></span>
                      <span>{edu}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Expertise */}
            {doctor.expertise && doctor.expertise?.length > 0 && (
              <section className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-teal/10 hover:border-teal/20 transition-colors">
                <h2 className="text-2xl font-semibold mb-3 text-teal">Expertise</h2>
                <div className="flex flex-wrap gap-2">
                  {doctor.expertise.map((exp, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-teal/10 text-teal text-sm">
                      {exp}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Awards */}
            {doctor.awards && doctor.awards?.length > 0 && (
              <section className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-teal/10 hover:border-teal/20 transition-colors">
                <h2 className="text-2xl font-semibold mb-3 text-teal">Awards</h2>
                <ul className="space-y-2">
                  {doctor.awards.map((award, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="inline-block w-2 h-2 rounded-full bg-teal mt-2"></span>
                      <span>{award}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Publications */}
            {doctor.publications && doctor.publications?.length > 0 && (
              <section className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-teal/10 hover:border-teal/20 transition-colors">
                <h2 className="text-2xl font-semibold mb-3 text-teal">Publications</h2>
                <ul className="space-y-2">
                  {doctor.publications.map((pub, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="inline-block w-2 h-2 rounded-full bg-teal mt-2"></span>
                      <span>{pub}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Roles */}
            {doctor.roles && doctor.roles?.length > 0 && (
              <section className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-teal/10 hover:border-teal/20 transition-colors">
                <h2 className="text-2xl font-semibold mb-3 text-teal">Roles</h2>
                <ul className="space-y-2">
                  {doctor.roles.map((role, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="inline-block w-2 h-2 rounded-full bg-teal mt-2"></span>
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Memberships */}
            {doctor.memberships && doctor.memberships?.length > 0 && (
              <section className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-teal/10 hover:border-teal/20 transition-colors">
                <h2 className="text-2xl font-semibold mb-3 text-teal">Memberships</h2>
                <ul className="space-y-2">
                  {doctor.memberships.map((member, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="inline-block w-2 h-2 rounded-full bg-teal mt-2"></span>
                      <span>{member}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Work Experience */}
            {doctor.experience && doctor.experience?.length > 0 && (
              <section className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-teal/10 hover:border-teal/20 transition-colors">
                <h2 className="text-2xl font-semibold mb-3 text-teal">Professional Experience</h2>
                <ul className="space-y-2">
                  {doctor.experience.map((exp, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="inline-block w-2 h-2 rounded-full bg-teal mt-2"></span>
                      <span>{exp}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Patients Treated */}
            {doctor.patientsTreated && (
              <section className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-teal/10 hover:border-teal/20 transition-colors">
                <h2 className="text-2xl font-semibold mb-3 text-teal">Patients Treated</h2>
                <p className="text-gray-700">{doctor.patientsTreated}</p>
              </section>
            )}
          </div>

          {/* Right Side - Quote Form */}
          <aside className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-teal/20 sticky top-24">
            <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal to-teal-light">
              Book a Free Consultation
            </h2>
            <QuoteForm
              quoteForm={websiteData.quoteForm}
              countries={websiteData.countries}
              pageSource={doctor.name + " Doctor Page Lead"}
            />
          </aside>
        </div>
      </main>

    </div>
  );
};

export default DoctorProfilePage;
