'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

// Default hospital images (for homepage and other pages)
const hospitalImages = [
  '/Images/hospital/artemis/artemis-1.jpg',
  '/Images/hospital/birla/birla-1.jpg',
  '/Images/hospital/fortis/fortis-1.jpg',
  '/Images/hospital/manipal/manipal-3.jpg',
  '/Images/hospital/max/max-1.jpg',
  '/Images/hospital/medanta/medanta-1.jpg',
];

// Ayurveda images
const ayurvedaImages = [
  '/Images/ayurveda/ayurveda-1.jpg',
  '/Images/ayurveda/ayurveda-2.jpg',
  '/Images/ayurveda/ayurveda-3.jpg',
  '/Images/ayurveda/ayurveda-4.jpg',
  '/Images/ayurveda/ayurveda-5.jpg',
  '/Images/ayurveda/ayurveda-6.jpg',
];

interface BackgroundCarouselProps {
  variant?: 'default' | 'ayurveda';
}

export default function BackgroundCarousel({ variant = 'default' }: BackgroundCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Select images based on variant
  const images = variant === 'ayurveda' ? ayurvedaImages : hospitalImages;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={src}
            alt={variant === 'ayurveda' ? 'Ayurveda background' : 'Hospital background'}
            fill
            className="object-cover"
            priority={index === 0}
            quality={85}
          />
        </div>
      ))}
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
