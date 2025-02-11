import React from "react";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const PopularCollection = ({ details }) => {
  const navigate = useNavigate();

  const handleNavigation = (id) => {
    navigate(`/boredApe`);
  };

  return (
    <div className="bg-black flex flex-col py-20 gap-5 max-md:justify-center max-md:w-full">
      <h2 className="text-white text-4xl text-left lg:w-[85vw] w-[75vw] mx-auto max-md:text-center">
        Popular Collection
      </h2>
      <div className="flex justify-between items-center w-[90vw] mx-auto max-md:justify-center">
        <button className="text-[#fff] w-9 h-9 text-3xl hidden md:block md:mr-6 xl:mr-7">
          <FaCircleArrowLeft />
        </button>
        <div className="flex justify-between lg:w-[85vw] w-[75vw] gap-5 py-3 mx-auto max-md:justify-center">
          {details.map((collection, index) => (
            <div
              key={index}
              className="w-72 h-[20rem] rounded-b-md overflow-hidden shadow-lg bg-black text-white border-b-[7px] border-b-[#9747FF] flex flex-col"
              onClick={() => handleNavigation(collection)}
            >
              <div className="grid grid-cols-2 gap-1">
                {collection.img.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={image}
                    alt={`Collection ${imgIndex + 1}`}
                    className="object-cover"
                    style={{ width: "133px", height: "101px" }}
                  />
                ))}
              </div>
              <div className="pt-5 flex items-center justify-between bg-[#121010E3] h-28 px-3">
                <h2 className="pl-2 text-white font-DM-Sans font-medium text-[16.13px] leading-[21px]">
                  {collection.title}
                </h2>
                <span className="bg-[#121010E3] text-white border-[#AEAEAE] rounded-md px-2 py-1 text-sm border">
                  20 items
                </span>
              </div>
            </div>
          ))}
        </div>
        <button className="text-white w-9 h-9 text-3xl hidden md:block ml-6 xl:ml-7">
          <FaCircleArrowRight />
        </button>
      </div>
    </div>
  );
};

export default PopularCollection;
