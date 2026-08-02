import chaletsList, { tags } from "../constants/chalets";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import selectIcon from "../assets/icons/chalets/details/select.png";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import { FaPlus, FaMinus } from "react-icons/fa";
import { LuCalendarCheck2 } from "react-icons/lu";
import { TbCalendarTime } from "react-icons/tb";

import waveLine from "../assets/icons/random/wave-line.png";

export default function ChaletDetailsPage() {
  const { chaletNum } = useParams();
  const [chalet, setChalet] = useState({});
  const [imgIndex, setImgIndex] = useState(0);
  const [showZoom, setShowZoom] = useState(false);
  const [zoomStyle, setZoomStyle] = useState({});
  const [sheetChaletData, setSheetChaletData] = useState(null);
  const [sheetChaletDataNextM, setSheetChaletDataNextM] = useState(null);
  const [autoDisplay, setAutoDisplay] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const imgRef = useRef(null);
  const thumbsRef = useRef([]);
  const containerRef = useRef(null);

  const navigate = useNavigate();

  const sheetChaletList = useSheetChaletsList((state) => state.sheetChaletList);

  const handleImgSwiper = (type) => {
    if (type === "increase") {
      if (imgIndex + 1 < chalet?.chaletImages?.length) {
        setImgIndex(imgIndex + 1);
      } else {
        setImgIndex(0);
      }
    } else if (type === "decrease") {
      if (imgIndex > 0) {
        setImgIndex(imgIndex - 1);
      } else {
        setImgIndex(chalet?.chaletImages.length - 1);
      }
    }
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } = imgRef.current.getBoundingClientRect();

    const x = e.clientX - left;
    const y = e.clientY - top;

    const xPercent = (x / width) * 100;
    const yPercent = (y / height) * 100;

    setZoomStyle({
      backgroundImage: `url(${chalet.locationImg})`,
      backgroundPosition: `${xPercent}% ${yPercent}%`,
      backgroundSize: "250%",
    });
  };

  const isDesktop = window.innerWidth >= 1024;
  const currentMonth = new Date().getMonth() + 1;

  const mergeValidLists = (current = [], next = []) => {
    const list = [...current];

    if (list.length && next.length) {
      const lastCurrent = list[list.length - 1];
      const firstNext = next[0];

      if (lastCurrent.to.m + 1 === firstNext.from.m && firstNext.from.d === 1) {
        // ادمج آخر فترة في الشهر الحالي مع أول فترة في الشهر اللي بعده
        list[list.length - 1] = {
          from: lastCurrent.from,
          to: firstNext.to,
        };

        // رجع باقي فترات الشهر الجديد
        return [...list, ...next.slice(1)];
      }
    }

    return [...list, ...next];
  };

  useEffect(() => {
    let chaletData = chaletsList.find((ch) => ch.num == chaletNum);
    setChalet(chaletData);

    if (!chaletData) {
      toast.error(`الشاليه ${chaletNum}# غير موجود`);
      navigate("/chalets");
    }

    const date = new Date();
    const currentMonth = date.getMonth() + 1;
    if (sheetChaletList?.[`m${currentMonth}`]) {
      setSheetChaletData(sheetChaletList?.[`m${currentMonth}`][`${chaletNum}`]);
      setSheetChaletDataNextM(
        sheetChaletList?.[`m${currentMonth + 1}`][`${chaletNum}`],
      );
    }
  }, [sheetChaletList, chaletNum]);

  const currDay = new Date().getDate();

  useEffect(() => {
    const current = thumbsRef.current[imgIndex];

    if (current && containerRef.current) {
      containerRef.current.scrollTo({
        left:
          current.offsetLeft -
          containerRef.current.clientWidth / 3 +
          current.clientWidth / 3,
        behavior: "smooth",
      });
    }
  }, [imgIndex]);

  useEffect(() => {
    setImgIndex(0);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % chalet?.chaletImages?.length);
    }, 3000);

    if (!autoDisplay) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [autoDisplay, chaletNum, chalet?.chaletImages?.length]);

  const validRanges = mergeValidLists(
    sheetChaletData?.validList,
    sheetChaletDataNextM?.validList,
  );

  return (
    <div className="min-h-dvh flex flex-col bg-primary-100">
      <ChHeroSec chNum={chalet.num} />
      <div className="flex justify-center -mt-5 pb-12 md:pb-15">
        <div className="container flex flex-col gap-5">
          {/*//? chImgs and details */}
          <div className="grid grid-cols-5 gap-4">
            {/*//! Chalet images */}
            <div className="md:sticky md:top-3 col-span-5 md:col-span-3 rounded-2xl overflow-hidden self-start flex flex-col gap-2 border-2 border-primary-800/10 shadow-xl shadow-primary-200/40">
              {/*//* Chalet display Img */}
              <div className="relative w-full aspect-5/4 md:aspect-video overflow-hidden">
                {/*// swiper arrows */}
                <div
                  onClick={(e) => handleImgSwiper("decrease")}
                  onDoubleClick={(e) => e.stopPropagation()}
                  className={clsx(
                    "absolute z-10 bottom-1/2 right-2 translate-y-1/2 rounded-full p-2 transition-opacity duration-300 group bg-linear-to-t from-primary-600 via-20% via-primary-700 to-70% to-primary-800 cursor-pointer hover:opacity-85",
                  )}
                >
                  <IoIosArrowForward className="text-lg md:text-2xl text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:scale-105" />
                </div>
                {chalet?.chaletImages?.map((chImg, index) => (
                  <img
                    src={chImg}
                    loading="lazy"
                    key={index}
                    alt="chalet-details-img"
                    className={clsx(
                      "absolute z-2 top-0 right-0 w-full h-full object-cover transition-all",
                      imgIndex === index
                        ? "opacity-100 duration-300"
                        : "opacity-0 -translate-y-25 duration-500",
                    )}
                  />
                ))}
                {/*// swiper arrows */}
                <div
                  onClick={(e) => handleImgSwiper("increase", e)}
                  onDoubleClick={(e) => e.stopPropagation()}
                  className="absolute z-10 bottom-1/2 left-2 translate-y-1/2 rounded-full p-2 transition-opacity duration-300 group bg-linear-to-t from-primary-600 via-20% via-primary-700 to-70% to-primary-800 cursor-pointer hover:opacity-85"
                >
                  <IoIosArrowBack className="text-lg md:text-2xl text-white transition-all duration-300 group-hover:-translate-x-0.5 group-hover:scale-105" />
                </div>
                {/*// is valid tag */}
                <div className="absolute z-10 top-2 right-2 flex gap-2 flex-wrap">
                  {sheetChaletData ? (
                    <div
                      className={clsx(
                        `text-sm rounded-full px-4 py-1 transition-opacity duration-300 group cursor-pointer hover:opacity-85 flex items-center gap-1`,
                        sheetChaletData?.validList?.[0]?.from?.d === currDay
                          ? tags.available.color
                          : tags.reserved.color,
                      )}
                    >
                      <img
                        src={
                          sheetChaletData?.validList?.[0]?.from?.d === currDay
                            ? tags.available.icon
                            : tags.reserved.icon
                        }
                        className="w-4 invert-100"
                      />
                      {sheetChaletData?.validList?.[0]?.from?.d === currDay
                        ? tags.available.name
                        : tags.reserved.name}
                    </div>
                  ) : (
                    <div
                      className={clsx(
                        `rounded-full w-23 h-7 bg-neutral-200 skeleton`,
                      )}
                    />
                  )}
                  {chalet?.view?.map(({ name, label, color, icon }) => (
                    <div
                      key={name}
                      className={`px-3 py-1.5 rounded-full text-xs font-bold ${color} flex items-center gap-1`}
                    >
                      <img className="w-4 invert-100" src={icon} />
                      {name}
                    </div>
                  ))}
                </div>
                {/*// switch auto display */}
                <div
                  onDoubleClick={(e) => e.stopPropagation()}
                  onClick={(e) => {
                    autoDisplay
                      ? toastInfo("تم إيقاف وضع العرض التلقائ")
                      : toast.success("تم تفعيل وضع العرض التلقائي");
                    setAutoDisplay(!autoDisplay);
                  }}
                  className={clsx(
                    "absolute z-10 bottom-4 right-4 p-2 rounded-full cursor-pointer transition-all duration-300 backdrop-blur-sm",
                    autoDisplay
                      ? "bg-primary-500 shadow-lg shadow-primary-500/40 ring-2 ring-white/20"
                      : "bg-black/60 hover:bg-black/80",
                  )}
                >
                  {autoDisplay && isLoaded && (
                    <svg
                      className="absolute inset-0 -rotate-90"
                      viewBox="0 0 48 48"
                    >
                      <circle
                        cx="24"
                        cy="24"
                        r="20"
                        fill="none"
                        stroke="var(--color-primary-500)"
                        strokeWidth="3"
                      />

                      <circle
                        cx="24"
                        cy="24"
                        r="20"
                        fill="none"
                        stroke="var(--color-primary-400)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        className="progress-circle"
                      />
                    </svg>
                  )}
                  <MdOutlineAutoMode
                    className={clsx(
                      "text-3xl transition-all duration-300",
                      autoDisplay
                        ? "text-white animate-spin [animation-duration:3s]"
                        : "text-gray-300",
                    )}
                  />
                  {/*// Display Img number */}
                  <div
                    className={clsx(
                      "absolute w-5 h-5 backdrop-blur-sm rounded-full bottom-1/2 right-1/2 translate-1/2",
                      autoDisplay ? "bg-primary-500/50" : "bg-black/50",
                    )}
                  >
                    {chalet?.chaletImages?.map((_, i) => (
                      <p
                        key={i}
                        className={clsx(
                          "absolute bottom-1/2 right-1/2 translate-1/2 text-white! transition-all duration-300 select-none",
                          imgIndex !== i && "opacity-0 scale-200",
                        )}
                      >
                        {i + 1}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              {/*//* Chalet images List */}
              <div
                ref={containerRef}
                className="relative w-full flex overflow-auto scrollbar-none gap-2 p-1"
                onDoubleClick={(e) => e.stopPropagation()}
              >
                {chalet?.chaletImages?.map((chImg, index) => (
                  <div
                    key={index}
                    ref={(el) => (thumbsRef.current[index] = el)}
                    className={clsx(
                      "rounded-xl relative w-[calc(25%-6px)] shrink-0 transition-all duration-300 outline-2 outline-offset-1 outline-transparent shadow-lg shadow-transparent",
                      index !== imgIndex &&
                        "cursor-pointer select-none hover:outline-white! hover:shadow-primary-500!",
                    )}
                    onClick={() => setImgIndex(index)}
                  >
                    <img
                      src={chImg}
                      alt="chalet-details-img"
                      className={clsx(
                        "w-full select-non aspect-5/4 md:aspect-video object-cover rounded-xl",
                      )}
                    />
                    <div
                      className={clsx(
                        "absolute top-0 left-0 w-full h-full border-2 border-white rounded-xl flex items-center justify-center bg-linear-to-b from-primary-700/50 via-primary-500/50 to-black/50 transition-opacity",
                        imgIndex === index
                          ? "opacity-100 duration-300"
                          : "opacity-0 duration-100",
                      )}
                    >
                      <img
                        className="h-6/10 invert-100 opacity-90 select-none"
                        src={selectIcon}
                        alt="select-icon"
                      />
                    </div>
                  </div>
                ))}
                <div
                  className={clsx(
                    "top-0 left-0 z-100 rounded-xl aspect-video w-[calc(25%-6px)] shrink-0 bg-black/40 pointer-events-none flex items-center justify-center transition-opacity",
                    chalet?.chaletImages?.length <= 4 ||
                      imgIndex + 2 >= chalet?.chaletImages?.length
                      ? "opacity-0 duration-0 absolute"
                      : "sticky duration-700",
                  )}
                >
                  <p className="text-white! text-2xl text-shadow-lg text-shadow-black/80">
                    {imgIndex > 2
                      ? chalet?.chaletImages?.length - (imgIndex + 2)
                      : chalet?.chaletImages?.length - 4}
                    +
                  </p>
                </div>
              </div>
            </div>
            {/*//! Chalet details */}
            <div className="col-span-5 md:col-span-2 bg-primary-200/30 rounded-2xl overflow-hidden flex flex-col items-center justify-between pb-10 border-2 border-primary-800/10 shadow-xl shadow-primary-200/40">
              {/*//* Details (num&adv&details) */}
              <div className="flex flex-col items-center gap-2 w-full">
                {/* Ch Num */}
                <div className="flex flex-col items-center gap-1 px-5 pt-6 pb-3">
                  <h4 className="font-semibold text-accent-600!">شاليه رقم</h4>
                  <h3 className="font-semibold text-5xl text-accent-600!">
                    {chalet.num}
                  </h3>
                </div>
                {/*//* Divider */}
                <div className="w-[85%] border-t-2 rounded-[100%] border-primary-500/10"></div>
                {/*//* Ch Details */}
                <div className="grid grid-cols-4 w-full py-5">
                  {chalet?.details?.map((d) => (
                    <div
                      key={d.title}
                      className="flex flex-col items-center gap-1"
                    >
                      <img
                        src={d.icon}
                        alt="details-icon"
                        className="w-6 gold-img-filter"
                      />
                      <p className="w-min text-center leading-[120%]">
                        {d.title}
                      </p>
                    </div>
                  ))}
                </div>
                {/*//* Divider */}
                <div className="w-[85%] border-t-5 border-dashed rounded-[100%] border-primary-500/10"></div>
                {/*//* Ch Adv */}
                <div className="flex flex-col gap-2 px-7 py-4 w-full">
                  <h3 className="font-semibold text-lg sm:text-xl">
                    مميزات الشالية
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {chalet?.adv?.map(({ name, label }, index) => (
                      <div key={label} className="flex items-center gap-2">
                        <p className="text-xs sm:text-[16px] whitespace-nowrap text-gray-500! font-semibold">
                          {name}
                        </p>
                        <LuCircleDotDashed
                          className={clsx(
                            "animate-spin w-2 sm:w-2.5",
                            index + 1 == chalet?.adv?.length && "hidden",
                          )}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                {/*//* Divider */}
                <div className="w-[85%] border-t-5 border-dashed rounded-[100%] border-primary-500/10"></div>
                {/*//* Ch infos */}
                <div className="flex flex-col gap-2 px-7 py-4 w-full">
                  <h3 className="font-semibold text-lg sm:text-xl">
                    معلومات الشالية
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {chalet?.infos?.map(({ title, icon }, index) => (
                      <div
                        key={index}
                        className="group relative flex flex-col items-center justify-start gap-2 overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-primary-300/10 p-6 text-center shadow-lg shadow-primary-300/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary-300/40"
                      >
                        {/* خلفية الأيقونة */}
                        <img
                          className="absolute gold-img-filter inset-0 z-0 h-full w-full object-contain opacity-10 transition-all duration-500 group-hover:scale-110 group-hover:opacity-20"
                          src={icon}
                          alt="ch-infos-icon"
                        />

                        {/* طبقة تدرج خفيفة لتحسين تباين النص */}
                        <div className="absolute inset-0 z-1 bg-linear-to-t from-primary-300/20 via-primary-200/15 to-transparent" />

                        {/* الأيقونة الصغيرة الظاهرة */}
                        <img
                          className="relative z-2 h-12 w-12 object-contain drop-shadow-md transition-translate duration-300 gold-img-filter group-hover:-translate-y-2"
                          src={icon}
                          alt=""
                        />

                        {/* العنوان */}
                        <p className="relative z-2 text-lg font-semibold text-shadow-lg text-shadow-primary-600/40 tracking-wide text-white! drop-shadow-sm">
                          {title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                {/*//* Divider */}
                <div className="w-[85%] border-t-2 rounded-[100%] border-primary-500/10"></div>
                {/*//* valid time */}
                <div className="flex flex-col gap-3 px-7 py-4 w-full">
                  <h3 className="font-semibold text-lg sm:text-xl">
                    توفر الشالية
                  </h3>
                  {sheetChaletData ? (
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 w-full">
                      {validRanges.map(({ from, to }, index) => (
                        <div
                          key={index}
                          className="bg-white px-4 xl:px-2 py-3 rounded-lg flex items-center justify-between gap-2"
                        >
                          {from.d === to.d && from.m === to.m ? (
                            from.d === currDay && from.m === currentMonth ? (
                              <p className="text-green-700! font-semibold text-sm whitespace-nowrap">
                                متاح اليوم ( {from.d}
                                <span className="relative">
                                  <span className="relative z-2 text-green-700! font-semibold text-sm">
                                    {getMonthName(from.m)}
                                  </span>
                                  <span className="absolute z-1 bottom-1/2 opacity-20 right-1/2 translate-1/2 text-4xl font-bold leading-[100%] bg-linear-to-br from-green-700/80 via-green-600 to-green-700/80 bg-clip-text text-transparent!">
                                    {from.m}
                                  </span>
                                </span>
                                )
                              </p>
                            ) : (
                              <p className="text-green-700! font-semibold text-sm whitespace-nowrap">
                                متاح في يوم ( {from.d}
                                <span className="relative">
                                  <span className="relative z-2 text-green-700! font-semibold text-sm">
                                    {getMonthName(from.m)}
                                  </span>
                                  <span className="absolute z-1 bottom-1/2 opacity-20 right-1/2 translate-1/2 text-4xl font-bold leading-[100%] bg-linear-to-br from-green-700/80 via-green-600 to-green-700/80 bg-clip-text text-transparent!">
                                    {from.m}
                                  </span>
                                </span>
                                )
                              </p>
                            )
                          ) : (
                            <div className="flex items-center gap-1">
                              <p className="text-green-700! font-semibold text-sm whitespace-nowrap">
                                {from.d}{" "}
                                <span className="relative">
                                  <span className="relative z-2 text-green-700! font-semibold text-sm">
                                    {getMonthName(from.m)}
                                  </span>
                                  <span className="absolute z-1 bottom-1/2 opacity-20 right-1/2 translate-1/2 text-4xl font-bold leading-[100%] bg-linear-to-br from-green-700/80 via-green-600 to-green-700/80 bg-clip-text text-transparent!">
                                    {from.m}
                                  </span>
                                </span>
                              </p>
                              <img
                                src={waveLine}
                                alt=""
                                className="w-3.5 h-4"
                              />
                              <p className="text-green-700! font-semibold text-sm whitespace-nowrap">
                                {to.d}{" "}
                                <span className="relative">
                                  <span className="relative z-2 text-green-700! font-semibold text-sm">
                                    {getMonthName(to.m)}
                                  </span>
                                  <span className="absolute z-1 bottom-1/2 opacity-20 right-1/2 translate-1/2 text-4xl font-bold leading-[100%] bg-linear-to-br from-green-700/80 via-green-600 to-green-700/80 bg-clip-text text-transparent!">
                                    {to.m}
                                  </span>
                                </span>
                              </p>
                            </div>
                          )}
                          <p className="text-xs text-green-700 shrink-0">
                            {handleNumbers(
                              "ليلة",
                              "ليالي",
                              Math.floor(
                                (new Date(2026, to.m - 1, to.d) -
                                  new Date(2026, from.m - 1, from.d)) /
                                  (1000 * 60 * 60 * 24),
                              ) + 1,
                            )}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 w-full">
                      {Array(4)
                        .fill(null)
                        .map((_, index) => (
                          <div
                            key={index}
                            className="bg-neutral-200 skeleton h-10 rounded-lg"
                          />
                        ))}
                    </div>
                  )}
                </div>
                {/*//* calendar valid time */}
                <div className="w-full flex flex-col gap-5 px-7 py-4">
                  <h3 className="font-semibold text-lg sm:text-xl">
                    تقويم التوفر
                  </h3>

                  {[currentMonth, currentMonth + 1].map((month) => {
                    const days = getNumOfDays(new Date(2026, month - 1));
                    return (
                      <div key={month} className="space-y-3">
                        <h4 className="font-bold text-primary-600">
                          {getMonthName(month)} - {month}
                        </h4>

                        <div className="grid grid-cols-7 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-2">
                          {Array.from({ length: days }, (_, i) => {
                            const day = i + 1;

                            const isAvailable = [
                              ...(sheetChaletData?.validList ?? []),
                              ...(sheetChaletDataNextM?.validList ?? []),
                            ].some(
                              ({ from, to }) =>
                                from.m === month &&
                                day >= from.d &&
                                day <= to.d,
                            );

                            const isToday =
                              month === new Date().getMonth() + 1 &&
                              day === new Date().getDate();

                            return (
                              <div
                                key={day}
                                className={clsx(
                                  "aspect-square rounded-lg flex items-center justify-center text-sm font-bold transition-all",
                                  sheetChaletData
                                    ? "opacity-100"
                                    : " skeleton bg-neutral-200 text-neutral-200!",
                                  isAvailable
                                    ? "bg-green-600 text-white"
                                    : "bg-neutral-100 text-neutral-400",
                                  isToday &&
                                    sheetChaletData &&
                                    "ring-2 ring-primary-500 ring-offset-2",
                                )}
                              >
                                {day}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/*//* Ch Price and buttons */}
              <div className="relative flex flex-col gap-8 w-[95%] rounded-2xl bg-linear-to-b from-primary-100/80 via-[#cbedff] to-[#cbedff] px-8 pt-12 pb-5 inset-shadow-sm inset-shadow-[#cbedff]">
                {/* price */}
                <div className="flex flex-col items-center gap-2">
                  <h3>السعر لليلة</h3>
                  <div className="flex items-end gap-1">
                    <h4 className="text-accent-600! text-4xl font-semibold">
                      {chalet?.price?.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </h4>
                    <h4 className="text-accent-600! font-semibold text-lg">
                      ج.م
                    </h4>
                  </div>
                </div>
                {/* buttons */}
                <div className="flex flex-col gap-4">
                  <div className="btn bg-accent-500 text-white! rounded-lg">
                    <FaCalendar className="text-white!" />
                    احجز الأن
                  </div>
                  {/*//TODO>> Whatsapp link */}
                  <Link
                    to=""
                    className="btn bg-transparent border-primary-300/50 rounded-lg"
                  >
                    <FaWhatsapp />
                    تواصل عبر واتساب
                  </Link>
                </div>
                {/*// Absolute Divider */}
                <div className="absolute top-0 right-1/2 translate-x-1/2 w-full h-10 rounded-b-[100%] border-primary-300/50 bg-[#cbedff] bg-linear-to-b from-primary-[#cbedff] via-[#cbedff] to-primary-200/50"></div>
              </div>
            </div>
          </div>
          {/*//? adv and locationImg */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 py-5">
            {/*//! Ch Adv */}
            <div className="col-span-1 md:col-span-7 rounded-2xl overflow-hidden p-4 md:p-6 flex flex-col items-center text-center gap-4">
              {/* title */}
              <h3 className="text-xl font-medium ">مرافق الشاليه</h3>
              {/* adv */}
              <div className="grid grid-cols-3 gap-3 w-full">
                {pestAdvList.map(({ title, icon }) => (
                  <div
                    key={title}
                    className="flex flex-col items-center gap-2 p-2 rounded-lg border border-primary-500/20 transition-all duration-300 shadow-md shadow-transparent hover:border-transparent hover:shadow-primary-300/50"
                  >
                    <img
                      src={icon}
                      alt="adv-icon"
                      className="w-8 gold-img-filter"
                    />
                    <p className="font-semibold text-sm">{title}</p>
                  </div>
                ))}
              </div>
            </div>
            {/*//! Ch Location img */}
            <div
              onDoubleClick={(e) => e.stopPropagation()}
              className="relative col-span-1 md:col-span-5 rounded-xl overflow-hidden border-2 border-primary-300/30"
            >
              <TransformWrapper
                initialScale={1}
                minScale={1}
                maxScale={5}
                centerOnInit
                wheel={{ disabled: false }}
                doubleClick={{ mode: "zoomIn" }}
                pinch={{ step: 5 }}
              >
                {({ zoomIn, zoomOut, resetTransform, instance }) => (
                  <>
                    {/* Buttons */}
                    <div className="absolute top-3 right-3 z-20 flex flex-col gap-2">
                      <div
                        onClick={() => zoomIn()}
                        className="w-10 h-10 btn p-0 flex justify-center border-none items-center rounded-full bg-accent-500/50! backdrop-blur-sm text-white! shadow-lg"
                      >
                        <FaPlus />
                      </div>

                      <div
                        onClick={() => zoomOut()}
                        className="w-10 h-10 btn p-0 flex justify-center border-none items-center rounded-full bg-accent-500/50! backdrop-blur-sm text-white! shadow-lg"
                      >
                        <FaMinus />
                      </div>

                      <div
                        onClick={() => resetTransform()}
                        className="px-3 py-2 btn rounded-full bg-accent-500/50! backdrop-blur-sm border-none text-white! text-sm shadow-lg"
                      >
                        Reset
                      </div>
                    </div>

                    <TransformComponent
                      wrapperClass="!w-full !h-full"
                      contentClass="!w-full !h-full"
                    >
                      <img
                        src={chalet.locationImg}
                        alt="location"
                        className="w-full h-full object-cover select-none"
                        draggable={false}
                      />
                    </TransformComponent>
                  </>
                )}
              </TransformWrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { MdOutlineArrowBackIos, MdOutlineAutoMode } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import logo from "../assets/icons/logo2.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import clsx from "clsx";
import { PiWarehouse } from "react-icons/pi";
import { useEffect, useMemo, useRef, useState } from "react";
import chDetailsIcon from "../assets/icons/chalets/details/main.png";
import { FaCalendar } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { pestAdvList } from "../constants/advantages";
import { LuCircleDotDashed } from "react-icons/lu";
import { useSheetChaletsList } from "../store";
import { date } from "yup";
import { getMonthName, getNumOfDays } from "../utils/dateHelpers";
import { handleNumbers } from "../utils/textFormate";
import { BiInfoCircle } from "react-icons/bi";
import { toastInfo } from "../utils/toast";

function ChHeroSec({ chNum }) {
  return (
    <div className="flex justify-center pt-17 pb-22 md:bg-top bg-move">
      <div className="container flex flex-col items-center text-center">
        <div className="relative w-full flex justify-center">
          <img src={logo} alt="logo-icon" className="w-40 z-2" />
          <h3
            className="absolute z-1 bottom-0 right-1/2 translate-1/2 text-8xl font-black opacity-50
             bg-linear-to-b from-primary-600 via-[#d9bf7a] to-secondary-600
             bg-clip-text text-transparent!
             drop-shadow-[0_2px_10px_rgba(180,143,73,0.35)]"
          >
            {chNum}
          </h3>
        </div>
        <div className="z-5 flex flex-col items-center text-center gap-2">
          <h1
            className="text-4xl sm:text-5xl font-black bg-clip-text text-transparent! leading-[120%] drop-shadow-[0_2px_12px_rgba(255,255,255,.15)]"
            style={{
              backgroundImage: `
                linear-gradient(
                  180deg,
                  #ffffff 0%,
                  #faf7ef 25%,
                  #ecd3a0 60%,
                  #cca763 100%
                )
              `,
            }}
          >
            تفاصيل الشاليه
          </h1>
          <p className="text-sm sm:text-[16px] font-bold text-white/90!">
            استعرض جميع تفاصيل الشاليه، الصور والمرافق والأسعار قبل الحجز
          </p>
        </div>
        <div className="flex items-center gap-2 mt-6">
          <Link
            className="text-sm sm:text-lg font-semibold text-white/80! transition-colors duration-300 hover:text-accent-500!"
            to="/"
          >
            الرئيسية
          </Link>
          <IoIosArrowBack className="text-accent-500" />
          <Link
            className="text-sm sm:text-lg font-semibold text-white/80! transition-colors duration-300 hover:text-accent-500!"
            to="/chalets"
          >
            الشاليهات
          </Link>
          <IoIosArrowBack className="text-accent-500" />
          <div className="flex items-center gap-1">
            <img
              src={chDetailsIcon}
              alt="chalet-details-icon"
              className="w-6 invert-100"
            />
            <p className="text-sm sm:text-lg font-semibold text-white! text-shadow-lg text-shadow-white/20">
              تفاصيل الشاليه
            </p>
          </div>
        </div>
      </div>
      {/*//* fixed icon (chalets page) */}
      <Link
        to="/chalets"
        className={clsx(
          "fixed z-30 bottom-29 right-5 bg-primary-400 p-2 rounded-full shadow-lg hover:shadow-primary-500/50 transition-all duration-300 hover:bg-primary-500/80 cursor-pointer group backdrop-blur-[2px]",
        )}
      >
        <PiWarehouse
          className={clsx(
            "text-2xl text-white group-hover:scale-110 transition-transform duration-300",
          )}
        />
      </Link>
    </div>
  );
}
