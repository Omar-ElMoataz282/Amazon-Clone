import { useTranslation } from "react-i18next";
import ShowSectionsItems from "../ShowSectionsItems/ShowSectionsItems";

function ShopWithUs() {
  const { t } = useTranslation();

  return (
    <div>
      <h6 className="mb-2">{t("footer.sectionsHeaders.two")}</h6>

      <ShowSectionsItems sectionKey="footer.sectionTwo" />
    </div>
  );
}

export default ShopWithUs;
