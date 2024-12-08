import pc1 from "../assets/pc1.png";
import dp12bg from "../assets/dp12bg.png";

const BoredApesComponent = () => {
  return (
    <div
      className="relative bg-cover bg-center text-white h-screen flex flex-col items-center justify-center min-h-[500px]"
      style={{
        backgroundImage: `url(${dp12bg})`,
        backgroundSize: "cover",
        height: "620px",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-90"></div>
      <div className="relative z-10 flex flex-col items-center">
        {/* Profile Image */}
        <div className="rounded-full border-4 border-[#FD43D8]  bg-black w-[164px] h-[158px]">
          <img
            src={pc1}
            alt="Bored Ape"
            className="rounded-full max-md:!w-full"
            style={{
              width: "202px",
              height: "158px",
              gap: "0px",
            }}
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-semibold mt-4">Bored Apes</h1>

        {/* Description */}
        <p className="text-center mt-2 md:max-w-2xl px-4 lg:min-w-[1000px] text-[#7A7A7A] max-md:min-w-[300px] ">
          The Bored Ape collection has garnered significant attention not only
          for its distinctive art and community-driven approach but also for its
          role in the broader adoption of NFTs. Celebrities, athletes, and
          influential figures have publicly joined the Yacht Club, further
          elevating its status and contributing to the rising value of the NFTs.
        </p>

        {/* Stats Section */}
        <div className="flex mt-6 md:space-x-24 bg-black bg-opacity-5 backdrop-blur-md md:p-4 rounded-lg shadow-md max-md:flex-wrap gap-x-6 max-md:px-4 max-md:mx-6">
          <div className="flex flex-col md:items-center">
            <span className="text-lg font-semibold">7500 ETH</span>
            <span className="text-sm text-[#7A7A7A]">Total</span>
          </div>
          <div className="flex flex-col md:items-center">
            <span className="text-lg font-semibold">1.1 ETH</span>
            <span className="text-sm text-[#7A7A7A]">Price</span>
          </div>
          <div className="flex flex-col md:items-center max-md:m-0">
            <span className="text-lg font-semibold">0.955 WETH</span>
            <span className="text-sm text-[#7A7A7A]">Best Offer</span>
          </div>
          <div className="flex flex-col md:items-center">
            <span className="text-lg font-semibold">2500</span>
            <span className="text-sm text-[#7A7A7A]">Owners</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoredApesComponent;
