"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
export default function BrandSection() {
  const brands = [
    "https://img.nmcdn.io/e1/w:600,h:340,v:1/cpm/wp-content/uploads/2024/07/about-brands-idah.jpg?s=ee7b4a9a", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM4d5ezYgHorJNuLggMf7x__ULzMQ4X_vuGw&s", "https://bbsm.co.uk/wp-content/uploads/2024/01/BBSM-Brand-Colour-Guide_Existing_logo-8.jpg", "https://img.nmcdn.io/e1/w:600,h:340,v:1/cpm/wp-content/uploads/2024/07/about-brands-dorssers.jpg?s=cc69f7a0", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUguWt5HroGvhvyPm1pkj-I-uWZMc-lJ-jnQ&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT53hHHFwMGn9L2QsI66LZwYT-DZSPzNX6eZA&s",
   
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(brands.length / 6);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="bg-gray-100 py-10 px-6 md:px-20 text-center">
     
      <div className="overflow-hidden w-full max-w-6xl mx-auto">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {[...Array(totalSlides)].map((_, index) => (
            <div key={index} className="flex justify-center space-x-10 w-full flex-shrink-0">
              {brands.slice(index * 6, index * 6 + 6).map((logo, i) => (
                <Image key={i} src={logo} alt={`Brand ${i + 1}`} width={1000} height={1000} className="w-24 h-24 object-contain" />
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* Slide Indicators */}
   
    </div>
  );
}
