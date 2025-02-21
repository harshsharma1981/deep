"use client";

import { useState, useEffect } from "react";
import { FaBolt } from "react-icons/fa";
import Image from "next/image";

const testimonials = [
  { name: "Alex Carter", text: "Deep Enterprises has transformed our energy solutions with their innovative approach.", image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" },
  { name: "Sophia Lane", text: "The team’s dedication to sustainability and efficiency is commendable!", image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg" },
  { name: "Daniel Brooks", text: "Reliable, cost-effective, and environmentally friendly solutions!", image: "https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg" }
];

export default function ExperienceTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-Sliding Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-16">
      {/* Left Side - Experience Image Section */}
      <div className="relative w-full md:w-1/2 flex flex-col items-center">
        {/* Industry Experience Number */}
     
        {/* Image Container */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-gray-300 shadow-lg flex items-center justify-center">
          {/* Biomass Energy Related Image */}
          <Image src="https://images.pexels.com/photos/8853503/pexels-photo-8853503.jpeg" fill alt="Biomass Energy" className="w-full h-full object-cover rounded-full" />

          {/* Energy Logo in Middle */}
          <div className="absolute inset-0 flex items-center justify-center bg-green-500 bg-opacity-10 rounded-full">
            <FaBolt className="text-white text-4xl" />
          </div>
        </div>
        <div className=" bg-green-500 text-white px-4 py-2 rounded-md text-lg font-bold shadow-lg">
          10
        </div>

        {/* Caption */}
        <p className="text-lg text-center font-semibold mt-4">Years Of Experience In The Biomass Industry</p>
      </div>

      {/* Right Side - Testimonials Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        {/* Title */}
        <h2 className="text-4xl font-bold text-green-500">What Our Clients Say</h2>

        {/* Testimonials Text */}
        <p className="text-gray-600 mt-6 text-lg italic">{testimonials[currentTestimonial].text}</p>

        {/* Bottom: Active Testimonial Highlight */}
        <div className="flex justify-center md:justify-start mt-6 space-x-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={54}
                height={54}
                className={`w-16 h-16 object-cover rounded-full border-2 transition-all duration-300 shadow-md cursor-pointer ${
                  index === currentTestimonial ? "border-green-500 scale-110" : "border-gray-300 opacity-50"
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
        
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
