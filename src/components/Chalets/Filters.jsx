import { FaRegCalendarAlt } from "react-icons/fa";
import filtersIcon from "../../assets/icons/chalets/filters/filters.png";
import {
  advList,
  areasList,
  roomsList,
  viewOptions,
} from "../../constants/chalets";
import { useAdv, useArea, usePriceRange, useRoom, useView } from "../../store";
import clsx from "clsx";

export default function Filters() {
  const [open, setOpen] = useState(false);
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

  const arrivalDateRef = useRef(null);
  const departureDateRef = useRef(null);

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

  useEffect(() => {
    handelRoomsNum(room);
  }, [area]);

  return (
    <div className="z-30 sticky top-18 md:top-22.25 w-full md:w-70 lg:w-100 shrink-0 bg-white border border-neutral-300/50 rounded-xl flex flex-col">
      {/*//* title */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between gap-4 p-4 pt-6 cursor-pointer md:cursor-auto group"
      >
        <p className="text-primary-600!">تصفية النتائج</p>
        <div className="flex items-center grow md:grow-0 justify-between gap-3">
          <img
            src={filtersIcon}
            alt="filter-icon"
            className="blue-img-filter w-6"
          />
          <IoIosArrowUp
            className={clsx(
              "flex md:hidden md:pointer-events-none cursor-pointer transition-transform group-hover:scale-110",
              !open && "rotate-180",
            )}
          />
        </div>
      </button>
      {/*//* filters */}
      <div
        className={clsx(
          "flex flex-col gap-6 transition-all duration-300 px-4 md:max-h-[calc(100dvh-160px)] md:overflow-auto md:pt-2 md:pb-6",
          open
            ? "max-h-[calc(100dvh-160px)] overflow-auto pt-2 pb-6"
            : "max-h-0 py-0 overflow-hidden md:max-h-[calc(100dvh-160px)] md:overflow-auto",
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
            <input
              ref={arrivalDateRef}
              name="arrivalDate"
              type="date"
              id="arrival"
              className="input w-fit h-12 focus:outline-none rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] px-4 transition-colors focus:border-accent-500"
            />
            <FaRegCalendarAlt
              onClick={() => arrivalDateRef.current?.showPicker()}
              className="absolute bottom-4 right-4 text-primary-500 cursor-pointer"
            />
          </div>
          {/* departure date */}
          <div className="relative w-fit sm:w-auto flex flex-col gap-1.5">
            <label
              htmlFor="departure"
              className="font-bold font-head! text-neutral-800!"
            >
              تاريخ المغادرة
            </label>
            <input
              name="departureDate"
              type="date"
              id="departure"
              ref={departureDateRef}
              className="input w-fit h-12 focus:outline-none rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] px-4 transition-colors focus:border-accent-500"
            />
            <FaRegCalendarAlt
              onClick={() => departureDateRef.current?.showPicker()}
              className="absolute bottom-4 right-4 text-primary-500 cursor-pointer"
            />
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
                    ? "border-accent-600/50"
                    : "border-[#E2E8F0] hover:shadow-lg hover:shadow-accent-500/30",
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
                      ? "text-accent-600!"
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
                className="flex items-center gap-2"
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
                    "w-6 transition-all duration-300",
                    !!adv.find((advLabel) => advLabel === label) &&
                      "blue-img-filter scale-110",
                  )}
                />
              </label>
            ))}
          </div>
        </div>
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
                <label htmlFor={label} className="flex items-center gap-4">
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
import { useEffect, useRef, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
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
          ${values[0].toLocaleString()}
        </p>
        <p className="font-medium text-sm leading-5 text-primary-500">
          ${values[1].toLocaleString()}
        </p>
      </div>
    </div>
  );
};
