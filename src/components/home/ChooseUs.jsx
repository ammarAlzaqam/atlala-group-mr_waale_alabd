import clsx from "clsx";
import chooseUsList from "../../constants/chooseUs";

export default function ChooseUs() {
  return (
    <div className="flex justify-center pt-10 pb-16 bg-primary-100/20">
      <div className="container flex flex-col items-center gap-16">
        <div className="text-center flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-neutral-800!">
            لماذا تختار "إطلالة العقارية"؟
          </h2>
          <p className="text-secondary-500!">
            نحن نؤمن بأن العطلة المثالية تبدأ من جودة السكن واهتمامنا بأدق
            التفاصيل.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chooseUsList.map((el, index) => (
            <div
              key={el.title}
              className={clsx(
                index + 1 === chooseUsList.length &&
                  "md:col-span-2 lg:col-span-1",
                `group relative p-10 rounded-3xl ${el.colors.bg} ${el.colors.textColor} flex flex-col items-start gap-3 overflow-hidden transition-transform duration-300 hover:-translate-y-1`,
              )}
            >
              <div className={`${el.colors.iconBg} rounded-3xl p-4`}>
                <img src={el.icon} alt="icon" className="z-2 w-6.5" />
              </div>
              <h3 className="z-2 pt-3 text-2xl leading-8 font-bold">
                {el.title}
              </h3>
              <p className="z-2 leading-6">{el.des}</p>
              <img
                src={el.overlay.img}
                alt="overlay"
                className={`absolute ${el.overlay.position} z-1 transition-transform duration-300 group-hover:scale-150`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
