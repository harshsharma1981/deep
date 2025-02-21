"use client";

import { FaBolt, FaArrowRight, FaLeaf, FaSolarPanel, FaChevronLeft, FaChevronRight, FaIndustry } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Header1() {
  const router =useRouter()
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      backgroundImage: "url('https://images.pexels.com/photos/3976320/pexels-photo-3976320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      quote: "Powering a Sustainable Future with Renewable Energy Now",
      title: "Leading the way in renewable energy",
      missionDescription: "Creating cleaner energy for a better tomorrow."
    },
    {
      backgroundImage: "url('https://images.pexels.com/photos/7078666/pexels-photo-7078666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      quote: "Innovating for a Greener Planet with Smart Energy Solutions",
      title: "Advancing eco-friendly solutions worldwide",
      missionDescription: "Building a future with clean, renewable, and efficient energy sources."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[650px] text-white overflow-hidden flex items-center justify-center px-4 md:px-10">
      {slides.map((slide, index) => (
        <div 
          key={index} 
          className={`absolute inset-0 flex flex-col md:flex-row items-center justify-center text-center md:text-left transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: slide.backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center', padding: "5rem 2rem" }}
        >
          {/* Left Section */}
          <div className="w-full md:w-3/6 flex flex-col items-center md:items-start justify-center text-center md:text-left">
            <p className="text-4xl md:text-6xl font-bold">{slide.quote}</p>
            <p className="mt-4 md:mt-10 text-sm font-bold uppercase">{slide.title}</p>
            <div className="flex items-center justify-center md:justify-start space-x-4 mt-6 md:mt-10">
              <FaBolt className="text-2xl md:text-4xl" />
              <FaLeaf className="text-2xl md:text-4xl" />
              <FaSolarPanel className="text-3xl" />
              <button onClick={()=>router.push("/service")} className="bg-[#32c36c] px-4 py-3 md:px-4 md:py-5 text-sm md:text-1xl rounded-md text-white uppercase hover:bg-green-700">Our Services</button>
            </div>
          </div>
          
          {/* Right Section - Vertical Card */}
          <div className="w-[90%] md:w-[280px] h-[300px] bg-white p-6 md:p-10 rounded-lg border-t-4 border-[#32c36c] text-black flex flex-col items-center justify-center text-center mt-6 md:mt-0">
            <FaIndustry className="text-[#32c36c] text-5xl md:text-6xl mb-4" />
            <h3 className="text-lg font-bold">Our Mission</h3>
            <p className="text-sm px-2 md:px-4 mt-2">{slide.missionDescription}</p>
            <div className="flex justify-center mt-4">
              <button onClick={()=>router.push("/about")} className="text-white px-2 py-2 bg-green-500 text-lg md:text-2xl hover:underline rounded-full"> <FaArrowRight/></button>
            </div>
          </div>
        </div>
      ))}
      
      {/* Slide Buttons */}
      <button 
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl" 
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
      >
        <FaChevronLeft />
      </button>
      <button 
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl" 
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
