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
    des: "على طريق الغرام علي بعد 1.5 كم من طريق القصر.",
    dir: "rtl",
    color: {
      text: "text-sky-500",
      bg: "bg-sky-500/5",
      shadow: "shadow-lg shadow-sky-500/20",
    },
    hover: {
      bgImg:
        "bg-[linear-gradient(#00000060_50%,#4CC9F060),url('/images/contact-info/location2.png')]",
      shadow: "hover:shadow-lg hover:shadow-sky-500/20!",
    },
  },
  {
    FillIcon: MdLocalPhone,
    OutlineIcon: MdOutlineLocalPhone,
    title: "الهاتف",
    des: "+20 127 866 3150",
    dir: "ltr",
    color: {
      text: "text-cyan-500",
      bg: "bg-cyan-500/5",
      shadow: "shadow-lg shadow-cyan-500/20",
    },
    hover: {
      bgImg:
        "bg-[linear-gradient(#00000060_50%,#00A6F460),url('/images/contact-info/phone2.png')]",
      shadow: "hover:shadow-lg hover:shadow-cyan-500/20!",
    },
  },
  {
    FillIcon: IoLogoWhatsapp,
    OutlineIcon: FaWhatsapp,
    title: "واتساب",
    des: "+20 102 138 7202",
    dir: "ltr",
    color: {
      text: "text-green-500",
      bg: "bg-green-500/5",
      shadow: "shadow-lg shadow-green-500/20",
    },
    hover: {
      bgImg:
        "bg-[linear-gradient(#00000060_50%,#25D36660),url('/images/contact-info/whatsapp2.png')]",
      shadow: "hover:shadow-lg hover:shadow-green-500/20!",
    },
  },
  {
    FillIcon: MdEmail,
    OutlineIcon: MdOutlineMail,
    title: "البريد الإلكتروني",
    des: "info@etlala.com",
    dir: "ltr",
    color: {
      text: "text-blue-400",
      bg: "bg-blue-400/5",
      shadow: "shadow-lg shadow-blue-500/20",
    },
    hover: {
      bgImg:
        "bg-[linear-gradient(#00000060_50%,#7CCBFF60),url('/images/contact-info/email2.png')]",
      shadow: "hover:shadow-lg hover:shadow-blue-500/20!",
    },
  },
  {
    FillIcon: FaClock,
    OutlineIcon: FaRegClock,
    title: "ساعات العمل",
    des: "متاحون لخدمتكم على مدار 24 ساعة طوال أيام الأسبوع.",
    dir: "rtl",
    color: {
      text: "text-amber-400",
      bg: "bg-amber-400/5",

      shadow: "shadow-lg shadow-amber-500/20",
    },
    hover: {
      bgImg:
        "bg-[linear-gradient(#00000060_50%,#CCA76360),url('/images/contact-info/clock2.png')]",
      shadow: "hover:shadow-lg hover:shadow-amber-500/20!",
    },
  },
];

export default contactInfoList;
