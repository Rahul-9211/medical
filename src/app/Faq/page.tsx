import BackgroundCarousel from "@/components/BackgroundCarousel";
import Accordion from "@/components/Accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface Section {
  title: string;
  faqs: FAQ[];
}

interface BlogData {
  title: string;
  subtitle: string;
  introduction: string;
  sections: Section[];
  whyChoose: string[];
  cta: {
    title: string;
    description: string;
    buttonText: string;
    url: string;
  };
}

const FAQPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/faq.json`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to load FAQ data");

  const data: BlogData = await res.json();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50/80">
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <BackgroundCarousel />
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-full mb-6 shadow-lg text-4xl backdrop-blur-sm">
              ❓
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              {data.title}
            </h1>
            <h2 className="text-2xl md:text-3xl text-white/90 mb-4">
              {data.subtitle}
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              {data.introduction}
            </p>
          </div>
        </section>

        {/* FAQ Sections */}
        {data.sections.map((section, si) => (
          <section key={si} className="py-20 bg-white relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-6">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full mb-4 shadow-lg text-2xl">
                  {si === 0 ? "🏥" : si === 1 ? "💰" : si === 2 ? "✈️" : "🧘"}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {section.title}
                </h2>
              </div>

              <div className="space-y-4">
                {section.faqs.map((faq, i) => (
                  <Accordion key={i} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Why Choose Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full mb-4 shadow-lg text-2xl">
              🌍
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why India is the Best Choice for Healthcare
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {data.whyChoose.map((point, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <span className="text-green-500">✔️</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-[#7AE5F5]/20 via-white to-[#56DDEF]/20 py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-white/50"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#7AE5F5]/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#56DDEF]/30 rounded-full blur-3xl"></div>

          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <div className="mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6 shadow-lg text-4xl">
                📞
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {data.cta.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                {data.cta.description}
              </p>
              <a
                href={data.cta.url}
                className="inline-block px-8 py-4 bg-[#56DDEF] text-white font-semibold rounded-xl hover:bg-[#56DDEF]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
              >
                {data.cta.buttonText}
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FAQPage;
