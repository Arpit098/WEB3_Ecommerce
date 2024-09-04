// import React from "react";

// const PopularCollection = ({ details }) => {
//   return (
//     <div className="w[283px] min-h-[329.92px] m-[20px] flex flex-wrap gap-3">
//       {details.map((collection, index) => (
//         <div
//           key={index}
//           className="border border-gray-200 rounded-b-md overflow-hidden shadow-lg bg-black text-white"
//         >
//           <div className="flex-1 grid grid-cols-2 gap-4 justify-end items-end">
//             {collection.img.map((image, imgIndex) => (
//               <img
//                 key={imgIndex}
//                 src={image}
//                 alt={`Collection ${imgIndex + 1}`}
//                 className="object-cover"
//                 style={{ width: "133px", height: "101px" }}
//               />
//             ))}
//           </div>
//           <div className="pt-5 w-[283px] min-h-[111px] flex items-center justify-between bg-[#121010E3] ">
//             <h2 className="sticky pl-2 text-white font-DM-Sans font-medium text-[16.13px] leading-[21px]">
//               {collection.title}
//             </h2>
//             <span className="sticky bg-[#121010E3] text-white border-[#AEAEAE] rounded-md px-2 py-1 text-sm">
//               20 items
//             </span>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PopularCollection;



// import React from "react";

// const PopularCollection = ({ details }) => {
//   return (
//     <div className="flex items-center md:justify-evenly md:gap-10 mt-5 max-md:flex-col max-md:justify-center max-md:gap-10 md:flex-wrap">
//       {details.map((collection, index) => (
//         <div
//           key={index}
//           className="rounded-b-md overflow-hidden shadow-lg bg-black text-white border-b-[7px] border-b-[#9747FF]"
//         >
//           <div className="flex-1 grid grid-cols-2 gap-4 justify-end items-end">
//             {collection.img.map((image, imgIndex) => (
//               <img
//                 key={imgIndex}
//                 src={image}
//                 alt={`Collection ${imgIndex + 1}`}
//                 className="object-cover"
//                 style={{ width: "133px", height: "101px" }}
//               />
//             ))}
//           </div>
//           <div className="pt-5 w-[283px] min-h-[111px] flex items-center justify-between bg-[#121010E3] ">
//             <h2 className="sticky pl-2 text-white font-DM-Sans font-medium text-[16.13px] leading-[21px]">
//               {collection.title}
//             </h2>
//             <span className="sticky bg-[#121010E3] text-white border-[#AEAEAE] rounded-md px-2 py-1 text-sm">
//               20 items
//             </span>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PopularCollection;


import React from "react";
import { useNavigate } from "react-router-dom";

const PopularCollection = ({ details }) => {
  const navigate = useNavigate();

  const handleNavigation = (id) => {
    navigate(`/boredApe`);
  };
  return (
    <div className="flex flex-wrap justify-center gap-5 mt-5">
      {details.map((collection, index) => (
        <div
          key={index}
          className="w-[283px] rounded-b-md overflow-hidden shadow-lg bg-black text-white border-b-[7px] border-b-[#9747FF] flex flex-col"
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
          <div className="pt-5 flex items-center justify-between bg-[#121010E3]">
            <h2 className="pl-2 text-white font-DM-Sans font-medium text-[16.13px] leading-[21px]">
              {collection.title}
            </h2>
            <span className="bg-[#121010E3] text-white border-[#AEAEAE] rounded-md px-2 py-1 text-sm">
              20 items
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularCollection;
