import Footer from "../../Components/Footer/Footer";
import Slider from "../../Components/Slider/Slider";
import SwiperComponent from "../../Components/Swiper/Swiper";
import { useScreenSize } from "../../Utils/Size";
import Sales from "../Sales/Sales";

function HomePage() {
  const screenSize = useScreenSize() as number;

  return (
    <>
      {screenSize >= 576 && <Slider />}
      <Sales />
      <SwiperComponent />
      <Footer />
    </>
  );
}

export default HomePage;
