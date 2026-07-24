import clsx from "clsx";
import { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();
  useEffect(() => {
    scrollTo(0, 0);
  }, [location]);
  return (
    <div className="bg-main-bg">
      <Outlet />

      {/*//* fixed icons (favorites & whatsapp) */}
      <div
        className={clsx(
          "fixed z-30 bottom-5 right-5 bg-green-500 p-2 rounded-full shadow-lg hover:shadow-green-500/50 transition-all duration-300 hover:bg-green-500/80 cursor-pointer group backdrop-blur-[2px]",
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
  );
}
