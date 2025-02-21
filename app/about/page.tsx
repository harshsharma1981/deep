/* eslint-disable react/no-unescaped-entities */

"use client";

import { FaHome, FaCheck, FaUsers, FaBriefcase, FaBullseye, FaRegLightbulb,FaPlay } from "react-icons/fa";
import Navbar  from "../home-component/Navbar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function AboutPage() {
const router =useRouter()
  return (
    <div>
        <Navbar/>
         {/* Breadcrumb Section */}
         <div className="relative w-full h-[650px] bg-cover bg-center flex items-center px-6 text-center md:text-left md:justify-start" style={{ backgroundImage: "url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", backgroundColor: "rgb(27 26 26 / 68%)", backgroundBlendMode: "overlay" }}>
        <div className="absolute top-5 left-5 text-white text-sm flex items-center">
          <FaHome className="mr-2" />
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-300">About Us</span>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className=" bg-opacity-50 p-6 md:p-10 rounded-lg text-white flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-4xl font-bold">About Us</h1>
            <p className="mt-4 text-lg max-w-2xl">Deep Enterprises is committed to delivering high-quality, innovative, and sustainable biomass solutions, driving the transition to a cleaner future.</p>
            <div className="flex mt-6 space-x-4">
              <Link href="/service" className="bg-green-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-green-600">Our Services</Link>
              <button className="flex items-center bg-white text-green-500 px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-200">
                <FaPlay className="mr-2" /> Watch Video
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <section className="py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-black">Who We Are</h2>
          <p className="text-gray-600 mt-4">
          Deep Enterprises is a trusted leader in biomass solutions, with over a decade of expertise in manufacturing sustainable energy solutions. Our commitment to innovation and excellence has earned us a strong reputation in the industry.  

Driven by a passion for sustainability, we focus on developing advanced biomass technologies that enhance efficiency and reduce environmental impact. Our pioneering achievement includes establishing the first pellet machine at NTPC, demonstrating our ability to implement large-scale biomass solutions.  

With state-of-the-art manufacturing facilities and a team of skilled professionals, we provide tailored solutions that meet diverse energy needs. Customer satisfaction remains at the core of our operations, fostering long-term relationships with clients.  

Deep Enterprises continues to push boundaries in the biomass sector, offering cost-effective and eco-friendly solutions. As we advance, our mission remains clear—driving the transition towards a cleaner, greener, and more sustainable future.


          </p>
        </div>
        <div className="md:w-1/2">
          <Image src="https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg" className="rounded-lg  shadow-lg w-full" width={1000} height={100} alt="About Us" />
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-gray-100 py-20 px-6 md:px-20 text-center">
        <h2 className="text-4xl font-bold text-black">Our Mission & Vision</h2>
        <div className="mt-10 flex flex-col md:flex-row gap-10">
          <div className="bg-white shadow-lg p-6 rounded-lg flex-1 flex flex-col items-center">
            <FaBullseye className="text-green-500 text-5xl" />
            <h3 className="text-xl font-bold mt-4">Our Mission</h3>
            <p className="text-gray-600 mt-2">To be well-renowned biomass solutions company
at the forefront of replacing fossil fuels with
sustainable biofuels, embodying a commitment
to a greener future and reducing our reliance on
nonrenewable resources.
</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg flex-1 flex flex-col items-center">
            <FaRegLightbulb className="text-green-500 text-5xl" />
            <h3 className="text-xl font-bold mt-4">Our Vision</h3>
            <p className="text-gray-600 mt-2">To be well-renowned biomass solutions company
at the forefront of replacing fossil fuels with
sustainable biofuels, embodying a commitment
to a greener future and reducing our reliance on
nonrenewable resources.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 md:px-20 text-center">
        <h2 className="text-4xl font-bold text-black">Why Choose Us?</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center">
            <FaCheck className="text-green-500 text-5xl" />
            <h3 className="text-xl font-bold mt-4">Quality Assurance</h3>
            <p className="text-gray-600 mt-2">We ensure every product meets rigorous quality standards.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center">
            <FaBriefcase className="text-green-500 text-5xl" />
            <h3 className="text-xl font-bold mt-4">Industry Expertise</h3>
            <p className="text-gray-600 mt-2">With years of experience, we provide top-tier solutions.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center">
            <FaUsers className="text-green-500 text-5xl" />
            <h3 className="text-xl font-bold mt-4">Customer Satisfaction</h3>
            <p className="text-gray-600 mt-2">We prioritize our clients and their specific needs.</p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-gray-100 py-20 px-6 md:px-20 text-center">
        <h2 className="text-4xl font-bold text-black">Watch Our Process</h2>
        <div className="mt-10 flex justify-center">
          <iframe
            className="w-full md:w-3/4 h-64 md:h-96 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="Deep Enterprises Video"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-20 bg-green-500 text-white text-center">
        <h2 className="text-3xl font-bold">Let's Build the Future Together</h2>
        <p className="mt-4">Contact us today for customized rolling mill solutions that match your needs.</p>
        <button onClick={()=>router.push("/contact")} className="mt-6 bg-white text-green-500 px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-200">
          Contact Us
        </button>
      </section>
    </div>
  );
}
