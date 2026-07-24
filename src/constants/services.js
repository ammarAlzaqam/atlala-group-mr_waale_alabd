import chaletsImg from "../assets/images/services/chalets.jpg";
import flatsImg from "../assets/images/services/flats.jpeg";
import saleImg from "../assets/images/services/sale.jpeg";
import finishImg from "../assets/images/services/finish.jpeg";

import chaletsIcon from "../assets/icons/services/chalets.png";
import flatsIcon from "../assets/icons/services/flats.png";
import saleIcon from "../assets/icons/services/sale.png";
import finishIcon from "../assets/icons/services/finish.png";

const servicesList = [
  {
    img: chaletsImg,
    icon: chaletsIcon,
    title: "إيجار شاليهات بورتو مطروح",
    des: "شاليهات فاخرة بإطلالات متنوعة على البحر وحمامات السباحة، مجهزة بالكامل لتمنحك إقامة مريحة ومميزة داخل بورتو مطروح.",
    adv: [
      "تشطيبات ممتازة",
      "مفروشة بالكامل",
      "أجهزة حديثة",
      "جاهزة للاستقيال الفوري",
    ],
    color: {
      text: "text-primary-600!",
      bg: "bg-primary-600/90",
      bgT: "bg-primary-600/30",
      btn: "bg-primary-600",
      shadowHover: "hover:shadow-primary-600/30",
      insetShadow: "inset-shadow-[0px_-5px_5px_#00658e55]",
      gradient: "bg-linear-to-t from-primary-600/60 to-black/50",
    },
    btn: { text: "استعرض الشاليهات", route: "/chalets" },
  },
  {
    img: flatsImg,
    icon: flatsIcon,
    title: "إيجار شقق علي البحر",
    des: "شقق مميزة بإطلالات مباشرة على البحر، مجهزة بالكامل لتوفر لك إقامة هادئة ومريحة مع أفضل المواقع والخدمات.",
    adv: [
      "إطلالة مباشرة على البحر",
      "مواقع مميزة",
      "مفروشة بالكامل",
      "أسعار تنافسية",
    ],
    color: {
      text: "text-primary-400!",
      bg: "bg-primary-400/90",
      bgT: "bg-primary-400/30",
      btn: "bg-primary-400",
      shadowHover: "hover:shadow-primary-400/30",
      insetShadow: "inset-shadow-[0px_-5px_5px_#4c98c655]",
      gradient: "bg-linear-to-t from-primary-400/60 to-black/50",
    },
    btn: { text: "تواصل معنا", route: "/contact" },
  },
  {
    img: saleImg,
    icon: saleIcon,
    title: "بيع الشاليهات والشقق السياحية",
    des: "نوفر مجموعة متنوعة من الشاليهات والشقق السياحية للبيع في مواقع مميزة، مع خيارات تناسب مختلف الاحتياجات والميزانيات.",
    adv: [
      "مواقع مميزة داخل القرية",
      "أسعار تنافسية",
      "وحدات بمساحات متنوعة",
      "إجراءات شراء سهلة",
    ],
    color: {
      text: "text-[#40a669]!",
      bg: "bg-[#40a669]/90",
      bgT: "bg-[#40a669]/30",
      btn: "bg-[#40a669]",
      shadowHover: "hover:shadow-[#40a669]/30",
      insetShadow: "inset-shadow-[0px_-5px_5px_#29875355]",
      gradient: "bg-linear-to-t from-[#40a669]/60 to-black/50",
    },
    btn: { text: "تواصل معنا", route: "/contact" },
  },
  {
    img: finishImg,
    icon: finishIcon,
    title: "تشطيب وتجهيز الشاليهات",
    des: "نقدم خدمات تشطيب الشاليهات من الطوب الأحمر وحتى التسليم الكامل، مع إمكانية الفرش والتجهيز بأحدث التصميمات والخامات.",
    adv: [
      "تشطيب كامل من الطوب الأحمر",
      "فرش وتجهيز بأثاث عصري",
      "تصميمات وتشطيبات متنوعة",
      "خامات عالية الجودة",
    ],
    color: {
      text: "text-accent-500!",
      bg: "bg-accent-500/90",
      bgT: "bg-accent-500/30",
      btn: "bg-accent-500",
      shadowHover: "hover:shadow-accent-500/30",
      insetShadow: "inset-shadow-[0px_-5px_5px_#cca76355]",
      gradient: "bg-linear-to-t from-accent-500/60 to-black/50",
    },
    btn: {
      text: "اطلب الخدمة",
      route: "/contact",
    },
  },
];
export default servicesList;
