import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import "hamburgers/dist/hamburgers.css";
import ChaletsPage from "./pages/ChaletsPage";
import FavoritesPage from "./pages/FavoritesPage";

export default function App() {
  return (
    <div className="text-right" data-theme="light" dir="rtl">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="chalets" element={<ChaletsPage />} />
            <Route
              path="services"
              element={
                <div className="container mx-auto pt-8">
                  <h1>services page</h1>
                </div>
              }
            />
            <Route
              path="about"
              element={
                <div className="container mx-auto pt-8">
                  <h1>about page</h1>
                </div>
              }
            />
            <Route
              path="contact"
              element={
                <div className="container mx-auto pt-8">
                  <h1>contact page</h1>
                </div>
              }
            />
          </Route>
          <Route path="/chalets/favorites" element={<FavoritesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
