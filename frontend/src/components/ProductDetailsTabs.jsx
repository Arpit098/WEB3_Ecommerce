import React from "react";

const ProductDetailsTabs = () => {
  return (
    <div className="max-w-5xl mx-auto mt-8 p-6">
      {/* Description Section */}
      <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm mb-6">
        <h3 className="text-2xl font-semibold mb-4">Description</h3>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Porta gravida non a quisque
          sit. Egestas aenean nunc tristique sit sit massa tristique facilisis
          urna. Ullamcorper in iaculis nulla habitant consectetur elit semper eu
          ac. Pretium sem integer ac volutpat enim. Vulputate...
        </p>
        {/* Add more content as needed */}
      </div>

      {/* Specifications Section */}
      <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
        <h3 className="text-2xl font-semibold mb-4">Specifications</h3>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Porta gravida non a quisque
          sit. Egestas aenean nunc tristique sit sit massa tristique facilisis
          urna. Ullamcorper in iaculis nulla habitant consectetur elit semper eu
          ac. Pretium sem integer ac volutpat enim. Vulputate...
        </p>
        {/* Add more content as needed */}
      </div>

      {/* Similar Products Button */}
      <div className="mt-6">
        <button className="bg-gray-200 px-6 py-3 rounded-lg text-blue-600 font-medium hover:bg-gray-300 transition duration-200">
          Similar Product
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsTabs;
