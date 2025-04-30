"use client";
import React, { useState, useEffect } from "react";
import { FcRight, FcLeft } from "react-icons/fc";
import topSearch from "../../public/json/slider.json";

import { useSwipeable } from "react-swipeable";

const SlideShow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerPage, setSlidesPerPage] = useState(1);
  const totalSlides = topSearch.length;

  useEffect(() => {
    const changeSlide = () => {
      const width = window.innerWidth;

      if (width < 985) {
        setSlidesPerPage(1);
      } else if (width >= 986 && width <= 1600) {
        setSlidesPerPage(2);
      } else if (width >= 1601) {
        setSlidesPerPage(3);
      }
    };

    changeSlide();
    window.addEventListener("resize", changeSlide);

    return () => window.removeEventListener("resize", changeSlide);
  }, []);

  const nextSlide = () => {
    if (currentIndex === totalSlides - slidesPerPage) {
      return setCurrentIndex(0);
    }
    const nextIndex = (currentIndex + 1) % totalSlides;
    setCurrentIndex(nextIndex);
  };

  const prevSlide = () => {
    if (currentIndex === 0) {
      return setCurrentIndex(totalSlides - slidesPerPage);
    }
    const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    setCurrentIndex(prevIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <>
      <div
        {...handlers}
        className="flex items-center justify-center gap-10 relative bg-mainBG py-16"
      >
        <button
          onClick={prevSlide}
          className="hidden md:flex text-5 md:text-[60px] sm:text-[30px]"
        >
          <FcLeft />
        </button>
        {topSearch
          .slice(currentIndex, currentIndex + slidesPerPage)
          .map((slide) => (
            <div
              key={slide.title}
              className="flex flex-col items-center  bg-bgBtm rounded-Btm pb-4"
            >
              <img
                src={slide.img}
                alt={slide.alt}
                className="lg:w-[343px] lg:h-[277px] px-3 pt-3 bg-bgBtm  rounded-Btm object-cover"
              />
              {/* <p className="text-whiteText lg:text-lgBtm">{slide.title}</p> */}
              <p className="text-whiteText lg:text-lgBtm lg:pt-3 pb-6">
                {slide.text}
              </p>
              <button className="px-20 py-2 bg-whiteText rounded-Btm lg:text-lgBtm">
                Замовити
              </button>
            </div>
          ))}

        <button
          onClick={nextSlide}
          className="hidden md:flex text-5 md:text-[60px] sm:text-[30px]"
        >
          <FcRight />
        </button>
      </div>

      <div className="flex justify-center items-center bg-mainBG ">
        {[...Array(Math.ceil(totalSlides / slidesPerPage)).keys()].map(
          (index) => (
            <div
              key={index}
              className={`w-1 desk:w-2 desk:h-2 h-1 rounded-full ${
                currentIndex / slidesPerPage === index
                  ? "bg-blue-500"
                  : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index * slidesPerPage)}
            />
          )
        )}
      </div>
    </>
  );
};

export default SlideShow;
