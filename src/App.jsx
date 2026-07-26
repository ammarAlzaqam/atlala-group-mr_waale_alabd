import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import "hamburgers/dist/hamburgers.css";
import ChaletsPage from "./pages/ChaletsPage";
import FavoritesPage from "./pages/FavoritesPage";
import ServicesPage from "./pages/ServicesPage";
import Layout from "./layouts/Layout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ChaletDetailsPage from "./pages/ChaletDetailsPage";
import { Toaster } from "react-hot-toast";
import { useEffect, useMemo, useState } from "react";
import sheetDataLink from "./constants/sheetLink";
import { useSheetChaletsList } from "./store";
import buildBookings from "./utils/buildBookings";

export default function App() {
  const setSheetChaletList = useSheetChaletsList(
    (state) => state.setSheetChaletList,
  );

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(sheetDataLink);
      const data = await res.json();

      setSheetChaletList({
        m7: buildBookings(data.m7, 7, null, data.m8),
        m8: buildBookings(data.m8, 8, data.m7, data.m9),
        m9: buildBookings(data.m9, 9, data.m8, data.m10),
        m10: buildBookings(data.m10, 10, data.m9, null),
      });

      console.log({
        m7: buildBookings(data.m7, 7, null, data.m8),
        m8: buildBookings(data.m8, 8, data.m7, data.m9),
        m9: buildBookings(data.m9, 9, data.m8, data.m10),
        m10: buildBookings(data.m10, 10, data.m9, null),
      });
    };

    getData();

    const interval = setInterval(getData, 60000); // كل 30 ثانية

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-right" data-theme="light" dir="rtl">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="chalets" element={<ChaletsPage />} />
              <Route path="services" element={<ServicesPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="contact" element={<ContactPage />} />
            </Route>
            <Route path="chalets/favorites" element={<FavoritesPage />} />
            <Route path="chalets/:chaletNum" element={<ChaletDetailsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}
