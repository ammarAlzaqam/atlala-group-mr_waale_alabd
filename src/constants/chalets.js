//! Icons
// Details icons
import bathRoomIcon from "../assets/icons/chalets/details/bathroom.png";
import areaIcon from "../assets/icons/chalets/details/maximize.png";
import bedIcon from "../assets/icons/chalets/details/hotel-bed.png";
// tags icons
import availableIcon from "../assets/icons/chalets/tags/convenience.png";
import reservedIcon from "../assets/icons/chalets/tags/reserved.png";
import beachViewIcon from "../assets/icons/chalets/tags/beachView.png";
import poolViewIcon from "../assets/icons/chalets/tags/poolView.png";
import gardenViewIcon from "../assets/icons/chalets/tags/gardenView.png";

import chaletImg1 from "../assets/images/chalets/1.png";
import chaletImg2 from "../assets/images/chalets/2.png";
import chaletImg3 from "../assets/images/chalets/3.png";
import chaletImg4 from "../assets/images/chalets/4.jpg";
import chaletImg5 from "../assets/images/chalets/5.jpg";
import chaletImg6 from "../assets/images/chalets/6.jpg";
import chaletImg7 from "../assets/images/chalets/7.jpg";
import chaletImg8 from "../assets/images/chalets/8.jpg";

import area48 from "../assets/icons/areas/studio.png";
import area75 from "../assets/icons/areas/2rooms.png";
import area96 from "../assets/icons/areas/3rooms.png";

import room1 from "../assets/icons/rooms/1.png";
import room2 from "../assets/icons/rooms/2.png";
import room3 from "../assets/icons/rooms/3.png";
import room4 from "../assets/icons/rooms/4.png";

import familyIcon from "../assets/icons/adv/parents.png";
import modernHomeIcon from "../assets/icons/adv/modern-home.png";
import airConditionIcon from "../assets/icons/adv/air-conditioner.png";
import grillIcon from "../assets/icons/adv/grill.png";
import gardenIcon from "../assets/icons/adv/garden.png";
import privacyIcon from "../assets/icons/adv/privacy.png";
import aquaIcon from "../assets/icons/adv/aqua.png";
import kidsAreaIcon from "../assets/icons/adv/kids-area.png";

export const viewOptions = [
  {
    icon: beachViewIcon,
    name: "على الشاطئ",
    label: "beach view",
    color: "bg-cyan-700 text-white",
  },
  {
    icon: poolViewIcon,
    name: "على المسبح",
    label: "pool view",
    color: "bg-blue-600 text-white",
  },
  {
    icon: gardenViewIcon,
    name: "على الحديقة",
    label: "garden view",
    color: "bg-blue-600 text-white",
  },
];

export const tags = {
  available: {
    icon: availableIcon,
    name: "متاح الآن",
    label: "available",
    color: "bg-green-500/80 text-white",
  },
  reserved: {
    icon: reservedIcon,
    name: "محجوز",
    label: "reserved",
    color: "bg-orange-600/80 text-white",
  },
  beachView: {
    icon: beachViewIcon,
    name: "على الشاطئ",
    label: "beach view",
    color: "bg-cyan-700/80 text-white",
  },
  poolView: {
    icon: poolViewIcon,
    name: "على المسبح",
    label: "pool view",
    color: "bg-blue-600/80 text-white",
  },
  gardenView: {
    icon: gardenViewIcon,
    name: "على الحديقة",
    label: "garden view",
    color: "bg-accent-400/80 text-white",
  },
};

export const advList = [
  { label: "family", name: "مناسب للعائلات", icon: familyIcon },
  { label: "modern", name: "أثاث عصري", icon: modernHomeIcon },
  { label: "airCondition", name: "تكييف كامل", icon: airConditionIcon },
  { label: "grill", name: "شواية", icon: grillIcon },
  { label: "garden", name: "حديقة خاصة", icon: gardenIcon },
  { label: "privacy", name: "خصوصية عالية", icon: privacyIcon },
  { label: "aqua", name: "قريب من منطقة الاكوا", icon: aquaIcon },
  { label: "kidsArea", name: "مطل علي اكوا الاطفال", icon: kidsAreaIcon },
];

const adv = {
  family: { label: "family", name: "مناسب للعائلات" },
  modern: { label: "modern", name: "أثاث عصري" },
  airCon: { label: "airCondition", name: "تكييف كامل" },
  grill: { label: "grill", name: "شواية" },
  garden: { label: "garden", name: "حديقة خاصة" },
  privacy: { label: "privacy", name: "خصوصية عالية" },
  aqua: { label: "aqua", name: "قريب من منطقة الاكوا" },
  kidsArea: { label: "kidsArea", name: "مطل علي اكوا الأطفال" },
};

