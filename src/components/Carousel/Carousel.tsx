import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

type props = {
  screenshots: string[];
};

export const Carousel = (props: props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? props.screenshots.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === props.screenshots.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleClick = (e: React.MouseEvent) => {
    if (e.currentTarget === e.target) {
      setShowPopup(!showPopup);
    }
  };

  return (
    <>
      <div className="group relative m-auto h-full w-full max-w-[1400px] py-4">
        <div
          style={{
            backgroundImage: `url(${import.meta.env.VITE_SERVER_API}${
              props.screenshots[currentIndex]
            })`,
          }}
          className="h-full w-full cursor-zoom-in rounded-xl bg-cover bg-center duration-500"
          onClick={handleClick}
        ></div>
        <div className="absolute left-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
          <BsChevronCompactLeft size={30} onClick={prevSlide} />
        </div>
        <div className="absolute right-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
          <BsChevronCompactRight size={30} onClick={nextSlide} />
        </div>
      </div>
      {showPopup && (
        <div
          className="z-2 modal fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black/90"
          onClick={handleClick}
        >
          <div className="flex h-[600px] w-[100%] justify-center">
            <div
              style={{
                backgroundImage: `url(${import.meta.env.VITE_SERVER_API}${
                  props.screenshots[currentIndex]
                })`,
              }}
              className="roundex-2xl h-[inherit] w-[80%] cursor-zoom-out rounded-xl bg-cover bg-center duration-500"
              onClick={handleClick}
            ></div>
            <div className="absolute left-5 top-[50%] -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white ">
              <BsChevronCompactLeft size={30} onClick={prevSlide} />
            </div>
            <div className="absolute right-5 top-[50%] -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white ">
              <BsChevronCompactRight size={30} onClick={nextSlide} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
