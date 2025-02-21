"use client";


import { useState, useEffect } from "react";

export default function AchievementsAndTestimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [screenWidth, setScreenWidth] = useState(1024); // Default to a large screen width

  useEffect(() => {
    const updateWidth = () => setScreenWidth(window.innerWidth);
    updateWidth(); // Set initial width
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const testimonials = [
    { name: "John Doe", feedback: "Amazing service and excellent customer support!" },
    { name: "Jane Smith", feedback: "Highly recommend their renewable energy solutions." },
    { name: "Michael Brown", feedback: "Professional and efficient team. Great experience!" },
    { name: "Emily White", feedback: "Top-notch solutions for sustainable energy needs." },
    { name: "Robert Green", feedback: "Trustworthy and innovative energy services." }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 2));
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div>
      {/* Testimonial Section */}
      <div className="bg-[#253745] text-white py-20 px-4 md:px-16">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">What Our Clients Say</h2>
        <div className="overflow-hidden flex justify-center">
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {[...Array(Math.ceil(testimonials.length / 2))].map((_, index) => (
              <div key={index} className="flex space-x-6 w-full flex-shrink-0 justify-center">
                {testimonials.slice(index * 2, index * 2 + (screenWidth < 768 ? 1 : 2)).map((testimonial, i) => (
                  <div key={i} className="w-96 bg-white p-6 rounded-lg text-black shadow-lg flex flex-col items-center text-center">
                    <p className="text-gray-700 mt-2">{testimonial.feedback}</p>
                    <h3 className="text-lg font-bold mt-4">- {testimonial.name}</h3>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        {/* Slide Indicators */}
        <div className="flex space-x-2 mt-6 justify-center">
          {[...Array(Math.ceil(testimonials.length / 2))].map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-green-500' : 'bg-gray-300'}`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