export const areas = {
  area48: {
    title: "48 م²",
    label: 48,
    icon: area48,
  },
  area75: {
    title: "75 م²",
    label: 75,
    icon: area75,
  },
  area96: {
    title: "96 م²",
    label: 96,
    icon: area96,
  },
};

export const areasList = [
  {
    name: "48 م²",
    label: 48,
    icon: area48,
  },
  {
    name: "75 م²",
    label: 75,
    icon: area75,
  },
  {
    name: "96 م²",
    label: 96,
    icon: area96,
  },
];

export const roomsList = [
  {
    name: "غرفة وحمام",
    label: 2,
    icon: room1,
    nofPeople: "4 أفراد",
  },
  {
    name: "غرفة و2حمام",
    label: 3,
    icon: room2,
    nofPeople: "4 أفراد",
  },
  {
    name: "2غرفة و2حمام",
    label: 4,
    icon: room3,
    nofPeople: "6 أفراد",
  },
  {
    name: "3غرفة و2حمام",
    label: 5,
    icon: room4,
    nofPeople: "8 أفراد",
  },
];

export const rooms = {
  towRooms: {
    name: "غرفة وحمام",
    label: 2,
    icon: room1,
    nofPeople: "4 أفراد",
  },
  threeRooms: {
    name: "غرفة و2حمام",
    label: 3,
    icon: room2,
    nofPeople: "4 أفراد",
  },
  fourRooms: {
    name: "2غرفة و2حمام",
    label: 4,
    icon: room3,
    nofPeople: "6 أفراد",
  },
  fiveRooms: {
    name: "3غرفة و2حمام",
    label: 5,
    icon: room4,
    nofPeople: "8 أفراد",
  },
};

