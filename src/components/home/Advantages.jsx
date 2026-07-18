import React from "react";
import advList from "../../constants/advantages";
import clsx from "clsx";

export default function Advantages() {
  return (
    <div className="flex justify-center">
      <div className="container py-12 relative">
        <div className="relative z-2 bg-white rounded-xl shadow-lg shadow-primary-500/20 py-6 flex flex-wrap flex-col sm:flex-row items-center sm:items-stretch gap-y-6 overflow-hidden">
          <AnimatedBorder />
          {advList.map(({ title, icon }, index) => (
            <div
              key={title}
              className={clsx(
                "relative z-2 lg:flex-1 border-b sm:border-b-0 border-l-0 sm:border-l border-black/5 flex flex-col items-center gap-6 w-[70%] sm:w-[50%] md:w-[25%] lg:w-auto pb-5 sm:pb-0",
                index + 1 === advList.length && "border-none",
              )}
            >
              <img
                src={icon}
                alt="icon"
                className="w-10 sm:w-8 z-2 green-img-filter"
              />
              <p className="z-2 text-center font-semibold sm:text-sm text-primary-700! sm:max-w-[80%]">
                {title}
              </p>
              <div className="absolute top-0 left-0 inset-0 contrast-90 bg-[url('/images/favicon.png')] bg-size-[50%] bg-position-[center_-25px] sm:bg-position-[center_-10px] bg-no-repeat opacity-80 z-1"></div>
            </div>
          ))}
          <div className="absolute top-0 left-0 inset-0 bg-[url('/images/stars.png')] blue-img-filter opacity-15 z-1"></div>
        </div>
        <div className="absolute top-0 w-5 h-12 left-1/2 -translate-x-1/2 overflow-hidden">
          <div className="absolute -top-250 left-1/2 -translate-x-1/2 w-px h-262 moveAnimate border-r-2 border-dashed border-primary-500/30 z-1" />
        </div>
      </div>
    </div>
  );
}

function AnimatedBorder() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-30 animate-border"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {/* البوردر المنقط */}
      <rect
        x="0"
        y="0"
        width="100"
        height="100"
        rx="3"
        ry="3"
        fill="none"
        stroke="#03505433"
        strokeWidth="0.5"
        strokeDasharray="0.5 2"
        strokeLinecap="round"
      />
    </svg>
  );
}
