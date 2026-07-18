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

export default function App() {
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
