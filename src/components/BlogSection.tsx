import Link from 'next/link';
import Image from 'next/image';

export default function BlogSection() {
  const blogPosts = [
    {
      title: "What to Expect During Treatment in India",
      excerpt: "Traveling to India for medical care is a smooth and well-organized experience. Knowing what to expect will help you plan your treatment journey, reduce stress, and focus on recovery.",
      category: "Treatment Guide",
      image: "/Images/blogs/medical-tourism-guide.jpg",
      slug: "what-to-expect"
    },
    {
      title: "Medical Tourism Guide for International Patients",
      excerpt: "India has become one of the most popular destinations for medical tourism, offering world-class healthcare, advanced technology, and treatment costs that are 60-80% lower.",
      category: "Cost Analysis",
      image: "/Images/blogs/cost-comparison.jpg",
      slug: "medical-tourism-guide"
    },
    {
      title: "Tips for International Patients Traveling to India",
      excerpt: "Essential tips and practical advice to make your medical journey smooth and stress-free. Learn about pre-travel preparation, during-treatment care, and recovery guidance.",
      category: "Travel Guide",
      image: "/Images/blogs/medical-travel-tips.jpg",
      slug: "tips-for-patients"
    },
    {
      title: "FAQs About Indian Healthcare for International Patients",
      excerpt: "Get answers to the most frequently asked questions about healthcare, hospitals, costs, and patient services in India before planning your medical journey.",
      category: "Patient Care",
      image: "/Images/blogs/medical-tourism-faqs.jpg",
      slug: "faqs"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white rounded-full mb-6 shadow-lg text-3xl sm:text-4xl">
          📖
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            From the Blog – Must-Read Guides
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Expert insights, practical tips, and comprehensive guides to help you make informed decisions about your medical journey to India.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {blogPosts.map((post, index) => (
            <article key={index} className="group bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              {/* Post Image */}
              <div className="aspect-video relative overflow-hidden">
                <Image 
                  src={post.image}
                  alt={`${post.title} blog post`}
                  width={400}
                  height={225}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  index % 4 === 0 ? 'bg-[#7AE5F5]/20' : 
                  index % 4 === 1 ? 'bg-[#56DDEF]/20' : 
                  index % 4 === 2 ? 'bg-yellow-400/20' :
                  'bg-green-500/20'
                }`}></div>
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-700 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              {/* Post Content */}
              <div className="p-4 sm:p-6">
                <h3 className={`text-base sm:text-lg md:text-xl font-bold text-gray-900 transition-colors duration-300 mb-3 line-clamp-2 ${
                  index % 4 === 0 ? 'group-hover:text-[#7AE5F5]' : 
                  index % 4 === 1 ? 'group-hover:text-[#56DDEF]' : 
                  index % 4 === 2 ? 'group-hover:text-yellow-500' :
                  'group-hover:text-green-600'
                }`}>
                  {post.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                {/* Read More Link */}
                <Link
                  href={`/blog/${post.slug}`}
                  className={`inline-flex items-center font-medium text-sm group-hover:translate-x-1 transition-all duration-300 ${
                    index % 4 === 0 ? 'text-[#7AE5F5] hover:text-[#7AE5F5]/80' : 
                    index % 4 === 1 ? 'text-[#56DDEF] hover:text-[#56DDEF]/80' : 
                    index % 4 === 2 ? 'text-yellow-500 hover:text-yellow-400' :
                    'text-green-600 hover:text-green-500'
                  }`}
                >
                  Read More
                  <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#7AE5F5]/20 via-white to-[#56DDEF]/20 rounded-3xl p-8 border border-[#7AE5F5]/30 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Stay Informed About Medical Tourism
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
              Get the latest insights, cost comparisons, and travel tips delivered to your inbox. Join thousands of patients who trust our expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-[#56DDEF] text-white font-semibold rounded-xl hover:bg-[#56DDEF]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-base sm:text-lg"
              >
                Explore All Articles
                <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a href="/free-consultation" className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-white text-gray-900 font-semibold rounded-xl border-2 border-gray-200 hover:border-[#56DDEF] hover:bg-[#56DDEF]/10 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-base sm:text-lg">
                Subscribe to Newsletter
                <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a0 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
