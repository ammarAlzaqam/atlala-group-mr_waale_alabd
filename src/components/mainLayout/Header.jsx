import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/icons/logo.png";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import clsx from "clsx";
import { Turn as Hamburger } from "hamburger-react";
import navLinks from "../../constants/navLinks";
import SideBar from "./SideBar";

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-40 flex justify-center bg-white">
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
                  isActive ? "active" : "*:text-secondary-500!",
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
            className="btn media flex items-center gap-2 border bg-transparent border-primary-500 py-1.5 px-3 rounded-lg"
          >
            <FaPhone className="text-sm md:text-lg text-primary-500" />
            <span className="hidden lg:block">01021387202</span>
          </a>

          <a
            href="https://wa.me/201021387202"
            target="_blank"
            className="btn light media flex items-center gap-2 bg-primary-500 border border-primary-500 py-1.5 px-3 rounded-lg"
          >
            <FaWhatsapp className="text-sm md:text-lg" />
            <span className="hidden lg:block">تواصل واتساب</span>
          </a>
        </div>
        <div className="z-111 block sm:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color={isOpen ? "#ffffff" : "#035054"}
            size={26}
          />
        </div>
      </div>
      <SideBar isOpen={isOpen} setOpen={setOpen} />
    </div>
  );
}
