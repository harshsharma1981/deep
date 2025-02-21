"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { useProjects } from "@/context/projectContext/ProjectContext";
import Link from "next/link";
import Navbar from "@/app/home-component/Navbar";
import Image from "next/image";
import { HiHome, HiChevronRight } from "react-icons/hi";

// Define types for project data
interface Project {
  slug: string;
  title: string;
  heading: string;
  description: string;
  content: string;
  image: { formats: { small: { url: string }; large: { url: string } } }[];
}

// Define the type for the ProjectDetailPage component props
interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>; // params is now a Promise
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { projects } = useProjects(); 
  const [project, setProject] = useState<Project | null>(null); 
  const router = useRouter();

  useEffect(() => {
    const fetchProject = async () => {
      const resolvedParams = await params;  // Resolving the Promise
      const { slug } = resolvedParams;

      // Find the project using the slug
      const foundProject = projects.find((project) => project.slug === slug);
      setProject(foundProject || null); // Set project data or null if not found
    };

    fetchProject();
  }, [params, projects]);

  // If no project is found, show a not found message
  if (!project) {
    return (
      <div className="text-center py-20 px-6">
        <h2 className="text-3xl font-bold text-gray-600">Project not found</h2>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/162646/cooling-tower-power-plant-energy-industry-162646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
          }}
        ></div>

        <div className="relative z-10 py-24 px-6 md:px-20 text-center text-white">
          <nav className="text-sm mb-6 flex justify-center items-center space-x-2">
            <Link href="/" className="flex items-center hover:text-green-500">
              <HiHome size={20} className="mr-1" /> Home
            </Link>
            <HiChevronRight size={20} className="text-gray-400" />
            <Link href="/projects" className="hover:text-green-500">Projects</Link>
            <HiChevronRight size={20} className="text-gray-400" />
            <span className="text-green-500">{project.title}</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-bold">{project.title}</h1>
          <p className="text-lg mt-6 opacity-80">{project.description}</p>
        </div>
      </div>

      {/* Project Details Section */}
      <div className="py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2">
          {/* Project Image */}
          {project.image?.length > 0 && (
            <div className="overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <Image
                src={`http://localhost:1337${project.image[0].formats?.large?.url}`}
                alt={project.title}
                width={1200}
                height={800}
                className="w-full h-72 md:h-96 object-cover"
              />
            </div>
          )}

          {/* Project Content */}
          <div className="space-y-8 text-gray-700">
            <h2 className="text-2xl md:text-3xl font-semibold">Project Details</h2>
            <div
              dangerouslySetInnerHTML={{ __html: project.content }}
              className="prose lg:prose-xl"
            />
          </div>
        </div>
      </div>

      {/* Experience CTA Section */}
      <div className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 py-20 px-6 md:px-20 text-center text-white rounded-lg shadow-lg">
        <h2 className="text-4xl font-extrabold mb-6 text-gray-100">
          Our Experience in Action
        </h2>
        <p className="text-xl opacity-90 mb-8">
          With years of expertise, we have successfully delivered countless projects that have helped businesses grow and scale. Our focus on quality, innovation, and client satisfaction sets us apart in the industry. Below are just a few highlights of what we bring to the table:
        </p>

        {/* Experience Details */}
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="flex items-center space-x-6 justify-center">
            <div className="w-16 h-16 bg-white text-green-500 rounded-full flex items-center justify-center shadow-xl">
              <span className="text-3xl font-bold">✔</span>
            </div>
            <div className="max-w-md">
              <h3 className="text-2xl font-semibold mb-3">Tailored Solutions</h3>
              <p className="text-lg text-gray-100">
                We specialize in creating custom solutions that are specifically tailored to meet the unique needs of your business. No two projects are alike, and we ensure every detail aligns with your vision.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-6 justify-center">
            <div className="w-16 h-16 bg-white text-green-500 rounded-full flex items-center justify-center shadow-xl">
              <span className="text-3xl font-bold">✔</span>
            </div>
            <div className="max-w-md">
              <h3 className="text-2xl font-semibold mb-3">Proven Results</h3>
              <p className="text-lg text-gray-100">
                Our portfolio showcases a proven track record of success, with measurable results that demonstrate our ability to deliver on our promises. We take pride in the long-term relationships we build with our clients.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-6 justify-center">
            <div className="w-16 h-16 bg-white text-green-500 rounded-full flex items-center justify-center shadow-xl">
              <span className="text-3xl font-bold">✔</span>
            </div>
            <div className="max-w-md">
              <h3 className="text-2xl font-semibold mb-3">Expert Team</h3>
              <p className="text-lg text-gray-100">
                Our team consists of highly skilled professionals with years of experience in the industry. From development to design, we have the expertise needed to bring your ideas to life efficiently and effectively.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-10">
          <button
            onClick={() => router.push("/contact")}
            className="bg-white text-green-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-100 transition-all shadow-lg hover:shadow-xl"
          >
            Get in Touch to Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
