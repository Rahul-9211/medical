import React from "react";
import Image from "next/image";
import websiteData from "@/data/websiteData.json";
import QuoteForm from "@/components/QuoteForm";

type DoctorAward = string | { title: string; year?: number | string };

interface Doctor {
  id: string;
  name: string;
  designation?: string;
  specialty?: string;
  subSpecialties?: string[];
  /** Hospital / network department list (UK spelling in data) */
  specialities?: string[];
  hospital?: string;
  hospitals?: string[];
  hospitalslug?: string;
  about?: string;
  experienceYears?: number;
  education?: string[];
  expertise?: string[];
  highlights?: string[];
  milestones?: DoctorAward[];
  academicAchievements?: DoctorAward[];
  records?: string[];
  awards?: DoctorAward[];
  locations?: string[];
  publications?: string | string[];
  researchPublications?: string[];
  roles?: string[];
  memberships?: string[];
  experience?: string[];
  patientsTreated?: string;
  availability?: string | Record<string, string>;
  media?: { images: { url: string; visible: boolean }[] };
  contact?: {
    email?: string;
    phone?: string | string[];
    availability?: string | Record<string, string>;
    location?: string;
  };
}

type ParsedAvailability =
  | { kind: "text"; text: string }
  | { kind: "schedule"; rows: { day: string; hours: string }[] };

function parseAvailability(value: string | Record<string, string> | undefined): ParsedAvailability | null {
  if (value == null) return null;
  if (typeof value === "string") {
    const text = value.trim();
    return text ? { kind: "text", text } : null;
  }
  const rows = Object.entries(value)
    .map(([day, hours]) => ({ day: day.trim(), hours: String(hours).trim() }))
    .filter((r) => r.day && r.hours);
  return rows.length > 0 ? { kind: "schedule", rows } : null;
}

function formatPhone(phone: string | string[] | undefined): string | null {
  if (phone == null) return null;
  if (typeof phone === "string") {
    const t = phone.trim();
    return t || null;
  }
  const nums = phone.map((p) => p.trim()).filter(Boolean);
  return nums.length > 0 ? nums.join(" · ") : null;
}

function awardDisplay(award: DoctorAward): string {
  if (typeof award === "string") return award.trim();
  const title = award?.title?.trim() ?? "";
  if (!title) return "";
  const yr = award.year;
  const hasYear =
    yr !== undefined && yr !== null && !(typeof yr === "string" && yr.trim() === "");
  return hasYear ? `${title} (${yr})` : title;
}

function nonEmptyStrings(items: string[] | undefined): string[] {
  return (items ?? []).map((s) => s.trim()).filter(Boolean);
}

