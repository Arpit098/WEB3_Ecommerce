// import products from "./CollectionData";
// import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

// const Collection = () => {
//   return (
//     <div className="p-4 relative overflow-hidden">
//       <div className="relative flex items-center">
//         <button className="text-blue-600 w-9 h-9 text-2xl p-3 z-10">
//           <FaCircleArrowLeft />
//         </button>
//         <div className="flex justify-around gap-6 flex-wrap">
//           {products.map((product, index) => (
//             <div
//               key={index}
//               className=" relative w-[226px] h-[286px] bg-[#F7F7F5] border border-white rounded-lg shadow-md "
//               style={{
//                 boxSizing: "border-box",
//                 left: "58px",
//                 top: "0px",
//                 boxShadow: "0px -0.794444px 3.17778px rgba(0, 0, 0, 0.25)",
//               }}
//             >
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="bg-[#F7F7F5] w-full h-40 object-contain mb-4"
//               />
//               <div className="bg-white pl-6">
//                 <h3 className="font-dm-sans text-[15px] font-bold leading-[19.53px] text-left">
//                   {product.name}
//                 </h3>
//                 <div className="flex flex-row just pt-5 gap-[88px] w-[172px] h-[34px]">
//                   <p className="font-dm-sans text-[13px] font-bold leading-[16.93px] text-left text-[#434343]">
//                     Qty: {product.qty}
//                   </p>
//                   <p className="font-dm-sans text-[13px] font-bold leading-[16.93px] text-left text-[#434343]">
//                     Price: {product.price}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <button className="text-blue-600 w-9 h-9 text-2xl absolute right-[25px] p-3 z-10">
//           <FaCircleArrowRight />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Collection;

// import products from "./CollectionData";
// import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

// const Collection = () => {
//   return (
//     <div className="p-4">
//       <div className="relative flex items-center">
//         <button className="text-blue-600 w-9 h-9 text-3xl left-[36px] p-3 max-md:hidden">
//           <FaCircleArrowLeft />
//         </button>
//         <div className="flex justify-between gap-7 flex-wrap max-md:justify-center">
//           {products.map((product, index) => (
//             <div
//               key={index}
//               className=" relative w-[226px] h-[286px] bg-[#F7F7F5] border border-white rounded-lg shadow-md left-[58px]"
//               style={{
//                 boxSizing: "border-box",
//                 top: "0px",
//                 boxShadow: "0px -0.794444px 3.17778px rgba(0, 0, 0, 0.25)",
//               }}
//             >
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="bg-[#F7F7F5] w-full h-40 object-contain mb-4"
//               />
//               <div className="bg-white pl-6">
//                 <h3 className="font-dm-sans text-[15px] font-bold leading-[19.53px] text-left">
//                   {product.name}
//                 </h3>
//                 <div className="flex flex-row just pt-5 gap-[88px] w-[172px] h-[34px]">
//                   <p className="font-dm-sans text-[13px] font-bold leading-[16.93px] text-left text-[#434343]">
//                     Qty: {product.qty}
//                   </p>
//                   <p className="font-dm-sans text-[13px] font-bold leading-[16.93px] text-left text-[#434343]">
//                     Price: {product.price}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <button className="text-blue-600 w-9 h-9 text-3xl absolute right-[36px] p-3 max-md:hidden">
//           <FaCircleArrowRight />
//         </button>
//       </div>
//       <div className="flex justify-between mt-8 w-[calc(100%-36px)] mx-[36px]">
//         <span className="bg-[#F6F6F6] rounded-xl font-dm-sans text-sm px-3 py-1">
//           More to Love
//         </span>
//         <span className="bg-[#F6F6F6] rounded-xl font-dm-sans text-sm px-3 py-1">
//           view all
//         </span>
//       </div>
//     </div>
//   );
// };

// export default Collection;



import products from "./CollectionData";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

const Collection = () => {
  return (
    <div className="p-4">
      <div className="relative flex items-center">
        <button className="text-blue-600 w-9 h-9 text-3xl p-3 hidden md:block">
          <FaCircleArrowLeft />
        </button>
        <div className="flex flex-wrap justify-center gap-7 w-full">
          {products.map((product, index) => (
            <div
              key={index}
              className="w-[226px] h-[286px] bg-[#F7F7F5] border border-white rounded-lg shadow-md"
              style={{
                boxSizing: "border-box",
                boxShadow: "0px -0.794444px 3.17778px rgba(0, 0, 0, 0.25)",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-contain mb-4"
              />
              <div className="bg-white pl-6">
                <h3 className="font-dm-sans text-[15px] font-bold leading-[19.53px] text-left">
                  {product.name}
                </h3>
                <div className="flex justify-between pt-5 w-full px-6">
                  <p className="font-dm-sans text-[13px] font-bold leading-[16.93px] text-[#434343]">
                    Qty: {product.qty}
                  </p>
                  <p className="font-dm-sans text-[13px] font-bold leading-[16.93px] text-[#434343]">
                    Price: {product.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="text-blue-600 w-9 h-9 text-3xl p-3 hidden md:block">
          <FaCircleArrowRight />
        </button>
      </div>
      <div className="flex justify-between mt-8">
        <span className="bg-[#F6F6F6] rounded-xl font-dm-sans text-sm px-3 py-1">
          More to Love
        </span>
        <span className="bg-[#F6F6F6] rounded-xl font-dm-sans text-sm px-3 py-1">
          view all
        </span>
      </div>
    </div>
  );
};

export default Collection;
