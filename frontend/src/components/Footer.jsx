import React, { useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import whatsappQRCode from "../assets/whatsappQRCode.png"
import instagramQRCode from "../assets/instagramQRCode.png"
import unboxingGIF from "../assets/unboxing.gif"
import linkedIn from "../assets/linkedin_image.png"
import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Timer from "./Timer";

const Footer = () => {
  const [rating, setRating] = useState(0);
  return (
    <footer className="bg-purple-900 text-white py-20 h-auto px-5">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start">
        {/* Left Section: Logo and Text */}
          <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0 w-full lg:w-auto">
            <div className="bg-white p-4 rounded-full mb-4">
              <FaShoppingBag className="text-purple-900 h-5 w-5" />
            </div>
            <p className="font-medium tracking-wider text-[1.35rem] text-center lg:text-left">
              Lorem Ipsum
            </p>
            <p className="text-center lg:text-left max-w-xs text-[0.8rem] mt-2">
              Lorem ipsum dolor sit amet.
            </p>
            <div className="flex space-x-4 mt-4 justify-center lg:justify-start">
              <a href="#" aria-label="LinkedIn" className="hover:scale-110 transition-transform duration-300">
                <FaLinkedin className="text-3xl" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:scale-110 transition-transform duration-300">
                <FaInstagram className="text-3xl" />
              </a>
            </div>
            <h4 className=" text-xl font-semibold mt-6">Rate Us</h4>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
            key={star}
            className="text-4xl text-yellow-400 hover:text-yellow-500 transition-colors"
            onClick={() => {
              setRating(star);
              console.log(`Rated ${star} stars`);
            }}
                >
            {star <= rating ? "★" : "☆"}
                </button>
              ))}
            </div>
            {rating > 0 && (
              <p className="mt-2">You rated us {rating} stars!</p>
            )}
          </div>

          {/* Middle Section: Quick Links and Policy */}
        <div className="flex flex-col sm:flex-row justify-between space-y-8 sm:space-y-0 sm:space-x-8 mb-8 lg:mb-0 w-full sm:w-auto">
          {/* Quick Links */}
          {/* <div className="text-center lg:text-left">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul>
              
            </ul>
          </div> */}

          {/* Our Policy */}
          <div className="text-center lg:text-left">
            <h4 className="font-semibold text-[1.3rem] mb-4 translate-x-2">Our Gift-Box</h4>
            <img src = {unboxingGIF} alt="unboxing gift box" className="w-40 h-40 object-contain -translate-x-4 -translate-y-6" />
            <Timer />
          </div>
        </div>

        {/* Right Section: QR Codes */}
        <div className="text-center lg:text-left w-full sm:w-auto -translate-y-2">
          <h4 className="font-semibold mb-4 text-[1.3rem] tracking-wider">
            Connect With Us
          </h4>
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Instagram QR Card */}
            <a href="#instagram-link" className="bg-white p-4 rounded-lg hover:scale-105 transition-transform duration-300">
              <img 
                src= {instagramQRCode} 
                alt="Instagram QR Code"
                className="w-32 h-32 object-contain"
              />
              <p className="text-blue-900 font-medium mt-2">Instagram</p>
            </a>

            {/* WhatsApp QR Card */}
            <a href="#whatsapp-link" className="bg-white p-4 rounded-lg hover:scale-105 transition-transform duration-300">
              <img 
                src= {whatsappQRCode} 
                alt="WhatsApp QR Code"
                className="w-32 h-32 object-contain"
              />
              <p className="text-blue-900 font-medium mt-2">WhatsApp</p>
            </a>

            <a href="#whatsapp-link" className="bg-white p-4 rounded-lg hover:scale-105 transition-transform duration-300">
              <img 
                src= {linkedIn} 
                alt="WhatsApp QR Code"
                className="w-32 h-32 object-contain"
              />
              <p className="text-blue-900 font-medium mt-2">LinkedIn</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
