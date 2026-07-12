import { FaArrowLeft, FaRegHeart, FaRegHourglass } from "react-icons/fa";
import { IoMdArrowBack, IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import chaletsList from "../../constants/chalets";
import { MdFavorite } from "react-icons/md";
import clsx from "clsx";
import priceFormate from "../../utils/priceFormate";
import ChaletCard from "../ChaletCard";

export default function Chalets() {
  return (
    <div className="flex justify-center py-10 bg-primary-300/10">
      <div className="container flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-end justify-between gap-5">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-neutral-900!">
              استكشف أفخم الشاليهات
            </h1>
            <p className="text-sm">
              استكشف مجموعتنا المختارة بعناية من الشاليهات الفاخرة في قلب قرية
              بورتو مطروح.
            </p>
          </div>
          <Link
            to="/chalets"
            className="flex items-center gap-2 cursor-pointer group"
          >
            <span className="text-primary-600! text-lg transition-colors duration-300 group-hover:text-primary-800!">
              عرض جميع الوحدات
            </span>
            <IoMdArrowBack className="text-primary-600 text-xl transition-all duration-300 group-hover:-translate-x-1 group-hover:text-primary-800" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
          {chaletsList
            .filter((ch) => ch.vip)
            .map((ch) => (
              <ChaletCard key={ch.num} ch={ch} />
            ))}
        </div>
      </div>
    </div>
  );
}
