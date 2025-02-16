import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Card = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsPerSlide = 4; // Changed to 4 cards per slide
  const totalSlides = Math.ceil(props.details.length / cardsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentSlideCards = () => {
    const start = currentSlide * cardsPerSlide;
    return props.details.slice(start, start + cardsPerSlide);
  };

  return (
    <div className="md:m-[20px] flex flex-col max-md:items-center max-md:justify-center">
      <p className="text-3xl font-bold mb-4 leading-[36.46px] text-left">
        Latest News
      </p>
      <div className="relative w-full">
        <div className="flex flex-wrap gap-4 max-md:items-center max-md:justify-center max-md:gap-7 justify-around">
          {getCurrentSlideCards().map((value, index) => (
            <div
              className="w-[280px] h-[420px] border rounded-xl shadow-2xl"
              key={index}
            >
              <div className="w-full h-[225px]">
                <img
                  src={value.img}
                  className="w-full h-full object-cover rounded-t-xl"
                  alt={`News Image ${index + 1}`}
                />
              </div>
              <div className="relative p-6 gap-[8px]">
                <p className="font-dm-sans text-[13px] font-normal leading-[16.93px] text-left">
                  {value.date} | {value.comment}
                </p>
                <p className="w-[227px] h-[29px] mt-2 font-medium text-[22px] leading-[28.64px] font-dm-sans">
                  {value.title}
                </p>
                <p className="w-[245px] h-[51px] pt-2 font-dm-sans text-[13px] font-normal leading-[16.93px] text-left">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {props.details.length > 4 && ( // Show arrows only when more than 4 cards
          <>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:bg-gray-100 text-gray-800 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
            >
              <IoIosArrowBack size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:bg-gray-100 text-gray-800 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
            >
              <IoIosArrowForward size={24} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;