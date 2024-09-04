// import React from "react";

// const Card = (props) => {
//   return (
//     <div className="m-[20px] flex justify-between flex-wrap">
//       {props.details.map((value, index) => (
//         <div className="w-[285px] h-[386px] border rounded-[6.36px]">
//           <div className="w-[285px] h-[225px]" key={index}>
//             <img src={value.img} className="w-full h-full object-cover" />
//           </div>
//             <div className="relative w-[245px] h-[113px] pt-2 left-[20px] gap-[8px]">
//               <p className="font-dm-sans text-[13px] font-normal leading-[16.93px] text-left w-[173px] h-[17px] ">
//                 {value.date} | {value.comment}
//               </p>
//               <p className="w-[227px] h-[29px] pt-0.3 font-medium text-[22px] leading-[28.64px] font-dm-sans">
//                 {value.title}
//               </p>
//               <p className="w-[245px] h-[51px] pt-2 font-dm-sans text-[13px] font-normal leading-[16.93px] text-left">
//                 {value.description}
//               </p>
//             </div>
//           </div>
//       ))}
//     </div>
//   );
// };

// export default Card;


import React from "react";

const Card = (props) => {
  return (
    <div className="m-[20px] flex flex-col max-md:items-center max-md:justify-center">
      <p className="text-3xl font-bold mb-4 leading-[36.46px] text-left">
        Latest News
      </p>{" "}
      {/* "Latest News" in bold */}
      <div className="flex flex-wrap gap-4 max-md:items-center max-md:justify-center max-md:gap-7 justify-around">
        {" "}
        {/* Container for cards */}
        {props.details.map((value, index) => (
          <div
            className="w-[285px] h-[386px] border rounded-[6.36px]"
            key={index}
          >
            <div className="w-[285px] h-[225px]">
              <img
                src={value.img}
                className="w-full h-full object-cover"
                alt={`News Image ${index + 1}`}
              />
            </div>
            <div className="relative w-[245px] h-[113px] pt-2 left-[20px] gap-[8px]">
              <p className="font-dm-sans text-[13px] font-normal leading-[16.93px] text-left w-[173px] h-[17px] ">
                {value.date} | {value.comment}
              </p>
              <p className="w-[227px] h-[29px] pt-0.3 font-medium text-[22px] leading-[28.64px] font-dm-sans">
                {value.title}
              </p>
              <p className="w-[245px] h-[51px] pt-2 font-dm-sans text-[13px] font-normal leading-[16.93px] text-left">
                {value.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;