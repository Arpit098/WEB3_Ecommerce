import React from "react";
import { useParams } from "react-router-dom";
import products from "../components/ProdctDetailsData"; // Importing the product data

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  return (
    <div className="max-w-5xl mx-auto p-6 flex gap-8">
      {/* Left Section: Image and Thumbnails */}
      <div className="flex-none w-1/2">
        <div className="p-6 border border-gray-200 rounded-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="flex gap-4 mt-4">
          {/* Thumbnail Images */}
          {/* Repeat for additional thumbnails */}
          <div className="w-16 h-16 border border-gray-200 rounded-lg bg-gray-100"></div>
        </div>
      </div>

      {/* Right Section: Product Information */}
      <div className="flex-grow">
        <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-xl font-semibold mb-2">
          Price: <span className="text-blue-600">{product.price}</span>{" "}
          <span className="text-gray-500 text-sm">{product.usdPrice}</span>
        </p>

        <h3 className="text-lg font-medium mb-2">Product Details</h3>
        <p className="text-gray-600 mb-4">{product.details}</p>

        <div className="flex items-center mb-6">
          <div className="flex items-center mr-4">
            <span className="text-yellow-500">
              &#9733;&#9733;&#9733;&#9733;&#9734;
            </span>
          </div>
          <p className="text-gray-500 text-sm">
            {product.rating} | {product.reviews} Reviews | {product.sold} sold
          </p>
        </div>

        <button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
