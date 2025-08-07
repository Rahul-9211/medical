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
  thumbnail: string;
  duration: string;
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
    videos: VideoTestimonial[];
  };
}

export default function CaseStudiesSection({ caseStudies, videoTestimonials }: CaseStudiesSectionProps) {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Case Studies */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {caseStudies.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {caseStudies.subtitle}
            </p>
            
            <div className="space-y-6">
              {caseStudies.studies.map((study, index) => (
                <Link
                  key={index}
                  href={study.url}
                  className="block bg-white rounded-lg p-6 hover:shadow-md transition-shadow duration-200 border border-gray-200 hover:border-blue-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<div class="w-full h-full bg-blue-100 flex items-center justify-center"><span class="text-blue-600 font-bold text-sm">${study.title.charAt(0)}</span></div>`;
                          }
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-200">
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              {videoTestimonials.title}
            </h2>
            
            <div className="space-y-6">
              {videoTestimonials.videos.map((video, index) => (
                <Link
                  key={index}
                  href={video.url}
                  className="block bg-white rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200 border border-gray-200 hover:border-blue-300"
                >
                  <div className="relative">
                    <div className="aspect-video bg-gray-200 relative">
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
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200">
                        {video.title}
                      </h3>
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