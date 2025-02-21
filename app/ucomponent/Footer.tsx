"use client";

import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1a2a36] text-white py-10 px-6 md:px-20">
      {/* First Section */}
      <div className="flex flex-col md:flex-row justify-between">
        {/* Left Side - Links */}
        <div className="flex flex-wrap md:flex-nowrap w-full md:w-2/4 justify-between">
          {/* Company Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-green-500">About Us</a></li>
              <li><a href="#" className="hover:text-green-500">Meet Our Team</a></li>
              <li><a href="#" className="hover:text-green-500">News & Media</a></li>
              <li><a href="#" className="hover:text-green-500">Our Projects</a></li>
              <li><a href="#" className="hover:text-green-500">Contact</a></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-green-500">Biomass Fuel Supply</a></li>
              <li><a href="#" className="hover:text-green-500">Biomass Power Generation</a></li>
              <li><a href="#" className="hover:text-green-500">Waste-to-Energy Solutions</a></li>
              <li><a href="#" className="hover:text-green-500">Pellet Manufacturing</a></li>
              <li><a href="#" className="hover:text-green-500">Sustainable Farming Solutions</a></li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-green-500">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-green-500">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-green-500">Delivery Tips</a></li>
              <li><a href="#" className="hover:text-green-500">Returns</a></li>
            </ul>
          </div>
        </div>

        {/* Right Side - Contact & Map */}
        <div className="w-full md:w-1/3 mt-10 md:mt-0">
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p className="text-gray-300 py-1">📍 123 Green Energy Street, Biomass City, Earth</p>
          <p className="text-gray-300 py-1">✉️ contact@biomass.com</p>
          <p className="text-gray-300 py-1">📞 +123 456 7890</p>
          <div className="mt-4">
            <iframe
              className="w-full h-40 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093796!2d144.95592831531572!3d-37.81720997975179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5772ec4e1b1c7e7!2sBiomass%20Energy%20Company!5e0!3m2!1sen!2sus!4v1642970742768!5m2!1sen!2sus"
              
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="mt-10 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
        <p className="text-gray-400">© 2024 All Rights Reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-blue-400"><FaTwitter size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-blue-600"><FaFacebook size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-blue-500"><FaLinkedin size={20} /></a>
        </div>
      </div>
    </footer>
  );
}
