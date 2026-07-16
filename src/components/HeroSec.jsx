import { MdOutlineArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";

export default function HeroSec({ title, des }) {
  return (
    <div
      className="flex justify-center h-100 bg-[linear-gradient(to_top,rgb(252,251,254)0%,rgba(252,251,254,0.6)35%,rgba(0,0,0,0.15)70%,rgba(0,0,0,0.35)100%),url('/images/hero-sec-bg2.png')] sm:bg-[linear-gradient(to_top,rgb(252,251,254)0%,rgba(252,251,254,0.6)35%,rgba(0,0,0,0.15)70%,rgba(0,0,0,0.35)100%),url('/images/hero-sec-bg.png')] bg-center sm:bg-top bg-cover"
      style={{
        background: `
    
  `,
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container flex flex-col gap-4 pb-50 sm:pb-40 pt-30 sm:pt-40">
        <div className="flex flex-col items-center text-center gap-2">
          <h1 className="font-bold text-white! text-2xl sm:text-4xl text-shadow-lg text-shadow-black/60">
            {title}
          </h1>
          <p className="text-sm sm:text-base max-w-120 font-bold text-white! text-shadow-sm text-shadow-secondary-800">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
}
