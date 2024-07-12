import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";

const FooterElement = () => {
  return (
    <footer className="bg-blue-400 py-10 px-6 lg:px-20">
      <div className="container mx-auto grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Logo and Subscribe Section */}
        <div className="flex flex-col items-center lg:items-start">
          <img
            src="/download-removebg-preview.png"
            alt="Logo"
            className="w-32 lg:w-40 h-auto mb-4"
          />
          <h1 className="text-white font-bold text-lg lg:text-xl mb-4">
            Subscribe to our email alerts!
          </h1>
          <div className="flex flex-row gap-2 items-center w-full max-w-sm mb-4">
            <input
              type="email"
              className="block w-full px-3 py-2 rounded-1-md focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email"
            />
            <button className="bg-white py-2 px-4 rounded-r-md shadow-md hover:bg-gray-200 transition duration-300">
              Subscribe
            </button>
          </div>
          <Link to="/" className="text-white hover:text-gray-200 transition duration-300">
            Shop Now
          </Link>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
          <ul className="text-white">
            <li className="mb-2">
              <Link to="/" className="hover:text-gray-200 transition duration-300">Home</Link>
            </li>
            <li className="mb-2">
              <Link to="/products" className="hover:text-gray-200 transition duration-300">Products</Link>
            </li>
            <li className="mb-2">
              <Link to="/about" className="hover:text-gray-200 transition duration-300">About Us</Link>
            </li>
            <li className="mb-2">
              <Link to="/contact" className="hover:text-gray-200 transition duration-300">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-white text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex flex-row space-x-2">
            <Link to="#" className="text-white hover:text-gray-200 transition duration-300">
              <FaFacebook style={{width:60}}/>
            </Link>
            <Link to="#" className="text-white hover:text-gray-200 transition duration-300">
            <FaWhatsapp style={{width:60}}/>
            </Link>
            <Link to="#" className="text-white hover:text-gray-200 transition duration-300">
            <CiInstagram style={{width:60}}/>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Message */}
      <div className="text-white text-center mt-8">
        <p>Thank you for visiting, come back again...</p>
      </div>
    </footer>
  );
};

export default FooterElement;
