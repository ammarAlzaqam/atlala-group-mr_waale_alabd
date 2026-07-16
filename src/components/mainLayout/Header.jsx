import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/icons/logo.png";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import clsx from "clsx";
import { Turn as Hamburger } from "hamburger-react";
import navLinks from "../../constants/navLinks";
import SideBar from "./SideBar";

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(scrollY > 20);
    };

    addEventListener("scroll", handleScroll);

    return () => removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={clsx(
        "fixed w-full top-0 z-40 flex justify-center transition-all shadow-lg shadow-transparent",
        isScrolled ? "bg-primary-700 shadow-primary-400/10!" : "bg-transparent",
      )}
    >
      <div className="container py-2 flex flex-row-reverse sm:flex-row justify-between gap-3">
        <Link to="/">
          <img src={Logo} alt="logo img" className="w-35 md:w-40 lg:w-50" />
        </Link>
        <nav className="hidden sm:flex *:pr-5">
          {navLinks.map(({ name, route }) => (
            <NavLink
              key={name}
              to={route}
              className={({ isActive }) =>
                clsx(
                  "headerLink flex items-center",
                  isActive ? "active" : "*:text-white/80!",
                )
              }
            >
              <span className="font-medium">{name}</span>
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+201021387202"
            className="btn media flex items-center gap-2 border bg-transparent border-accent-500 py-1.5 px-3 rounded-lg"
          >
            <FaPhone className="text-sm md:text-lg text-accent-200" />
            <span className="hidden lg:block text-accent-200!">
              01021387202
            </span>
          </a>

          <a
            href="https://wa.me/201021387202"
            target="_blank"
            className="btn light media flex items-center gap-2 bg-accent-500 border border-accent-500 py-1.5 px-3 rounded-lg"
          >
            <FaWhatsapp className="text-sm md:text-lg" />
            <span className="hidden lg:block">تواصل واتساب</span>
          </a>
        </div>
        <div className="z-111 block sm:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color={isOpen ? "#ffffff" : "#85cfff"}
            size={26}
          />
        </div>
      </div>
      <SideBar isOpen={isOpen} setOpen={setOpen} />
    </div>
  );
}
