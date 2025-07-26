import SalesCard from "../../Components/SalesCard/SalesCard";
import "./Sales.css";
import { useTranslation } from "react-i18next";

function Sales() {
  const { t } = useTranslation();
  const salesItems = t("sales.items", { returnObjects: true }) as string[];

  //Show Images Based on Language
  const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
  ];

  // Show Sales Card
  const showSalesCard = salesItems.map((item, key) => {
    return <SalesCard salesHeader={item} images={images[key]} key={key} />;
  });

  return (
    <div className="position-relative">
      <div className="w-100 px-3 d-grid gap-4 trans-lg">{showSalesCard}</div>
    </div>
  );
}

export default Sales;
