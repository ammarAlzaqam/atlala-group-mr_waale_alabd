import { FaRegCalendarAlt } from "react-icons/fa";
import filtersIcon from "../../assets/icons/chalets/filters/filters.png";
import {
  advList,
  areasList,
  beds,
  classificationList,
  couch,
  floors,
  floorsList,
  roomsList,
  viewOptions,
} from "../../constants/chalets";
import {
  useAdv,
  useArea,
  useArriveDate,
  useBed,
  useClassification,
  useFloor,
  useLiveDate,
  usePriceRange,
  useRoom,
  useSofa,
  useView,
} from "../../store";
import clsx from "clsx";

export default function Filters() {
  const [open, setOpen] = useState(false);
  const [classificationValue, setClassificationValue] = useState("");
  const arriveDate = useArriveDate((state) => state.arriveDate);
  const setArriveDate = useArriveDate((state) => state.setArriveDate);
  const liveDate = useLiveDate((state) => state.liveDate);
  const setLiveDate = useLiveDate((state) => state.setLiveDate);
  const priceRange = usePriceRange((state) => state.priceRange);
  const setPriceRange = usePriceRange((state) => state.setPriceRange);

  const view = useView((state) => state.view);
  const setView = useView((state) => state.setView);
  const adv = useAdv((state) => state.adv);
  const setAdv = useAdv((state) => state.setAdv);
  const area = useArea((state) => state.area);
  const setArea = useArea((state) => state.setArea);
  const room = useRoom((state) => state.room);
  const setRoom = useRoom((state) => state.setRoom);
  const classification = useClassification((state) => state.classification);
  const setClassification = useClassification(
    (state) => state.setClassification,
  );
  const bed = useBed((state) => state.bed);
  const setBed = useBed((state) => state.setBed);
  const floor = useFloor((state) => state.floor);
  const setFloor = useFloor((state) => state.setFloor);
  const sofa = useSofa((state) => state.sofa);
  const setSofa = useSofa((state) => state.setSofa);

  const arrivalDateRef = useRef(null);
  const departureDateRef = useRef(null);

  const calendarArriveRef = useRef(null);
  const calendarLiveRef = useRef(null);

  const collectSelectedAdv = (label) => {
    const exists = adv.find((advLabel) => advLabel === label);
    let newAdvList;
    if (exists) {
      newAdvList = adv.filter((advLabel) => advLabel !== label);
    } else {
      newAdvList = [...adv, label];
    }
    setAdv(newAdvList);
  };

  const handelRoomsNum = (label) => {
    if (label === room) setRoom(null);
    else if (area === 48 && [3, 4, 5].includes(label)) setRoom(null);
    else if (area === 75 && [2, 5].includes(label)) setRoom(null);
    else if (area === 96 && [2, 3, 4].includes(label)) setRoom(null);
    else setRoom(label);
  };

  const handelClearFilters = (e) => {
    e.stopPropagation();
    setArriveDate("");
    setLiveDate("");
    setPriceRange([1800, 8500]);
    setView("");
    setAdv([]);
    setArea("");
    setRoom("");
    setClassification("");
  };

  const noFilters = useMemo(
    () =>
      !arriveDate &&
      !liveDate &&
      priceRange[0] === 1800 &&
      priceRange[1] === 8500 &&
      !view &&
      adv.length === 0 &&
      !area &&
      !room &&
      !classification,
    [arriveDate, liveDate, priceRange, view, adv, area, room, classification],
  );

  useEffect(() => {
    handelRoomsNum(room);
  }, [area]);

  useEffect(() => {
    if (floor !== "ground" && floor) {
      let newAdv = adv.filter((item) => !["grill", "garden"].includes(item));
      setAdv(newAdv);
    }
  }, [floor]);

  return (
    <div
      onDoubleClick={(e) => e.stopPropagation()}
      className="z-30 sticky top-18 md:top-20 w-full md:w-70 lg:w-100 shrink-0 bg-white border border-neutral-300/50 rounded-xl flex flex-col"
    >
      {/*//* title */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between gap-4 p-4 lg:pt-6 cursor-pointer md:cursor-auto group"
      >
        <p className="text-primary-600!">تصفية النتائج</p>
        <div className="flex items-center grow md:grow-0 justify-between gap-3">
          <img
            src={filtersIcon}
            alt="filter-icon"
            className="blue-img-filter w-6"
          />
          <div className="flex items-center gap-2">
            <div
              className={clsx(
                "btn h-8 flex items-center gap-1 transition-opacity duration-300",
                noFilters && "opacity-50 pointer-events-none",
              )}
              onClick={(e) => handelClearFilters(e)}
              onDoubleClick={(e) => e.stopPropagation()}
            >
              <MdOutlineFilterAltOff className="text-secondary-500!" />
              <span>مسح</span>
            </div>
            <IoIosArrowUp
              className={clsx(
                "flex md:hidden md:pointer-events-none cursor-pointer transition-transform group-hover:scale-110",
                !open && "rotate-180",
              )}
            />
          </div>
        </div>
      </button>
      {/*//* filters */}
      <div
        className={clsx(
          "flex flex-col gap-6 transition-all duration-300 px-4 md:max-h-[calc(100dvh-170px)] md:overflow-auto md:pt-2 md:pb-6",
          open
            ? "max-h-[calc(100dvh-150px)] md:max-h-[calc(100dvh-170px)] overflow-auto pt-2 pb-6"
            : "max-h-0 py-0 overflow-hidden md:max-h-[calc(100dvh-170px)] md:overflow-auto",
        )}
      >
        {/*//* price range */}
        <PriceRange values={priceRange} setValues={setPriceRange} />
        {/*//* Filter by date */}
        <div className="flex flex-row flex-wrap gap-3">
          {/* arrival date */}
          <div className="relative w-fit sm:w-auto flex flex-col gap-1.5">
            <label
              htmlFor="arrival"
              className="font-bold font-head! text-neutral-800!"
            >
              تاريخ الوصول
            </label>
            <div className="relative">
              <DatePicker
                date={arriveDate}
                setDate={setArriveDate}
                arriveDate={arriveDate}
                liveDate={liveDate}
                setLiveDate={setLiveDate}
                id="arrive-date"
              />
              <FaRegCalendarAlt
                className={clsx(
                  "absolute pointer-events-none bottom-1/2 right-1.5 translate-y-1/2 cursor-pointer transition-colors duration-300",
                  arriveDate ? "text-primary-500!" : "text-secondary-500!",
                )}
              />
            </div>
          </div>
          {/* departure date */}
          <div className="relative w-fit sm:w-auto flex flex-col gap-1.5">
            <label
              htmlFor="departure"
              className="font-bold font-head! text-neutral-800!"
            >
              تاريخ المغادرة
            </label>
            <div className="relative">
              <DatePicker
                date={liveDate}
                setDate={setLiveDate}
                minDate={arriveDate ? new Date(arriveDate) : null}
                arriveDate={arriveDate}
                liveDate={liveDate}
                setLiveDate={setLiveDate}
                id="live-date"
              />
              <FaRegCalendarAlt
                className={clsx(
                  "absolute pointer-events-none bottom-1/2 right-1.5 translate-y-1/2 cursor-pointer transition-colors duration-300",
                  liveDate ? "text-primary-500!" : "text-secondary-500!",
                )}
              />
            </div>
          </div>
        </div>
        {/*//* Filter by area and beds and sofas */}
        <div
          className={clsx(
            "flex flex-col transition-all duration-300",
            area ? "gap-6" : "gap-0",
          )}
        >
          {/*//* Filter by areas */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-neutral-800!">المساحة</h3>
            <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {areasList.map((a) => (
                <button
                  key={a.label}
                  className={clsx(
                    "py-2 rounded-lg border flex flex-col justify-center items-center gap-2 cursor-pointer transition-all duration-300",
                    area === a.label
                      ? "border-primary-600/50"
                      : "border-[#E2E8F0] hover:shadow-lg hover:shadow-primary-500/30",
                  )}
                  onClick={() =>
                    area === a.label ? setArea(null) : setArea(a.label)
                  }
                >
                  <img
                    className={clsx(
                      "w-8 h-8 object-contain",
                      area === a.label
                        ? "blue-img-filter"
                        : "grayscale-100 opacity-50",
                    )}
                    src={a.icon}
                    alt="brand-img"
                  />
                  <span
                    className={clsx(
                      "font-medium text-xs leading-4 transition-colors duration-300",
                      area === a.label
                        ? "text-primary-600!"
                        : "text-secondary-400!",
                    )}
                  >
                    {a.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
          {/*//* Filter by beds */}
          <div className={clsx("transition-all duration-300")}>
            <div
              className={clsx(
                "flex flex-col gap-2 transition-all duration-300",
                area
                  ? "max-h-200 overflow-y-auto"
                  : "max-h-0 overflow-y-hidden",
              )}
            >
              <h3 className="font-bold text-neutral-800!">السراير</h3>
              <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {beds.map((bedItem, index) => (
                  <BedCard
                    key={index}
                    bedItem={bedItem}
                    index={index}
                    bed={bed}
                    setBed={setBed}
                    area={area}
                  />
                ))}
              </div>
            </div>
          </div>
          {/*//* Filter by sofas */}
          <div className={clsx("transition-all duration-300")}>
            <div
              className={clsx(
                "flex flex-col gap-2 transition-all duration-300",
                area
                  ? "max-h-200 overflow-y-auto"
                  : "max-h-0 overflow-y-hidden",
              )}
            >
              <h3 className="font-bold text-neutral-800!">الكنب</h3>
              <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {couch.map((sofaItem, index) => (
                  <SofaCard
                    key={index}
                    sofaItem={sofaItem}
                    index={index}
                    sofa={sofa}
                    setSofa={setSofa}
                    area={area}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/*//* Filter by classification */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-neutral-800!">الفئة</h3>
          <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {classificationList.map(({ label, title, icon }) => (
              <button
                key={label}
                className={clsx(
                  "py-2 rounded-lg border flex flex-col justify-center items-center gap-2 cursor-pointer transition-all duration-300",
                  classification === label
                    ? "border-accent-600/50"
                    : "border-[#E2E8F0] hover:shadow-lg hover:shadow-accent-500/30",
                )}
                onClick={() =>
                  classification === label
                    ? setClassification(null)
                    : setClassification(label)
                }
              >
                <img
                  className={clsx(
                    "w-8 h-8 object-contain",
                    classification === label
                      ? "gold-img-filter"
                      : "grayscale-100 opacity-50",
                  )}
                  src={icon}
                  alt="brand-img"
                />
                <span
                  className={clsx(
                    "font-medium text-xs leading-4 transition-colors duration-300",
                    classification === label
                      ? "text-accent-600!"
                      : "text-secondary-400!",
                  )}
                >
                  {title}
                </span>
              </button>
            ))}
          </div>
        </div>
        {/*//* Filter by floor */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-neutral-800!">الطابق</h3>
          <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {floorsList.map(({ label, title, icon }) => (
              <button
                key={label}
                className={clsx(
                  "py-2 rounded-lg border flex flex-col justify-center items-center gap-2 cursor-pointer transition-all duration-300",
                  floor === label
                    ? "border-accent-600/50"
                    : "border-[#E2E8F0] hover:shadow-lg hover:shadow-accent-500/30",
                )}
                onClick={() =>
                  floor === label ? setFloor(null) : setFloor(label)
                }
              >
                <img
                  className={clsx(
                    "w-8 h-8 object-contain",
                    floor === label
                      ? "gold-img-filter"
                      : "grayscale-100 opacity-50",
                  )}
                  src={icon}
                  alt="brand-img"
                />
                <span
                  className={clsx(
                    "font-medium text-xs leading-4 transition-colors duration-300",
                    floor === label
                      ? "text-accent-600!"
                      : "text-secondary-400!",
                  )}
                >
                  {title}
                </span>
              </button>
            ))}
          </div>
        </div>
        {/*//* Filter By View */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-neutral-800!">الإطلالة</h3>
          <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {viewOptions.map((v) => (
              <button
                key={v.label}
                className={clsx(
                  "py-2 rounded-lg border flex flex-col justify-center items-center gap-2 cursor-pointer transition-all duration-300",
                  view === v.label
                    ? "border-[#00560e]/50"
                    : "border-[#E2E8F0] hover:shadow-lg hover:shadow-[#00560e]/30",
                )}
                onClick={() =>
                  view === v.label ? setView(null) : setView(v.label)
                }
              >
                <img
                  className={clsx(
                    "w-8 h-8 object-contain",
                    view === v.label
                      ? "green-img-filter"
                      : "grayscale-100 opacity-50",
                  )}
                  src={v.icon}
                  alt="brand-img"
                />
                <span
                  className={clsx(
                    "font-medium text-xs leading-4 transition-colors duration-300",
                    view === v.label
                      ? "text-[#00560e]!"
                      : "text-secondary-400!",
                  )}
                >
                  {v.name}
                </span>
              </button>
            ))}
          </div>
        </div>
        {/*//* Filter By adv */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-neutral-800!">المرافق</h3>
          <div className="flex flex-col gap-2">
            {advList.map(({ name, label, icon }) => (
              <label
                htmlFor={label}
                key={label}
                className={clsx(
                  "flex items-center gap-2 transition-opacity duration-300",
                  floor &&
                    floor !== "ground" &&
                    ["garden", "grill"].includes(label) &&
                    "opacity-50 pointer-events-none",
                )}
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="category"
                    className="checkbox checked:bg-primary-500 text-white!"
                    id={label}
                    checked={!!adv.find((adv) => adv === label)}
                    onChange={() => collectSelectedAdv(label)}
                  />
                  <span
                    className={clsx(
                      "text-sm text-[#45556C] leading-5 transition-all duration-300",
                      !!adv.find((advLabel) => advLabel === label) &&
                        "text-shadow-md text-white! font-bold text-shadow-primary-600",
                    )}
                  >
                    {name}
                  </span>
                </div>
                <div
                  className={clsx(
                    "grow border-t border-b border-dashed transition-colors duration-300",
                    !!adv.find((advLabel) => advLabel === label)
                      ? "border-t-primary-600/50 border-b-primary-600/50"
                      : "border-t-secondary-200 border-b-white",
                  )}
                ></div>
                <img
                  src={icon}
                  className={clsx(
                    "w-6 h-6 object-contain transition-all duration-300",
                    !!adv.find((advLabel) => advLabel === label) &&
                      "blue-img-filter scale-110",
                  )}
                />
              </label>
            ))}
          </div>
        </div>
        {/*//* Filter By rooms num */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-neutral-800!">الغرف</h3>
          <div className="flex flex-col gap-2">
            {roomsList.map(({ name, label, icon, nofPeople }) => (
              <div
                key={label}
                className={clsx(
                  "flex items-center justify-between gap-3 transition-opacity duration-300",
                  area === 48 &&
                    [3, 4, 5].includes(label) &&
                    "opacity-50 cursor-not-allowed *:cursor-not-allowed *:*:cursor-not-allowed",
                  area === 75 &&
                    [2, 5].includes(label) &&
                    "opacity-50 cursor-not-allowed *:cursor-not-allowed *:*:cursor-not-allowed",
                  area === 96 &&
                    [2, 3, 4].includes(label) &&
                    "opacity-50 cursor-not-allowed *:cursor-not-allowed *:*:cursor-not-allowed",
                )}
              >
                <label htmlFor={label} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="category"
                    className={clsx(
                      "radio transition-all duration-300 checked:bg-primary-500 text-white! border",
                      room === label
                        ? "border-primary-500"
                        : "border-secondary-100",
                    )}
                    checked={room === label}
                    id={label}
                    // checked={!!adv.find((adv) => adv === label)}
                    onChange={() => handelRoomsNum(label)}
                  />
                  <div className="flex items-center gap-2">
                    <img
                      src={icon}
                      alt="icon"
                      className={clsx(
                        "w-6 transition-all duration-300",
                        room === label && "blue-img-filter",
                      )}
                    />
                    <span
                      className={clsx(
                        "text-sm text-[#45556C] leading-5 transition-all duration-300",
                        room === label &&
                          "text-shadow-md text-white! font-bold text-shadow-primary-600",
                      )}
                    >
                      {name}
                    </span>
                  </div>
                </label>
                <span
                  className={clsx(
                    "text-xs leading-4 transition-colors duration-300",
                    room === label
                      ? "text-primary-400!"
                      : "text-secondary-400!",
                  )}
                >
                  {nofPeople}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import { Range, getTrackBackground } from "react-range";
import { useEffect, useMemo, useRef, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { getTodayString } from "../../utils/dateHelpers";
import { MdOutlineFilterAltOff } from "react-icons/md";
const PriceRange = ({ values, setValues }) => {
  return (
    <div className="flex flex-col gap-2" dir="ltr">
      <h3 className="font-bold text-neutral-800!">نطاق السعر (لكل ليلة)</h3>
      <Range
        values={values}
        step={1}
        min={1200}
        max={9000}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className="relative h-1.5 w-full rounded-full"
            style={{
              background: getTrackBackground({
                values,
                colors: ["#E2E8F0", "#2c7eaa", "#E2E8F0"],
                min: 1200,
                max: 9000,
              }),
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => {
          const { key, ...rest } = props;

          return (
            <div
              key={key}
              {...rest}
              className="h-4 w-4 rounded-full bg-white border-2 border-primary-500"
            />
          );
        }}
      />

      <div className="flex items-center justify-between">
        <p className="font-medium text-sm leading-5 text-primary-500">
          {values[0].toLocaleString()} EGP
        </p>
        <p className="font-medium text-sm leading-5 text-primary-500">
          {values[1].toLocaleString()} EGP
        </p>
      </div>
    </div>
  );
};

import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { ar } from "date-fns/locale";

function DatePicker({
  id,
  date,
  setDate,
  className = "",
  arriveDate,
  setLiveDate,
  liveDate,
}) {
  const popoverRef = useRef();

  const today = new Date();

  // آخر يوم في الشهر القادم
  const lastDayNextMonth = useMemo(
    () => new Date(today.getFullYear(), today.getMonth() + 2, 0),
    [],
  );

  const minLiveDate = useMemo(() => {
    if (!arriveDate) return today;

    const d = new Date(arriveDate);
    d.setDate(d.getDate() + 1);

    return d;
  }, [arriveDate]);

  const disabled = useMemo(() => {
    if (id !== "live-date") {
      return [{ before: today }];
    }

    if (!arriveDate) return [];

    return [
      {
        before: minLiveDate,
      },
    ];
  }, [id, arriveDate, minLiveDate]);

  const selectedDate = date ? new Date(date) : undefined;

  const maxLiveDate = useMemo(() => {
    if (!arriveDate) return lastDayNextMonth;

    const d = new Date(arriveDate);
    d.setDate(d.getDate() + 14);

    return d;
  }, [arriveDate, lastDayNextMonth]);

  return (
    <>
      <button
        popoverTarget={arriveDate || id !== "live-date" ? id : undefined}
        type="button"
        style={{ anchorName: `--${id}` }}
        disabled={id === "live-date" && !arriveDate}
        className={clsx(
          "input pr-7 w-full",
          className,
          date ? "text-primary-500!" : "text-secondary-500!",
          id === "live-date" && !arriveDate && "opacity-60 cursor-not-allowed",
        )}
      >
        {date || "اختر التاريخ"}
      </button>

      <div
        id={id}
        popover="auto"
        ref={popoverRef}
        style={{ positionAnchor: `--${id}` }}
        className="dropdown rounded-xl bg-white p-3 shadow-xl border"
        dir="ltr"
      >
        <DayPicker
          locale={ar}
          mode="single"
          selected={selectedDate}
          animate
          fixedWeeks
          pagedNavigation
          navLayout="around"
          captionLayout="dropdown"
          startMonth={new Date(today.getFullYear(), today.getMonth(), 1)}
          endMonth={new Date(today.getFullYear(), today.getMonth() + 1, 1)}
          disabled={disabled}
          fromDate={id === "live-date" ? minLiveDate : today}
          toDate={
            id === "arrive-date"
              ? liveDate
                ? new Date(liveDate)
                : lastDayNextMonth
              : maxLiveDate
          }
          onSelect={(day) => {
            if (!day) return;

            if (id === "arrive-date") {
              const liveDate = new Date(day);
              liveDate.setDate(liveDate.getDate() + 3);

              setLiveDate(format(liveDate, "yyyy-MM-dd"));
            }

            setDate(format(day, "yyyy-MM-dd"));

            requestAnimationFrame(() => {
              popoverRef.current?.hidePopover();
            });
          }}
        />
      </div>
    </>
  );
}

const BedCard = ({ bedItem, index, bed, setBed, area }) => {
  const bedValue =
    index === 1 || index === 3
      ? !area || area === 48
        ? bedItem.sm
        : bedItem.xl
      : bedItem;

  const isDisabled =
    (area === 48 && [2, 4].includes(index)) ||
    (area === 75 && index === 4) ||
    (area === 96 && index !== 4) ||
    !area;

  useEffect(() => {
    if ((isDisabled && bed === bedValue.label) || !area) {
      setBed("");
    }
  }, [isDisabled, bed, bedValue.label]);

  return (
    <button
      key={bedValue.label}
      className={clsx(
        "py-2 rounded-lg border flex flex-col justify-center items-center gap-2 cursor-pointer transition-all duration-300",
        bed === bedValue.label
          ? "border-primary-600/50"
          : "border-[#E2E8F0] hover:shadow-lg hover:shadow-primary-500/30",
        isDisabled && "opacity-40 pointer-events-none scale-75",
      )}
      onClick={() =>
        bed === bedValue.label ? setBed(null) : setBed(bedValue.label)
      }
    >
      <img
        className={clsx(
          "w-8 h-8 object-contain",
          bed === bedValue.label
            ? "blue-img-filter"
            : "grayscale-100 opacity-50",
        )}
        src={bedValue.icon}
        alt="brand-img"
      />
      <span
        className={clsx(
          "font-medium text-xs leading-4 transition-colors duration-300",
          bed === bedValue.label ? "text-primary-600!" : "text-secondary-400!",
        )}
      >
        {bedValue.title}
      </span>
    </button>
  );
};

const SofaCard = ({ sofaItem, index, sofa, setSofa, area }) => {
  const isDisabled =
    (area === 48 && [2, 3].includes(index)) ||
    (area === 75 && index === 0) ||
    (area === 96 && index !== 0) ||
    !area;

  useEffect(() => {
    if ((isDisabled && sofa === sofaItem.label) || !area) {
      setSofa("");
    }
  }, [isDisabled, sofa, sofaItem.label]);

  return (
    <button
      key={sofaItem.label}
      className={clsx(
        "py-2 rounded-lg border flex flex-col justify-center items-center gap-2 cursor-pointer transition-all duration-300",
        sofa === sofaItem.label
          ? "border-primary-600/50"
          : "border-[#E2E8F0] hover:shadow-lg hover:shadow-primary-500/30",
        isDisabled && "opacity-40 pointer-events-none scale-75",
      )}
      onClick={() =>
        sofa === sofaItem.label ? setSofa(null) : setSofa(sofaItem.label)
      }
    >
      <img
        className={clsx(
          "w-8 h-8 object-contain",
          sofa === sofaItem.label
            ? "blue-img-filter"
            : "grayscale-100 opacity-50",
        )}
        src={sofaItem.icon}
        alt="brand-img"
      />
      <span
        className={clsx(
          "font-medium text-xs leading-4 transition-colors duration-300",
          sofa === sofaItem.label ? "text-primary-600!" : "text-secondary-400!",
        )}
      >
        {sofaItem.title}
      </span>
    </button>
  );
};
