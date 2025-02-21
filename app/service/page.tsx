"use client";

import { useState } from "react";
import { FaHome, FaArrowLeft, FaArrowRight, FaLeaf, FaSolarPanel, FaIndustry } from "react-icons/fa";
import Link from "next/link";
import Navbar from "../home-component/Navbar";
import { useServices } from "@/context/ServiceContext";
import ContactSection from "../home-component/ContactSection";
import QuoteSection from "../home-component/QuoteSection";
import Image from "next/image";
import ExperienceTestimonials from "../Service-Components/ExpirenceTestimonial";
interface Service {
  slug: string;
  Title: string;
  description: string;
  image?: Array<{ formats: { small: { url: string } } }>;
}
interface ServiceContext {
  services1: Service[];
  loading: boolean;
}

export default function ServicePage() {
  const { services1 } = useServices() as ServiceContext;

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 6;
  const totalPages = Math.ceil(services1.length / servicesPerPage);

  // Get Services for Current Page
  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = services1.slice(indexOfFirstService, indexOfLastService);

  return (
    <div>
      <Navbar />

      {/* Header Section */}
      <div
        className="relative w-full h-[650px] bg-cover bg-center flex items-center px-6 md:px-20"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/27382543/pexels-photo-27382543.jpeg?auto=compress&cs=tinysrgb&w=600')",
          backgroundColor: "rgb(27 26 26 / 68%)",
          backgroundBlendMode: "overlay",
        }}
      >
        {/* Breadcrumb */}
        <div className="absolute top-5 left-5 text-white text-sm flex items-center">
          <FaHome className="mr-2" />
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-300">Our Services</span>
        </div>

        {/* Header Content */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between text-white">
          {/* Left Section (Icons + Text) */}
          <div className="md:w-1/2 space-y-6">
            {/* Icons */}
            <div className="flex space-x-4">
              <FaLeaf className="text-white text-4xl" />
              <FaSolarPanel className="text-white text-4xl" />
              <FaIndustry className="text-white text-4xl" />
            </div>

            {/* Heading & Description */}
            <h1 className="text-5xl font-bold">Our Services</h1>
            <p className="text-lg text-gray-300">
              Explore our cutting-edge biomass energy solutions designed for sustainability, efficiency, and cost-effectiveness.
            </p>

            {/* Buttons */}
            <div className="flex space-x-4">
              <Link href="/get-started">
                <button className="bg-green-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-green-600 transition duration-300">
                  Get Started
                </button>
              </Link>
              <Link href="/plans">
                <button className="border border-white text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-700 transition duration-300">
                  Explore Our Plans
                </button>
              </Link>
            </div>
          </div>

          {/* Right Section (For Future Use) */}
          <div className="hidden md:block md:w-1/2"></div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 px-6 md:px-20 text-center">
        <h2 className="text-4xl font-bold text-black">What We Offer</h2>
        <p className="text-gray-600 mt-4">
          Explore our range of cutting-edge and sustainable energy solutions.
        </p>

        {/* Services Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {currentServices &&
            currentServices.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-transform duration-300 transform hover:scale-105"
              >
                {/* Service Image */}
                <Image
                  src={`http://localhost:1337${service.image?.find(i => i.formats?.small?.url)?.formats.small.url}`}
                  alt={service.Title}
                  width={1000}
                  height={1000}
                  className="w-full h-40 object-cover"
                />

                {/* Service Details */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold">{service.Title}</h3>

                  {/* Separating Border */}
                  <div className="w-1/2 border-b-2 border-green-500 mx-auto my-3"></div>

                  <p className="text-gray-600">{service.description}</p>

                  {/* Read More Button */}
                  <Link href={`/service/${service.slug}`}>
                    <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-md text-lg font-semibold hover:bg-green-600 transition duration-300">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10 space-x-4">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-6 py-2 rounded-md font-semibold text-white bg-gray-700 hover:bg-gray-600 flex items-center ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <FaArrowLeft className="mr-2" /> Previous
          </button>
          <span className="text-lg font-semibold">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-6 py-2 rounded-md font-semibold text-white bg-green-500 hover:bg-green-600 flex items-center ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Next <FaArrowRight className="ml-2" />
          </button>
        </div>
      </section>
      <ContactSection/>
      <QuoteSection/>
      <ExperienceTestimonials/>
    </div>
  );
}
