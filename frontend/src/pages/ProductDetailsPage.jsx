import { useParams } from "react-router-dom";
import products from "../components/ProdctDetailsData";
import ProductDetailsTabs from "../components/ProductDetailsTabs";
import { MdAddShoppingCart } from "react-icons/md";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  return (
    <>
      {" "}
      <div className="max-w-[1260px] mx-auto p-6 flex gap-8 max-md:flex-col">
        <div className="flex-none md:w-1/2">
          <div className="lg:p-6 border border-gray-200 rounded-lg flex justify-center items-center gap-2 shadow-xl max-md:h-[350px] md:max-lg:h-[500px] overflow-hidden md:min-h-[500px]">
            <div className="gap-2 flex flex-col max-lg:hidden">
              <div className="grid grid-flow-col bg-[#E8E9F2] h-10 w-10 rounded-lg "></div>
              <div className="grid grid-flow-col bg-[#E8E9F2] h-10 w-10 rounded-lg "></div>
              <div className="grid grid-flow-col bg-[#E8E9F2] h-10 w-10 rounded-lg "></div>
              <div className="grid grid-flow-col bg-[#E8E9F2] h-10 w-10 rounded-lg "></div>
            </div>
            <div className="">
              <img
                src={product.image}
                alt={product.name}
                className="object-contain w-[400px] h-[380px]"
              />
            </div>
          </div>
        </div>

        {/* Right Section: Product Information */}
        <div className=" relative border border-[#DFDFDF] lg:p-7 md:p-5 p-4 rounded-lg md:w-1/2 overflow-hidden max-md:h-[430px]">
          <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
          <hr />
          <p className="text-[#828282] lg:mb-9 mb-4 md:mt-4 mt-2 text-xl">
            {product.description}
          </p>
          <p className="text-sm text-[#828282] lg:mb-9 mb-4">
            Price:{" "}
            <span className="text-black font-semibold text-xl">
              {product.price}
            </span>{" "}
            <span className="text-gray-500 text-sm">{product.usdPrice}</span>
          </p>

          <h3 className="text-xl font-medium text-[#828282]">
            Product Details
          </h3>
          <p className="text-[#828282] text-sm lg:mb-11 mt-2">
            {product.details}
          </p>

          <div className="flex lg:items-center max-lg:flex-col max-md:mt-3 md:max-lg:mt-5">
            <div className="flex md:items-center md:mr-4">
              <span className="text-[#D9D9D9] text-4xl">
                &#9733;&#9733;&#9733;&#9733;&#9734;
              </span>
            </div>
            <p className="text-[#7A7A7A] text-sm lg:mt-5 mt-1 md:ml-2">
              {product.rating} | {product.reviews} Reviews | {product.sold} sold
            </p>
          </div>

          <button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-medium flex items-center md:mt-5 absolute lg:bottom-10 bottom-3 mx-auto w-[90%]">
            <span className="flex-grow text-center">Buy Now</span>
            <span className="ml-2 pl-2 h-full flex items-center border-l border-white">
              <MdAddShoppingCart className="text-xl text-white" />
            </span>
          </button>
        </div>
      </div>
      <div className="mt-12">
        <ProductDetailsTabs />
      </div>
    </>
  );
};

export default ProductDetailsPage;
