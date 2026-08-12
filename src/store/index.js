import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useArriveDate = create((set) => ({
  arriveDate: "",
  setArriveDate: (newValue) => set(() => ({ arriveDate: newValue })),
}));

export const useLiveDate = create((set) => ({
  liveDate: "",
  setLiveDate: (newValue) => set(() => ({ liveDate: newValue })),
}));

export const usePriceRange = create((set) => ({
  priceRange: [1800, 8500],
  setPriceRange: (newValue) => set(() => ({ priceRange: newValue })),
}));

export const useView = create((set) => ({
  view: "",
  setView: (newValue) => set(() => ({ view: newValue })),
}));

export const useAdv = create((set) => ({
  adv: [],
  setAdv: (newValue) => set(() => ({ adv: newValue })),
}));

export const useArea = create((set) => ({
  area: "",
  setArea: (newValue) => set(() => ({ area: newValue })),
}));

export const useRoom = create((set) => ({
  room: "",
  setRoom: (newValue) => set(() => ({ room: newValue })),
}));

export const usePriceRanking = create((set) => ({
  priceRanking: "lowest",
  setPriceRanking: (newValue) => set(() => ({ priceRanking: newValue })),
}));

export const useClassification = create((set) => ({
  classification: "",
  setClassification: (newValue) => set(() => ({ classification: newValue })),
}));

export const useBed = create((set) => ({
  bed: "",
  setBed: (newValue) => set(() => ({ bed: newValue })),
}));

export const useSofa = create((set) => ({
  sofa: "",
  setSofa: (newValue) => set(() => ({ sofa: newValue })),
}));

export const useFloor = create((set) => ({
  floor: "",
  setFloor: (newValue) => set(() => ({ floor: newValue })),
}));

export const useFavorites = create(
  persist(
    (set) => ({
      favorites: [],
      setFavorites: (newValue) => set(() => ({ favorites: newValue })),

      toggleFavorites: (chalet) =>
        set((state) => {
          let newList = [...state.favorites];
          const exists = newList.some((el) => el.num === chalet.num);
          if (exists) {
            newList = newList.filter((el) => el.num !== chalet.num);
          } else {
            newList = [...newList, chalet];
          }
          return { favorites: newList };
        }),
    }),
    {
      name: "favorites-storage",
    },
  ),
);

export const usePageNumber = create((set) => ({
  pageNumber: 1,
  setPageNumber: (newValue) =>
    set(() => ({
      pageNumber: newValue,
    })),
}));

export const useSheetChaletsList = create(
  persist(
    (set) => ({
      sheetChaletList: {},
      setSheetChaletList: (newValue) =>
        set(() => ({ sheetChaletList: newValue })),
    }),
    {
      name: "sheet_chalets_storage",
    },
  ),
);

export const useChaletsLoader = create((set) => ({
  chaletsLoader: true,
  setChaletsLoader: (newValue) => set(() => ({ chaletsLoader: newValue })),
}));

export const useSheetNotes = create(
  persist(
    (set) => ({
      setSheetNotes: {},
      setSheetNotes: (newValue) => set(() => ({ sheetNots: newValue })),
    }),
    {
      name: "sheet_notes_storage",
    },
  ),
);

export const useFastSearch = create(
  persist(
    (set) => ({
      fastSearch: false,
      setFastSearch: (newValue) => set(() => ({ fastSearch: newValue })),
    }),
    {
      name: "fastSearch-storage",
    },
  ),
);

export const useIsScrolled = create((set) => ({
  isScrolled: false,
  setIsScrolled: (newValue) => set(() => ({ isScrolled: newValue })),
}));
