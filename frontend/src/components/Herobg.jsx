import React from "react";
import image from "../assets/image.png";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";

const HeroBg = () => {
  return (
    <div className="relative w-[1471px] h-[4843px] border-dashed border-2 border-[#9747FF] rounded-[5px]">
      {/* Property 1=Default */}
      <div className="absolute w-[1431px] h-[764px] left-[20px] top-[20px]">
        {/* Frame 339 */}
        <div className="flex flex-row items-center p-0 isolate absolute w-[4293px] h-[764px] left-0 top-0 bg-black">
          {/* Image 70 */}
          <div
            className="w-[1431px] h-[764px] opacity-0 transform scale-x-[-1] flex-none order-0 flex-grow-0 z-0"
            style={{ backgroundImage: `url(${image})` }}
          />
          {/* Image 71 */}
          <div
            className="w-[1431px] h-[760.81px] flex-none order-1 flex-grow-0 z-1"
            style={{ backgroundImage: `url(${image1})` }}
          />
          {/* Image 64 */}
          <div
            className="w-[1431px] h-[761px] flex-none order-2 flex-grow-0 z-2"
            style={{ backgroundImage: `url(${image2})` }}
          />
        </div>

        {/* BG OVERLAY */}
        <div className="absolute w-[2073px] h-[1091px] left-[-37px] top-[-68px] bg-black bg-opacity-90 shadow-inner shadow-[inset 0px 4px 20px rgba(0, 0, 0, 0.25)] backdrop-blur-[60px] z-3" />

        {/* Slider */}
        <div className="flex flex-row items-start p-0 gap-2.5 absolute w-[95px] h-[4px] left-[685px] top-[710px] z-4">
          <div className="w-[25px] h-[4px] bg-white rounded-[4px] flex-none order-0 flex-grow-0" />
          <div className="w-[25px] h-[4px] bg-[#878787] rounded-[4px] flex-none order-1 flex-grow-0" />
          <div className="w-[25px] h-[4px] bg-[#878787] rounded-[4px] flex-none order-2 flex-grow-0" />
        </div>
      </div>

      {/* Property 1=Variant2 */}
      <div className="absolute w-[1431px] h-[764px] left-[20px] top-[804px]">
        {/* Additional Frames and Images... */}
      </div>

      {/* Property 1=Variant3 */}
      <div className="absolute w-[1431px] h-[764px] left-[20px] top-[1588px]">
        {/* Additional Frames and Images... */}
      </div>

      {/* Continue with other variants... */}
    </div>
  );
};

export default HeroBg;
