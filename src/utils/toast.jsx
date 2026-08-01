import toast from "react-hot-toast";
import { BiInfoCircle } from "react-icons/bi";

export const toastInfo = (m) =>
  toast(m, {
    icon: <BiInfoCircle className="text-2xl text-yellow-500" />,
  });
