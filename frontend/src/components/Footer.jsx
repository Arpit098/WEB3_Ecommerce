import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-20 h-auto px-5">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start">
        {/* Left Section: Logo and Text */}
        <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0 w-full lg:w-auto">
          <div className="bg-white p-4 rounded-full mb-4">
            <FaShoppingBag className="text-blue-900 h-5 w-5" />
          </div>
          <p className="font-medium tracking-wider text-[1.35rem] text-center lg:text-left">
            Lorem Ipsum
          </p>
          <p className="text-center lg:text-left max-w-xs text-[0.8rem] mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor exercitation ullamco laboris nisi ut aliquip.
          </p>
          <div className="flex space-x-4 mt-4 justify-center lg:justify-start">
            {/* Social Icons */}
                  <a href="#" aria-label="LinkedIn" className="hover:scale-110 transition-transform duration-300">
                    <FaLinkedin className="text-3xl" />
                  </a>
                  <a href="#" aria-label="Instagram" className="hover:scale-110 transition-transform duration-300">
                    <FaInstagram className="text-3xl" />
                  </a>
                  </div>
                </div>

                {/* Middle Section: Quick Links and Policy */}
        <div className="flex flex-col sm:flex-row justify-between space-y-8 sm:space-y-0 sm:space-x-8 mb-8 lg:mb-0 w-full sm:w-auto">
          {/* Quick Links */}
          <div className="text-center lg:text-left">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  <p> Page</p>
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  <p>Page</p>
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  <p> Page</p>
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  <p> Page</p>
                </a>
              </li>
            </ul>
          </div>

          {/* Our Policy */}
          <div className="text-center lg:text-left">
            <h4 className="font-semibold mb-4">Our Policy</h4>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  <p> Page</p>
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  <p> Page</p>
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  <p>Page</p>
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  <p> Page</p>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section: Newsletter */}
        <div className="text-center lg:text-left w-full sm:w-auto">
          <h4 className="font-semibold mb-4 text-[1.3rem] tracking-wider">
            Stay updated
            <br />
            by our Newsletter
          </h4>
          <p className="mb-4 max-w-xs text-[0.8rem] mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor exercitation ullamco laboris nisi ut aliquip.
          </p>
          <div className="relative w-full sm:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-lg focus:outline-none text-blue-900 w-full pr-12"
            />
            <button className="absolute right-0 top-0 h-full bg-white text-blue-900 px-4 py-2 rounded-r-lg group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300"
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
