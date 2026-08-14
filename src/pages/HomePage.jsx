import AboutUs from "../components/home/AboutUs";
import Advantages from "../components/home/Advantages";
import Chalets from "../components/home/Chalets";
import ChooseUs from "../components/home/ChooseUs";
import HeroSec from "../components/home/HeroSec";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSec />
      <Advantages />
      <AboutUs />
      <Chalets />
      <ChooseUs />
    </div>
  );
}
