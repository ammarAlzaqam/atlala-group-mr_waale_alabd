import homeIcon from "../assets/icons/nav/home.png";
import chaletsIcon from "../assets/icons/nav/chalets.png";
import servicesIcon from "../assets/icons/nav/services.png";
import aboutIcon from "../assets/icons/nav/about.png";
import contactsIcon from "../assets/icons/nav/contacts.png";

const navLinks = [
  {
    icon: homeIcon,
    name: "الرئيسية",
    route: "/",
  },
  {
    icon: chaletsIcon,
    name: "الشاليهات",
    route: "/chalets",
  },
  {
    icon: servicesIcon,
    name: "المرافق و الخدمات",
    route: "/services",
  },
  {
    icon: aboutIcon,
    name: "عنّا",
    route: "/about",
  },
  {
    icon: contactsIcon,
    name: "تواصل",
    route: "/contact",
  },
];

export default navLinks;
