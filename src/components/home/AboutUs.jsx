import floralIcon from "../../assets/icons/decor/floral.png";
import aboutInfos from "../../constants/aboutInfos";
import protoImg from "../../assets/images/about/aboutSec/porto.png";
import officeIcon from "../../assets/icons/about/office2.png";
import reefImg from "../../assets/icons/about/reefImg.png";

import { ImQuotesLeft } from "react-icons/im";

export default function AboutUs() {
  return (
    <div className="flex flex-col items-center gap-16 pt-8 md:pt-15 pb-15 md:pb-20">
      <div className="container flex flex-col lg:flex-row lg:items-end gap-12">
        {/*//! Details */}
        <div className="flex flex-col gap-6 shrink-0">
          {/*//* About title and des */}
          <div className="flex flex-col items-start gap-4">
            {/* Head title */}
            <div className="relative flex items-center gap-1 *:shrink-0">
              <img
                className="w-10 sm:w-12 z-2 green-img-filter"
                src={floralIcon}
                alt="decor-icon"
              />
              <h4 className="text-lg sm:text-xl z-2 font-bold">
                عن إطلالة العقارية
              </h4>
              <img
                className="w-10 sm:w-12 z-2 green-img-filter"
                src={floralIcon}
                alt="decor-icon"
              />
              <div className="absolute z-1 bottom-5 left-0 w-full h-0 shadow-[0_0_30px_25px_#43b5a915]" />
            </div>
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl z-2 font-bold max-w-100">
              خبرة أكثر من 10 سنوات في بورتو مطروح
            </h2>
            {/* des */}
            <p className="max-w-120">
              منذ أكثر من 10 سنوات، وإطلالة العقارية للاستثمار والتطوير العقاري
              تقدم تجربة مصيف متكاملة تجمع ببن الراحة والخصوصية وسهولة الإقامة
              في قلب بورتو مطروح.
            </p>
          </div>
          {/*//* About Infos */}
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
            {aboutInfos.map(({ title, des, icon, label }) => (
              <div
                className="relative group overflow-hidden flex flex-col items-center gap-3 bg-white rounded-xl p-4 pb-8 shadow-md shadow-primary-400/20"
                key={label}
              >
                {/* Icon Image with mask */}
                <div
                  className="
                    w-12 h-12
                    z-2
                    bg-primary-500
                    transition-colors duration-300
                    group-hover:bg-white!
                  "
                  style={{
                    maskImage: `url(${icon})`,
                    WebkitMaskImage: `url(${icon})`,
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                  }}
                />
                <h2 className="z-2 text-accent-500! text-4xl font-bold">
                  {title}
                </h2>
                <p className="text-center z-2 transition-colors duration-300 group-hover:text-white!">
                  {des}
                </p>
                <div className="absolute z-1 bottom-4 translate-y-4 right-1/2 translate-x-1/2 w-6 h-0.5 bg-primary-500 group-hover:opacity-0 transition-opacity duration-300" />
                <div className="absolute z-1 bottom-1/2 right-1/2 translate-1/2 w-full h-20 bg-primary-500 opacity-0 group-hover:opacity-100 group-hover:h-full transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
        {/*//! Img */}
        <div className="relative">
          <img
            src={protoImg}
            className="z-1 aspect-square sm:aspect-12/8 2xl:aspect-video object-cover rounded-tr-[50%] sm:rounded-tr-[70%] rounded-br-[80px]"
          />
          <div className="absolute z-2 -bottom-3 -left-18 md:-left-25 2xl:-left-35 translate-y-10/12 w-[115%] sm:w-[110%] 2xl:w-full h-50 sm:h-90 bg-main-bg rounded-tr-[100%] rounded-tl-[100%]" />
          <div className="absolute z-3 -bottom-10 sm:-bottom-7 left-[15%] md:left-[20%] lg:left-[10%] 2xl:left-[15%] rounded-2xl bg-primary-500 px-4 sm:px-8 py-3 flex flex-col sm:flex-row items-center gap-1 sm:gap-6">
            <img
              src={officeIcon}
              alt="office-icon"
              className="w-12 sm:w-20 2xl:w-25 grayscale-100 invert-100"
            />
            <h4 className="text-white! text-xs sm:text-base 2xl:text-lg font-normal sm:font-semibold leading-[160%] text-center max-w-50">
              مكتبنا بجوار بواية <br /> بورتو مطروح مباشرة
            </h4>
          </div>
        </div>
      </div>
      <div className="container z-2">
        <div className="bg-primary-100/60 rounded-3xl px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between gap-4 md:gap-12">
          <img
            src={reefImg}
            alt="reef-img"
            className="md:w-[calc(50%-25px)] xxl:w-1/3 shrink-0 object-contain"
          />
          <div className="w-[90%] md:w-0.5 mx-auto h-0.5 md:h-auto bg-accent-500/50" />
          <div className="relative flex items-center gap-8 max-w-full md:max-w-[calc(50%-25px)] xxl:max-w-1/3 md:pl-15 lg:pl-25">
            <h3 className="font-semibold text-center">
              إطلالة العقارية .. خبرة نعرف بها بورتو مطروح ، واهتمام نضعه في كل
              تفاصيل إقامتك.
            </h3>
            <ImQuotesLeft className="absolute bottom-1/2 md:top-0 right-1/2 left-auto md:right-auto md:left-0 translate-1/2 md:translate-0 text-6xl md:text-4xl text-primary-500/20 md:text-primary-500/50" />
          </div>
        </div>
      </div>
    </div>
  );
}
