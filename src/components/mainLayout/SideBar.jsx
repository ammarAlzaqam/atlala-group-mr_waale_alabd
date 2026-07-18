import { Link, NavLink } from "react-router-dom";
import logoIcon from "../../assets/icons/logo2.png";
import homeIcon from "../../assets/icons/nav/home.png";
import navLinks from "../../constants/navLinks";
import clsx from "clsx";
import {
  FaFacebook,
  FaFacebookF,
  FaPhone,
  FaPhoneAlt,
  FaWhatsapp,
  FaWhatsappSquare,
} from "react-icons/fa";

export default function SideBar({ isOpen, setOpen }) {
  return (
    <div
      onClick={() => setOpen(false)}
      className={clsx(
        "z-50 fixed top-0 left-0 w-full h-dvh bg-black/30 flex sm:hidden flex-row-reverse",
        "transition-opacity duration-300",
        !isOpen && "pointer-events-none opacity-0",
      )}
    >
      <aside
        onClick={(e) => e.stopPropagation()}
        className={clsx(
          "h-full bg-primary-900 overflow-y-auto overflow-x-hidden px-8 py-6 transition-transform duration-500 flex flex-col justify-between items-center",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col gap-8">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="relative flex flex-col items-center gap-4 group"
          >
            <img
              src={logoIcon}
              alt="logo-icon"
              className="w-15 transition-transform duration-300 group-hover:scale-110"
            />
            <div className="w-full h-px bg-primary-500/10 rounded-full shadow shadow-primary-500" />
            <div
              className={clsx(
                "absolute inset-0 transition-opacity duration-300",
                "opacity-50 group-hover:opacity-80 scale-y-125 scale-x-145",
              )}
              style={{
                background:
                  "radial-gradient(ellipse at center, #00658e35 0%, #00658e20 35%, #00658e08 60%, transparent 100%)",
              }}
            />
          </Link>
          <div className="flex flex-col gap-4">
            {navLinks.map(({ icon, name, route }) => (
              <NavLink
                key={name}
                to={route}
                className="relative flex items-center gap-2 group"
                onClick={() => setOpen(false)}
              >
                {({ isActive }) => (
                  <>
                    <img
                      src={icon}
                      className={clsx(
                        "w-7 z-2 transition-all duration-300",
                        isActive ? "" : "sepia-100",
                      )}
                    />
                    <span
                      className={clsx(
                        "text-xl font-bold leading-6 z-2 transition-color duration-300",
                        isActive ? "text-primary-500!" : "text-secondary-500!",
                      )}
                    >
                      {name}
                    </span>
                    <div
                      className={clsx(
                        "absolute inset-0 rounded-full transition-all duration-300",
                        isActive
                          ? "scale-x-150 scale-y-170 opacity-100"
                          : "opacity-0 group-hover:opacity-90 group-hover:scale-x-170 group-hover:scale-y-150 hover:duration-75",
                      )}
                      style={{
                        background:
                          "radial-gradient(ellipse at center, #00658e35 0%, #00658e20 35%, #00658e07 60%, transparent 100%)",
                      }}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </div>
        {/*//TODO>> add Media links */}
        <div className="w-full flex justify-between gap-4">
          <div className="p-3 rounded-full shadow-md shadow-secondary-500/70 transition-all duration-300 hover:scale-110 hover:shadow-[#00c950]/80 cursor-pointer hover:bg-[#00c950]">
            <FaWhatsapp className="text-xl text-white" />
          </div>

          <div className="p-3 contrast-150 rounded-full  sepia-100 hover:sepia-0 shadow-md shadow-secondary-500/70 transition-all duration-300 hover:scale-110 hover:shadow-primary-400/80 cursor-pointer hover:bg-primary-500">
            <FaFacebookF className="text-xl text-white" />
          </div>

          <div className="p-3 contrast-150 rounded-full sepia-100 hover:sepia-0 shadow-md shadow-secondary-500/70 transition-all duration-300 hover:scale-110 hover:shadow-primary-600/80 cursor-pointer hover:bg-primary-700">
            <FaPhoneAlt className="text-xl text-white" />
          </div>
        </div>
      </aside>
    </div>
  );
}
