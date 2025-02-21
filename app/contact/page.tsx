"use client";

import { FaGlobe, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../home-component/Navbar";
import Image from "next/image"; // Import next/image

export default function ContactPage() {
  return (
    <div className="relative w-full min-h-screen">
      <Navbar />

      {/* Map Section */}
      <div className="relative w-full h-[500px]">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?..."
          allowFullScreen
        ></iframe>
      </div>

      {/* Contact Card Section */}
      <div className="relative flex justify-center mt-[-100px] px-4">
        <div className="w-full md:w-3/4 bg-white shadow-lg rounded-lg flex flex-col md:flex-row overflow-hidden">
          {/* Left Section - Contact Info */}
          <div
            className="w-full md:w-1/2 p-6 md:p-8 bg-cover bg-center flex flex-col justify-between"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/1871030/pexels-photo-1871030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
              backgroundBlendMode: "overlay",
              backgroundColor: "#32c36cd9",
            }}
          >
            <h3 className="text-2xl font-bold text-white">Connect with Us</h3>
            <p className="text-white mt-4">
              Deep Enterprises is committed to providing reliable and
              sustainable energy solutions. Our team is here to assist with your
              inquiries, project collaborations, and any energy-related concerns
              you may have.
            </p>
            <p className="text-white mt-2">
              Reach out to us for expert guidance, customized solutions, and a
              commitment to cleaner energy.
            </p>
            <button className="mt-4 flex items-center bg-white text-green-500 px-6 py-2 rounded-md font-semibold hover:bg-gray-200">
              <FaGlobe className="mr-2" /> Global Office
            </button>
            <div className="mt-6 text-white">
              <p>
                <FaPhone className="inline mr-2" /> +91 9999665619
              </p>
              <p>
                <FaEnvelope className="inline mr-2" /> contact@deepenterprises.com
              </p>
              <p>
                <FaMapMarkerAlt className="inline mr-2" /> New Delhi, India
              </p>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="w-full md:w-1/2 p-6 md:p-8">
            <h3 className="text-2xl font-bold text-black">Get in Touch</h3>
            <p className="text-gray-600 mt-2">
              Fill out the form below, and our team will get back to you shortly.
            </p>
            <form className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500"
                rows={5} // Change rows to a number
              ></textarea>
              <button className="bg-green-500 text-white w-full py-3 rounded-md text-lg font-semibold hover:bg-green-600">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* CTA Section - Now properly spaced */}
      <section className="mt-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10 w-full">
        {/* Left Section - Image & Counter */}
        <div className="relative w-full md:w-1/2">
          <Image
            src="https://images.pexels.com/photos/1276564/pexels-photo-1276564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Experience"
            className="rounded-lg shadow-lg w-full"
            width={1260} // Specify the width
            height={750} // Specify the height
          />
          <div className="absolute bottom-5 left-5 bg-green-500 text-white p-4 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold">10+</h2>
            <p>Years of Experience</p>
          </div>
        </div>

        {/* Right Section - Title & Clients */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-green-500">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 mt-4">
            Over the past decade, Deep Enterprises has built strong partnerships
            with clients across industries. Our focus on quality, sustainability,
            and innovation makes us a preferred choice in the biomass sector.
          </p>
          {/* Client Logos */}
          <div className="flex flex-col items-center md:items-start mt-6 space-y-4">
            <div className="flex justify-center md:justify-start space-x-6">
              {/* Client 1 */}
              <div className="flex flex-col items-center">
                <Image
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Client 1"
                  className="w-20 h-20 object-cover rounded-full border-2 border-gray-300 shadow-md"
                  width={80} // specify width
                  height={80} // specify height
                />
                <p className="mt-2 text-gray-700 font-semibold">Alex Carter</p>
              </div>

              {/* Client 2 */}
              <div className="flex flex-col items-center">
                <Image
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Client 2"
                  className="w-20 h-20 object-cover rounded-full border-2 border-gray-300 shadow-md"
                  width={80} // specify width
                  height={80} // specify height
                />
                <p className="mt-2 text-gray-700 font-semibold">Sophia Lane</p>
              </div>

              {/* Client 3 */}
              <div className="flex flex-col items-center">
                <Image
                  src="https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Client 3"
                  className="w-20 h-20 object-cover rounded-full border-2 border-gray-300 shadow-md"
                  width={80} // specify width
                  height={80} // specify height
                />
                <p className="mt-2 text-gray-700 font-semibold">Daniel Brooks</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
