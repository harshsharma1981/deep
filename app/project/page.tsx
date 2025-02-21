"use client";

import { useProjects } from "@/context/projectContext/ProjectContext";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../home-component/Navbar";
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function ProjectPage() {
  const router=useRouter()
  const { projects } = useProjects();
  const [visibleProjects, setVisibleProjects] = useState(6); // Show 6 initially

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 6); // Load 6 more projects on click
  };

  return (
    <div>
      <Navbar />
      <div className="relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/162646/cooling-tower-power-plant-energy-industry-162646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          }}
        ></div>

        {/* Main Content Section */}
        <div className="relative z-10 py-20 px-6 md:px-20 text-center text-white">
          {/* Breadcrumb Navigation */}
          <nav className="text-sm mb-6">
            <ul className="flex justify-center space-x-2">
              <li>
                <Link href="/" className="hover:text-green-500">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/projects" className="text-green-500">
                  Project
                </Link>
              </li>
            </ul>
          </nav>

          {/* Heading */}
          <h1 className="text-5xl font-bold">Our Projects</h1>

          {/* Description */}
          <p className="text-lg mt-6 opacity-80">
            We specialize in delivering innovative biomass energy solutions, <br /> leading the way in sustainable energy projects across industries.
          </p>
        </div>
      </div>

      {/* Project Cards Section */}
      <div className="mt-16 mb-16 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg text-black shadow-lg border-t-4 border-green-500 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300"
            >
              {/* Project Image */}
              {project.image && project.image.length > 0 && (
  <Image
    src={`http://localhost:1337${project.image[0].formats?.small?.url}`}
    alt={project.title}
    width={1000}
    height={1000}
    className="w-full h-40 object-cover rounded-md"
  />
)}


              {/* Project Info */}
              <span className="text-green-500 font-semibold mt-4">
                {project.title}
              </span>
              <h3 className="text-xl font-bold mt-2">{project.heading}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <button onClick={()=>router.push(`project/${project.slug}`)} className="mt-4 flex items-center bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600">
                Explore More <FaArrowRight className="ml-2" />
              </button>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < projects.length && (
          <button
            onClick={loadMoreProjects}
            className="mt-8 bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-all"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
}
