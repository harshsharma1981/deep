"use client";

import { FaArrowRight, FaPhone, FaEnvelope, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function ContactSection() {
  const router = useRouter();

  const cards = [
    {
      icon: <FaPhone className="text-green-500 text-4xl" />,
      title: "Call Us Anytime",
      description: "Get in touch with our team for inquiries and support.",
      buttonLink: "/quote"  // Add your specific route here
    },
    {
      icon: <FaEnvelope className="text-green-500 text-4xl" />,
      title: "Email Support",
      description: "Reach out via email for quick responses and assistance.",
      buttonLink: "/contact"  // Add your specific route here
    },
    {
      icon: <FaMapMarkerAlt className="text-green-500 text-4xl" />,
      title: "Visit Our Office",
      description: "Meet us in person at our office for consultations.",
      buttonLink: "/contact"  // Add your specific route here
    },
    {
      icon: <FaUser className="text-green-500 text-4xl" />,
      title: "Customer Service",
      description: "We are dedicated to providing top-notch customer service.",
      buttonLink: "/contact"  // Add your specific route here
    }
  ];

  return (
    <div className="relative text-white py-20 px-4 md:px-16 bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/7407312/pexels-photo-7407312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
      <div className="absolute inset-0 bg-[#253745e6] opacity-90"></div>

      <div className="relative flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Left Side - Title and Heading */}
        <div className="md:w-2/5">
          <span className="text-green-500 text-sm uppercase font-bold">Get in Touch with Us</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4">
            Reach Out for the Best Renewable Energy Solutions Today
          </h2>
        </div>

        {/* Right Side - Description & Buttons */}
        <div className="md:w-1/2 mt-6 md:mt-0">
          <p className="text-gray-300 mb-4">
            Our team is here to provide expert solutions and personalized support. Contact us to explore the best options for your energy needs.
          </p>
          <p className="text-gray-300 mb-6">
            Whether you re looking for consultation or project execution, we have the experience and knowledge to help you transition to sustainable energy.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <button onClick={() => router.push("/about")} className="bg-green-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-green-600 w-full md:w-auto">Get Started</button>
            <button className="bg-gray-700 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-600 w-full md:w-auto">Our Plans</button>
          </div>
        </div>
      </div>

      {/* Slider Section - Responsive */}
      <div className="relative flex justify-center mt-16 overflow-hidden">
        <div className="flex overflow-x-auto space-x-6 px-4 md:px-0 snap-x snap-mandatory">
          {cards.map((card, index) => (
            <div key={index} className="w-80 bg-white p-6 flex justify-center rounded-lg text-black shadow-lg border-t-4 border-green-500 flex flex-col items-center text-center snap-center flex-shrink-0">
              {card.icon}
              <h3 className="text-xl font-bold mt-4">{card.title}</h3>
              <p className="text-gray-600 mt-2">{card.description}</p>
              <button 
                onClick={() => router.push(card.buttonLink)}  // Navigate based on the card's buttonLink
                className="mt-4 bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              >
                <FaArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
