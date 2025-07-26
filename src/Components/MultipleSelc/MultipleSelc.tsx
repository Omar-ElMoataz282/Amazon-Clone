import { useTranslation } from "react-i18next";
import i18n from "../../i18n/Trans";
import { useDataSWR } from "../../Utils/SWR";
import { CategoriesApi } from "../../Utils/Apis";

interface TypeData {
  name: string;
}

function MultipleSelc() {
  // For Translation
  const lang = i18n.language;
  const isArabic = lang === "ar";
  const { t } = useTranslation();

  //Get Data From SWR File
  const { data } = useDataSWR({ api: CategoriesApi });

  // Get All Categories Based On Language
  const salesItems = t("select.options", { returnObjects: true }) as string[];

  const showItems = data?.map((item: TypeData, key: number) => {
    return (
      <option className="fs-13 fw-medium" key={key}>
        {salesItems.length > 0 ? salesItems[key] : item.name}
      </option>
    );
  });

  return (
    <>
      <select
        className={`form-select text-truncate sel-cat point ${
          isArabic ? "rounded-0 rounded-end-1" : "rounded-0 rounded-start-1"
        }`}
      >
        <option value="" className="fs-13 fw-medium">
          {t("select.all")}
        </option>
        {showItems}
      </select>
    </>
  );
}

export default MultipleSelc;
