import { MdFavorite } from "react-icons/md";
import clsx from "clsx";
import { FaArrowLeft, FaRegHeart, FaRegHourglass } from "react-icons/fa";
import { IoMdArrowBack, IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { useAdv, useFavorites, useSheetChaletsList } from "../store";
import { useEffect, useMemo, useState } from "react";
import { tags } from "../constants/chalets";
import { getMonthName, getNumOfDays } from "../utils/dateHelpers";
import distinctIcon from "../assets/icons/classification/distinct.png";

export default function ChaletCard({ ch }) {
  const [sheetChaletData, setSheetChaletData] = useState(null);
  const [sheetChaletDataNextM, setSheetChaletDataNextM] = useState(null);
  const favorites = useFavorites((state) => state.favorites);
  const toggleFavorites = useFavorites((state) => state.toggleFavorites);

  const adv = useAdv((state) => state.adv);

  const sheetChaletList = useSheetChaletsList((state) => state.sheetChaletList);

  const currDay = new Date().getDate();

  useEffect(() => {
    const date = new Date();
    const currentMonth = date.getMonth() + 1;
    if (sheetChaletList?.[`m${currentMonth}`]) {
      setSheetChaletData(sheetChaletList[`m${currentMonth}`][ch?.num]);
      setSheetChaletDataNextM(sheetChaletList[`m${currentMonth + 1}`][ch?.num]);
    }
  }, [sheetChaletList]);

  const validData = sheetChaletData?.validFromToDay?.data ?? [];

  const firstValid = validData[0];
  const lastValid = validData.at(-1);
  return (
    <div className="bg-white border border-secondary-500/15 shadow-lg rounded-2xl overflow-hidden transition-transform group duration-700 hover:-translate-y-2">
      <div className="flex flex-col gap-4 h-full">
        {/*//! imgs and absolute view, favIcon, price and distinctIcon */}
        <div className="relative h-72 overflow-hidden">
          <img
            src={ch?.chaletImages?.[0]}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            alt="chalet-cover-img"
          />
          {/* view & isValid */}
          <div className="absolute top-3 right-3 flex flex-wrap *:shrink-0 gap-2">
            {/*// is valid tag */}
            {sheetChaletData ? (
              <div
                className={clsx(
                  `text-sm rounded-full px-4 py-1 transition-opacity duration-300 group cursor-pointer hover:opacity-85 flex items-center gap-1`,
                  sheetChaletData?.validList?.length > 0 &&
                    sheetChaletData?.validList[0].from?.d === currDay
                    ? tags.available.color
                    : tags.reserved.color,
                )}
              >
                <img
                  src={
                    sheetChaletData?.validList?.length > 0 &&
                    sheetChaletData?.validList[0].from?.d === currDay
                      ? tags.available.icon
                      : tags.reserved.icon
                  }
                  className="w-4 invert-100"
                />
                {sheetChaletData?.validList?.length > 0 &&
                sheetChaletData?.validList[0].from?.d === currDay
                  ? tags.available.name
                  : tags.reserved.name}
              </div>
            ) : (
              <div className="rounded-full w-22 h-8 skeleton" />
            )}
            {ch?.view?.map(({ name, label, color, icon }) => (
              <div
                key={name}
                className={`px-3 py-1.5 rounded-full text-xs font-bold ${color} flex items-center gap-1`}
              >
                <img className="w-4 invert-100" src={icon} />
                {name}
              </div>
            ))}
          </div>
          {/* favorite */}
          <div
            className={clsx(
              "absolute top-3 left-3 p-2 rounded-full backdrop-blur-sm cursor-pointer group/icon transition-colors duration-300",
              favorites.some((el) => el.num === ch?.num)
                ? "bg-red-600/80 hover:bg-red-600/60"
                : "bg-secondary-100/50",
            )}
            onClick={() => toggleFavorites(ch)}
          >
            <MdFavorite
              className={clsx(
                "text-xl transition-all duration-300",
                favorites.some((el) => el.num === ch?.num)
                  ? "text-red-200 scale-115"
                  : "text-white group-hover/icon:scale-115 group-hover/icon:text-red-100",
              )}
            />
          </div>
          {/* price */}
          <button className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 flex flex-col items-start gap-1 bg-white/70 backdrop-blur-xs px-2 py-1 rounded-lg">
            <h4 className="font-bold text-2xl">
              {ch?.price.toLocaleString("en-US")} ج.م
            </h4>
            <span className="text-sm font-body! text-secondary-500!">
              / ليلة
            </span>
          </button>
          {/* distinctIcon */}
          {ch?.infos[0]?.label === "vip" && (
            <div
              className={clsx(
                "absolute bottom-3 right-3 cursor-pointer group/icon transition-colors duration-300",
              )}
              onClick={() => toggleFavorites(ch)}
            >
              <img src={distinctIcon} alt="distinctIcon" className="w-12" />
            </div>
          )}
        </div>
        {/*//! card details */}
        <div className="bg-white p-4 flex flex-col justify-between grow gap-4">
          <div className="flex flex-col gap-4">
            {/* title & adv */}
            <div className="flex flex-col gap-1">
              <h3 className="font-bold text-xl">شالية - {ch?.num}#</h3>
              {/* adv */}
              <div className="flex flex-wrap items-center gap-1.5">
                {ch?.adv?.map((a, index) => (
                  <div key={a.label} className="flex items-center gap-1.5">
                    <p
                      className={clsx(
                        "text-xs text-secondary-400! transition-all duration-300 font-bold",
                        adv.some((adv) => adv === a.label) &&
                          "font-bold text-white! text-shadow-md! text-shadow-primary-700/90!",
                      )}
                    >
                      {a.name}
                    </p>
                    {index + 1 !== ch?.adv?.length && (
                      <span className="w-1 h-1 rounded-full bg-secondary-500" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            {/* details */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-4 py-4 border-t-2 border-b-2 border-neutral-200/40">
              {ch?.details?.map((el) => (
                <div key={el.title} className="flex items-center gap-2">
                  <img
                    src={el.icon}
                    alt="details-icon"
                    className="w-5 md:w-4 blue-img-filter"
                  />
                  <span className="text-sm font-semibold">{el.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* valid or not */}
          <div className="flex items-center justify-between gap-5">
            {sheetChaletData ? (
              sheetChaletData?.validList?.[0]?.from?.d === currDay ? (
                firstValid?.from === firstValid?.to ? (
                  <div className="flex items-center gap-1">
                    <IoMdCheckmarkCircleOutline className="text-sm text-green-600 shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-green-600!">
                      متاح اليوم
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1">
                    <IoMdCheckmarkCircleOutline className="text-sm text-green-600 shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-green-600!">
                      متاح حتي يوم {lastValid?.to}~{getMonthName(lastValid.m)}
                    </span>
                  </div>
                )
              ) : (
                <div className="flex items-center gap-2">
                  <FaRegHourglass className="text-sm text-red-500 shrink-0" />
                  {firstValid?.from === firstValid?.to ? (
                    <span className="text-xs sm:text-sm font-semibold text-red-500!">
                      متاح في يوم {firstValid?.from}~
                      {getMonthName(firstValid?.m)}
                    </span>
                  ) : (
                    <span className="text-xs sm:text-sm font-semibold text-red-500!">
                      من {firstValid?.from}~{getMonthName(firstValid?.m)} حتي{" "}
                      {lastValid?.to}~{getMonthName(lastValid?.m)}
                    </span>
                  )}
                </div>
              )
            ) : (
              <div className="w-full max-w-55 h-7 skeleton" />
            )}

            <Link to={`/chalets/${ch?.num}`} className="shrink-0">
              <button className="btn text-white! bg-accent-600 rounded-xl">
                عرض التفاصيل
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
