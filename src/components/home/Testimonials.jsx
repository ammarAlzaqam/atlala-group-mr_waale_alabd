import waveLineIcon from "../../assets/icons/decor/zigzag.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import testimonialsList, {
  testimonialsAdvList,
} from "../../constants/testimonials";

import { RiDoubleQuotesL } from "react-icons/ri";
import clsx from "clsx";
import { IoStar } from "react-icons/io5";
import { useState } from "react";

import mainLogo from "../../assets/icons/main-logo.jpg";
import transparentBgImg from "../../assets/images/testimonials/bottom-bg.png";
import transparentSmBgImg from "../../assets/images/testimonials/bottom-sm-bg.png";

export default function Testimonials() {
  return (
    <div className="relative flex justify-center py-12">
      <div className="container flex flex-col gap-6 sm:gap-12">
        {/*//? Head Title */}
        <div className="flex z-3 flex-col items-center gap-3">
          {/*//! title */}
          <div className="flex items-center gap-4">
            <img
              src={waveLineIcon}
              alt="wave-decor-icon"
              className="w-7 green-img-filter"
            />
            <h3 className="text-xl font-bold">آراء عملائنا</h3>
            <img
              src={waveLineIcon}
              alt="wave-decor-icon"
              className="w-7 green-img-filter"
            />
          </div>
          {/*//! subTitle */}
          <h2 className="text-3xl text-center font-bold">
            ما يقوله عملاؤنا عن إطلالة
          </h2>
          {/*//! des */}
          <p className="text-center max-w-md leading-[200%]">
            نفخر بثقة عملائنا ورضاهم عن تجربتهم معنا, إليكم بعض من آرائهم بعد
            قضاء أوقات مميزة في بورتو مطروح
          </p>
        </div>
        {/*//? Swiper */}
        <div className="relative z-3">
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
            }}
            speed={700}
            grabCursor
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1399: {
                slidesPerView: 4,
              },
            }}
            className="sm:mx-10! py-5! sm:px-3!"
          >
            {testimonialsList.map(({ img, name, city, userImg }, index) => (
              <SwiperSlide key={index}>
                {({ isActive }) => (
                  <div
                    className={clsx(
                      "bg-white shadow-lg shadow-primary-400/30 p-4 rounded-xl flex! flex-col! gap-4! transition-color duration-300 border",
                      isActive ? "border-primary-400" : "border-transparent",
                    )}
                  >
                    {/*//* quote and stars icons */}
                    <div className="flex items-end justify-between">
                      <div className="flex item-center gap-2">
                        {Array(5)
                          .fill(null)
                          .map((_, index) => (
                            <IoStar className="text-amber-400" />
                          ))}
                      </div>
                      <div
                        className={clsx(
                          "rounded-full p-2 transition-colors duration-300",
                          isActive ? "bg-primary-400" : "bg-primary-100/80",
                        )}
                      >
                        <RiDoubleQuotesL
                          className={clsx(
                            "text-2xl transition-colors duration-300",
                            isActive ? "text-white" : "text-primary-400",
                          )}
                        />
                      </div>
                    </div>
                    {/*//* Img */}
                    <img src={img} alt="testimonials-img" />
                    {/*//* Divider */}
                    <div className="w-full h-0.5 bg-secondary-300/30 rounded-[100%]" />
                    {/*//* Company Info */}
                    <div className="flex items-center gap-4">
                      <img
                        src={mainLogo}
                        alt="logo-img"
                        className="w-11 h-11 object-cover rounded-full"
                      />
                      <div className="flex flex-col gap-px">
                        <h3 className="text-lg text-primary-400! font-medium">
                          إطلالة العقارية
                        </h3>
                        <p className="text-xs">بورتو مطروح</p>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Previous */}
          <button
            onDoubleClick={(e) => e.stopPropagation()}
            className={clsx(
              ` swiper-next
                absolute left-0 top-1/2 z-10
                flex h-10 w-10 -translate-y-1/2
                items-center justify-center
                rounded-full sm:bg-white shadow-lg
                transition hover:scale-110
              `,
            )}
          >
            <FaChevronLeft />
          </button>

          {/* Next */}
          <button
            onDoubleClick={(e) => e.stopPropagation()}
            className={clsx(
              `
          swiper-prev
          absolute right-0 top-1/2 z-10
          flex h-10 w-10 -translate-y-1/2
          items-center justify-center
          rounded-full sm:bg-white shadow-lg
          transition-all hover:scale-110
        `,
            )}
          >
            <FaChevronRight />
          </button>
        </div>
        {/*//? adv */}
        <div className="relative rounded-3xl shadow z-3 px-4 py-8 md:p-10 pt-6 grid grid-cols-2 md:grid-cols-4 gap-6 bg-white">
          {testimonialsAdvList.map(({ title, label, des, icon }) => (
            <div className="flex flex-col md:flex-row items-center md:justify-center gap-4 md:gap-6">
              <img
                src={icon}
                alt="adv-icon"
                className="w-10 green-img-filter"
              />
              <div className="flex flex-col items-center text-center gap-1">
                <h3 className="font-semibold text-lg whitespace-nowrap">
                  {title}
                </h3>
                <p className="text-sm">{des}</p>
              </div>
            </div>
          ))}
          <div className="absolute right-0 md:right-1/4 bottom-1/2 h-px md:h-[30%] w-1/3 md:w-px translate-y-1/2 -translate-x-1/4 md:translate-x-3/4 bg-secondary-500/30" />
          <div className="absolute right-1/2 top-0 md:top-auto sm:bottom-1/2 h-[31%] md:h-[30%] w-px translate-y-1/3 sm:translate-y-1/2 translate-x-1/2 bg-secondary-500/30" />
          <div className="absolute right-1/2 bottom-0 md:hidden h-[31%] md:h-[30%] w-px -translate-y-1/3 sm:translate-y-1/2 translate-x-1/2 bg-secondary-500/30" />
          <div className="absolute left-0 md:left-auto md:right-3/4 bottom-1/2 h-px md:h-[30%] w-1/3 md:w-px translate-y-1/2 translate-x-1/4 md:translate-x-3/4 bg-secondary-500/30" />
        </div>
      </div>
      <img
        src={transparentBgImg}
        alt="see-bg-img"
        className="absolute hidden sm:block z-1 bottom-0 left-0 w-full opacity-50"
      />
      <img
        src={transparentSmBgImg}
        alt="see-bg-img"
        className="absolute sm:hidden z-1 bottom-0 left-0 w-full h-450 object-cover opacity-50"
      />
      <div className="absolute z-2 bottom-0 left-0 w-full h-20 sm:h-50 bg-linear-to-t from-white to-transparent" />
    </div>
  );
}
