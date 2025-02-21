"use client";

import { useRouter } from "next/navigation";
import { FaCheck } from "react-icons/fa";

export default function QuoteSection() {
const router=useRouter()
  return (
    <div className="relative text-white py-20 px-6 md:px-20 bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/5115946/pexels-photo-5115946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
      <div className="absolute inset-0 bg-green-500 opacity-90"></div>
      
      <div className="relative flex flex-col md:flex-row justify-between items-center">
        {/* Left Section - Content & Advantages */}
        <div className="md:w-1/2">
          <span className="text-sm font-bold uppercase">Your Trusted Energy Partner</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">Reliable, Sustainable, and Affordable Energy Solutions</h2>
          <p className="text-gray-200 mt-4">
            We provide innovative energy solutions tailored to meet your needs while ensuring sustainability and efficiency.
          </p>

          {/* Advantages */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="flex items-center bg-gray-700 text-white p-3 rounded-md">
              <FaCheck className="text-green-400 mr-2" /> Eco-Friendly Solutions
            </div>
            <div className="flex items-center bg-gray-700 text-white p-3 rounded-md">
              <FaCheck className="text-green-400 mr-2" /> Cost-Effective Energy
            </div>
            <div className="flex items-center bg-gray-700 text-white p-3 rounded-md">
              <FaCheck className="text-green-400 mr-2" /> High Efficiency
            </div>
            <div className="flex items-center bg-gray-700 text-white p-3 rounded-md">
              <FaCheck className="text-green-400 mr-2" /> Reliable Supply
            </div>
            <div className="flex items-center bg-gray-700 text-white p-3 rounded-md">
              <FaCheck className="text-green-400 mr-2" /> 24/7 Customer Support
            </div>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4 mt-6">
            <button onClick={()=>router.push("contact")}className="bg-white text-green-500 px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-100">Learn More</button>
            <button className="bg-gray-700 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-600">Our Core Values</button>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="md:w-1/3 bg-white text-black p-8 rounded-lg shadow-lg mt-10 md:mt-0">
          <h3 className="text-2xl font-bold">Request a Quote</h3>
          <p className="text-gray-600 mt-2">
            Fill out the form below and our team will get in touch with you soon.
          </p>

          <form className="mt-6 space-y-4">
            <input type="text" placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
            <input type="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
            <input type="text" placeholder="Phone Number" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
            <textarea placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" rows="4"></textarea>
            <button className="bg-green-500 text-white w-full py-3 rounded-md text-lg font-semibold hover:bg-green-600">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
