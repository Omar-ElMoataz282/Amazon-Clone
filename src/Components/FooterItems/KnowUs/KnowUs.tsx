import { useTranslation } from "react-i18next";
import ShowSectionsItems from "../ShowSectionsItems/ShowSectionsItems";

function KnowUs() {
  const { t } = useTranslation();

  return (
    <div>
      <h6 className="mb-2">{t("footer.sectionsHeaders.one")}</h6>

      <ShowSectionsItems sectionKey="footer.sectionOne" />
    </div>
  );
}

export default KnowUs;
