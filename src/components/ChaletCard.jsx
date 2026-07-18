import { MdFavorite } from "react-icons/md";
import clsx from "clsx";
import { FaArrowLeft, FaRegHeart, FaRegHourglass } from "react-icons/fa";
import { IoMdArrowBack, IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { useAdv, useFavorites } from "../store";

export default function ChaletCard({ ch }) {
  const favorites = useFavorites((state) => state.favorites);
  const toggleFavorites = useFavorites((state) => state.toggleFavorites);

  const adv = useAdv((state) => state.adv);

  return (
    <div className="bg-white border border-secondary-500/15 shadow-lg rounded-2xl overflow-hidden transition-transform group duration-700 hover:-translate-y-2">
      <div className="flex flex-col gap-4 h-full">
        {/*//! imgs and absolute tags and favIcon, price */}
        <div className="relative h-72 overflow-hidden">
          <img
            src={ch.coverImg}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            alt="chalet-cover-img"
          />
          {/* tags */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            {ch.tags.map((t) => (
              <div
                key={t.name}
                className={`px-3 py-1.5 rounded-full text-xs font-bold ${t.color} flex items-center gap-1`}
              >
                <img className="w-4 invert-100" src={t.icon} />
                {t.name}
              </div>
            ))}
          </div>
          {/* favorite */}
          <div
            className={clsx(
              "absolute top-4 left-4 p-2 rounded-full backdrop-blur-sm cursor-pointer group/icon transition-colors duration-300",
              favorites.some((el) => el.num === ch.num)
                ? "bg-red-600/80 hover:bg-red-600/60"
                : "bg-secondary-100/50",
            )}
            onClick={() => toggleFavorites(ch)}
          >
            <MdFavorite
              className={clsx(
                "text-xl transition-all duration-300",
                favorites.some((el) => el.num === ch.num)
                  ? "text-red-200 scale-115"
                  : "text-white group-hover/icon:scale-115 group-hover/icon:text-red-100",
              )}
            />
          </div>
          {/* price */}
          <button className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 flex flex-col items-start gap-1 bg-white/70 backdrop-blur-xs px-2 py-1 rounded-lg">
            <h4 className="font-bold text-2xl">
              {ch.price.toLocaleString("en-US")} ج.م
            </h4>
            <span className="text-sm font-body! text-secondary-500!">
              / ليلة
            </span>
          </button>
        </div>
        {/*//! card details */}
        <div className="bg-white p-4 flex flex-col justify-between grow gap-4">
          <div className="flex flex-col gap-4">
            {/* title & adv */}
            <div className="flex flex-col gap-1">
              <h3 className="font-bold text-xl">شالية - {ch.num}#</h3>
              {/* adv */}
              <div className="flex flex-wrap items-center gap-1.5">
                {ch.adv.map((a, index) => (
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
                    {index + 1 !== ch.adv.length && (
                      <span className="w-1 h-1 rounded-full bg-secondary-500" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            {/* details */}
            <div className="grid grid-cols-3 gap-3 py-3 border-t-2 border-b-2 border-neutral-200/40">
              {ch.details.map((el) => (
                <div key={el.title} className="flex items-center gap-2">
                  <img
                    src={el.icon}
                    alt="details-icon"
                    className="w-4 blue-img-filter"
                  />
                  <span className="text-sm font-semibold">{el.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* valid or not and view details */}
          <div className="flex items-center justify-between gap-5">
            {ch.available ? (
              <div className="flex items-center gap-1">
                <IoMdCheckmarkCircleOutline className="text-sm text-green-600" />
                <span className="text-xs sm:text-sm font-semibold text-green-600!">
                  متاح للحجز
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <FaRegHourglass className="text-sm text-orange-600" />
                <span className="text-xs sm:text-sm font-semibold text-orange-600!">
                  متاح من 15 يوليو
                </span>
              </div>
            )}
            <Link to={`/chalets/${ch.num}`} className="shrink-0">
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
