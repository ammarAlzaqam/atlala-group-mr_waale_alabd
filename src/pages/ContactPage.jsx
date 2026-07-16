import HeroSec from "../components/HeroSec";
import contactInfoList from "../constants/contact";
import socialList from "../constants/social";
import starIcon from "../assets/icons/decor/star.png";
import starSharpIcon from "../assets/icons/decor/star-sharp.png";
import locationBg from "../assets/images/contact-info/location-bg.png";

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-8 pb-8">
      <HeroSec
        title="تواصل معنا"
        des="نحن هنا للإجابة عن جميع استفساراتك ومساعدتك في اختيار الوحدة المناسبة."
      />
      <div className="flex justify-center bg-main-bg">
        <div className="container flex flex-col lg:flex-row gap-x-12 gap-y-18 gap-12">
          {/*//! Contact Information */}
          <div className="flex flex-col gap-5 lg:w-2/5">
            {/* title */}
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-2xl font-semibold">معلومات التواصل</h2>
              {/* modern Under line */}
              <div className="relative flex gap-2">
                <div
                  className="w-17 h-1 rounded-[100%]"
                  style={{
                    background: `
      linear-gradient(
        90deg,
        #7d5f2f 0%,
        #a88145 18%,
        #cca763 38%,
        #f3e2bc 50%,
        #cca763 62%,
        #a88145 82%,
        #7d5f2f 100%
      )
    `,
                    boxShadow:
                      "0 0 10px rgba(204,167,99,.4), inset 0 1px 1px rgba(255,255,255,.3)",
                  }}
                />
                <div
                  className="w-17 h-1 rounded-[100%]"
                  style={{
                    background: `
      linear-gradient(
        90deg,
        #7d5f2f 0%,
        #a88145 18%,
        #cca763 38%,
        #f3e2bc 50%,
        #cca763 62%,
        #a88145 82%,
        #7d5f2f 100%
      )
    `,
                    boxShadow:
                      "0 0 10px rgba(204,167,99,.4), inset 0 1px 1px rgba(255,255,255,.3)",
                  }}
                />
                <img
                  src={starIcon}
                  alt="start icon for decor"
                  className="absolute grayscale-50 invert-5 contrast-120 w-4 bottom-1/2 right-1/2 translate-1/2"
                />
              </div>
            </div>
            {/* contact infos */}
            <div className="flex flex-col gap-3">
              {contactInfoList.map(
                ({ FillIcon, OutlineIcon, title, des, dir }) => (
                  <div
                    key={title}
                    className="relative overflow-hidden group px-4 py-6 rounded-lg bg-white shadow flex items-center justify-between gap-4 transition-all duration-300 hover:shadow-primary-700/30"
                  >
                    <div className="flex items-center gap-4 transition-all duration-300 group-hover:scale-0 group-hover:opacity-0 group-hover:translate-x-80">
                      {/* Fill Icon */}
                      <div className="bg-primary-700 p-3 rounded-full">
                        <FillIcon className="text-white text-2xl" />
                      </div>
                      {/* Details (title, des) */}
                      <div className="flex flex-col">
                        <h3 className="text-lg font-bold">{title}</h3>
                        <p dir={dir}>{des}</p>
                      </div>
                    </div>
                    <OutlineIcon className="shrink-0 text-2xl text-accent-500 transition-all duration-300 group-hover:scale-0 group-hover:opacity-0 group-hover:-translate-x-20" />
                    {/* bg-img */}
                    <div className="absolute top-0 right-0 w-full h-full rounded-lg z-1 transition-all -translate-y-5 duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 bg-[linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)),url('/images/location-bg.png')]">
                      {/* <img
                        src={locationBg}
                        alt="bg-img"
                        className="w-full h-full object-cover opacity-90"
                      /> */}
                    </div>
                  </div>
                ),
              )}
            </div>
            {/* social */}
            <div className="flex flex-col items-center gap-5">
              <h3 className="text-2xl font-medium">تابعنا علي</h3>
              {/*// TODO>> Add social links  */}
              <div className="flex gap-6">
                {socialList.map(({ Icon, label, route, color }) => (
                  <div
                    key={label}
                    className={`relative group rounded-full cursor-pointer shadow-lg shadow-black/50 ${color} hover:scale-115 transition-all duration-300 outline outline-offset-6 outline-transparent`}
                  >
                    <div
                      key="label"
                      className="p-2 w-10 h-10 rounded-full border-3 border-transparent border-dashed outline outline-offset-0 transition-all duration-300 hover:scale-115 outline-transparent animate-rotate"
                    />
                    <Icon className="absolute bottom-1/2 right-1/2 translate-1/2 text-xl text-white transition-colors duration-300 pointer-events-none" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/*//! Location */}
          <div className="flex flex-col gap-5 grow">
            {/* title */}
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-2xl font-semibold">موقعنا على الخريطة</h2>
              {/* modern Under line */}
              <div className="relative flex gap-2">
                <div
                  className="w-20 h-1 rounded-[100%]"
                  style={{
                    background: `
      linear-gradient(
        90deg,
        #7d5f2f 0%,
        #a88145 18%,
        #cca763 38%,
        #f3e2bc 50%,
        #cca763 62%,
        #a88145 82%,
        #7d5f2f 100%
      )
    `,
                    boxShadow:
                      "0 0 10px rgba(204,167,99,.4), inset 0 1px 1px rgba(255,255,255,.3)",
                  }}
                />
                <div
                  className="w-20 h-1 rounded-[100%]"
                  style={{
                    background: `
      linear-gradient(
        90deg,
        #7d5f2f 0%,
        #a88145 18%,
        #cca763 38%,
        #f3e2bc 50%,
        #cca763 62%,
        #a88145 82%,
        #7d5f2f 100%
      )
    `,
                    boxShadow:
                      "0 0 10px rgba(204,167,99,.4), inset 0 1px 1px rgba(255,255,255,.3)",
                  }}
                />
                <img
                  src={starSharpIcon}
                  alt="start icon for decor"
                  className="absolute w-5 grayscale-50 invert-5 contrast-120 bottom-1/2 right-1/2 translate-1/2"
                />
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.6891440051068!2d27.1706416!3d31.367556299999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1462014f82814249%3A0xabba83c3bdd5fcda!2setlala%20porto%20matrouh!5e0!3m2!1sar!2seg!4v1784216231178!5m2!1sar!2seg"
              className="border-0 w-full aspect-square md:aspect-video shadow"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
