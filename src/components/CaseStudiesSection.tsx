'use client';

import Link from 'next/link';

interface CaseStudy {
  title: string;
  description: string;
  image: string;
  url: string;
}

interface VideoTestimonial {
  title: string;
  description: string;
  thumbnail: string;
  url: string;
}

interface CaseStudiesSectionProps {
  caseStudies: {
    title: string;
    subtitle: string;
    studies: CaseStudy[];
  };
  videoTestimonials: {
    title: string;
    subtitle: string;
    videos: VideoTestimonial[];
  };
}

export default function CaseStudiesSection({ caseStudies, videoTestimonials }: CaseStudiesSectionProps) {
  return (
    <section className="bg-white py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Case Studies */}
          <div>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mb-6 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {caseStudies.title}
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {caseStudies.subtitle}
            </p>
            
            <div className="space-y-6">
              {caseStudies.studies.map((study, index) => (
                <Link
                  key={index}
                  href={study.url}
                  className="block bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-blue-200"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center"><span class="text-blue-600 font-bold text-lg">${study.title.charAt(0)}</span></div>`;
                          }
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-300">
                        {study.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {study.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Video Testimonials */}
          <div>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mb-6 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              {videoTestimonials.title}
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {videoTestimonials.subtitle}
            </p>
            
            <div className="space-y-6">
              {videoTestimonials.videos.map((video, index) => (
                <Link
                  key={index}
                  href={video.url}
                  className="block bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-blue-200"
                >
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 relative">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<div class="w-full h-full bg-blue-100 flex items-center justify-center"><span class="text-blue-600 font-bold text-sm">Video</span></div>`;
                          }
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors duration-200">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200 mb-2">
                        {video.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {video.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 