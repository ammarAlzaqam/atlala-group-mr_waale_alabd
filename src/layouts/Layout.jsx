import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import chaletsList from "../constants/chalets";
import toast from "react-hot-toast";
import ChaletCard from "../components/ChaletCard";
import { useFastSearch, useIsScrolled } from "../store";
import { MdElectricBolt } from "react-icons/md";
import { toastInfo } from "../utils/toast";
import { mediaLinks } from "../constants/social";
import { IoIosArrowUp } from "react-icons/io";

export default function Layout() {
  const fastSearch = useFastSearch((state) => state.fastSearch);
  const setFastSearch = useFastSearch((state) => state.setFastSearch);

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const isScrolled = useIsScrolled((state) => state.isScrolled);

  const location = useLocation();
  const navigate = useNavigate();

  const searchRef = useRef(null);

  const handelSearch = () => {
    const value = search.trim();

    if (chaletsList.some((ch) => String(ch.num) === value)) {
      setOpen(false);
      setSearch("");

      navigate(`/chalets/${value}`);
    } else {
      toast.error("عذرًا، لا يوجد شاليه بهذا الرقم.");
    }
  };

  useEffect(() => {
    scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    if (!open) return;

    const body = document.body;

    body.style.height = "100dvh";
    body.style.overflow = "hidden";

    return () => {
      body.style.height = "";
      body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {
    let startX = 0;
    let startY = 0;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;

      const diffX = endX - startX;
      const diffY = endY - startY;

      // لازم تكون الحركة أفقية بوضوح
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 80 && !open) {
        setOpen(true);
      }
    };

    const handleOpenSearchModal = () => !open && setOpen(true);

    addEventListener("touchstart", handleTouchStart);
    addEventListener("touchend", handleTouchEnd);
    addEventListener("dblclick", handleOpenSearchModal);

    return () => {
      removeEventListener("touchstart", handleTouchStart);
      removeEventListener("touchend", handleTouchEnd);
      removeEventListener("dblclick", handleOpenSearchModal);
    };
  }, []);

  const setIsScrolled = useIsScrolled((state) => state.setIsScrolled);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(scrollY > 20);
    };

    addEventListener("scroll", handleScroll);

    return () => removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    open && searchRef?.current?.focus();
  }, [open]);

  return (
    <div className="bg-main-bg">
      <Outlet />

      {/*//* fixed icons (favorites & whatsapp) */}
      <div className={clsx("fixed z-30 bottom-5 right-5 flex flex-col")}>
        {/*//! >> Search link */}
        <div
          onClick={() => setOpen(true)}
          className={clsx(
            "bg-primary-500 p-2 rounded-full shadow-lg hover:shadow-primary-500/50 transition-all delay-100 duration-300 hover:bg-primary-600 cursor-pointer group backdrop-blur-[2px]",
            isScrolled && "-translate-y-2",
          )}
        >
          <IoSearch
            className={clsx(
              "text-2xl text-white group-hover:scale-110 transition-transform duration-300",
            )}
          />
        </div>
        {/*//! >> up button */}
        <button
          onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
          className={clsx(
            "h-10 w-10 flex justify-center items-center bg-accent-600 rounded-full shadow-lg hover:shadow-accent-600/50 transition-all duration-300 hover:bg-accent-600/80 cursor-pointer group backdrop-blur-[2px] overflow-hidden",
            isScrolled ? "max-h-200" : "max-h-0 opacity-0 scale-50",
          )}
        >
          <IoIosArrowUp
            className={clsx(
              "text-2xl text-white group-hover:scale-110 transition-transform duration-300",
            )}
          />
        </button>
      </div>
      {/*//* fixed Search input */}
      <div
        onClick={() => {
          setSearch("");
          setOpen(false);
        }}
        className={clsx(
          "fixed z-1000 top-0 right-0 pt-8 w-full h-dvh bg-black/70 backdrop-blur-sm flex flex-col justify-center items-center gap-8 transition-all duration-300",
          open ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={clsx(
            "w-170 max-w-[90%] flex flex-col gap-4 overflow-hidden bg-white rounded-2xl shadow-2xl px-5 py-6 transition-all duration-300",
            open ? "translate-y-0 scale-100" : "-translate-y-10 scale-95",
          )}
        >
          <label className="relative border border-gray-200 bg-gray-50 px-4 py-3 flex items-center gap-3 rounded-xl w-full transition-all duration-200 focus-within:border-cyan-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-cyan-500/20">
            <svg
              className="h-5 w-5 shrink-0 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="number"
              list="chNums"
              id="search"
              ref={searchRef}
              value={search}
              disabled={!open}
              onChange={(e) => {
                setSearch(e.target.value);

                const value = e.target.value.trim();
                if (
                  fastSearch &&
                  chaletsList.some((ch) => String(ch.num) === value)
                ) {
                  setOpen(false);
                  setSearch("");
                  navigate(`/chalets/${value}`);
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handelSearch();
                }
              }}
              className="w-full grow bg-transparent outline-none border-none text-gray-800 placeholder:text-gray-400"
              placeholder="أدخل رقم الشالية..."
            />
            <datalist id="chNums">
              {chaletsList.map(({ num }) => (
                <option key={num} value={num} />
              ))}
            </datalist>
            {/* Fast search button */}
            <div
              onClick={() => {
                fastSearch
                  ? toastInfo("تم ايقاف وضع البحث السريع بنجاح")
                  : toast.success("تم تفعيل وضع البحث السريع بنجاح");
                setFastSearch(!fastSearch);
              }}
              className={clsx(
                "absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 p-1.5 rounded-full transition-all duration-300 cursor-pointer",
                fastSearch
                  ? "bg-linear-to-br from-yellow-300 to-amber-500 shadow-md shadow-amber-400/50 text-white"
                  : "bg-black/15 text-secondary-500 hover:bg-white",
              )}
            >
              <MdElectricBolt
                className={clsx(
                  "transition-all duration-300",
                  fastSearch
                    ? "text-white scale-110 rotate-12 animate-pulse"
                    : "text-black/70",
                )}
              />
            </div>
          </label>
          <div
            onClick={handelSearch}
            className="btn flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 active:scale-[0.98] text-white! border-none text-lg font-head rounded-xl py-3 cursor-pointer transition-all duration-200 shadow-lg shadow-cyan-500/25"
          >
            <IoSearch className="text-white!" />
            بحث
          </div>
        </div>
      </div>
    </div>
  );
}
