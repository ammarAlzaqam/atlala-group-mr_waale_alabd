import { MdOutlineArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";

export default function HeadTitle() {
  return (
    <div className="flex justify-center py-8">
      <div className="container">
        <div className="flex flex-col gap-4 p-5 rounded-xl bg-[#fcfefe]">
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="text-sm sm:text-[16px] text-secondary-300! transition-color duration-300 hover:text-primary-500!"
            >
              الرئيسية
            </Link>
            <MdOutlineArrowBackIos className="text-secondary-300" />
            <p className="text-sm sm:text-[16px]">الشاليهات</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-xl sm:text-3xl">
              اكتشف شاليهك المثالي
            </h1>
            <p className="text-sm sm:text-[16px]">
              اختر من بين 63 شاليه مميز في قرية بورتو مطروح بأفضل المواقع
              والأسعار.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
