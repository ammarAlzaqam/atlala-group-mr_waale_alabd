import { Field, Form, Formik } from "formik";
import { FaRegCalendarAlt, FaRegUser, FaSearch } from "react-icons/fa";
import { PiMapPinSimpleAreaBold } from "react-icons/pi";
import additionalPayments from "../../constants/additionalPayments";
import logo from "../../assets/icons/logo-icon.png";
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
        <div className="container flex flex-col items-center gap-8">
          {/*//* head title */}
          <div className="relative flex flex-col items-center gap-2">
            <h1 className="text-center z-2 text-white! font-bold text-2xl md:text-4xl max-w-120 leading-[130%] tracking-widest">
              شركة إطلالة للتسويق والاستثمار والتطوير العقاري
            </h1>
            <p className="text-center z-2 font-semibold text-md md:text-lg text-white/90! text-shadow-xs text-shadow-accent-500">
              استمتع بإجازة لا تُنسى في بورتو مطروح شاليهات فاخرة - خدمات
              متكاملة - شاطئ خاص
            </p>
            {/*// Cta btn */}
            <div className="pt-2 z-2 flex justify-center gap-2 md:gap-3 w-full">
              <Link
                to="/chalets"
                className="btn px-0 w-[50%] sm:w-40 rounded-lg text-white! bg-accent-500 border-none"
              >
                استعرض الشاليهات
              </Link>
              <Link
                to="/contact"
                className="btn px-0 w-[50%] sm:w-40 rounded-lg bg-transparent text-accent-200! border-accent-200 text-shadow-lg text-shadow-black-50"
              >
                تواصل معنا
              </Link>
            </div>
            <img
              className="absolute z-1 h-full top-0 left-1/2 -translate-x-1/2 opacity-40"
              src={logo}
              alt="icon-logo"
            />
          </div>
          {/*//TODO>> Search filters () */}
          <div className="flex flex-col">
            <Formik>
              <Form className="relative bg-[#FEFEFF]/30 backdrop-blur-xs py-4 px-6 sm:px-8 rounded-t-2xl flex flex-wrap justify-center items-end gap-2 sm:gap-4">
                {/* arrival date */}
                <div className="relative w-full sm:w-auto flex flex-col gap-1.5">
                  <label htmlFor="arrival" className="font-bold text-white!">
                    تاريخ الوصول
                  </label>
                  <Field
                    innerRef={arrivalDateRef}
                    name="arrivalDate"
                    type="date"
                    id="arrival"
                    className="input w-full md:w-40 h-12 focus:outline-none rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] px-4 transition-colors focus:border-accent-500"
                  />
                  <FaRegCalendarAlt
                    onClick={() => arrivalDateRef.current?.showPicker()}
                    className="absolute bottom-4 right-4 text-primary-500 cursor-pointer"
                  />
                </div>
                {/* departure date */}
                <div className="relative w-full sm:w-auto flex flex-col gap-1.5">
                  <label htmlFor="departure" className="font-bold text-white!">
                    تاريخ المغادرة
                  </label>
                  <Field
                    name="departureDate"
                    type="date"
                    id="departure"
                    innerRef={departureDateRef}
                    className="input w-full md:w-40 h-12 focus:outline-none rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] px-4 transition-colors focus:border-accent-500"
                  />
                  <FaRegCalendarAlt
                    onClick={() => departureDateRef.current?.showPicker()}
                    className="absolute bottom-4 right-4 text-primary-500 cursor-pointer"
                  />
                </div>
                {/* num of guests */}
                <div className="relative w-full md:w-auto flex flex-col gap-1.5">
                  <label
                    htmlFor="numOfGuests"
                    className="font-bold text-white!"
                  >
                    عدد الضيوف
                  </label>
                  <Field
                    name="numOfGuests"
                    placeholder="اختر العدد"
                    type="number"
                    id="numOfGuests"
                    className="input w-full md:w-40 h-12 focus:outline-none rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] pl-4 pr-10 transition-colors focus:border-accent-500 scheme-light placeholder:text-secondary-700"
                  />
                  <FaRegUser className="absolute bottom-4 right-4 text-primary-500" />
                </div>
                {/* area */}
                <div className="relative w-full md:w-auto flex flex-col gap-1.5">
                  <label htmlFor="area" className="font-bold text-white!">
                    مساحة الشاليه
                  </label>
                  <Field
                    as="select"
                    name="area"
                    id="area"
                    className="select w-full md:w-40 h-12 appearance-none rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] pl-4 pr-10 focus:outline-none focus:border-accent-500"
                  >
                    <option value="">اختر المساحة</option>
                    <option value="48">48 م²</option>
                    <option value="75">75 م²</option>
                    <option value="140">140 م²</option>
                  </Field>
                  <PiMapPinSimpleAreaBold className="absolute bottom-4 right-4 text-primary-500" />
                </div>
                <button className="w-full md:w-40 btn h-11 rounded-xl light bg-accent-500 mt-5 sm:mt-0 border-none shadow shadow-primary-500/50">
                  <FaSearch className="text-lg" />
                  <span className="font-bold text-lg">بحث</span>
                </button>
              </Form>
            </Formik>
            {/* additional payments */}
            <div className="bg-[#faf4ed]/20 px-6 sm:px-8 py-5 flex flex-wrap justify-center gap-5 rounded-b-2xl backdrop-blur-xs">
              {additionalPayments.map(({ title, icon }) => (
                <div
                  key={title}
                  className="flex items-center gap-1.5 text-center w-full sm:w-[calc(50%-12px)] md:w-auto"
                >
                  <img
                    className="w-5 md:w-6 invert-100"
                    src={icon}
                    alt="icon"
                  />
                  <p className="text-white! font-semibold w-fit">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
