import overlay1 from "../assets/victors/whyChooseUs/Overlay1.png";
import overlay2 from "../assets/victors/whyChooseUs/Overlay2.png";
import overlay3 from "../assets/victors/whyChooseUs/Overlay3.png";

import familyIcon from "../assets/icons/whyChooseUs/family.svg";
import cleanIcon from "../assets/icons/whyChooseUs/clean.svg";
import confirmIcon from "../assets/icons/whyChooseUs/confirm.svg";

const chooseUsList = [
  {
    title: "بيئة عائلية آمنة",
    des: `جميع وحداتنا تقع في مناطق هادئة وآمنة
      تماماً، مصممة خصيصاً لتناسب احتياجات
      العائلات والأطفال.`,
    icon: familyIcon,
    overlay: {
      img: overlay1,
      position: "left-0 top-0",
    },
    colors: {
      bg: "bg-[#e1e1c9]",
      iconBg: "bg-white",
      textColor: "*:text-secondary-600!",
    },
  },
  {
    title: "نظافة وتعقيم فندقي",
    des: `نتبع أعلى معايير النظافة والتعقيم قبل
      تسليم أي وحدة، مع توفير طاقم صيانة
      دوري لأي طارئ.`,
    icon: cleanIcon,
    overlay: {
      img: overlay2,
      position: "bottom-0 right-0",
    },
    colors: {
      bg: "bg-[#005072]",
      iconBg: "bg-[#19607f]",
      textColor: "*:text-white!",
    },
  },
  {
    title: "مصداقية وحجز موثق",
    des: `نضمن لك مطابقة الصور للواقع بنسبة
      100%، مع إجراءات حجز رسمية تضمن
      حقوقك كاملة.`,
    icon: confirmIcon,
    overlay: {
      img: overlay3,
      position: "top-0 right-0",
    },
    colors: {
      bg: "bg-[#00562f]",
      iconBg: "bg-[#27764f]",
      textColor: "*:text-white!",
    },
  },
];

export default chooseUsList;
