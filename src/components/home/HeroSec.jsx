import { Field, Form, Formik } from "formik";
import { FaRegCalendarAlt, FaRegUser, FaSearch } from "react-icons/fa";
import { PiMapPinSimpleAreaBold } from "react-icons/pi";
import additionalPayments from "../../constants/additionalPayments";
import logo from "../../assets/icons/logo2.png";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function HeroSec() {
  const arrivalDateRef = useRef();
  const departureDateRef = useRef();

  const filtersInitialValues = {
    arrivalDate: "",
    departureDate: "",
    numOfGuests: "",
    area: "",
  };

  return (
    <section className="bg-[url('/images/porto-main-img.webp')] bg-cover bg-center">
      {/*//! Overlay */}
      <div className="w-full h-full bg-black/30 pt-20 flex justify-center pb-10 ">
        {/*//! Container */}
        <div className="container flex flex-col items-center gap-0">
          {/*//* head title */}
          <div className="relative flex flex-col items-center gap-2">
            <h1 className="text-center z-2 text-white! font-bold text-2xl md:text-4xl max-w-120 leading-[130%] tracking-widest">
              شركة إطلالة للتسويق والاستثمار والتطوير العقاري
            </h1>
            <p className="text-center z-2 font-semibold text-md md:text-lg text-white! text-shadow-lg text-shadow-black/20">
              استمتع بإجازة لا تُنسى في بورتو مطروح شاليهات فاخرة - خدمات
              متكاملة - شاطئ خاص
            </p>
            <img
              className="absolute z-1 h-full top-0 left-1/2 -translate-x-1/2 opacity-40"
              src={logo}
              alt="icon-logo"
            />
          </div>
          {/*// Cta btn */}
          <div className="pt-5 z-2 flex justify-center gap-2 md:gap-3 w-full">
            <Link
              to="/chalets"
              className="btn px-0 flex-1 sm:w-40 rounded-lg text-white! bg-accent-500 border-none"
            >
              استعرض الشاليهات
            </Link>
            <Link
              to="/contact"
              className="btn px-0 flex-1 sm:w-40 rounded-lg bg-transparent text-accent-200! border-accent-200 text-shadow-lg text-shadow-black/70"
            >
              تواصل معنا
            </Link>
          </div>
          {/*//TODO>> Search filters () */}
          {/* CTA Card */}
          <div className="w-full mt-8 max-w-5xl p-2 rounded-xl bg-accent-900/30 backdrop-blur-xs overflow-hidden">
            {/* Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {additionalPayments.map(({ title, icon }) => (
                <div
                  key={title}
                  className="relative flex items-center justify-center aspect-video sm:aspect-auto sm:py-8 text-center sm:text-start rounded-lg bg-white/10 px-4 border border-white/10"
                >
                  <img
                    src={icon}
                    alt={title}
                    className="invert absolute bottom-1/2 right-1/2 translate-1/2 w-[90%] sm:w-4/5 h-[90%] sm:h-4/5 opacity-40 object-contain"
                  />

                  <span className="text-white! font-bold leading-[140%] text-base sm:text-lg text-shadow-md text-shadow-black/50">
                    {title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
