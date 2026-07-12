import { useEffect, useMemo, useState } from "react";
import ChaletCard from "../components/ChaletCard";
import Filters from "../components/Chalets/Filters";
import HeadTitle from "../components/Chalets/HeadTitle";
import chaletsList from "../constants/chalets";
import {
  useAdv,
  useArea,
  usePageNumber,
  usePriceRange,
  usePriceRanking,
  useRoom,
  useView,
} from "../store";

export default function ChaletsPage() {
  const [nofPages, setNofPages] = useState(0);
  const chPerPage = 8;

  const priceRanking = usePriceRanking((state) => state.priceRanking);
  const setPriceRanking = usePriceRanking((state) => state.setPriceRanking);

  const priceRange = usePriceRange((state) => state.priceRange);
  const view = useView((state) => state.view);
  const adv = useAdv((state) => state.adv);
  const area = useArea((state) => state.area);
  const room = useRoom((state) => state.room);
  const pageNumber = usePageNumber((state) => state.pageNumber);
  const setPageNumber = usePageNumber((state) => state.setPageNumber);

  const filteredChalets = useMemo(() => {
    let data = [...chaletsList];

    data = data.filter((chalet) => {
      // السعر
      const priceMatched =
        chalet.price >= priceRange[0] && chalet.price <= priceRange[1];

      // الإطلالة
      const viewMatched =
        !view || chalet.tags.some((tag) => tag.label === view);

      // المرافق
      const advMatched =
        adv.length === 0 ||
        adv.every((selected) =>
          chalet.adv.some((item) => item.label === selected),
        );

      // المساحة
      const areaMatched = !area || chalet.area.label === area;

      // عدد الغرف
      const roomMatched = !room || chalet.rooms.label === room;

      return (
        priceMatched && viewMatched && advMatched && areaMatched && roomMatched
      );
    });

    // ترتيب حسب السعر
    if (priceRanking === "highest") {
      data.sort((a, b) => b.price - a.price);
    } else if (priceRanking === "lowest") {
      data.sort((a, b) => a.price - b.price);
    }

    setNofPages(Math.ceil(data.length / chPerPage));

    return data;
  }, [priceRanking, priceRange, view, adv, area, room]);

  const chaletsForPage = useMemo(() => {
    const skip = (pageNumber - 1) * chPerPage;
    return filteredChalets.slice(skip, skip + chPerPage);
  }, [filteredChalets, pageNumber, chPerPage]);

  return (
    <section className="flex flex-col bg-primary-300/10 pb-12">
      <HeadTitle />
      {/*Main (filters & Chalets) */}
      <div className="flex justify-center">
        <div className="container flex flex-col md:flex-row md:items-start gap-6">
          <Filters />
          <div className="flex flex-col gap-4 grow">
            {/* head title */}
            <div className="flex items-start md:items-center justify-between">
              {/*//TODO => Num of chalets */}
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-xl md:text-2xl leading-[100%]">
                  اعثر على الشاليه المناسب لك
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
                className="select w-fit rounded-xl border-secondary-100"
              >
                <option value="highest">الاعلي سعراً</option>
                <option value="lowest">الاقل سعراً</option>
              </select>
            </div>
            {/* chalets */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 w-full">
              {chaletsForPage.map((ch) => (
                <ChaletCard key={ch.num} ch={ch} />
              ))}
            </div>
            {/* pagination */}
            <div className="join self-center">
              <button
                className="join-item btn"
                onClick={() => {
                  if (pageNumber < nofPages) {
                    setPageNumber(pageNumber + 1);
                    scrollTo(0, 0);
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
                onClick={() => {
                  if (pageNumber > 1) {
                    setPageNumber(pageNumber - 1);
                    scrollTo(0, 0);
                  }
                }}
              >
                »
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
