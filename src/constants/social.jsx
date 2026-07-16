import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-Icons/fa";
import { MdPhoneInTalk } from "react-icons/md";

const socialList = [
  {
    route: "/",
    label: "Facebook",
    Icon: FaFacebookF,
    color:
      "bg-blue-600 hover:bg-blue-700 shadow-blue-500 hover:shadow-transparent hover:*:border-blue-500/50 hover:*:outline-blue-500/50 hover:outline-blue-500/50",
  },
  {
    route: "/",
    label: "Instagram",
    Icon: FaInstagram,
    color:
      "bg-gradient-to-r from-fuchsia-500 via-pink-500 to-orange-400 shadow-pink-500 hover:shadow-transparent hover:*:border-pink-500/50 hover:*:outline-pink-500/50 hover:outline-pink-500/50",
  },
  {
    route: "/",
    label: "Whatsapp",
    Icon: FaWhatsapp,
    color:
      "bg-green-500 hover:bg-green-600 shadow-green-500 hover:shadow-transparent hover:*:border-green-500/50 hover:*:outline-green-500/50 hover:outline-green-500/50",
  },
  {
    route: "/",
    label: "Phone",
    Icon: MdPhoneInTalk,
    color:
      "bg-sky-500 hover:bg-sky-600 shadow-sky-500 hover:shadow-transparent hover:*:border-sky-500/50 hover:*:outline-sky-500/50 hover:outline-sky-500/50",
  },
];

export default socialList;
