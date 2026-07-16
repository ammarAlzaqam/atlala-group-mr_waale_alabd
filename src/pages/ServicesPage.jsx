import clsx from "clsx";
import HeroSec from "../components/HeroSec";
import advList, { advListAdv } from "../constants/advantages";
import servicesList from "../constants/services";
import { Link } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-10 pb-8">
      <HeroSec
        title="المرافق والخدمات"
        des="مرافق وخدمات متكاملة توفر لك ولعائلتك إقامة مريحة ومميزة."
      />
      {/* Advantages */}
      <div className="flex justify-center mb-7">
        <div className="container flex flex-col gap-6">
          <TopTitle
            badge="جميع ما تحتاجه في مكان واحد"
            title="المرافق المتاحة"
            des="نوفر لك كل ما يضمن لك إقامة مريحة وآمنة واستمتاع لا يُنسي في بورتو مطروح"
          />
          <div className="flex flex-wrap gap-x-4 gap-y-6 justify-center">
            {advList.concat(advListAdv).map(({ title, icon }, index) => (
              <AdvCard key={title} title={title} icon={icon} index={index} />
            ))}
          </div>
        </div>
      </div>
      {/* Services */}
      <div className="flex justify-center py-8 bg-linear-to-b from-primary-400/10 to-transparent">
        <div className="container flex flex-col gap-9">
          <TopTitle
            badge="خيارات متعددة تناسب احتياجاتك"
            title="خدمتنا العقارية"
            des="نوفر لك مجموعة متنوعة من الخدمات العقارية بأعلى مستويات الجودة والمصداقية"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-9">
            {servicesList.map(({ img, icon, title, des, adv, color, btn }) => (
              <div
                key={title}
                className={`relative group line-hover rounded-2xl shadow-lg flex flex-col transition-all duration-500 hover:-translate-y-2 ${color.shadowHover}`}
              >
                {/*//! cover img and overlay(title && des)  */}
                <div className="relative overflow-hidden rounded-t-2xl w-full h-55 md:h-70">
                  <img
                    src={img}
                    alt="service-img"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-115"
                  />
                  {/*//* Overlay title and des */}
                  <div
                    className={`p-3 absolute w-full h-full bottom-1/2 right-1/2 translate-1/2 ${color.gradient} *:text-white! flex flex-col text-center items-center justify-center gap-2`}
                  >
                    <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
                    <p className="max-w-90 text-xs font-bold opacity-90 leading-[160%] text-shadow-sm text-shadow-black">
                      {des}
                    </p>
                  </div>
                </div>
                {/*//! adv and cta btn */}
                <div className="py-6 px-8 flex flex-col justify-between items-start grow gap-5">
                  {/*//* advantages and cta btn */}
                  <div className="flex flex-col gap-4">
                    <h3
                      className={`text-xl font-bold ${color.text} w-fit rounded-[50%] px-2 pb-1.5`}
                    >
                      - ما يميزنا
                    </h3>
                    <div className="flex flex-col gap-2">
                      {adv.map((text) => (
                        <div key={text} className="flex items-center gap-3">
                          <div
                            className={`${color.bgT} line-btn rounded-full p-0.5`}
                          >
                            <FiCheckCircle className={`${color.text}`} />
                          </div>
                          <p className="text-sm font-semibold">{text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-full flex justify-center">
                    <Link
                      to={btn.route}
                      className={`btn line-btn ${color.btn} text-white! rounded-lg w-[80%]`}
                    >
                      {btn.text}
                    </Link>
                  </div>
                </div>
                {/*//! Icon */}
                <div
                  className={`absolute -top-4 left-1.5 backdrop-blur-[2px] p-4 rounded-2xl ${color.bg}`}
                >
                  <img
                    src={icon}
                    alt="service-icon"
                    className="w-10 sm:w-12 invert-100"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const TopTitle = ({ badge, title, des }) => {
  return (
    <div className="flex flex-col items-center gap-2 hover">
      {/* badge */}
      <div className="px-6 py-1 bg-primary-100/70 rounded-3xl leading-[100%]">
        <span className="text-primary-600! font-bold text-[10px]">{badge}</span>
      </div>
      {/* title */}
      <h2 className="text-4xl font-bold text-primary-700!">{title}</h2>
      {/* title underline */}
      <div
        className="relative w-20 h-1 rounded-[100%]"
        style={{
          background: `
            linear-gradient(
              90deg,
              #004c6c 0%,
              #00658e 25%,
              #ffffff 50%,
              #00658e 75%,
              #004c6c 100%
            )
          `,
          boxShadow:
            "0 0 8px rgba(133,207,255,.35), inset -1px -1px 2px rgba(0,0,0,.35), inset 1px 1px 2px rgba(255,255,255,.4)",
        }}
      >
        <div className="absolute bottom-1/2 right-1/2 translate-1/2 w-3.5 h-3.5 p-1 rounded-full bg-white">
          <span
            className="block w-1.5 h-1.5 rounded-full"
            style={{
              background: `
                linear-gradient(
                  135deg,
                  #004c6c,
                  #2c7eaa,
                  #85cfff,
                  #2c7eaa,
                  #004c6c
                )
              `,
              boxShadow:
                "0 0 8px rgba(133,207,255,.4), inset -1px -1px 2px rgba(0,0,0,.35)",
            }}
          />
        </div>
      </div>
      <p className="text-xs text-center max-w-55 mt-2">{des}</p>
    </div>
  );
};

const AdvCard = ({ title, icon, index }) => (
  <div
    className={clsx(
      "relative flex flex-col items-center gap-5 py-5 px-3 shadow-lg shadow-gray-400/60 border border-gray-400/20 rounded-xl w-[calc(50%-8px)] md:w-[calc(25%-12px)] lg:w-[calc(20%-12.8px)] xl:w-[calc(14.2857%-13.71428px)]",
      "transition-all duration-300 hover:shadow-primary-500/50 hover:border-primary-500/20 hover:-translate-y-2 group",
    )}
  >
    {/* icon */}
    <div className="w-[60%] transition-all duration-300 line aspect-square bg-primary-300/15 group-hover:-translate-y-2 rounded-full flex items-center justify-center">
      <img
        src={icon}
        alt="icon-img"
        className="w-[70%] max-w-16 blue-img-filter"
      />
    </div>
    {/* num */}
    <div className="px-3.5 py-1.5 leading-[100%] bg-accent-300/10 rounded-full text-primary-600 font-bold text-sm">
      {index < 9 ? "0" + (index + 1) : index + 1}
    </div>
    {/* title */}
    <h3 className="text-center text-lg font-medium text-primary-600">
      {title}
    </h3>
  </div>
);
