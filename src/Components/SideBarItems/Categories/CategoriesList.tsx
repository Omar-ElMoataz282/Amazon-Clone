import { Link } from "react-router-dom";
import { useDataSWR } from "../../../Utils/SWR";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n/Trans";
import { CategoriesApi } from "../../../Utils/Apis";
import type { DataTypesCategory } from "../../../Types/Types";

function CategoriesList() {
  // For Translation
  const { t } = useTranslation();
  const lang = i18n.language;

  //Condition Lang
  const isArabic = lang === "ar" ? "pe-4" : "ps-4";

  // Get All Trending Items
  const TrendingItems = t("side.options", { returnObjects: true }) as string[];
  const showList = TrendingItems.map((item, key) => {
    return (
      <li key={key}>
        <Link to="#" className={`ps-4 ${isArabic}`}>
          {item}
        </Link>
      </li>
    );
  });

  //Get Data From SWR File
  const { data } = useDataSWR({ api: CategoriesApi });
  const [showMore, setShowMore] = useState(false);

  /*
    -- Show All Categories Data
    -- Show Only 4 Categories
    -- Show More Button
    -- Show Categories Data Based On Language
  */
  const visibleCount = 4;
  const visibleCategories = showMore ? data : data?.slice(0, visibleCount);
  const salesItems = t("select.options", { returnObjects: true }) as string[];

  const showCategories = visibleCategories?.map(
    (item: DataTypesCategory, key: number) => {
      return (
        <li key={key}>
          <Link to="#" className={`${isArabic}`}>
            {salesItems.length > 0 ? salesItems[key] : item.name}
          </Link>
        </li>
      );
    }
  );

  return (
    <div className="cat-list">
      <div className="pt-3">
        <h5 className={`fw-bold ${isArabic}`}>{t("side.trend")}</h5>

        <ul className="list-unstyled m-0 p-0">{showList}</ul>
      </div>

      <hr className="m-0" />

      <div className="pt-3">
        <h5 className={`fw-bold ${isArabic}`}>{t("side.digital")}</h5>

        <Link to="#" className={`item-link ${isArabic}`}>
          {t("side.kindle")}
        </Link>
      </div>

      <hr className="m-0" />

      <div className="pt-3">
        <h5 className={`fw-bold ${isArabic}`}>{t("side.category")}</h5>

        <ul className="list-unstyled m-0 p-0">{showCategories}</ul>
        <Link
          to="#"
          className="item-link ps-4"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? t("side.less") : t("side.more")}
        </Link>
      </div>
    </div>
  );
}

export default CategoriesList;
