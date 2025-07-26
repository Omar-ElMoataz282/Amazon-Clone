import Usa from "../../Assets/usa.png";
import Egy from "../../Assets/egy.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function MultipleLang({ isNav }: { isNav: boolean }) {
  // For Translation
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const isArabic = lang === "ar";

  //Function To Change Direction Based on Language
  useEffect(() => {
    window.document.dir = i18n.dir();
  }, [lang]);

  // Function To Change Language
  function changeLanguage(lang: string) {
    i18n.changeLanguage(lang).then(() => {
      window.document.dir = i18n.dir();
    });
  }

  return (
    <>
      <p className="m-0 fw-bold position-relative">
        <span>
          <img
            src={isArabic ? Egy : Usa}
            alt="Lang"
            className={`pb-1 ${isArabic ? "ms-1" : "me-1"}`}
          />
        </span>

        <span className="fs-13">{lang.toUpperCase()}</span>

        {isNav && (
          <span className={`arrow mb-1 ${isArabic ? "me-1" : "ms-1"}`}></span>
        )}
      </p>

      <ul className="position-absolute top-100 start-0 sel-lang">
        <li
          className={`py-2 border-bottom d-flex align-items-center gap-3 ${
            isArabic ? "pe-3 ps-100" : "ps-2 pe-100"
          }`}
          onClick={() => changeLanguage("en")}
        >
          <FontAwesomeIcon icon={isArabic ? faCircle : faCircleDot} />
          EN
        </li>

        <li
          className={`py-2 d-flex align-items-center gap-3 ${
            isArabic ? "pe-3 ps-100" : "ps-2 pe-100"
          }`}
          onClick={() => changeLanguage("ar")}
        >
          <FontAwesomeIcon icon={isArabic ? faCircleDot : faCircle} />
          AR
        </li>
      </ul>
    </>
  );
}

export default MultipleLang;
