import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start px-4">
        {/* Left Section: Logo and Text */}
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          {/* Replace with your logo */}
          <div className="bg-white p-4 rounded-full mb-4">
            <FaShoppingBag className="text-blue-900 h-10 w-10" />
          </div>
          <p className="text-center md:text-left max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor exercitation ullamco laboris nisi ut aliquip.
          </p>
          <div className="flex space-x-4 mt-4">
            {/* Social Icons */}
            <a href="#" aria-label="Facebook" className="hover:text-gray-400">
              <FaFacebookF className="text-2xl" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-400">
              <FaLinkedinIn className="text-2xl" />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-gray-400">
              <FaYoutube className="text-2xl" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-400">
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Middle Section: Quick Links and Policy */}
        <div className="flex justify-between space-x-8 mb-8 md:mb-0">
          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Page
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Page
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Page
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Page
                </a>
              </li>
            </ul>
          </div>

          {/* Our Policy */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-4">Our Policy</h4>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Page
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Page
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Page
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Page
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section: Newsletter */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold mb-4">Stay updated by our Newsletter</h4>
          <p className="mb-4 max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor exercitation ullamco laboris nisi ut aliquip.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-lg focus:outline-none text-blue-900"
            />
            <button className="bg-white text-blue-900 px-4 py-2 rounded-r-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
