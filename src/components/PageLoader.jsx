import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLoading } from "../store";
import clsx from "clsx";
import logoImg from "../assets/icons/logo.png";

import "../css/loader.css";

export default function PageLoader({ loading, setLoading }) {
  useEffect(() => {
    setLoading(true);
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto";
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className={clsx(
        "fixed inset-0 z-999999 bg-white flex justify-center items-center",
        "transition-opacity duration-700",
        loading ? "opacity-100" : "opacity-0 pointer-events-none",
      )}
    >
      <div
        data-aos="zoom-in"
        className={clsx(
          "loader transition-all! duration-700",
          !loading && "scale-0",
        )}
      >
        <div className="box">
          <div className="logo">
            <img
              src={logoImg}
              alt="Logo-img"
              className="absolute z-10 bottom-1/2 right-1/2 translate-1/2 w-full"
            />
          </div>
        </div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </div>
  );
}
