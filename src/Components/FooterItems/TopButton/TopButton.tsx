import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function TopButton() {
  // For Translation
  const { t } = useTranslation();

  // Click To Go To Top Page
  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <Link
      to="#"
      className="text-white d-block px-3 py-2 text-center"
      style={{ backgroundColor: "#37475a" }}
      onClick={() => goTop()}
    >
      {t("footer.topButton")}
    </Link>
  );
}

export default TopButton;
