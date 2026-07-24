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
import { chM7Link } from "./constants/sheetLink";

export default function App() {
  const [sheetData, setSheetData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(chM7Link);
      const data = await res.json();

      const bookings = {};
      [...data[0].slice(2), ...data[1].slice(2)].forEach((row) => {
        bookings[row[0]] = row.slice(1);
      });

      console.log(bookings);

      setSheetData(bookings);
    };

    getData();
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
