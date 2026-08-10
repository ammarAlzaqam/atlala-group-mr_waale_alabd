import { useEffect, useMemo, useState } from "react";
import ChaletCard from "../components/ChaletCard";
import Filters from "../components/Chalets/Filters";
import HeroSec from "../components/HeroSec";
import chaletsList from "../constants/chalets";
import {
  useAdv,
  useArea,
  useArriveDate,
  useBed,
  useClassification,
  useFloor,
  useLiveDate,
  usePageNumber,
  usePriceRange,
  usePriceRanking,
  useRoom,
  useSheetChaletsList,
  useView,
} from "../store";
import clsx from "clsx";

export default function ChaletsPage() {
  const [nofPages, setNofPages] = useState(0);
  const chPerPage = 8;

  const sheetChaletList = useSheetChaletsList((state) => state.sheetChaletList);

  const priceRanking = usePriceRanking((state) => state.priceRanking);
  const setPriceRanking = usePriceRanking((state) => state.setPriceRanking);

  const arriveDate = useArriveDate((state) => state.arriveDate);
  const liveDate = useLiveDate((state) => state.liveDate);
  const priceRange = usePriceRange((state) => state.priceRange);
  const view = useView((state) => state.view);
  const adv = useAdv((state) => state.adv);
  const area = useArea((state) => state.area);
  const room = useRoom((state) => state.room);
  const classification = useClassification((state) => state.classification);
  const bed = useBed((state) => state.bed);
  const floor = useFloor((state) => state.floor);

  const pageNumber = usePageNumber((state) => state.pageNumber);
  const setPageNumber = usePageNumber((state) => state.setPageNumber);

  const isDateAvailable = (chaletNum, arriveDate, leaveDate) => {
    const arrive = new Date(arriveDate);
    const leave = new Date(leaveDate);
    const current = new Date(arrive);
    while (current <= leave) {
      const monthKey = `m${current.getMonth() + 1}`;
      const chalet = sheetChaletList?.[monthKey]?.[chaletNum];
      if (!chalet) return false;

      const dayIndex = current.getDate() - 1;

      const value = chalet.data[dayIndex];

      // أي حاجة غير فاضي تعتبر محجوزة
      if (String(value).trim() !== "") {
        return false;
      }

      current.setDate(current.getDate() + 1);
    }

    return true;
  };

  const filteredChaletsBeforeDate = useMemo(() => {
    let data = [...chaletsList];

    data = data.filter((chalet) => {
      // السعر
      const priceMatched =
        chalet.price >= priceRange[0] && chalet.price <= priceRange[1];

      // الإطلالة
      const viewMatched =
        !view || chalet.view.some((tag) => tag.label === view);

      // المرافق
      const advMatched =
        adv.length === 0 ||
        adv.every((selected) =>
          chalet.adv.some((item) => item.label === selected),
        );

      // المساحة
      const areaMatched = !area || chalet.details[1].label === area;

      // عدد الغرف
      const roomMatched = !room || chalet.details[2].label === room;

      // الفئة
      const classificationMatched =
        !classification || chalet.infos[0].label === classification;

      // السراير
      const bedMatched = !bed || chalet.infos[2].label === bed;

      // الدور
      const floorMatched = !floor || chalet.details[0].label === floor;

      return (
        priceMatched &&
        viewMatched &&
        advMatched &&
        areaMatched &&
        roomMatched &&
        classificationMatched &&
        bedMatched &&
        floorMatched
      );
    });

    // ترتيب حسب السعر
    if (priceRanking === "highest") {
      data.sort((a, b) => b.price - a.price);
    } else if (priceRanking === "lowest") {
      data.sort((a, b) => a.price - b.price);
    } else if (priceRanking === "num-highest") {
      data.sort((a, b) => b.num - a.num);
    } else if (priceRanking === "num-lowest") {
      data.sort((a, b) => a.num - b.num);
    }

    setNofPages(Math.ceil(data.length / chPerPage));
    setPageNumber(1);
    return data;
  }, [
    priceRanking,
    priceRange,
    view,
    adv,
    area,
    room,
    classification,
    bed,
    floor,
  ]);

  const filteredChalets = useMemo(() => {
    let data = [...filteredChaletsBeforeDate];

    data = data.filter((chalet) => {
      // تاريخ الوصول والمغادرة
      let dateMatched = true;

      if (arriveDate && liveDate) {
        dateMatched = isDateAvailable(chalet.num, arriveDate, liveDate);
      }
      return dateMatched;
    });

    setNofPages(Math.ceil(data.length / chPerPage));
    setPageNumber(1);
    return data;
  }, [arriveDate, liveDate, filteredChaletsBeforeDate, sheetChaletList]);

  const chaletsForPage = useMemo(() => {
    const skip = (pageNumber - 1) * chPerPage;
    return filteredChalets.slice(skip, skip + chPerPage);
  }, [filteredChalets, pageNumber, chPerPage]);

  return (
    <section className="flex flex-col gap-8 bg-[#FCFBFE] pb-12">
      <HeroSec
        title="اكتشف شاليهك المثالي"
        des="اختر من بين 63 شاليه مميز في قرية بورتو مطروح بأفضل المواقع والأسعار."
      />
      {/*Main (filters & Chalets) */}
      <div className="flex justify-center">
        <div className="container flex flex-col md:flex-row md:items-start gap-6">
          <Filters />
          <div className="flex flex-col gap-4 grow">
            {/* head title */}
            <div className="flex items-start md:items-center justify-between">
              {/*//TODO => Num of chalets */}
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-xl md:text-2xl leading-[120%]">
                  اعثر على شاليهك المفضل
                </h3>
                <p className="text-xs md:text-sm text-secondary-500 whitespace-nowrap">
                  تم العثور على ({filteredChalets.length}) من (
                  {chaletsList.length}) شاليه
                </p>
              </div>
              <select
                onChange={(e) => {
                  setPriceRanking(e.target.value);
                }}
                value={priceRanking}
                className="select w-fit shrink-0 rounded-xl border-secondary-100"
              >
                <option value="lowest" className="whitespace-nowrap">
                  الاقل سعراً
                </option>
                <option value="highest" className="whitespace-nowrap">
                  الاعلي سعراً
                </option>
                <option value="num-lowest" className="whitespace-nowrap">
                  رقم الشاليه من الأصغر للأكبر
                </option>
                <option value="num-highest" className="whitespace-nowrap">
                  رقم الشاليه من الأكبر للأصغر
                </option>
              </select>
            </div>
            {chaletsForPage.length > 0 ? (
              <div className="flex flex-col gap-8">
                {/* chalets */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 w-full">
                  {chaletsForPage.map((ch) => (
                    <ChaletCard key={ch.num} ch={ch} />
                  ))}
                </div>
                {/* pagination */}
                <div className="join self-center">
                  <button
                    disabled={pageNumber >= nofPages}
                    className={clsx("join-item btn")}
                    onClick={() => {
                      if (pageNumber < nofPages) {
                        setPageNumber(pageNumber + 1);
                        scrollTo(0, 350);
                      }
                    }}
                  >
                    «
                  </button>
                  <button className="join-item btn">
                    Page {pageNumber} of {nofPages}
                  </button>
                  <button
                    className="join-item btn"
                    disabled={pageNumber <= 1}
                    onClick={() => {
                      if (pageNumber > 1) {
                        setPageNumber(pageNumber - 1);
                        scrollTo(0, 350);
                      }
                    }}
                  >
                    »
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-secondary-400">
                لم نعثر على أي شاليهات مطابقة. جرّب تعديل معايير البحث أو إزالة
                بعض الفلاتر.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