const chaletsList = [
  {
    coverImg: chaletImg4,
    chaletImages: [],
    num: 12001, // عمارة 01 - أرضي - شاليه 01
    price: 2350,
    area: areasList[0],
    tags: [tags.available, tags.gardenView],
    adv: [adv.modern, adv.airCon, adv.privacy, adv.garden, adv.grill],
    rooms: rooms.towRooms,
    details: [
      areas.area48,
      { title: "1 سرير", icon: bedIcon },
      { title: "1 حمام", icon: bathRoomIcon },
    ],
    available: true,
  },
  {
    coverImg: chaletImg2,
    chaletImages: [],
    num: 73002, // عمارة 73 - أرضي - شاليه 02
    price: 2600,
    area: areasList[0],
    tags: [tags.available, tags.poolView],
    adv: [adv.modern, adv.airCon, adv.privacy, adv.garden, adv.grill],
    rooms: rooms.towRooms,
    details: [
      areas.area48,
      { title: "1 سرير", icon: bedIcon },
      { title: "1 حمام", icon: bathRoomIcon },
    ],
    available: true,
  },
  {
    coverImg: chaletImg3,
    chaletImages: [],
    num: 48105, // عمارة 48 - أول - شاليه 05
    price: 3300,
    area: areasList[1],
    tags: [tags.available, tags.beachView],
    adv: [adv.family, adv.modern, adv.privacy, adv.airCon, adv.aqua],
    rooms: rooms.fourRooms,
    details: [
      areas.area75,
      { title: "4 سرير", icon: bedIcon },
      { title: "2 حمام", icon: bathRoomIcon },
    ],
    available: true,
    vip: true,
  },
  {
    coverImg: chaletImg1,
    chaletImages: [],
    num: 23209, // عمارة 23 - ثاني - شاليه 09
    price: 5700,
    area: areasList[2],
    tags: [tags.reserved, tags.beachView],
    adv: [adv.family, adv.modern, adv.privacy, adv.airCon, adv.aqua],
    rooms: rooms.fiveRooms,
    details: [
      areas.area96,
      { title: "6 سرير", icon: bedIcon },
      { title: "2 حمام", icon: bathRoomIcon },
    ],
    available: false,
  },
  {
    coverImg: chaletImg2,
    chaletImages: [],
    num: 17004, // عمارة 07 - أرضي - شاليه 04
    price: 3150,
    area: areasList[1],
    tags: [tags.available, tags.poolView],
    adv: [adv.family, adv.modern, adv.airCon, adv.garden, adv.grill],
    rooms: rooms.threeRooms,
    details: [
      areas.area75,
      { title: "2 سرير", icon: bedIcon },
      { title: "2 حمام", icon: bathRoomIcon },
    ],
    available: true,
  },
  {
    coverImg: chaletImg4,
    chaletImages: [],
    num: 59111, // عمارة 59 - أول - شاليه 11
    price: 2800,
    area: areasList[0],
    tags: [tags.reserved, tags.gardenView],
    adv: [adv.modern, adv.privacy, adv.airCon, adv.kidsArea],
    rooms: rooms.towRooms,
    details: [
      areas.area48,
      { title: "1 سرير", icon: bedIcon },
      { title: "1 حمام", icon: bathRoomIcon },
    ],
    available: false,
  },
  {
    coverImg: chaletImg5,
    chaletImages: [],
    num: 31008, // عمارة 31 - أرضي - شاليه 08
    price: 5500,
    area: areasList[2],
    tags: [tags.available, tags.poolView],
    adv: [adv.family, adv.modern, adv.airCon, adv.garden, adv.grill],
    rooms: rooms.fiveRooms,
    details: [
      areas.area96,
      { title: "6 سرير", icon: bedIcon },
      { title: "2 حمام", icon: bathRoomIcon },
    ],
    available: true,
    vip: true,
  },
  {
    coverImg: chaletImg6,
    chaletImages: [],
    num: 12206, // عمارة 12 - ثاني - شاليه 06
    price: 3400,
    area: areasList[1],
    tags: [tags.available, tags.gardenView],
    adv: [adv.family, adv.modern, adv.airCon, adv.aqua],
    rooms: rooms.fourRooms,
    details: [
      areas.area75,
      { title: "4 سرير", icon: bedIcon },
      { title: "2 حمام", icon: bathRoomIcon },
    ],
    available: true,
    vip: true,
  },
  {
    coverImg: chaletImg3,
    chaletImages: [],
    num: 41003, // عمارة 41 - أرضي - شاليه 03
    price: 2450,
    area: areasList[0],
    tags: [tags.available, tags.beachView],
    adv: [adv.modern, adv.airCon, adv.garden, adv.grill],
    rooms: rooms.towRooms,
    details: [
      areas.area48,
      { title: "1 سرير", icon: bedIcon },
      { title: "1 حمام", icon: bathRoomIcon },
    ],
    available: true,
    vip: true,
  },
  {
    coverImg: chaletImg1,
    chaletImages: [],
    num: 81110, // عمارة 81 - أول - شاليه 10
    price: 5200,
    area: areasList[2],
    tags: [tags.available, tags.beachView],
    adv: [adv.family, adv.modern, adv.privacy, adv.airCon],
    rooms: rooms.fiveRooms,
    details: [
      areas.area96,
      { title: "6 سرير", icon: bedIcon },
      { title: "2 حمام", icon: bathRoomIcon },
    ],
    available: true,
  },
  {
    coverImg: chaletImg6,
    chaletImages: [],
    num: 18112, // عمارة 18 - أول - شاليه 12
    price: 3050,
    area: areasList[1],
    tags: [tags.available, tags.poolView],
    adv: [adv.family, adv.modern, adv.airCon, adv.kidsArea],
    rooms: rooms.threeRooms,
    details: [
      areas.area75,
      { title: "2 سرير", icon: bedIcon },
      { title: "2 حمام", icon: bathRoomIcon },
    ],
    available: true,
  },
  {
    coverImg: chaletImg4,
    chaletImages: [],
    num: 68007, // عمارة 68 - أرضي - شاليه 07
    price: 2700,
    area: areasList[0],
    tags: [tags.available, tags.gardenView],
    adv: [adv.modern, adv.airCon, adv.garden, adv.grill],
    rooms: rooms.towRooms,
    details: [
      areas.area48,
      { title: "1 سرير", icon: bedIcon },
      { title: "1 حمام", icon: bathRoomIcon },
    ],
    available: true,
    vip: true,
  },
  {
    coverImg: chaletImg5,
    chaletImages: [],
    num: 37204, // عمارة 37 - ثاني - شاليه 04
    price: 5900,
    area: areasList[2],
    tags: [tags.available, tags.beachView],
    adv: [adv.family, adv.modern, adv.airCon],
    rooms: rooms.fiveRooms,
    details: [
      areas.area96,
      { title: "6 سرير", icon: bedIcon },
      { title: "2 حمام", icon: bathRoomIcon },
    ],
    available: true,
  },
  {
    coverImg: chaletImg7,
    chaletImages: [],
    num: 52010, // عمارة 52 - أرضي - شاليه 10
    price: 3450,
    area: areasList[1],
    tags: [tags.reserved, tags.poolView],
    adv: [adv.family, adv.modern, adv.airCon, adv.garden, adv.grill],
    rooms: rooms.fourRooms,
    details: [
      areas.area75,
      { title: "4 سرير", icon: bedIcon },
      { title: "2 حمام", icon: bathRoomIcon },
    ],
    available: false,
    vip: true,
  },
  {
    coverImg: chaletImg3,
    chaletImages: [],
    num: 92108, // عمارة 92 - أول - شاليه 08
    price: 2750,
    area: areasList[0],
    tags: [tags.available, tags.beachView],
    adv: [adv.modern, adv.airCon, adv.privacy, adv.aqua, adv.kidsArea],
    rooms: rooms.towRooms,
    details: [
      areas.area48,
      { title: "1 سرير", icon: bedIcon },
      { title: "1 حمام", icon: bathRoomIcon },
    ],
    available: true,
  },
  {
    coverImg: chaletImg1,
    chaletImages: [],
    num: 23006, // عمارة 23 - أرضي - شاليه 06
    price: 5400,
    area: areasList[2],
    tags: [tags.available, tags.gardenView],
    adv: [adv.family, adv.modern, adv.airCon, adv.garden, adv.grill],
    rooms: rooms.fiveRooms,
    details: [
      areas.area96,
      { title: "6 سرير", icon: bedIcon },
      { title: "2 حمام", icon: bathRoomIcon },
    ],
    available: true,
  },
  {
    coverImg: chaletImg6,
    chaletImages: [],
    num: 63102, // عمارة 63 - أول - شاليه 02
    price: 3250,
    area: areasList[1],
    tags: [tags.available, tags.gardenView],
    adv: [adv.family, adv.modern, adv.airCon, adv.kidsArea],
    rooms: rooms.threeRooms,
    details: [
      areas.area75,
      { title: "2 سرير", icon: bedIcon },
      { title: "2 حمام", icon: bathRoomIcon },
    ],
    available: true,
  },
  {
    coverImg: chaletImg8,
    chaletImages: [],
    num: 12009, // عمارة 12 - أرضي - شاليه 09
    price: 2550,
    area: areasList[0],
    tags: [tags.reserved, tags.poolView],
    adv: [adv.modern, adv.airCon, adv.garden, adv.grill],
    rooms: rooms.towRooms,
    details: [
      areas.area48,
      { title: "1 سرير", icon: bedIcon },
      { title: "1 حمام", icon: bathRoomIcon },
    ],
    available: false,
  },
  {
    coverImg: chaletImg5,
    chaletImages: [],
    num: 73111, // عمارة 73 - أول - شاليه 11
    price: 3350,
    area: areasList[1],
    tags: [tags.available, tags.beachView],
    adv: [adv.family, adv.modern, adv.privacy, adv.airCon],
    rooms: rooms.fourRooms,
    details: [
      areas.area75,
      { title: "4 سرير", icon: bedIcon },
      { title: "2 حمام", icon: bathRoomIcon },
    ],
    available: true,
  },
  {
    coverImg: chaletImg7,
    chaletImages: [],
    num: 41201, // عمارة 41 - ثاني - شاليه 01
    price: 5700,
    area: areasList[2],
    tags: [tags.reserved, tags.beachView],
    adv: [adv.family, adv.modern, adv.privacy, adv.airCon],
    rooms: rooms.fiveRooms,
    details: [
      areas.area96,
      { title: "6 سرير", icon: bedIcon },
      { title: "2 حمام", icon: bathRoomIcon },
    ],
    available: false,
  },
  {
    coverImg: chaletImg8,
    chaletImages: [],
    num: 59011, // عمارة 59 - أرضي - شاليه 11
    price: 2750,
    area: areasList[0],
    tags: [tags.available, tags.beachView],
    adv: [adv.modern, adv.airCon, adv.garden, adv.grill],
    rooms: rooms.towRooms,
    details: [
      areas.area48,
      { title: "1 سرير", icon: bedIcon },
      { title: "1 حمام", icon: bathRoomIcon },
    ],
    available: true,
  },
  {
    coverImg: chaletImg7,
    chaletImages: [],
    num: 18205, // عمارة 18 - ثاني - شاليه 05
    price: 3150,
    area: areasList[1],
    tags: [tags.available, tags.poolView],
    adv: [adv.family, adv.modern, adv.airCon, adv.kidsArea],
    rooms: rooms.threeRooms,
    details: [
      areas.area75,
      { title: "2 سرير", icon: bedIcon },
      { title: "2 حمام", icon: bathRoomIcon },
    ],
    available: true,
  },
  {
    coverImg: chaletImg6,
    chaletImages: [],
    num: 81012, // عمارة 81 - أرضي - شاليه 12
    price: 5500,
    area: areasList[2],
    tags: [tags.available, tags.gardenView],
    adv: [adv.family, adv.modern, adv.airCon, adv.garden, adv.grill],
    rooms: rooms.fiveRooms,
    details: [
      areas.area96,
      { title: "6 سرير", icon: bedIcon },
      { title: "2 حمام", icon: bathRoomIcon },
    ],
    available: true,
  },
  {
    coverImg: chaletImg8,
    chaletImages: [],
    num: 31103, // عمارة 31 - أول - شاليه 03
    price: 3450,
    area: areasList[1],
    tags: [tags.reserved, tags.beachView],
    adv: [adv.family, adv.modern, adv.privacy, adv.airCon],
    rooms: rooms.fourRooms,
    details: [
      areas.area75,
      { title: "4 سرير", icon: bedIcon },
      { title: "2 حمام", icon: bathRoomIcon },
    ],
    available: false,
  },
  {
    coverImg: chaletImg7,
    chaletImages: [],
    num: 27008, // عمارة 07 - أرضي - شاليه 08
    price: 2400,
    area: areasList[0],
    tags: [tags.available, tags.poolView],
    adv: [adv.modern, adv.airCon, adv.garden, adv.grill],
    rooms: rooms.towRooms,
    details: [
      areas.area48,
      { title: "1 سرير", icon: bedIcon },
      { title: "1 حمام", icon: bathRoomIcon },
    ],
    available: true,
  },
  {
    coverImg: chaletImg4,
    chaletImages: [],
    num: 68106, // عمارة 68 - أول - شاليه 06
    price: 5300,
    area: areasList[2],
    tags: [tags.available, tags.poolView],
    adv: [adv.family, adv.modern, adv.airCon],
    rooms: rooms.fiveRooms,
    details: [
      areas.area96,
      { title: "6 سرير", icon: bedIcon },
      { title: "2 حمام", icon: bathRoomIcon },
    ],
    available: true,
  },
  {
    coverImg: chaletImg6,
    chaletImages: [],
    num: 23110, // عمارة 23 - أول - شاليه 10
    price: 3300,
    area: areasList[1],
    tags: [tags.available, tags.gardenView],
    adv: [adv.family, adv.modern, adv.privacy, adv.airCon],
    rooms: rooms.fourRooms,
    details: [
      areas.area75,
      { title: "4 سرير", icon: bedIcon },
      { title: "2 حمام", icon: bathRoomIcon },
    ],
    available: true,
  },
  {
    coverImg: chaletImg1,
    chaletImages: [],
    num: 52002, // عمارة 52 - أرضي - شاليه 02
    price: 2250,
    area: areasList[0],
    tags: [tags.reserved, tags.gardenView],
    adv: [adv.modern, adv.airCon, adv.garden, adv.grill],
    rooms: rooms.towRooms,
    details: [
      areas.area48,
      { title: "1 سرير", icon: bedIcon },
      { title: "1 حمام", icon: bathRoomIcon },
    ],
    available: false,
  },
  {
    coverImg: chaletImg3,
    chaletImages: [],
    num: 92203, // عمارة 92 - ثاني - شاليه 03
    price: 5850,
    area: areasList[2],
    tags: [tags.reserved, tags.beachView],
    adv: [adv.family, adv.modern, adv.airCon],
    rooms: rooms.fiveRooms,
    details: [
      areas.area96,
      { title: "6 سرير", icon: bedIcon },
      { title: "2 حمام", icon: bathRoomIcon },
    ],
    available: false,
  },
  {
    coverImg: chaletImg2,
    chaletImages: [],
    num: 41104, // عمارة 41 - أول - شاليه 04
    price: 3100,
    area: areasList[1],
    tags: [tags.available, tags.poolView],
    adv: [adv.family, adv.modern, adv.airCon],
    rooms: rooms.threeRooms,
    details: [
      areas.area75,
      { title: "2 سرير", icon: bedIcon },
      { title: "2 حمام", icon: bathRoomIcon },
    ],
    available: true,
  },
];

export default chaletsList;
