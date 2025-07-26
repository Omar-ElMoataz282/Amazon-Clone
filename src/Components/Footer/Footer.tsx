import { useTranslation } from "react-i18next";
import HelpYou from "../FooterItems/HelpYou/HelpYou";
import KnowUs from "../FooterItems/KnowUs/KnowUs";
import MakeMoney from "../FooterItems/MakeMoney/MakeMoney";
import SecondSection from "../FooterItems/SecondSection/SecondSection";
import ShopWithUs from "../FooterItems/ShopWithUs/ShopWithUs";
import TopButton from "../FooterItems/TopButton/TopButton";
import "./Footer.css";

function Footer() {
  // For Translation
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <div className="pt-2">
      <TopButton />

      <div className="footer">
        <div className="px-5 py-3 py-md-5 d-flex justify-content-evenly flex-wrap gap-4 gap-md-3 gap-lg-0">
          <div
            className={`col-12 col-md-4 col-lg-3 text-center ${
              isArabic ? "text-lg-end" : "text-lg-start"
            }`}
          >
            <KnowUs />
          </div>

          <div
            className={`col-12 col-md-4 col-lg-3 text-center ${
              isArabic ? "text-lg-end" : "text-lg-start"
            }`}
          >
            <ShopWithUs />
          </div>

          <div
            className={`col-12 col-md-4 col-lg-3 text-center ${
              isArabic ? "text-lg-end" : "text-lg-start"
            }`}
          >
            <MakeMoney />
          </div>

          <div
            className={`col-12 col-md-4 col-lg-3 text-center ${
              isArabic ? "text-lg-end" : "text-lg-start"
            }`}
          >
            <HelpYou />
          </div>
        </div>

        <hr />

        <SecondSection />
      </div>
    </div>
  );
}

export default Footer;
