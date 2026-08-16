import portoImg from "../../assets/images/followers/porto.png";
import followers from "../../constants/followers";

export default function Followers() {
  return (
    <div className="flex flex-col gap-6 my-12">
      {/*//! wave Img */}
      <div className="relative">
        <img
          src={portoImg}
          alt="proto-img"
          className="w-full h-100 sm:h-130 object-cover"
        />
        {/*//! title */}
        <div className="absolute w-full z-10 bottom-1/2 lg:-top-10 lg:bottom-auto right-1/2 translate-x-1/2 translate-y-1/2 flex flex-col items-center gap-3 text-center">
          <h2 className="text-white! lg:text-primary-500! text-3xl font-bold text-shadow-lg lg:text-shadow-none text-shadow-black/50 max-w-xl">
            أرقام تعكس خبرتنا وثقة عملائنا
          </h2>
          <p className="text-sm sm:text-base text-white! lg:text-secondary-500! text-shadow-lg lg:text-shadow-none backdrop-blur-sm px-2 lg:backdrop-blur-none bg-white/20 lg:bg-transparent text-shadow-black/50 max-w-xl">
            أكثر من 10 سنوات من الخبرة في بورتو مطروح، وخدمة آلاف المصطافين
            وتوفير وحدات مصيفية تناسب مختلف احتياجاتك.
          </p>
        </div>
        <div className="custom-shape-divider-top-1786797115">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="custom-shape-divider-bottom-1786797283">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      {/*//! Counters */}
      <div className="flex justify-center">
        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-13 pt-9">
          {followers.map((item) => (
            <FollowerCard key={item.label} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const FollowerCard = ({ item: { icon, count, suffix, title } }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className="relative bg-white px-4 pt-12 pb-8 flex flex-col items-center text-center gap-2 shadow-lg shadow-primary-400/20"
    >
      {/* Icon */}
      <div className="absolute z-3 top-0 right-1/2 translate-x-1/2 -translate-y-1/2 p-4 bg-[#ecf7f6] rounded-full shadow-[0_-10px_20px_1px_#43b5a950]">
        <img
          src={icon}
          alt="follower-icon"
          className="w-10 green-img-filter animate-pulse"
        />
        <div className="absolute top-0 left-0 rounded-full w-full h-full border-2 border-dotted border-primary-400/40 animate-spin [animation-duration:10s]" />
      </div>

      {/* Counter */}
      <h3 className="z-3 text-3xl font-bold text-primary-500">
        {inView && (
          <CountUp.default
            start={0}
            end={count}
            duration={3}
            suffix={suffix}
            separator=","
          />
        )}
      </h3>

      {/* Title */}
      <p className="z-3">{title}</p>

      {/* Shape */}
      <div className="custom-shape-divider-bottom-1786801237">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill" />
        </svg>
      </div>

      {/* Background */}
      <div className="absolute top-[40%] left-0 bg-linear-to-b from-[#ecf7f6] via-transparent to-transparent w-full h-[60%]" />
    </div>
  );
};
