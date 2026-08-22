import aquaCoverImg from "../assets/images/facilities/aquapark.jpg";
import beachCoverImg from "../assets/images/facilities/beach.jpg";
import fastFoodCoverImg from "../assets/images/facilities/fastFood.jpg";
import fieldCoverImg from "../assets/images/facilities/field.jpg";
import foodTruckCoverImg from "../assets/images/facilities/foodTruck.jpg";
import grillCoverImg from "../assets/images/facilities/grill.jpeg";
import kidsAquaCoverImg from "../assets/images/facilities/kids-aqua.jpg";
import kidsAreaCoverImg from "../assets/images/facilities/kids-area.jpg";
import mosqueCoverImg from "../assets/images/facilities/mosque.jpg";
import officeCoverImg from "../assets/images/facilities/office.jpg";
import parkingCoverImg from "../assets/images/facilities/parking.jpg";
import pergolaCoverImg from "../assets/images/facilities/pergola.jpg";
import shoppingCoverImg from "../assets/images/facilities/superMarket.jpg";
import wheelCoverImg from "../assets/images/facilities/bicycle.jpg";

import aquaIcon from "../assets/icons/facilities/list/aqua.png";
import beachIcon from "../assets/icons/facilities/list/beach.png";
import fastFoodIcon from "../assets/icons/facilities/list/fast-food.png";
import fieldIcon from "../assets/icons/facilities/list/field.png";
import foodTruckIcon from "../assets/icons/facilities/list/food-truck.png";
import grillIcon from "../assets/icons/facilities/list/grill.png";
import kidsAquaIcon from "../assets/icons/facilities/list/kidsAqua.png";
import kidsAreaIcon from "../assets/icons/facilities/list/kidsArea.png";
import mosqueIcon from "../assets/icons/facilities/list/mosque.png";
import officeIcon from "../assets/icons/facilities/list/office-building.png";
import parkingIcon from "../assets/icons/facilities/list/parking.png";
import pergolaIcon from "../assets/icons/facilities/list/pergola.png";
import shoppingIcon from "../assets/icons/facilities/list/shopping-cart.png";
import wheelIcon from "../assets/icons/facilities/list/wheel.png";

import facilitiesIcon from "../assets/icons/facilities/adv/facilities.png";
import familyIcon from "../assets/icons/facilities/adv/family.png";
import locationIcon from "../assets/icons/facilities/adv/location.png";
import availableIcon from "../assets/icons/facilities/adv/availability.png";

