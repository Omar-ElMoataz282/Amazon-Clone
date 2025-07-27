import { useState } from "react";
import { Link } from "react-router-dom";
import i18n from "../../../i18n/Trans";
import { useTranslation } from "react-i18next";

function Settings() {
  // For Translation
  const [lang, setLang] = useState<string>(i18n.language);
  const { t } = useTranslation();

  //Condition Lang
  const isArabic = lang === "ar" ? "pe-4" : "ps-4";

  // Function To Change Language
  function changeLanguage(lang: string) {
    i18n.changeLanguage(lang).then(() => {
      window.document.dir = i18n.dir();
      setLang(lang);
    });
  }

  return (
    <div className="pt-3">
      <h5 className={`fw-bold ${isArabic}`}>{t("side.help")}</h5>

      <Link className={`item-link ${isArabic}`} to="#">
        {t("side.account")}
      </Link>

      <Link className={`item-link ${isArabic}`} to="/orders">
        {t("nav.orders")}
      </Link>

      <Link className={`item-link ${isArabic}`} to="#">
        {t("side.help2")}
      </Link>

      <Link className={`item-link ${isArabic}`} to="#">
        {t("side.sign")}
      </Link>

      <hr className="m-0" />

      <section className="pt-3">
        <h5 className={`fw-bold ${isArabic}`}>{t("side.lang")}</h5>

        <Link
          className="item-link ps-4"
          to="#"
          onClick={() =>
            lang === "ar" ? changeLanguage("en") : changeLanguage("ar")
          }
        >
          {lang === "en" ? "التغيير الى" : "Change To: "}
          {lang === "ar" ? "English" : " العربية"}
        </Link>

        <Link className="item-link ps-4" to="#">
          {lang === "ar" ? "المنطقة" : "Country: "}
          {lang === "en" ? "USA" : " مصر"}
        </Link>
      </section>
    </div>
  );
}

export default Settings;
