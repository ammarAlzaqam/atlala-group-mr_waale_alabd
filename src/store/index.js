import { create } from "zustand";
import { persist } from "zustand/middleware";

export const usePriceRange = create((set) => ({
  priceRange: [1500, 3200],
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
  priceRanking: "highest",
  setPriceRanking: (newValue) => set(() => ({ priceRanking: newValue })),
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
