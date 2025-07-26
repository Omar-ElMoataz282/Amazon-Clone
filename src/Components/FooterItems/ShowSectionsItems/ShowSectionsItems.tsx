import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function ShowSectionsItems({ sectionKey }: { sectionKey: string }) {
  const { t } = useTranslation();

  const showSectionItems = (
    t(sectionKey, { returnObjects: true }) as string[]
  ).map((item: string, index: number) => (
    <Link to="#" key={index} className="link-hover" style={{ color: "#ddd" }}>
      <p className="mb-1">{item}</p>
    </Link>
  ));

  return <div>{showSectionItems}</div>;
}

export default ShowSectionsItems;
