"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FaHome, FaCheck, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../../home-component/Navbar";
import BrandSection from "../../home-component/BrandSection";
import QuoteSection from "../../home-component/QuoteSection";
import { useServices } from "../../../context/ServiceContext";
import DOMPurify from "dompurify"; // Import DOMPurify
import Image from "next/image"

// Define the types for service and category data
interface Service {
  slug: string;
  Title: string;
  description: string;
  content: string | Array<{ children: Array<{ text: string }> }>;
  image?: Array<{ formats: { large: { url: string } } }>;
  service_categories: Array<{ categoryName: string }>;
}

interface Category {
  categoryName: string;
  documentId: string;
}

interface ServiceContext {
  services1: Service[];
  categories: Category[];
  loading: boolean;
}

export default function ServiceDetailPage() {
  const params = useParams(); // ✅ Fix Next.js 14 issue
  const { services1, categories } = useServices() as ServiceContext;

  const [service, setService] = useState<Service | null>(null);
  
  // Fetch Service Data from Context API
  useEffect(() => {
    if (!params?.slug || !services1 || services1.length === 0) return;
  
    const selectedService = services1.find((s) => s.slug === params.slug);
    
    setService(selectedService || null);
  }, [params, services1]);
  

  if (!services1 || services1.length === 0) {
    return <p className="text-center text-xl">Loading service details...</p>;
  }
  

  if (!service) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold">Service Not Found</h1>
        <p className="text-gray-500">We couldn t find the service you were looking for.</p>
        <Link href="/service" className="mt-6 bg-green-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-green-600">
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      {/* Breadcrumb Section */}
      <div className="relative w-full h-[300px] bg-cover bg-center flex items-center px-6 md:px-20" 
        style={{ backgroundImage: "url('https://images.pexels.com/photos/1556704/pexels-photo-1556704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", backgroundColor: "rgb(27 26 26 / 68%)", backgroundBlendMode: "overlay" }}>
        <div className="absolute top-5 left-5 text-white text-sm flex items-center">
          <FaHome className="mr-2" />
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-300">Services</span>
          <span className="mx-2">/</span>
          <span className="text-gray-300">{service.Title}</span>
        </div>
        <div className="w-full md:w-1/2 text-white">
          <h1 className="text-4xl font-bold">{service.Title}</h1>
          <p className="mt-4 text-lg">{service.description}</p>
          <div className="flex mt-6 space-x-4">
            <button className="bg-white text-green-500 px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-200">Get Started</button>
            <button className="bg-transparent text-white border border-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-700">Our Plans</button>
          </div>
        </div>
      </div>

      {/* Service Section */}
      <section className="py-20 px-6 md:px-20 flex flex-col md:flex-row gap-10">
  
        {/* Right Section - Service Content (Moves to top on mobile) */}
        <div className="md:w-3/4 order-1 md:order-none bg-white shadow-lg p-7 rounded-lg">
          <h2 className="text-3xl font-bold text-black">{service.Title}</h2>

          <div className="text-gray-600 mt-4">
            {service.image && Array.isArray(service.image) && service.image.map((image, index) => (
              <div key={index} className="img"><Image src={`http://localhost:1337${image.formats.large.url}`} width={1000} height={1000} className="w-full" alt="Service Image" /></div>
            ))}
            
            {/* Check if content is an array and sanitize the HTML */}
            {Array.isArray(service.content) ? (
              service.content.map((block, index) => (
                <p key={index} className="mb-4" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(block.children?.map(child => child.text).join(" ") || "") }} />
              ))
            ) : (
              <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(service.content) }} />
            )}
          </div>
        </div>

        {/* Left Sidebar - Categories & Contact Card (Moves below on mobile) */}
        <div className="md:w-1/4 order-2 md:order-none space-y-6">
          {/* Categories */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Service Categories</h3>
            <ul className="space-y-3">
              {categories?.map((category: Category, index: number) => (
                <li key={index} className={`flex items-center p-3 rounded-md cursor-pointer transition-all duration-300 
                  ${service.service_categories?.find(s => s.categoryName === category.categoryName) ? "bg-green-500 text-white" : "bg-gray-100 hover:bg-gray-200"}
`}
                >
                  <FaCheck />
                  <Link href={`/service/${category.documentId}`} className="ml-3">{category.categoryName}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Card */}
          <div className="bg-cover bg-center p-6 rounded-lg relative" 
            style={{ backgroundImage: "url('https://images.pexels.com/photos/1871030/pexels-photo-1871030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", backgroundBlendMode: "overlay", backgroundColor: "rgba(50, 195, 108, 0.9)" }}>
            <h3 className="text-2xl font-bold text-white">Need Assistance?</h3>
            <p className="text-white mt-2">Reach out to our team for expert guidance and support.</p>
            <div className="mt-4 text-white">
              <p><FaPhone className="inline mr-2" /> +91 9999665619</p>
              <p><FaEnvelope className="inline mr-2" /> contact@deepenterprises.com</p>
              <p><FaMapMarkerAlt className="inline mr-2" /> New Delhi, India</p>
            </div>
          </div>
        </div>
      </section>

      <BrandSection />
      <QuoteSection />
    </div>
  );
}