const facilities = [
  {
    images: [parkingCoverImg],
    label: "parking",
    title: "موقف السيارات",
    des: "مواقف واسعة ومميزة خلف كل عمارة لراحتك وسهولة ركن سيارتك.",
    price: "مجاني",
    availability: "24/7",
    icon: parkingIcon,
  },

  {
    images: [aquaCoverImg],
    label: "aqua",
    title: "أكوا بارك للكبار",
    des: "استمتع بزحاليق وألعاب مائية ممتعة وتجربة مليئة بالحماس والمرح.",
    price: "400 ج.م (نقدمها مجاناً)",
    availability: "10ص - 2م",
    icon: aquaIcon,
  },

  {
    images: [beachCoverImg],
    label: "beach",
    title: "الشاطئ الخاص",
    des: "شاطئ خاص للاستمتاع بالبحر وأجواء هادئة ومميزة تناسب جميع أفراد العائلة.",
    price: "مجاني",
    availability: "10ص - 7م",
    icon: beachIcon,
  },

  {
    images: [fastFoodCoverImg],
    label: "fastFood",
    title: "أكلات سريعة",
    des: "وجبات سريعة وكريب وسناكس متنوعة تناسب مختلف الأوقات والأذواق.",
    price: "حسب الطلب",
    availability: "يوميًا",
    icon: fastFoodIcon,
  },

  {
    images: [fieldCoverImg],
    label: "field",
    title: "ملعب كرة القدم",
    des: "ملعب داخل القرية لممارسة كرة القدم وقضاء وقت ممتع مع الأصدقاء.",
    price: "مجاني",
    availability: "يوميًا",
    icon: fieldIcon,
  },

  {
    images: [foodTruckCoverImg],
    label: "foodTruck",
    title: "عربة الطعام والمشروبات",
    des: "أكلات ومشروبات وعصائر طازجة وآيس كريم لتستمتع بوقتك داخل القرية.",
    price: "حسب الطلب",
    availability: "يوميًا",
    icon: foodTruckIcon,
  },

  {
    images: [grillCoverImg],
    label: "grill",
    title: "مشويات وأسماك",
    des: "أسماك ومشويات طازجة وأشهى الأكلات لتستمتع بوجبة مميزة داخل القرية.",
    price: "حسب الطلب",
    availability: "يوميًا",
    icon: grillIcon,
  },

  {
    images: [kidsAquaCoverImg],
    label: "kidsAqua",
    title: "أكوا بارك للأطفال",
    des: "منطقة ألعاب مائية آمنة وممتعة للأطفال لقضاء وقت مليء بالمرح.",
    price: "مجاناً",
    availability: "10ص - 7م",
    icon: kidsAquaIcon,
  },

  {
    images: [kidsAreaCoverImg],
    label: "kidsArea",
    title: "كيدز إريا",
    des: "منطقة مخصصة للأطفال تضم ألعابًا وأنشطة ممتعة ومناسبة لمختلف الأعمار.",
    price: "مجاناً",
    availability: "يوميًا",
    icon: kidsAreaIcon,
  },

  {
    images: [mosqueCoverImg],
    label: "mosque",
    title: "المسجد",
    des: "مسجد كبير داخل القرية لأداء الصلاة في أجواء مريحة وهادئة.",
    price: "متاح",
    availability: "يوميًا",
    icon: mosqueIcon,
  },

  {
    images: [officeCoverImg],
    label: "office",
    title: "مكتب إطلالة العقارية",
    des: "مكتبنا بجوار البوابة الرئيسية لخدمتك ومساعدتك وتلبية احتياجاتك.",
    price: "متاح",
    availability: "يوميًا",
    icon: officeIcon,
  },

  {
    images: [pergolaCoverImg],
    label: "pergola",
    title: "البراجولات",
    des: "قعدات مريحة بجوار حمام السباحة وقريبة من البحر للاستمتاع بأجواء القرية.",
    price: "من 80 ج.م",
    availability: "يوميًا",
    icon: pergolaIcon,
  },

  {
    images: [shoppingCoverImg],
    label: "shopping",
    title: "الهايبر ماركت",
    des: "كل احتياجاتك اليومية متوفرة في مكان واحد وبأسعار مناسبة للجميع.",
    price: "حسب المنتج",
    availability: "يوميًا",
    icon: shoppingIcon,
  },

  {
    images: [wheelCoverImg],
    label: "wheel",
    title: "تأجير العجل والسكوتر",
    des: "عجل وسكوتر وسكوتر كهربائي للتجول والاستمتاع بأجواء القرية.",
    price: "من 40 ج.م",
    availability: "يوميًا",
    icon: wheelIcon,
  },
];

export const facilitiesAdvList = [
  {
    title: "مرافق متكاملة",
    label: "facilities",
    des: "كل احتياجاتك هنا",
    icon: facilitiesIcon,
  },

  {
    title: "للعائلة",
    label: "family",
    des: "متعة تناسب الجميع",
    icon: familyIcon,
  },

  {
    title: "موقع مميز",
    label: "location",
    des: "كل شيء قريب منك",
    icon: locationIcon,
  },

  {
    title: "متاحة يوميًا",
    label: "available",
    des: "خدمات متاحة يوميًا",
    icon: availableIcon,
  },
];

export default facilities;