function normalizePublications(pub: string | string[] | undefined): string[] {
  if (pub == null) return [];
  if (typeof pub === "string") {
    const t = pub.trim();
    return t ? [t] : [];
  }
  return nonEmptyStrings(pub);
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

  const educationList = nonEmptyStrings(doctor.education);
  const expertiseList = nonEmptyStrings(doctor.expertise);
  const subSpecialtiesList = nonEmptyStrings(doctor.subSpecialties);
  const specialitiesList = nonEmptyStrings(doctor.specialities);
  const highlightsList = nonEmptyStrings(doctor.highlights);
  const hospitalsList = nonEmptyStrings(doctor.hospitals);
  const milestonesList = (doctor.milestones ?? []).map(awardDisplay).filter(Boolean);
  const academicAchievementsList = (doctor.academicAchievements ?? []).map(awardDisplay).filter(Boolean);
  const recordsList = nonEmptyStrings(doctor.records);
  const awardsList = (doctor.awards ?? []).map(awardDisplay).filter(Boolean);
  const locationsList = nonEmptyStrings(doctor.locations);
  const publicationsList = normalizePublications(doctor.publications);
  const researchPublicationsList = nonEmptyStrings(doctor.researchPublications);
  const rolesList = nonEmptyStrings(doctor.roles);
  const membershipsList = nonEmptyStrings(doctor.memberships);
  const experienceList = nonEmptyStrings(doctor.experience);
  const contact = doctor.contact;
  const availability =
    parseAvailability(doctor.availability) ?? parseAvailability(contact?.availability);
  const phoneDisplay = formatPhone(contact?.phone);
  const contactRows =
    contact != null
      ? (
          [
            contact.email?.trim() && { label: "Email", value: contact.email.trim() },
            phoneDisplay && { label: "Phone", value: phoneDisplay },
            contact.location?.trim() && { label: "Location", value: contact.location.trim() },
          ].filter(Boolean) as { label: string; value: string }[]
        )
      : [];

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
                {(() => {
                  const profileImage =
                    doctor.media?.images?.find((img) => img.visible)?.url ??
                    doctor.media?.images?.[0]?.url ??
                    "/doctors/doctor_avatar.png";

                  return (
                    <Image
                      src={profileImage}
                      alt={doctor.name}
                      width={192}
                      height={192}
                      className="w-full h-full object-cover"
                    />
                  );
                })()}
                {/* Professional Badge */}
                {/* <div className="absolute bottom-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-teal" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div> */}
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal to-teal-light">{doctor.name}</h1>
                {doctor.designation?.trim() && (
                  <p className="text-lg font-medium text-teal-dark">{doctor.designation.trim()}</p>
                )}
                {doctor.specialty?.trim() && (
                  <p className="text-teal capitalize font-medium">{doctor.specialty.trim()}</p>
                )}
                {subSpecialtiesList.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {subSpecialtiesList.map((sub, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-md bg-teal/15 text-teal-dark text-sm font-medium capitalize"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                )}
                {hospitalsList.length > 0 ? (
                  <div className="text-sm text-gray-600 mt-2">
                    <p className="font-medium text-gray-700">Hospitals</p>
                    <ul className="mt-1 space-y-0.5 list-disc list-inside marker:text-teal">
                      {hospitalsList.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  doctor.hospital?.trim() && <p className="text-sm text-gray-600">{doctor.hospital.trim()}</p>
                )}
                {typeof doctor.experienceYears === "number" && doctor.experienceYears > 0 && (
                  <p className="text-sm text-gray-600 mt-2 flex items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-teal mr-2"></span>
                    {doctor.experienceYears}+ years of experience
                  </p>
                )}
              </div>
            </div>

            {/* About */}
            {doctor.about?.trim() && (
              <section className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-teal/10 hover:border-teal/20 transition-colors">
                <h2 className="text-2xl font-semibold mb-3 text-teal">About</h2>
                <p className="text-gray-700 leading-relaxed">{doctor.about.trim()}</p>
              </section>
            )}

            {/* Highlights */}
            {highlightsList.length > 0 && (
              <section className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-teal/10 hover:border-teal/20 transition-colors">
                <h2 className="text-2xl font-semibold mb-3 text-teal">Highlights</h2>
                <ul className="space-y-2">
                  {highlightsList.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="inline-block w-2 h-2 rounded-full bg-teal mt-2 shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Locations */}
            {locationsList.length > 0 && (
              <section className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-teal/10 hover:border-teal/20 transition-colors">
                <h2 className="text-2xl font-semibold mb-3 text-teal">Practice locations</h2>
                <ul className="space-y-2">
                  {locationsList.map((loc, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="inline-block w-2 h-2 rounded-full bg-teal mt-2"></span>
                      <span>{loc}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Education */}
            {educationList.length > 0 && (
              <section className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-teal/10 hover:border-teal/20 transition-colors">
                <h2 className="text-2xl font-semibold mb-3 text-teal">Education</h2>
                <ul className="space-y-2">
                  {educationList.map((edu, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="inline-block w-2 h-2 rounded-full bg-teal mt-2"></span>
                      <span>{edu}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Expertise */}
            {expertiseList.length > 0 && (
              <section className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-teal/10 hover:border-teal/20 transition-colors">
                <h2 className="text-2xl font-semibold mb-3 text-teal">Expertise</h2>
                <div className="flex flex-wrap gap-2">
                  {expertiseList.map((exp, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-teal/10 text-teal text-sm">
                      {exp}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Specialities (e.g. hospital departments / areas) */}
            {specialitiesList.length > 0 && (
              <section className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-teal/10 hover:border-teal/20 transition-colors">
                <h2 className="text-2xl font-semibold mb-3 text-teal">Specialities</h2>
                <div className="flex flex-wrap gap-2">
                  {specialitiesList.map((s, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-gray-100 text-gray-800 border border-gray-200/80 text-sm"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Milestones */}
            {milestonesList.length > 0 && (
              <section className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-teal/10 hover:border-teal/20 transition-colors">
                <h2 className="text-2xl font-semibold mb-3 text-teal">Milestones</h2>
                <ul className="space-y-2">
                  {milestonesList.map((line, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="inline-block w-2 h-2 rounded-full bg-teal mt-2 shrink-0"></span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Academic achievements */}
            {academicAchievementsList.length > 0 && (
              <section className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-teal/10 hover:border-teal/20 transition-colors">
                <h2 className="text-2xl font-semibold mb-3 text-teal">Academic achievements</h2>
                <ul className="space-y-2">
                  {academicAchievementsList.map((line, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="inline-block w-2 h-2 rounded-full bg-teal mt-2 shrink-0"></span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Awards */}
            {awardsList.length > 0 && (
              <section className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-teal/10 hover:border-teal/20 transition-colors">
                <h2 className="text-2xl font-semibold mb-3 text-teal">Awards</h2>
                <ul className="space-y-2">
                  {awardsList.map((award, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="inline-block w-2 h-2 rounded-full bg-teal mt-2"></span>
                      <span>{award}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Records */}
            {recordsList.length > 0 && (
              <section className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-teal/10 hover:border-teal/20 transition-colors">
                <h2 className="text-2xl font-semibold mb-3 text-teal">Records</h2>
                <ul className="space-y-2">
                  {recordsList.map((line, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="inline-block w-2 h-2 rounded-full bg-teal mt-2 shrink-0"></span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Availability — string or weekly schedule */}
            {availability?.kind === "text" && (
              <section className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-teal/10 hover:border-teal/20 transition-colors">
                <h2 className="text-2xl font-semibold mb-3 text-teal">Availability</h2>
                <p className="text-gray-700 leading-relaxed">{availability.text}</p>
              </section>
            )}
            {availability?.kind === "schedule" && (
              <section className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-teal/10 hover:border-teal/20 transition-colors">
                <h2 className="text-2xl font-semibold mb-3 text-teal">Availability</h2>
                <dl className="divide-y divide-teal/10">
                  {availability.rows.map((row) => (
                    <div key={row.day} className="flex flex-col sm:flex-row sm:gap-4 py-2.5 first:pt-0 last:pb-0">
                      <dt className="text-sm font-medium text-teal-dark sm:w-32 shrink-0">{row.day}</dt>
                      <dd className="text-gray-700 mt-0.5 sm:mt-0">{row.hours}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}

            {/* Contact — only rows with values (empty email/phone omitted) */}
            {contactRows.length > 0 && (
              <section className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-teal/10 hover:border-teal/20 transition-colors">
                <h2 className="text-2xl font-semibold mb-3 text-teal">Contact</h2>
                <dl className="space-y-3 text-gray-700">
                  {contactRows.map((row) => (
                    <div key={row.label}>
                      <dt className="text-sm font-medium text-teal-dark">{row.label}</dt>
                      <dd className="mt-0.5">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}

            {/* Publications — string or list */}
            {publicationsList.length > 0 && (
              <section className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-teal/10 hover:border-teal/20 transition-colors">
                <h2 className="text-2xl font-semibold mb-3 text-teal">Publications</h2>
                {publicationsList.length === 1 ? (
                  <p className="text-gray-700 leading-relaxed">{publicationsList[0]}</p>
                ) : (
                  <ul className="space-y-2">
                    {publicationsList.map((pub, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <span className="inline-block w-2 h-2 rounded-full bg-teal mt-2 shrink-0"></span>
                        <span>{pub}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            )}

            {/* Research publications */}
            {researchPublicationsList.length > 0 && (
              <section className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-teal/10 hover:border-teal/20 transition-colors">
                <h2 className="text-2xl font-semibold mb-3 text-teal">Research & publications</h2>
                {researchPublicationsList.length === 1 ? (
                  <p className="text-gray-700 leading-relaxed">{researchPublicationsList[0]}</p>
                ) : (
                  <ul className="space-y-2">
                    {researchPublicationsList.map((line, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <span className="inline-block w-2 h-2 rounded-full bg-teal mt-2 shrink-0"></span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            )}

            {/* Roles */}
            {rolesList.length > 0 && (
              <section className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-teal/10 hover:border-teal/20 transition-colors">
                <h2 className="text-2xl font-semibold mb-3 text-teal">Roles</h2>
                <ul className="space-y-2">
                  {rolesList.map((role, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="inline-block w-2 h-2 rounded-full bg-teal mt-2"></span>
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Memberships */}
            {membershipsList.length > 0 && (
              <section className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-teal/10 hover:border-teal/20 transition-colors">
                <h2 className="text-2xl font-semibold mb-3 text-teal">Memberships</h2>
                <ul className="space-y-2">
                  {membershipsList.map((member, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="inline-block w-2 h-2 rounded-full bg-teal mt-2"></span>
                      <span>{member}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Work Experience */}
            {experienceList.length > 0 && (
              <section className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-teal/10 hover:border-teal/20 transition-colors">
                <h2 className="text-2xl font-semibold mb-3 text-teal">Professional Experience</h2>
                <ul className="space-y-2">
                  {experienceList.map((exp, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="inline-block w-2 h-2 rounded-full bg-teal mt-2"></span>
                      <span>{exp}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Patients Treated */}
            {doctor.patientsTreated?.trim() && (
              <section className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-teal/10 hover:border-teal/20 transition-colors">
                <h2 className="text-2xl font-semibold mb-3 text-teal">Patients Treated</h2>
                <p className="text-gray-700">{doctor.patientsTreated.trim()}</p>
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
