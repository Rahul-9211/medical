// app/hospital/[id]/page.tsx
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import WhatsAppButton from "@/components/WhatsAppButton";
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
  const mediaImages: any[] = hospital.media?.images?.filter((img: any) => img.visible) || [];
  console.log(mediaImages);
  // Map hospital ID to folder name
  const folderMap: { [key: string]: string } = {
    'artemis': 'artemis',
    'ck-birla': 'birla',
    'fortis-memorial': 'fortis',
    'manipal': 'manipal',
    'marengo-asia': 'marengo',
    'max-super-speciality': 'max',
    'medanta': 'medanta',
    'paras': 'paras'
  };

  // Get folder name for current hospital
  const folderName = folderMap[id];
  
  // Function to check which images exist for a hospital
  const getHospitalImages = (folder: string) => {
    const images: { url: string; visible: boolean }[] = [];
    
    // Map of known image files for each hospital
    const hospitalImages: { [key: string]: string[] } = {
      'artemis': ['artemis-1.jpg', 'artemis-2.jpg', 'artemis-3.jpg'],
      'birla': ['birla-1.jpg', 'birla-2.png', 'birla-3.png'],
      'fortis': ['fortis-1.jpg', 'fortis-2.jpg', 'fortis-3.png'],
      'manipal': ['manipal-1.jpeg', 'manipal-2.png', 'manipal-3.jpg'],
      'marengo': ['Marengo-1.png', 'Marengo-2.png', 'Marengo-3.png'],
      'max': ['max-1.jpg', 'max-2.jpg', 'max-3.jpg'],
      'medanta': ['medanta-1.jpg', 'medanta-2.jpg', 'medanta-3.jpeg'],
      'paras': ['paras-1.jpg', 'paras-2.jpeg', 'paras-3.png']
    };

    // Get the actual image files for this hospital
    const imageFiles = hospitalImages[folder] || [];
    
    // Create image objects for each existing image
    imageFiles.forEach(filename => {
      images.push({
        url: `/Images/hospital/${folder}/${filename}`,
        visible: true
      });
    });

    return images;
  };

  // Create array of local image paths
  const localImages = folderName ? getHospitalImages(folderName) : [];

  // Use local images or fallback to a default if folder not found
  const displayImages = localImages;
  const heroImageUrl = displayImages[0]?.url || "/Images/hospital/fortis/fortis-1.jpg";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50/80">
      {/* Header */}
      <Header navigation={websiteData.navigation} siteInfo={websiteData.siteInfo} />

      <main className="relative max-w-7xl mx-auto px-6 py-10 space-y-10">
        {/* Background Pattern */}
        <div className="pointer-events-none absolute -top-10 right-0 w-72 h-72 bg-gradient-to-bl from-[#7AE5F5]/20 to-[#56DDEF]/20 rounded-full blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-10 left-0 w-72 h-72 bg-gradient-to-tr from-yellow-200/20 to-[#7AE5F5]/20 rounded-full blur-3xl"></div>

        {/* Photo Banner */}
        <section className="relative h-56 md:h-72 lg:h-80 rounded-3xl overflow-hidden shadow-xl border border-white/40">
          <img src={heroImageUrl} alt={`${hospital.name} banner`} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
          <div className="relative z-10 h-full flex items-end">
            <div className="p-6 lg:p-8">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white border border-white/30 mb-2">Featured Hospital</div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">{hospital.name}</h1>
              {hospital.location?.address && (
                <p className="text-white/90 mt-1 text-sm">{hospital.location.address}</p>
              )}
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="#appointment" className="inline-flex items-center bg-[#56DDEF] text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-[#56DDEF]/90 transition-all shadow-lg hover:shadow-xl">
                  Book Appointment
                </a>
                <a
                  href={`https://wa.me/8595199918?text=${encodeURIComponent(`Hi! I want to book an appointment at ${hospital.name}.`)}`}
                  target="_blank"
                  className="inline-flex items-center bg-green-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-green-600 transition-all shadow-lg hover:shadow-xl"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Hero */}
        <section>
          <div className="bg-white/90 backdrop-blur-sm border border-white/40 rounded-3xl shadow-xl p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            <div className="lg:col-span-2 space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-[#7AE5F5]/20 to-[#56DDEF]/20 text-gray-700 border border-[#56DDEF]/20">Verified Hospital</div>
              <div className="flex flex-wrap gap-3 text-sm">
                {hospital.rating && (
                  <span className="inline-flex items-center px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full border border-yellow-100">⭐ {hospital.rating.value} ({hospital.rating.reviews} reviews)</span>
                )}
                {hospital.patientsRecommended && (
                  <span className="inline-flex items-center px-3 py-1 bg-green-50 text-green-700 rounded-full border border-green-100">✅ {hospital.patientsRecommended.percent}% recommended</span>
                )}
                {hospital.beds && (
                  <span className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-100">🛏 {hospital.beds} beds</span>
                )}
              </div>
              {hospital.established && <p className="text-sm text-gray-500">Established in {hospital.established}</p>}
              {hospital.accreditations?.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {hospital.accreditations.map((a: string, i: number) => (
                    <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full border border-blue-100">{a}</span>
                  ))}
                </div>
              )}
            </div>
            <div className="flex space-x-3">
              {displayImages.slice(0, 3).map((img: any, i: number) => (
                <img key={i} src={img.url} alt="Hospital" className="w-28 h-28 object-cover rounded-xl shadow" />
              ))}
            </div>
          </div>
        </section>

        {/* Content + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            {hospital.about?.visible && (
              <section>
                <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 border border-gray-100">
                  <h2 className="text-2xl font-semibold mb-3 text-gray-900">About</h2>
                  <p className="text-gray-700">{hospital.about.overview}</p>
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {hospital.about.awards?.length > 0 && (
                      <div>
                        <h3 className="font-semibold">🏆 Awards</h3>
                        <ul className="list-disc list-inside text-gray-600">
                          {hospital.about.awards.map((a: string, i: number) => <li key={i}>{a}</li>)}
                        </ul>
                      </div>
                    )}
                    {hospital.about.milestones?.length > 0 && (
                      <div>
                        <h3 className="font-semibold">🚀 Milestones</h3>
                        <ul className="list-disc list-inside text-gray-600">
                          {hospital.about.milestones.map((m: string, i: number) => <li key={i}>{m}</li>)}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </section>
            )}

            {/* International Patient Services */}
            {hospital.internationalPatientServices?.visible && (
              <section>
                <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 border border-gray-100">
                  <h2 className="text-2xl font-semibold mb-3 text-gray-900">International Patient Services</h2>
                  <p className="text-gray-700">
                    Serving <b>{hospital.internationalPatientServices.annualPatients.toLocaleString()}</b> patients
                    annually from <b>{hospital.internationalPatientServices.countries}</b> countries.
                  </p>
                  {hospital.internationalPatientServices.services?.length > 0 && (
                    <ul className="list-disc list-inside mt-3 text-gray-600">
                      {hospital.internationalPatientServices.services.map((s: string, i: number) => <li key={i}>{s}</li>)}
                    </ul>
                  )}
                </div>
              </section>
            )}

            {/* Departments */}
            {hospital.departments?.visible && hospital.departments.list?.length > 0 && (
              <section>
                <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 border border-gray-100">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-900">Departments</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {hospital.departments.list.map((dept: any, i: number) => (
                      <div key={i} className="bg-white rounded-xl shadow p-5 border border-gray-100">
                        <h3 className="font-bold text-lg mb-2">{dept.name} ({dept.doctorCount} Doctors)</h3>
                        <ul className="space-y-4 text-sm">
                          {dept.doctors?.map((doc: any) => (
                            <li key={doc.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                              <div className="text-gray-800">
                                <a href={doc.profileUrl} className="text-blue-600 hover:underline font-medium">{doc.name}</a>{" "}
                                - {doc.specialty}, {doc.experienceYears} yrs exp. ⭐ {doc.rating}
                              </div>
                              <div className="flex items-center gap-2">
                                <a href="#appointment" className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#56DDEF] text-white hover:bg-[#56DDEF]/90">Book</a>
                                <a
                                  href={`https://wa.me/8595199918?text=${encodeURIComponent(`Hi! I want to consult with ${doc.name} at ${hospital.name}.`)}`}
                                  target="_blank"
                                  className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-green-500 text-white hover:bg-green-600"
                                >
                                  WhatsApp
                                </a>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Top Doctors */}
            {hospital.topDoctors?.visible && hospital.topDoctors.list?.length > 0 && (
              <section>
                <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 border border-gray-100">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-900">Top Doctors</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {hospital.topDoctors.list.map((doc: any) => (
                      <div key={doc.id} className="bg-white rounded-xl shadow p-5 border border-gray-100">
                        <h3 className="font-bold text-lg">{doc.name}</h3>
                        <p className="text-gray-600">{doc.specialty}</p>
                        <p className="text-sm text-gray-500">{doc.experienceYears} yrs experience</p>
                        <p className="text-yellow-500">⭐ {doc.rating}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          <a href="#appointment" className="inline-flex items-center px-3 py-2 rounded-lg text-xs font-semibold bg-[#56DDEF] text-white hover:bg-[#56DDEF]/90">Book Appointment</a>
                          <a
                            href={`https://wa.me/8595199918?text=${encodeURIComponent(`Hi! I want to consult with ${doc.name} at ${hospital.name}.`)}`}
                            target="_blank"
                            className="inline-flex items-center px-3 py-2 rounded-lg text-xs font-semibold bg-green-500 text-white hover:bg-green-600"
                          >
                            Chat on WhatsApp
                          </a>
                        </div>
                        <a href={doc.profileUrl} className="text-blue-600 hover:underline text-sm mt-3 inline-block">View Profile</a>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Team & Specialities */}
            {hospital.teamAndSpecialities?.visible && (
              <section>
                <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 border border-gray-100">
                  <h2 className="text-2xl font-semibold mb-3 text-gray-900">Team & Specialities</h2>
                  <p className="text-gray-700">👩‍⚕️ {hospital.teamAndSpecialities.doctorsCount} doctors • 👨‍⚕️ {hospital.teamAndSpecialities.staffCount} staff • {hospital.teamAndSpecialities.specialitiesCount} specialities</p>
                  <div className="flex flex-wrap gap-3 mt-4">
                    {hospital.teamAndSpecialities.centersOfExcellence?.map((c: string, i: number) => (
                      <span key={i} className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm border border-green-100">{c}</span>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Facilities */}
            {hospital.facilities?.visible && (
              <section>
                <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 border border-gray-100">
                  <h2 className="text-2xl font-semibold mb-3 text-gray-900">Facilities</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {hospital.facilities.comfort?.length > 0 && (
                      <div>
                        <h3 className="font-semibold">🏨 Comfort</h3>
                        <ul className="list-disc list-inside text-gray-600">
                          {hospital.facilities.comfort.map((f: string, i: number) => <li key={i}>{f}</li>)}
                        </ul>
                      </div>
                    )}
                    {hospital.facilities.infrastructure?.length > 0 && (
                      <div>
                        <h3 className="font-semibold">⚙️ Infrastructure</h3>
                        <ul className="list-disc list-inside text-gray-600">
                          {hospital.facilities.infrastructure.map((f: string, i: number) => <li key={i}>{f}</li>)}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </section>
            )}

            {/* Address */}
            {hospital.address?.visible && (
              <section>
                <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 border border-gray-100">
                  <h2 className="text-2xl font-semibold mb-3 text-gray-900">Address</h2>
                  <p className="text-gray-700">{hospital.address.full}</p>
                  {hospital.address.nearby?.length > 0 && (
                    <ul className="mt-3 space-y-1 text-gray-600">
                      {hospital.address.nearby.map((n: any, i: number) => (
                        <li key={i}>📍 {n.place} - {n.distanceKm} km ({n.duration})</li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            )}

            {/* Reviews */}
            {hospital.reviews?.length > 0 && (
              <section>
                <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 border border-gray-100">
                  <h2 className="text-2xl font-semibold mb-3 text-gray-900">Patient Reviews</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {hospital.reviews.map((r: any, i: number) => (
                      <div key={i} className="bg-white rounded-xl shadow p-5 border border-gray-100">
                        <p className="font-semibold">{r.patient} ({r.country})</p>
                        <p className="text-yellow-500">⭐ {r.rating}</p>
                        <p className="text-gray-600 mt-2">{r.feedback}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Media */}
            {hospital.media && (
              <section id="gallery">
                <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 border border-gray-100">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-900">Gallery</h2>
                  {displayImages.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {displayImages.map((img: any, i: number) => (
                        <div key={i} className="aspect-[16/10] relative group overflow-hidden rounded-xl shadow-lg">
                          <img 
                            src={img.url} 
                            alt={`${hospital.name} - Image ${i + 1}`} 
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                          />
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      ))}
                    </div>
                  )}
                  {hospital.media.videos?.filter((v: any) => v.visible).length > 0 && (
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                      {hospital.media.videos.filter((v: any) => v.visible).map((vid: any, i: number) => (
                        <iframe key={i} src={vid.url} className="w-full h-64 rounded-xl shadow" allowFullScreen />
                      ))}
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Contact */}
            {/* {hospital.contact && (
              <section>
                <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 border border-gray-100">
                  <h2 className="text-2xl font-semibold mb-3 text-gray-900">Contact</h2>
                  {hospital.contact.phone && <p>📞 {hospital.contact.phone}</p>}
                  {hospital.contact.email && <p>✉️ {hospital.contact.email}</p>}
                  {hospital.contact.website && (
                    <a href={hospital.contact.website} target="_blank" className="text-blue-600 hover:underline">{hospital.contact.website}</a>
                  )}
                </div>
              </section>
            )} */}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div id="appointment" className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 lg:p-6 shadow-2xl border border-white/20">
                <QuoteForm 
                  quoteForm={websiteData.quoteForm}
                  countries={websiteData.countries}
                  pageSource={hospital.name + " Hospital page"}
                />
              </div>

              {/* Quick Facts */}
              <div className="bg-white rounded-2xl p-5 shadow border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-3">Quick Facts</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {hospital.rating && (
                    <li>⭐ Rating: {hospital.rating.value} ({hospital.rating.reviews} reviews)</li>
                  )}
                  {hospital.established && (
                    <li>🏛️ Established: {hospital.established}</li>
                  )}
                  {hospital.beds && (
                    <li>🛏 Beds: {hospital.beds}</li>
                  )}
                  {hospital.patientsRecommended && (
                    <li>✅ Recommended by {hospital.patientsRecommended.percent}% patients</li>
                  )}
                </ul>
              </div>

              {/* Photo Thumbnails */}
              {/* {mediaImages.length > 0 && (
                <a href="#gallery" className="block bg-white rounded-2xl p-5 shadow border border-gray-100 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-3">Photos</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {mediaImages.slice(0, 6).map((img: any, i: number) => (
                      <img key={i} src={img.url} alt="Hospital thumbnail" className="w-full h-16 object-cover rounded-lg" />
                    ))}
                  </div>
                  <p className="text-xs text-blue-600 mt-3">View all photos →</p>
                </a>
              )} */}
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <Footer footer={websiteData.footer} />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
}
