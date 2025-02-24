import React, { useState, useEffect } from "react";
import image from "../assets/image.png";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";

const images = [image, image1, image2];

const HeroBg = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="w-full h-screen flex-none">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-70" />

      {/* Added text overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h5 className="text-white text-4xl md:text-5xl translate-y-16 text-center px-4 max-w-4xl font-['DM_Sans']">
          Discover <br />A new era of ecommerce powered by{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            blockchain
          </span>{" "}
          technology
        </h5>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-6 h-1 rounded-lg ${
              currentIndex === index ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBg;
