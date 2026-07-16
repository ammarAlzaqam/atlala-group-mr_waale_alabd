import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";

import { MdLocalPhone } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";

import { FaWhatsapp } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

import { MdEmail } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";

import { FaClock } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";

const contactInfoList = [
  {
    FillIcon: IoLocationSharp,
    OutlineIcon: MdOutlineLocationOn,
    title: "العنوان",
    des: "تقع قرية بورتو مطروح على طريق الغرام علي بعد 1.5 كم من طريق القصر.",
    dir: "rtl",
  },
  {
    FillIcon: MdLocalPhone,
    OutlineIcon: MdOutlineLocalPhone,
    title: "الهاتف",
    des: "+20 127 866 3150",
    dir: "ltr",
  },
  {
    FillIcon: IoLogoWhatsapp,
    OutlineIcon: FaWhatsapp,
    title: "واتساب",
    des: "+20 102 138 7202",
    dir: "ltr",
  },
  {
    FillIcon: MdEmail,
    OutlineIcon: MdOutlineMail,
    title: "البريد الإلكتروني",
    des: "info@etlala.com",
    dir: "ltr",
  },
  {
    FillIcon: FaClock,
    OutlineIcon: FaRegClock,
    title: "ساعات العمل",
    des: "متاحون لخدمتكم على مدار 24 ساعة طوال أيام الأسبوع.",
    dir: "rtl",
  },
];

export default contactInfoList;
