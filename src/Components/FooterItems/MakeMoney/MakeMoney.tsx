import { useTranslation } from "react-i18next";
import ShowSectionsItems from "../ShowSectionsItems/ShowSectionsItems";

function MakeMoney() {
  const { t } = useTranslation();

  return (
    <div>
      <h6 className="mb-2">{t("footer.sectionsHeaders.three")}</h6>

      <ShowSectionsItems sectionKey="footer.sectionThree" />
    </div>
  );
}

export default MakeMoney;
