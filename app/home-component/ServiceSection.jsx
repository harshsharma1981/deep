"use client";

import {
  FaCheck,
  FaBolt,
  FaLeaf,
  FaSolarPanel,
  FaCog,
  FaIndustry,
  FaRecycle,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ServiceSection() {
  const router = useRouter();
  const services = [
    {
      icon: <FaBolt className="text-green-500 text-4xl" />,
      title: "Renewable Energy Solutions",
      description: "Providing clean and efficient energy sources.",
      advantages: ["Eco-Friendly", "Cost Effective", "Reliable"],
      slug: "renewable-energy-solutions",  // Unique identifier for the service
    },
    {
      icon: <FaLeaf className="text-green-500 text-4xl" />,
      title: "Sustainable Development",
      description: "Innovating for a greener future.",
      advantages: ["Low Carbon Footprint", "Long-Term Savings", "Sustainable"],
      slug: "sustainable-development",  // Unique identifier for the service
    },
    {
      icon: <FaSolarPanel className="text-green-500 text-4xl" />,
      title: "Solar Power Systems",
      description: "Harnessing the power of the sun.",
      advantages: [
        "Renewable Source",
        "Energy Independence",
        "Low Maintenance",
      ],
      slug: "solar-power-systems",  // Unique identifier for the service
    },
    {
      icon: <FaCog className="text-green-500 text-4xl" />,
      title: "Efficient Machinery",
      description: "Advanced technology for maximum efficiency.",
      advantages: ["High Performance", "Durability", "Smart Tech"],
      slug: "efficient-machinery",  // Unique identifier for the service
    },
    {
      icon: <FaIndustry className="text-green-500 text-4xl" />,
      title: "Industrial Solutions",
      description: "Optimizing energy for industries.",
      advantages: ["Increased Productivity", "Energy Efficiency", "Scalable"],
      slug: "industrial-solutions",  // Unique identifier for the service
    },
    {
      icon: <FaRecycle className="text-green-500 text-4xl" />,
      title: "Recycling & Waste Management",
      description: "Eco-friendly waste management solutions.",
      advantages: ["Waste Reduction", "Eco Conscious", "Cost Saving"],
      slug: "recycling-waste-management",  // Unique identifier for the service
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  const totalSlides = Math.ceil(services.length / slidesPerView);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="text-center py-20 px-6 md:px-20 bg-gray-100">
      {/* Title and Heading */}
      <span className="text-green-500 text-sm uppercase font-bold">
        Our Professional Services
      </span>
      <div className="flex justify-center">
        <h2 className="text-4xl w-full md:w-3/5 md:text-5xl font-bold text-black mt-4">
          Delivering Excellence in Renewable and Sustainable Solutions Worldwide
        </h2>
      </div>

      {/* Slider Section */}
      <div className="mt-16 w-full flex flex-col items-center">
        <div className="overflow-hidden w-full max-w-5xl">
          <div
            className="flex w-full transition-transform duration-500"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {[...Array(totalSlides)].map((_, index) => (
              <div
                key={index}
                className="flex justify-center gap-6 w-full flex-shrink-0"
              >
                {services
                  .slice(
                    index * slidesPerView,
                    index * slidesPerView + slidesPerView
                  )
                  .map((service, i) => (
                    <div
                      key={i}
                      className="w-full  md:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg text-black shadow-lg border-t-4 border-green-500 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300"
                    >
                      {service.icon}
                      <h3 className="text-xl font-bold mt-4">{service.title}</h3>
                      <div className="border-b-2 border-gray-300 w-full my-4"></div>
                      <p className="text-gray-600">{service.description}</p>
                      <ul className="text-left mt-4">
                        {service.advantages.map((adv, i) => (
                          <li
                            key={i}
                            className="flex items-center space-x-2 text-gray-700"
                          >
                            <FaCheck className="text-green-500" />
                            <span>{adv}</span>
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={() => router.push(`/service/${service.slug}`)}  // Dynamically navigate to the service page using the slug
                        className="mt-4 bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                      >
                        Read More
                      </button>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
        {/* Slide Indicators */}
        <div className="flex space-x-2 mt-6">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-green-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
