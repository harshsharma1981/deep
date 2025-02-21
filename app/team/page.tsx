"use client";

import { FaHome, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import Navbar from "../home-component/Navbar";
import Link from "next/link";
import Image from "next/image";
export default function TeamPage() {
  const teamMembers = [
    { name: "Amit Sharma", role: "Founder & CEO", image: "https://images.pexels.com/photos/7550533/pexels-photo-7550533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", social: { linkedin: "#", twitter: "#", facebook: "#" } },
    { name: "Priya Verma", role: "Head of Operations", image: "https://images.pexels.com/photos/29179700/pexels-photo-29179700/free-photo-of-focused-young-woman-working-on-laptop-with-headphones.jpeg?auto=compress&cs=tinysrgb&w=600", social: { linkedin: "#", twitter: "#", facebook: "#" } },
    { name: "Rajesh Mehta", role: "Senior Engineer", image: "https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", social: { linkedin: "#", twitter: "#", facebook: "#" } },
    { name: "Neha Kapoor", role: "Marketing Head", image: "https://images.pexels.com/photos/12912127/pexels-photo-12912127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", social: { linkedin: "#", twitter: "#", facebook: "#" } }
  ];

  return (
    <div>
      <Navbar />
      
      {/* Breadcrumb Section */}
      <div className="relative w-full h-[650px] bg-cover bg-center flex items-center justify-center px-6 text-center md:text-left md:justify-start" 
        style={{ backgroundImage: "url('https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", backgroundColor: "rgb(27 26 26 / 68%)", backgroundBlendMode: "overlay" }}>
        <div className="absolute top-5 left-5 text-white text-sm flex items-center">
          <FaHome className="mr-2" />
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-300">Our Team</span>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <div className=" bg-opacity-50 p-6 md:p-10 rounded-lg text-white flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl font-bold">Our Team</h1>
          <p className="mt-4 text-lg max-w-2xl">Meet the professionals dedicated to innovation, quality, and sustainability, driving our company s success forward.</p>
          <div className="flex mt-6 space-x-4">
            
            <button className="bg-white text-green-500 px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-200">Award & Milestone</button>
          </div>
        </div>
        </div>
      </div>

      {/* Team Section */}
      <section className="py-20 px-6 md:px-20 text-center">
        <h2 className="text-4xl font-bold text-black">The Experts Behind Our Success</h2>
        <p className="text-gray-600 mt-4">A team of professionals dedicated to innovation, quality, and sustainability.</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center">
              <Image src={member.image} className="rounded-full w-32 h-32 shadow-md" width={1000} height={1000} alt={member.name} />
              <h3 className="text-xl font-bold mt-4">{member.name}</h3>
              <p className="text-gray-600 mt-1">{member.role}</p>
              <div className="flex space-x-4 mt-4">
                <a href={member.social.linkedin} className="text-blue-600 text-xl"><FaLinkedin /></a>
                <a href={member.social.twitter} className="text-blue-400 text-xl"><FaTwitter /></a>
                <a href={member.social.facebook} className="text-blue-700 text-xl"><FaFacebook /></a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Our Team? */}
      <section className="py-20 px-6 md:px-20 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold text-black">Why Our Team Stands Out</h2>
        <p className="text-gray-600 mt-4">We are committed to delivering the best solutions through innovation and teamwork.</p>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 px-6 md:px-20 bg-green-500 text-white text-center">
        <h2 className="text-3xl font-bold">Join Our Team</h2>
        <p className="mt-4 mb-6">Interested in becoming part of our growing team? Contact us today!</p>
        <Link href="/career" className="mt-6 bg-white text-green-500 px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-200">
          Join Us
        </Link>
      </section>
    </div>
  );
}
