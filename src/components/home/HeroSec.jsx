import { Field, Form, Formik } from "formik";
import { FaRegCalendarAlt, FaRegUser, FaSearch } from "react-icons/fa";
import { PiMapPinSimpleAreaBold } from "react-icons/pi";
import additionalPayments from "../../constants/additionalPayments";
import logo from "../../assets/icons/logo2.png";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { clsx } from "clsx";
import { getTodayString } from "../../utils/dateHelpers";
import { IoSearch } from "react-icons/io5";
import { GoPeople } from "react-icons/go";

export default function HeroSec() {
  const calendarArriveRef = useRef();
  const calendarLiveRef = useRef();

  const [arriveDate, setArriveDate] = useState("");
  const [liveDate, setLiveDate] = useState("");
  const [nofPeople, setNofPeople] = useState("");

  return (
    <section className="bg-[url('/images/main-herosec.png')] bg-cover bg-center">
      {/*//! Overlay */}
      <div className="w-full h-full bg-black/50 pt-20 flex justify-center pb-10 ">
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
          <div className="pt-5 z-2 flex justify-center gap-2 md:gap-3 w-full max-w-140">
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
          {/* form */}
          <div className="flex w-full max-w-250 flex-col rounded-xl overflow-hidden mt-6">
            <form
              id="filter-form"
              className="flex items-end gap-2 bg-white pt-4 pb-6 px-4 *:flex-1"
            >
              {/*//* Filter by date */}
              {/* arrival date */}
              <div className="relative sm:w-auto flex flex-col gap-1.5">
                <label
                  htmlFor="arrival"
                  className="font-bold font-head! text-neutral-800!"
                >
                  تاريخ الوصول
                </label>
                <div className="relative">
                  <DatePicker
                    id="arrive-date"
                    date={arriveDate}
                    setDate={setArriveDate}
                    calendarRef={calendarArriveRef}
                    arriveDate={arriveDate}
                    liveDate={liveDate}
                  />
                  <FaRegCalendarAlt
                    className={clsx(
                      "absolute pointer-events-none bottom-1/2 right-1.5 translate-y-1/2 cursor-pointer transition-colors duration-300",
                      arriveDate ? "text-primary-500!" : "text-secondary-500!",
                    )}
                  />
                </div>
              </div>
              {/* departure date */}
              <div className="relative sm:w-auto flex flex-col gap-1.5">
                <label
                  htmlFor="live-date"
                  className="font-bold font-head! text-neutral-800!"
                >
                  تاريخ المغادرة
                </label>
                <div className="relative">
                  <DatePicker
                    id="live-date"
                    date={liveDate}
                    setDate={setLiveDate}
                    calendarRef={calendarLiveRef}
                    arriveDate={arriveDate}
                    liveDate={liveDate}
                  />
                  <FaRegCalendarAlt
                    className={clsx(
                      "absolute pointer-events-none bottom-1/2 right-1.5 translate-y-1/2 cursor-pointer transition-colors duration-300",
                      liveDate ? "text-primary-500!" : "text-secondary-500!",
                    )}
                  />
                </div>
              </div>
              {/* nofPeople  */}
              <label htmlFor="nofPeople" className="flex flex-col gap-1.5">
                <span className="font-bold font-head! text-neutral-800!">
                  عدد الضيوف
                </span>
                <div className="relative">
                  <input
                    value={nofPeople}
                    onChange={(e) => setNofPeople(e.target.value)}
                    type="number"
                    id="nofPeople"
                    className="input pr-7 "
                    placeholder="اختر العدد"
                  />
                  <GoPeople
                    className={clsx(
                      "absolute pointer-events-none bottom-1/2 right-1.5 translate-y-1/2 cursor-pointer transition-colors duration-300",
                      liveDate ? "text-primary-500!" : "text-secondary-500!",
                    )}
                  />
                </div>
              </label>
              {/* submit btn */}
              <button className="btn flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 active:scale-[0.98] text-white! border-none text-lg font-head rounded-xl py-3 cursor-pointer transition-all duration-300 shadow-lg shadow-cyan-500/25">
                <IoSearch className="text-white!" />
                بحث
              </button>
            </form>
          </div>
          {/* CTA Card */}
          <div className="w-full mt-8 max-w-5xl p-px rounded-2xl bg-linear-to-b from-white/20 via-white/5 to-transparent">
            <div className="rounded-2xl bg-accent-950/40 backdrop-blur-sm overflow-hidden p-3 sm:p-4">
              {/* Features */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                {additionalPayments.map(({ title, icon }) => (
                  <div
                    key={title}
                    className="group relative flex items-center justify-center aspect-video sm:aspect-auto sm:py-9 text-center sm:text-start rounded-xl bg-white/5 px-4 border border-white/10 overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5"
                  >
                    <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <img
                      src={icon}
                      alt={title}
                      className="invert absolute bottom-1/2 right-1/2 translate-1/2 w-[85%] sm:w-3/4 h-[85%] sm:h-3/4 opacity-[0.15] group-hover:opacity-25 object-contain transition-opacity duration-300"
                    />

                    <span className="relative z-10 text-white! font-bold leading-[140%] text-base sm:text-lg tracking-tight text-shadow-md text-shadow-black/50">
                      {title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DatePicker({ date, setDate, calendarRef, id, arriveDate, liveDate }) {
  const popoverRef = useRef();
  const today = getTodayString();

  useEffect(() => {
    const calendar = calendarRef.current;

    const handleChange = () => {
      setDate(calendar.value);

      requestAnimationFrame(() => {
        popoverRef.current?.hidePopover();
      });
    };

    calendar.addEventListener("change", handleChange);

    return () => {
      calendar.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <>
      <button
        popoverTarget={id}
        type="button"
        className={clsx(
          "input pr-7",
          date ? "text-primary-500!" : "text-secondary-500!",
        )}
        style={{ anchorName: `--${id}` }}
      >
        {date || "اختر التاريخ"}
      </button>

      <div
        id={id}
        ref={popoverRef}
        popover="auto"
        className="dropdown bg-base-100 rounded-box shadow-lg"
        style={{ positionAnchor: `--${id}` }}
      >
        <calendar-date
          ref={calendarRef}
          class="cally"
          min={id === "arrive-date" ? today : arriveDate || today}
          max={id === "live-date" ? undefined : liveDate || undefined}
        >
          <calendar-month />
        </calendar-date>
      </div>
    </>
  );
}
