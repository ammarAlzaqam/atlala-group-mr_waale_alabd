import { MdHome, MdOutlineArrowBackIos } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useFavorites } from "../store";
import ChaletCard from "../components/ChaletCard";
import { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import clsx from "clsx";

export default function FavoritesPage() {
  const favorites = useFavorites((state) => state.favorites);
  const navigate = useNavigate();

  useEffect(() => {
    if (favorites.length < 1) {
      navigate("/chalets");
    }
  }, [favorites]);

  return (
    <div className="min-h-dvh pb-8 bg-[#fcfbfe] flex flex-col gap-8">
      <div
        className="flex justify-center bg-[linear-gradient(to_top,rgb(252,251,254)0%,rgba(252,251,254,0.6)35%,rgba(0,0,0,0.15)70%,rgba(0,0,0,0.35)100%),url('/images/hero-sec-bg2.png')] sm:bg-[linear-gradient(to_top,rgb(252,251,254)0%,rgba(252,251,254,0.6)35%,rgba(0,0,0,0.15)70%,rgba(0,0,0,0.35)100%),url('/images/hero-sec-bg.png')] bg-center sm:bg-top bg-cover"
        style={{
          background: `
    
  `,
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <FvHeroSec favorites={favorites} />
      </div>
      <div className="flex justify-center">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
            {favorites.map((ch) => (
              <ChaletCard key={ch.num} ch={ch} />
            ))}
          </div>
        </div>
      </div>

      {/*//* fixed icons (favorites & whatsapp) */}
      <Link
        to="/"
        className={clsx(
          "fixed z-100 bottom-17 right-5 bg-primary-500 p-2 rounded-full shadow-lg hover:shadow-primary-500/50 transition-all duration-300 hover:bg-primary-500/80 cursor-pointer group backdrop-blur-[2px]",
          favorites.length > 0
            ? "opacity-100!"
            : "opacity-0! pointer-events-none translate-y-2",
        )}
      >
        <MdHome
          className={clsx(
            "text-2xl text-white group-hover:scale-110 transition-transform duration-300",
          )}
        />
      </Link>
    </div>
  );
}

const FvHeroSec = ({ favorites }) => {
  return (
    <div className="container flex flex-col gap-4 pb-70 sm:pb-40 pt-10 sm:pt-40">
      <div className="flex items-center gap-2">
        <Link
          to="/"
          className="text-sm sm:text-[16px] text-white/80! transition-color duration-300 hover:text-primary-300!"
        >
          الرئيسية
        </Link>
        <MdOutlineArrowBackIos className="text-white/80" />
        <Link
          to="/chalets"
          className="text-sm sm:text-[16px] text-white/80! transition-color duration-300 hover:text-primary-300!"
        >
          الشاليهات
        </Link>
        <MdOutlineArrowBackIos className="text-white/80!" />
        <p className="text-sm text-white! text-shadow-xs text-shadow-black sm:text-[16px]">
          المفضلة
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-white! text-xl sm:text-3xl text-shadow-lg text-shadow-black/60">
          قائمة الشاليهات المفضلة
        </h1>

        <p className="text-sm sm:text-base text-white! text-shadow-sm text-shadow-secondary-700">
          جميع الشاليهات التي أضفتها إلى المفضلة في مكان واحد.
          <span className="font-semibold text-white!">
            {" "}
            ({favorites.length})
          </span>
        </p>
      </div>
    </div>
  );
};
