import chaletsList from "../constants/chalets";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import selectIcon from "../assets/icons/chalets/details/select.png";

export default function ChaletDetailsPage() {
  const { chaletNum } = useParams();
  const [chalet, setChalet] = useState({});
  const [imgIndex, setImgIndex] = useState(0);
  const thumbsRef = useRef([]);
  const containerRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    let chaletData = chaletsList.find((ch) => ch.num == chaletNum);
    setChalet(chaletData);

    if (!chaletData) {
      toast.error(`الشاليه ${chaletNum}# غير موجود`);
      navigate("/chalets");
    }
  }, [chaletNum, navigate]);

  const handleImgSwiper = (type) => {
    if (type === "increase") {
      if (imgIndex + 1 < chalet?.chaletImages?.length) {
        setImgIndex(imgIndex + 1);
      } else {
        setImgIndex(0);
      }
    } else if (type === "decrease") {
      if (imgIndex > 0) {
        setImgIndex(imgIndex - 1);
      } else {
        setImgIndex(chalet?.chaletImages.length - 1);
      }
    }
  };

  useEffect(() => {
    const current = thumbsRef.current[imgIndex];

    if (current && containerRef.current) {
      containerRef.current.scrollTo({
        left:
          current.offsetLeft -
          containerRef.current.clientWidth / 3 +
          current.clientWidth / 3,
        behavior: "smooth",
      });
    }
  }, [imgIndex]);

  return (
    <div className="min-h-dvh flex flex-col bg-primary-800">
      <ChHeroSec />
      <div className="flex justify-center -mt-5 pb-20">
        <div className="container">
          <div className="grid grid-cols-5 gap-4">
            {/*//! Chalet images */}
            <div className="col-span-5 md:col-span-3 rounded-2xl flex flex-col gap-2">
              {/*//* Chalet display Img */}
              <div className="relative w-full aspect-5/4 md:aspect-video rounded-2xl">
                <div
                  onClick={() => handleImgSwiper("decrease")}
                  className={clsx(
                    "absolute z-10 bottom-1/2 right-2 translate-y-1/2 rounded-full p-2 transition-opacity duration-300 group bg-linear-to-t from-primary-600 via-20% via-primary-700 to-70% to-primary-800 cursor-pointer hover:opacity-85",
                  )}
                >
                  <IoIosArrowForward className="text-lg md:text-2xl text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:scale-105" />
                </div>
                {chalet?.chaletImages?.map((chImg, index) => (
                  <img
                    src={chImg}
                    key={index}
                    alt="chalet-details-img"
                    className={clsx(
                      "absolute z-2 top-0 right-0 w-full h-full object-cover rounded-2xl transition-all",
                      imgIndex === index
                        ? "opacity-100 duration-200"
                        : "opacity-0 -translate-15 -rotate-10 duration-300",
                    )}
                  />
                ))}
                <div
                  onClick={() => handleImgSwiper("increase")}
                  className="absolute z-10 bottom-1/2 left-2 translate-y-1/2 rounded-full p-2 transition-opacity duration-300 group bg-linear-to-t from-primary-600 via-20% via-primary-700 to-70% to-primary-800 cursor-pointer hover:opacity-85"
                >
                  <IoIosArrowBack className="text-lg md:text-2xl text-white transition-all duration-300 group-hover:-translate-x-0.5 group-hover:scale-105" />
                </div>
              </div>
              {/*//* Chalet images List */}
              <div
                ref={containerRef}
                className="relative w-full flex overflow-auto scrollbar-none gap-2 p-1"
              >
                {chalet?.chaletImages?.map((chImg, index) => (
                  <div
                    key={index}
                    ref={(el) => (thumbsRef.current[index] = el)}
                    className={clsx(
                      "rounded-xl relative w-[calc(25%-6px)] shrink-0 transition-all duration-300 outline-2 outline-offset-1 outline-transparent shadow-lg shadow-transparent",
                      index !== imgIndex &&
                        "cursor-pointer hover:outline-white! hover:shadow-primary-500!",
                    )}
                    onClick={() => setImgIndex(index)}
                  >
                    <img
                      src={chImg}
                      alt="chalet-details-img"
                      className={clsx(
                        "w-full aspect-5/4 md:aspect-video object-cover rounded-xl",
                      )}
                    />
                    <div
                      className={clsx(
                        "absolute top-0 left-0 w-full h-full border-2 border-white rounded-xl flex items-center justify-center bg-linear-to-b from-primary-700/50 via-primary-500/50 to-black/50 transition-opacity",
                        imgIndex === index
                          ? "opacity-100 duration-300"
                          : "opacity-0 duration-100",
                      )}
                    >
                      <img
                        className="h-6/10 invert-100 opacity-90"
                        src={selectIcon}
                        alt="select-icon"
                      />
                    </div>
                  </div>
                ))}
                <div
                  className={clsx(
                    "top-0 left-0 z-100 rounded-xl aspect-video w-[calc(25%-6px)] shrink-0 bg-black/40 pointer-events-none flex items-center justify-center transition-opacity",
                    chalet?.chaletImages?.length <= 4 ||
                      imgIndex + 2 >= chalet?.chaletImages?.length
                      ? "opacity-0 duration-0 absolute"
                      : "sticky duration-700",
                  )}
                >
                  <p className="text-white! text-2xl text-shadow-lg text-shadow-black/80">
                    {imgIndex > 2
                      ? chalet?.chaletImages?.length - (imgIndex + 2)
                      : chalet?.chaletImages?.length - 4}
                    +
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { MdOutlineArrowBackIos } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import logo from "../assets/icons/logo2.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import clsx from "clsx";
import { PiWarehouse } from "react-icons/pi";
import { useEffect, useMemo, useRef, useState } from "react";
import chDetailsIcon from "../assets/icons/chalets/details/main.png";

function ChHeroSec() {
  return (
    <div className="flex justify-center pt-17 pb-22 bg-[linear-gradient(to_top,#00344c_0%,#00344c60_35%,rgba(0,0,0,0.15)70%,rgba(0,0,0,0.35)100%),url('/images/chaletHeroSec.png')] bg-right bg-move bg-cover">
      <div className="container flex flex-col items-center text-center">
        <img src={logo} alt="logo-icon" className="w-40" />
        <div className="flex flex-col items-center text-center gap-2">
          <h1
            className="text-4xl sm:text-5xl font-black bg-clip-text text-transparent! leading-[120%] drop-shadow-[0_2px_12px_rgba(255,255,255,.15)]"
            style={{
              backgroundImage: `
                linear-gradient(
                  180deg,
                  #ffffff 0%,
                  #faf7ef 25%,
                  #ecd3a0 60%,
                  #cca763 100%
                )
              `,
            }}
          >
            تفاصيل الشاليه
          </h1>
          <p className="text-sm sm:text-[16px] font-bold text-white/90!">
            استعرض جميع تفاصيل الشاليه، الصور والمرافق والأسعار قبل الحجز
          </p>
        </div>
        <div className="flex items-center gap-2 mt-6">
          <Link
            className="text-sm sm:text-lg font-semibold text-white/80! transition-colors duration-300 hover:text-accent-500!"
            to="/"
          >
            الرئيسية
          </Link>
          <IoIosArrowBack className="text-accent-500" />
          <Link
            className="text-sm sm:text-lg font-semibold text-white/80! transition-colors duration-300 hover:text-accent-500!"
            to="/chalets"
          >
            الشاليهات
          </Link>
          <IoIosArrowBack className="text-accent-500" />
          <div className="flex items-center gap-1">
            <img
              src={chDetailsIcon}
              alt="chalet-details-icon"
              className="w-6 invert-100"
            />
            <p className="text-sm sm:text-lg font-semibold text-white! text-shadow-lg text-shadow-white/20">
              تفاصيل الشاليه
            </p>
          </div>
        </div>
      </div>
      {/*//* fixed icon (chalets page) */}
      <Link
        to="/chalets"
        className={clsx(
          "fixed z-30 bottom-17 right-5 bg-primary-500 p-2 rounded-full shadow-lg hover:shadow-primary-500/50 transition-all duration-300 hover:bg-primary-500/80 cursor-pointer group backdrop-blur-[2px]",
        )}
      >
        <PiWarehouse
          className={clsx(
            "text-2xl text-white group-hover:scale-110 transition-transform duration-300",
          )}
        />
      </Link>
    </div>
  );
}
