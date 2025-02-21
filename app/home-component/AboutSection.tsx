"use client";

import { useRouter } from "next/navigation";
import { FaPlug, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
export default function AboutSection() {
  const router= useRouter()
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16">
      {/* Left Section - Windmill Image with Card */}
      <div className="relative w-full md:w-1/2 flex justify-center">
        <Image
          src="https://images.pexels.com/photos/5264862/pexels-photo-5264862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="biomass"
        width={1000}
        height={1000}
          className="w-full h-auto rounded-lg"
        />
        <div className="absolute bottom-10 left-4 md:left-[-5%] w-3/4 md:w-1/4 bg-green-500 p-6 rounded-lg shadow-lg flex items-center">
          <FaPlug className="text-white text-6xl mr-4" />
          <div>
            <p className="text-3xl text-white font-bold">500+</p>
            <p className="text-white">Happy Clients</p>
          </div>
        </div>
      </div>

      {/* Right Section - About Content */}
      <div className="w-full md:w-1/2 md:pl-10 mt-10 md:mt-0 text-center md:text-left">
        <span className="bg-[#e0f6e9] text-green-500 px-4 py-2 text-sm uppercase font-bold">Complete Sustainable Energy Solutions</span>
        <h2 className="text-3xl md:text-4xl font-bold text-black mt-4">
          Leading the Future with Renewable Energy Innovations Worldwide
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-lg font-semibold">Who We Are</h3>
            <p className="text-gray-600 mt-2">
              We are dedicated to transforming the world with clean energy solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Our Mission</h3>
            <p className="text-gray-600 mt-2">
              Delivering innovative renewable energy systems for a sustainable future.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Our Vision</h3>
            <p className="text-gray-600 mt-2">
              Empowering communities with cutting-edge sustainable energy technologies.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Why Choose Us</h3>
            <p className="text-gray-600 mt-2">
              Trusted by clients worldwide for reliable green energy solutions.
            </p>
          </div>
        </div>
        
        <button onClick={()=>router.push("/about")} className="mt-6 flex items-center justify-center md:justify-start bg-green-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-green-600">
          Read More <FaArrowRight className="ml-3" />
        </button>
      </div>
    </div>
  );
}
