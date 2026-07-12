import { Link, Outlet } from "react-router-dom";
import Header from "../components/mainLayout/Header";
import Footer from "../components/mainLayout/Footer";
import { MdFavoriteBorder } from "react-icons/md";
import { useFavorites } from "../store";
import clsx from "clsx";
import { FaWhatsapp } from "react-icons/fa";

export default function HomeLayout() {
  const favorites = useFavorites((state) => state.favorites);
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />

      <main className="grow">
        <Outlet />
      </main>

      <Footer />

      {/*//* fixed icons (favorites & whatsapp) */}
      <div className="fixed z-100 bottom-5 right-5 flex flex-col gap-2">
        <Link
          to="/chalets/favorites"
          className={clsx(
            "bg-red-500 p-2 rounded-full shadow-lg hover:shadow-red-500/50 transition-all duration-300 hover:bg-red-500/80 cursor-pointer group backdrop-blur-[2px]",
            favorites.length > 0
              ? "opacity-100!"
              : "opacity-0! pointer-events-none translate-y-2",
          )}
        >
          <MdFavoriteBorder
            className={clsx(
              "text-2xl text-white group-hover:scale-110 transition-transform duration-300",
            )}
          />
        </Link>

        <div
          className={clsx(
            "bg-green-500 p-2 rounded-full shadow-lg hover:shadow-green-500/50 transition-all duration-300 hover:bg-green-500/80 cursor-pointer group backdrop-blur-[2px]",
          )}
        >
          {/*//TODO >> add whatsapp link */}
          <FaWhatsapp
            className={clsx(
              "text-2xl text-white group-hover:scale-110 transition-transform duration-300",
            )}
          />
        </div>
      </div>
    </div>
  );
}
