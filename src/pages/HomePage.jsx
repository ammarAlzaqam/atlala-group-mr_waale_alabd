import { useState } from "react";
import AboutUs from "../components/home/AboutUs";
import Advantages from "../components/home/Advantages";
import Chalets from "../components/home/Chalets";
import ChooseUs from "../components/home/ChooseUs";
import Followers from "../components/home/Followers";
import HeroSec from "../components/home/HeroSec";
import Testimonials from "../components/home/Testimonials";
import PageLoader from "../components/PageLoader";
import Facilities from "../components/home/Facilities";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="flex flex-col scrollbar-none!">
      <PageLoader loading={loading} setLoading={setLoading} />
      <HeroSec />
      <Advantages />
      <AboutUs />
      <Chalets />
      <Followers />
      <Facilities />
      <ChooseUs />
      <Testimonials />
    </div>
  );
}
