import { useTranslation } from "react-i18next";
import ShowSectionsItems from "../ShowSectionsItems/ShowSectionsItems";

function HelpYou() {
  const { t } = useTranslation();

  return (
    <div>
      <h6 className="mb-2">{t("footer.sectionsHeaders.four")}</h6>

      <ShowSectionsItems sectionKey="footer.sectionFour" />
    </div>
  );
}

export default HelpYou;
