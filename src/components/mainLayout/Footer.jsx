import { FaPhone } from "react-icons/fa6";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineMail,
} from "react-icons/md";
import { Link } from "react-router-dom";
import navLinks from "../../constants/navLinks";
import logoIcon from "../../assets/icons/logo-icon.png";

export default function Footer() {
  return (
    <div className="bg-white! flex flex-col items-center justify-center gap-10 pt-10">
      <div className="container grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-10">
        <div className="col-span-2 flex flex-col gap-4">
          <img src={logoIcon} alt="logo-icon" className="w-15" />

          <p className="text-sm text-secondary-500!">
            رفيقك الأمثل في رحلة البحث عن التميز والراحة في قلب بورتو مطروح. نحن
            هنا لنجعل عطلتك قصة تحكى.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-black! font-bold text-lg">روابط سريعة</h2>
          <div className="flex flex-col">
            <Link to="/" className="flex items-center gap-2 group py-1">
              <div className="w-1 h-1 bg-secondary-500 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:bg-primary-500" />
              <span className="transition-all duration-300 group-hover:-translate-x-1 group-hover:text-primary-500!">
                الرئيسية
              </span>
            </Link>
            <Link
              to="/about-porto"
              className="flex items-center gap-2 group py-1"
            >
              <div className="w-1 h-1 bg-secondary-500 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:bg-primary-500" />
              <span className="transition-all duration-300 group-hover:-translate-x-1 group-hover:text-primary-500!">
                عن بورتو مطروح
              </span>
            </Link>
            <Link to="/contact" className="flex items-center gap-2 group py-1">
              <div className="w-1 h-1 bg-secondary-500 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:bg-primary-500" />
              <span className="transition-all duration-300 group-hover:-translate-x-1 group-hover:text-primary-500!">
                اتصل بنا
              </span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-black! font-bold text-lg">الصفحات</h2>
          <div className="flex flex-col">
            {navLinks.slice(0, -1).map(({ route, name }) => (
              <Link
                key={name}
                className="relative py-1 transition-all duration-300 group overflow-hidden hover:pr-4"
                to={route}
              >
                <MdOutlineKeyboardDoubleArrowLeft className="absolute top-1/2 -translate-y-1/2 -right-4.5 text-lg group-hover:text-primary-500 transition-transform duration-300 group-hover:-translate-x-4" />
                <span className="group-hover:text-primary-500!">{name}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-black! font-bold text-lg">تواصل معنا</h2>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <FaPhone className="text-md text-secondary-500" />
              <span>01021387202</span>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineMail className="text-md text-secondary-500" />
              <span>info@atlala.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center py-6 border-t border-secondary-500/50">
        <p className="text-sm text-secondary-400!">
          © 2026 إطلالة العقارية. جميع الحقوق محفوظة
        </p>
      </div>
    </div>
  );
}
