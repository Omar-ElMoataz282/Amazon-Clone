import { Link } from "react-router-dom";
import i18n from "../../i18n/Trans";
import { useTranslation } from "react-i18next";
import type { SalesTypes } from "../../Types/Types";

function SalesCard({ salesHeader, images }: SalesTypes) {
  //For Translation
  const lang = i18n.language;
  const { t } = useTranslation();

  return (
    <Link to="/products">
      <div className="h-100 bg-white p-4 d-flex flex-column justify-content-between align-items-between">
        <h4 className="fw-bold text-black">{salesHeader}</h4>
        <div className="pb-2">
          <img
            src={`/Assets/sales-${lang}/${images}`}
            className="w-100 h-100"
            style={{ objectFit: "contain" }}
            alt=""
          />
        </div>
        <span className="fs-13">{t("sales.more")}</span>
      </div>
    </Link>
  );
}

export default SalesCard;
