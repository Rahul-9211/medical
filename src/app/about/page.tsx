import React from "react";
import BackgroundCarousel from '@/components/BackgroundCarousel';

const AboutPage = () => {
  const getCardColor = (index: number) => {
    const colors = [
      { bg: 'bg-[#7AE5F5]/10', hover: 'hover:bg-[#7AE5F5]/20', text: 'text-[#7AE5F5]' },
      { bg: 'bg-[#56DDEF]/10', hover: 'hover:bg-[#56DDEF]/20', text: 'text-[#56DDEF]' },
      { bg: 'bg-yellow-100', hover: 'hover:bg-yellow-200', text: 'text-yellow-500' },
      { bg: 'bg-green-100', hover: 'hover:bg-green-200', text: 'text-green-600' }
    ];
    return colors[index % colors.length];
  };

  const coreServices = [
    { title: "Advanced Surgeries", icon: "🫀", desc: "Cardiac, Ortho, Neuro, Oncology" },
    { title: "Organ Transplants", icon: "🫁", desc: "Liver, Kidney" },
    { title: "IVF & Fertility", icon: "👶", desc: "Fertility Treatments" },
    { title: "Cosmetic & Dental", icon: "✨", desc: "Cosmetic & Dental Care" },
    { title: "Mental Health", icon: "🧠", desc: "Mental Health & Endocrine Disorders" },
    { title: "Ayurveda", icon: "🌿", desc: "Post-Surgical Wellness Programs" }
  ];

  const whyChooseUs = [
    { title: "Patient-First Philosophy", desc: "We're not just here to arrange treatment — we're here to take care of you. Our focus is on delivering the best possible outcome, not maximizing profits." },
    { title: "Affordable, Transparent Pricing", desc: "We ensure patients receive the most competitive rates in India without compromising quality. All cost estimates are 100% transparent, with no hidden fees." },
    { title: "Trusted Hospital Partnerships", desc: "We partner only with JCI, NABH-accredited and internationally recognized hospitals and specialists in cities like Delhi & Delhi NCR." },
    { title: "Free Medical Opinions", desc: "Before you travel, we provide free second opinions and treatment plans from leading doctors to help you make an informed decision." },
    { title: "Complete Care Coordination", desc: "From medical visa letters to airport pickups, translator support, and post-treatment recovery — we're with you every step of the way." }
  ];

  const differences = [
    "Do not take commissions from your treatment cost",
    "Advocate for what's best for you, not what's best for hospital profits",
    "Personally assist you with every step — medical, travel, recovery, and follow-up"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50/80">
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <BackgroundCarousel />
          
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-full mb-6 shadow-lg text-4xl backdrop-blur-sm">
              🌍
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Trusted Medical Tourism Experts Connecting You to World-Class & Affordable Healthcare in India
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              We are a dedicated medical tourism company based in India, committed to helping international patients access world-class medical care at affordable prices. Our team works closely with India's top hospitals, surgeons, and wellness centers to provide personalized treatment plans, smooth travel arrangements, and complete care — from your first consultation to your full recovery.
            </p>
            <p className="text-xl font-semibold text-white mt-6 backdrop-blur-sm bg-[#56DDEF]/10 inline-block px-6 py-3 rounded-xl">
              Our mission is simple: to help you heal, not to overcharge you.
            </p>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="relative overflow-hidden py-20 bg-gradient-to-br from-gray-50 via-white to-green-50">
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 via-teal-600/5 to-cyan-600/5"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-green-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full mb-4 shadow-lg text-2xl">
                🩺
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Us?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((item, i) => {
                const color = getCardColor(i);
                return (
                  <div key={i} className={`group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden ${color.hover}`}>
                    <div className="text-3xl mb-4">✔️</div>
                    <h3 className={`text-xl font-bold mb-3 ${color.text}`}>{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Who We Serve Section */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full mb-4 shadow-lg text-2xl">
                🌐
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Who We Serve</h2>
              <p className="text-xl text-gray-600">
                We proudly serve patients from over 30+ countries, including the UAE, Saudi Arabia, Oman, Kenya, Nigeria, Bangladesh, UK, USA, and more — all seeking cost-effective, quality healthcare in India.
              </p>
            </div>
          </div>
        </section>

        {/* Core Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full mb-4 shadow-lg text-2xl">
                🏥
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Core Areas of Focus</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreServices.map((service, i) => {
                const color = getCardColor(i);
                return (
                  <div key={i} className={`group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${color.hover}`}>
                    <div className="text-3xl mb-4">{service.icon}</div>
                    <h3 className={`text-xl font-bold mb-2 ${color.text}`}>{service.title}</h3>
                    <p className="text-gray-600">{service.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* What Makes Us Different Section */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full mb-4 shadow-lg text-2xl">
                🤝
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Makes Us Different</h2>
              <p className="text-xl text-[#56DDEF] font-semibold mb-8">"We are your medical companion in India."</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {differences.map((diff, i) => {
                  const color = getCardColor(i);
                  return (
                    <div key={i} className="flex items-start space-x-3">
                      <span className={`flex-shrink-0 ${color.text}`}>✓</span>
                      <span className="text-gray-700">{diff}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full mb-4 shadow-lg text-2xl">
                👥
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We are a team of passionate healthcare professionals and medical tourism experts based in India. With years of combined experience in hospital coordination, patient care, and international health facilitation, we started this service to make safe, affordable, and ethical treatment accessible to all.
              </p>
              <p className="text-xl text-[#56DDEF] font-semibold text-center">
                We believe that healing should be guided by care — not by profit.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-[#7AE5F5]/20 via-white to-[#56DDEF]/20 py-20 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-white/50"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#7AE5F5]/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#56DDEF]/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <div className="mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6 shadow-lg text-4xl">
                📞
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get in Touch with Us</h2>
              <p className="text-xl text-gray-600 mb-8">
                Have questions? Looking for cost estimates or treatment options?
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/contact"
                  className="inline-block px-8 py-4 bg-[#56DDEF] text-white font-semibold rounded-xl hover:bg-[#56DDEF]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
                >
                  Request a Free Medical Consultation
                </a>
                <a
                  href="https://wa.me/8595199918"
                  target="_blank"
                  className="inline-flex items-center px-8 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
                >
                  <span className="mr-2">Chat on WhatsApp</span>
                  <span>📱</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default AboutPage;
