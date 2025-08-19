import Link from 'next/link';

export default function BlogSection() {
  const blogPosts = [
    {
      title: "What to Expect During Treatment in India",
      excerpt: "Complete guide to your medical journey from arrival to recovery",
      category: "Treatment Guide",
      readTime: "8 min read"
    },
    {
      title: "Real Cost Comparisons: India vs. USA/UK",
      excerpt: "Detailed cost analysis across major medical procedures",
      category: "Cost Analysis",
      readTime: "12 min read"
    },
    {
      title: "Step-by-Step Medical Visa Process",
      excerpt: "Everything you need to know about medical visas for India",
      category: "Travel Guide",
      readTime: "6 min read"
    },
    {
      title: "Travel & Recovery Tips for International Patients",
      excerpt: "Essential advice for a smooth medical tourism experience",
      category: "Patient Care",
      readTime: "10 min read"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 via-red-500 to-teal-500 rounded-full mb-6 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            From the Blog – Must-Read Guides
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Expert insights, practical tips, and comprehensive guides to help you make informed decisions about your medical journey to India.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {blogPosts.map((post, index) => (
            <article key={index} className="group bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              {/* Post Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-orange-100 via-red-100 to-teal-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-red-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-700 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="inline-block px-2 py-1 bg-white/90 backdrop-blur-sm text-xs text-gray-600 rounded-full">
                    {post.readTime}
                  </span>
                </div>
              </div>
              
              {/* Post Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                {/* Read More Link */}
                <Link
                  href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
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
          <div className="bg-gradient-to-r from-orange-50 via-red-50 to-teal-50 rounded-3xl p-8 border border-orange-100 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Informed About Medical Tourism
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
              Get the latest insights, cost comparisons, and travel tips delivered to your inbox. Join thousands of patients who trust our expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-700 hover:via-red-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
              >
                Explore All Articles
                <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <button className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl border-2 border-gray-200 hover:border-orange-300 hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
                Subscribe to Newsletter
                <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
