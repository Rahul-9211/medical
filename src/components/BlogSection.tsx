import Link from 'next/link';
import Image from 'next/image';

export default function BlogSection() {
  // Function to get Unsplash blog images
  const getBlogImage = (index: number) => {
    const blogImages = [
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=450&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=450&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=450&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=450&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1576091160399-112c8f9c6b9c?w=800&h=450&fit=crop&crop=center'
    ];
    return blogImages[index % blogImages.length];
  };

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
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6 shadow-lg text-4xl">
          📖
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
              {/* Post Image */}
              <div className="aspect-video relative overflow-hidden">
                <Image 
                  src={getBlogImage(index)} 
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
                <div className="absolute bottom-4 right-4">
                  <span className="inline-block px-2 py-1 bg-white/90 backdrop-blur-sm text-xs text-gray-600 rounded-full">
                    {post.readTime}
                  </span>
                </div>
              </div>
              
              {/* Post Content */}
              <div className="p-6">
                <h3 className={`text-lg font-bold text-gray-900 transition-colors duration-300 mb-3 line-clamp-2 ${
                  index % 4 === 0 ? 'group-hover:text-[#7AE5F5]' : 
                  index % 4 === 1 ? 'group-hover:text-[#56DDEF]' : 
                  index % 4 === 2 ? 'group-hover:text-yellow-500' :
                  'group-hover:text-green-600'
                }`}>
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                {/* Read More Link */}
                <Link
                  href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Informed About Medical Tourism
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
              Get the latest insights, cost comparisons, and travel tips delivered to your inbox. Join thousands of patients who trust our expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="inline-flex items-center px-8 py-4 bg-[#56DDEF] text-white font-semibold rounded-xl hover:bg-[#56DDEF]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
              >
                Explore All Articles
                <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <button className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl border-2 border-gray-200 hover:border-[#56DDEF] hover:bg-[#56DDEF]/10 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
                Subscribe to Newsletter
                <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a0 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
