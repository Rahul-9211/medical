// app/hospital/[id]/page.tsx
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import websiteData from "@/data/websiteData.json";

type Params = Promise<{ id: string }>;

export default async function HospitalPage({
    params,
  }: { params: Params }) {
    const { id } = await params;

  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "";
  const res = await fetch(`${baseUrl}/hospitaldata/${id}.json`, { cache: "no-store" });

  if (!res.ok) return notFound();
  const hospital = await res.json();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50/30">
      {/* Header */}
      <Header navigation={websiteData.navigation} siteInfo={websiteData.siteInfo} />

      <main className="max-w-7xl mx-auto px-6 py-10 space-y-12">
        {/* Hero */}
        <section className="bg-white rounded-3xl shadow-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            <div className="lg:col-span-2 space-y-4">
              <h1 className="text-3xl font-bold text-gray-900">{hospital.name}</h1>
              <p className="text-gray-600">{hospital.location.address}</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <span>⭐ {hospital.rating.value} ({hospital.rating.reviews} reviews)</span>
                <span>✅ {hospital.patientsRecommended.percent}% recommended</span>
                <span>🛏 {hospital.beds} beds</span>
              </div>
              <p className="text-sm text-gray-500">Established in {hospital.established}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {hospital.accreditations.map((a: string, i: number) => (
                  <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                    {a}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex space-x-3">
              {hospital.media.images.filter((img: any) => img.visible).slice(0, 2).map((img: any, i: number) => (
                <img key={i} src={img.url} alt="Hospital" className="w-32 h-32 object-cover rounded-xl shadow" />
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">About</h2>
          <p className="text-gray-700">{hospital.about.overview}</p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold">🏆 Awards</h3>
              <ul className="list-disc list-inside text-gray-600">
                {hospital.about.awards.map((a: string, i: number) => <li key={i}>{a}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">🚀 Milestones</h3>
              <ul className="list-disc list-inside text-gray-600">
                {hospital.about.milestones.map((m: string, i: number) => <li key={i}>{m}</li>)}
              </ul>
            </div>
          </div>
        </section>

        {/* International Patients */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">International Patient Services</h2>
          <p className="text-gray-700">
            Serving <b>{hospital.internationalPatientServices.annualPatients.toLocaleString()}</b> patients
            annually from <b>{hospital.internationalPatientServices.countries}</b> countries.
          </p>
          <ul className="list-disc list-inside mt-3 text-gray-600">
            {hospital.internationalPatientServices.services.map((s: string, i: number) => <li key={i}>{s}</li>)}
          </ul>
        </section>

        {/* Departments */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Departments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hospital.departments.map((dept: any, i: number) => (
              <div key={i} className="bg-white rounded-xl shadow p-5">
                <h3 className="font-bold text-lg mb-2">{dept.name} ({dept.doctorCount} Doctors)</h3>
                <ul className="space-y-2 text-sm">
                  {dept.doctors.map((doc: any) => (
                    <li key={doc.id}>
                      <a href={doc.profileUrl} className="text-blue-600 hover:underline font-medium">
                        {doc.name}
                      </a>{" "}
                      - {doc.specialty}, {doc.experienceYears} yrs exp. ⭐ {doc.rating}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Top Doctors */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Top Doctors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hospital.topDoctors.map((doc: any) => (
              <div key={doc.id} className="bg-white rounded-xl shadow p-5">
                <h3 className="font-bold text-lg">{doc.name}</h3>
                <p className="text-gray-600">{doc.specialty}</p>
                <p className="text-sm text-gray-500">{doc.experienceYears} yrs experience</p>
                <p className="text-yellow-500">⭐ {doc.rating}</p>
                <a href={doc.profileUrl} className="text-blue-600 hover:underline text-sm mt-2 inline-block">
                  View Profile
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Team & Specialities */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">Team & Specialities</h2>
          <p className="text-gray-700">👩‍⚕️ {hospital.teamAndSpecialities.doctorsCount} doctors • 👨‍⚕️ {hospital.teamAndSpecialities.staffCount} staff • {hospital.teamAndSpecialities.specialitiesCount} specialities</p>
          <div className="flex flex-wrap gap-3 mt-4">
            {hospital.teamAndSpecialities.centersOfExcellence.map((c: string, i: number) => (
              <span key={i} className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm">{c}</span>
            ))}
          </div>
        </section>

        {/* Facilities */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold">🏨 Comfort</h3>
              <ul className="list-disc list-inside text-gray-600">
                {hospital.facilities.comfort.map((f: string, i: number) => <li key={i}>{f}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">⚙️ Infrastructure</h3>
              <ul className="list-disc list-inside text-gray-600">
                {hospital.facilities.infrastructure.map((f: string, i: number) => <li key={i}>{f}</li>)}
              </ul>
            </div>
          </div>
        </section>

        {/* Address */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">Address</h2>
          <p className="text-gray-700">{hospital.address.full}</p>
          <ul className="mt-3 space-y-1 text-gray-600">
            {hospital.address.nearby.map((n: any, i: number) => (
              <li key={i}>📍 {n.place} - {n.distanceKm} km ({n.duration})</li>
            ))}
          </ul>
        </section>

        {/* Reviews */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">Patient Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hospital.reviews.map((r: any, i: number) => (
              <div key={i} className="bg-white rounded-xl shadow p-5">
                <p className="font-semibold">{r.patient} ({r.country})</p>
                <p className="text-yellow-500">⭐ {r.rating}</p>
                <p className="text-gray-600 mt-2">{r.feedback}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Media */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {hospital.media.images.filter((img: any) => img.visible).map((img: any, i: number) => (
              <img key={i} src={img.url} alt="Hospital" className="rounded-xl shadow" />
            ))}
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {hospital.media.videos.filter((v: any) => v.visible).map((vid: any, i: number) => (
              <iframe key={i} src={vid.url} className="w-full h-64 rounded-xl shadow" allowFullScreen />
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">Contact</h2>
          <p>📞 {hospital.contact.phone}</p>
          <p>✉️ {hospital.contact.email}</p>
          <a href={hospital.contact.website} target="_blank" className="text-blue-600 hover:underline">
            {hospital.contact.website}
          </a>
        </section>
      </main>

      {/* Footer */}
      <Footer footer={websiteData.footer} />
    </div>
  );
}
