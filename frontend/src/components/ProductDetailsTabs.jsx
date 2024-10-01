import { MdOutlineDescription } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";

const ProductDetailsTabs = () => {
  return (
    <div className="max-w-[1260px] mx-auto mt-8 p-6 flex gap-8">
      <div className="md:w-4/5">
        {/* Description Section */}
        <div className="p-6 border border-gray-200 rounded-lg shadow-sm mb-6 text-[#6A6A6A] bg-[#B8BBD7]  text-justify">
          <h3 className="text-2xl font-semibold text-[#333333]">Description</h3>
          <hr className="mt-2 mb-2" />
          <p className="text-gray-600 text-[0.9rem]">
            Lorem ipsum dolor sit amet consectetur. Porta gravida non a quisque
            sit. Egestas aenean nunc tristique sit sit massa tristique facilisis
            urna. Ullamcorper in iaculis nulla habitant consectetur elit semper
            eu ac. Pretium sem integer ac volutpat enim. Vulputate...
          </p>
          {/* Add more content as needed */}
        </div>

        {/* Specifications Section */}
        <div className="p-6 border border-gray-200 rounded-lg shadow-sm text-[#6A6A6A] bg-[#B8BBD7] text-justify">
          <h3 className="text-2xl font-semibold text-[#333333]">
            Specifications
          </h3>
          <hr className="mt-2 mb-2" />
          <p className="text-gray-600 text-[0.9rem]">
            Lorem ipsum dolor sit amet consectetur. Porta gravida non a quisque
            sit. Egestas aenean nunc tristique sit sit massa tristique facilisis
            urna. Ullamcorper in iaculis nulla habitant consectetur elit semper
            eu ac. Pretium sem integer ac volutpat enim. Vulputate...
          </p>
          {/* Add more content as needed */}
        </div>

        {/* Similar Products Button */}
        <div className="mt-6">
          <button className="px-6 py-3 text-[#121959] text-[0.9rem] bg-[#E8E9F2] rounded-3xl font-bold hover:bg-gray-300 transition duration-200">
            Similar Product
          </button>
        </div>
      </div>
      <div className="w-1/5 flex flex-col max-md:hidden">
        <div>
          <p className="flex items-center gap-2 text-base text-[#6A6A6A] bg-[#B8BBD7] p-3 rounded-se-xl rounded-ss-xl">
            <MdOutlineDescription className="text-xl" />{" "}
            <span>Description</span>
          </p>
          <p className="flex items-center gap-2 mt-1 text-base text-[#6A6A6A]">
            <TfiMenuAlt className="text-xl" /> <sapn>Specification</sapn>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsTabs;
