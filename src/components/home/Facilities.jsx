import waveLineIcon from "../../assets/icons/decor/zigzag.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight, FaEye, FaStar } from "react-icons/fa";
import testimonialsList, {
  testimonialsAdvList,
} from "../../constants/testimonials";

import { RiDoubleQuotesL } from "react-icons/ri";
import clsx from "clsx";
import { IoStar } from "react-icons/io5";
import { useState } from "react";

import mainLogo from "../../assets/icons/main-logo.jpg";
import transparentBgImg from "../../assets/images/facilities/bg.png";
import transparentSmBgImg from "../../assets/images/facilities/bg.png";
import facilities, { facilitiesAdvList } from "../../constants/facilities";
import { Link } from "react-router-dom";

export default function Facilities() {
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
            <h3 className="text-xl font-bold">مرافقنا وخدماتنا</h3>
            <img
              src={waveLineIcon}
              alt="wave-decor-icon"
              className="w-7 green-img-filter"
            />
          </div>
          {/*//! subTitle */}
          <h2 className="text-3xl text-center font-bold">
            كل ما تحتاجه داخل بورتو مطروح
          </h2>
          {/*//! des */}
          <p className="text-center max-w-md leading-[200%]">
            استمتع يتجربة متكاملة من المراقق والخدمات المصممة لتمنحك الراحة
            والترفيه على مدار اليوم
          </p>
          <Link
            to="/services"
            className="btn bg-accent-500 text-white! w-[90%] max-w-xs"
          >
            <FaEye />
            عرض كل الخدمات
          </Link>
        </div>
        {/*//? Swiper */}
        <div className="relative z-3">
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            autoplay={{
              delay: 3000,
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
                slidesPerView: 4,
              },
              1540: {
                slidesPerView: 6,
              },
            }}
            className="facilities-swiper sm:mx-10! py-5! sm:px-3!"
          >
            {facilities.map(
              (
                { images, label, title, des, price, availability, icon },
                index,
              ) => (
                <SwiperSlide key={index}>
                  {({ isActive }) => (
                    <div
                      className={clsx(
                        "bg-white rounded-xl flex! flex-col! transition-color duration-300 shadow-lg",
                      )}
                    >
                      {/* coverImg and icon */}
                      <div className="relative">
                        <img
                          src={images[0]}
                          alt="facility-img"
                          className={clsx(
                            "w-full h-70 sm:h-55 object-cover rounded-xl transition-all duration-300",
                            !isActive && "brightness-70",
                          )}
                        />
                        <div className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 bg-white p-3 shadow-lg rounded-full">
                          <img
                            src={icon}
                            alt="facility-icon"
                            className={clsx(
                              "w-10 h-10 object-contain transition-all duration-300",
                              isActive ? "green-img-filter" : "opacity-70",
                            )}
                          />
                        </div>
                      </div>
                      {/* Details */}
                      <div
                        className={clsx(
                          "flex-1 flex flex-col items-center text-center gap-10 justify-between p-5 pt-11 transition-opacity duration-300",
                          !isActive && "opacity-70",
                        )}
                      >
                        {/* Des, title */}
                        <div className="flex flex-col items-center gap-4">
                          <h3 className="font-semibold">{title}</h3>
                          <p className="">{des}</p>
                        </div>
                        {/* price, availability, button */}
                        <div className="flex w-full flex-col items-center gap-4">
                          <h5 className="text-accent-500! font-semibold">
                            {price}
                          </h5>
                          <div className="p-2 w-full bg-primary-200/30 rounded-xl text-center">
                            <h5 className="text-primary-500!">
                              {availability}
                            </h5>
                          </div>
                          <Link
                            to={`/services/${label}`}
                            className="btn w-full bg-transparent border-transparent text-secondary-600 gap-3"
                          >
                            <FaEye />
                            عرض التفاصيل
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              ),
            )}
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
        <div className="relative rounded-3xl shadow z-3 px-4 py-8 md:p-10 pt-6 grid grid-cols-2 md:grid-cols-4 gap-6 bg-white w-full xl:max-w-10/12 xl:mx-auto">
          {facilitiesAdvList.map(({ title, label, des, icon }) => (
            <div
              key={label}
              className="flex flex-col md:flex-row items-center md:justify-center gap-4 md:gap-6"
            >
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
          <div className="absolute right-1/2 bottom-0 md:hidden h-[31%] md:h-[30%] w-px -translate-y-1/3 translate-x-1/2 bg-secondary-500/30" />
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
        className="absolute sm:hidden z-1 bottom-0 left-0 w-full h-145 object-cover object-right opacity-50"
      />
      <div className="absolute z-2 bottom-0 left-0 w-full h-20 sm:h-50 bg-linear-to-t from-[#f4f9fa] to-transparent" />
    </div>
  );
}
