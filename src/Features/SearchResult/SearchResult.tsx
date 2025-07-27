import { useSearchParams } from "react-router-dom";
import { useDataSWR } from "../../Utils/SWR";
import { ProductsApi } from "../../Utils/Apis";
import type { DataTypesProduct } from "../../Types/Types";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useTranslation } from "react-i18next";

function SearchResult() {
  const { t } = useTranslation();

  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  //Get Data From SWR File
  const { data } = useDataSWR({ api: ProductsApi });
  const products = data?.products || [];

  const filteredProducts = products.filter((product: DataTypesProduct) => {
    return product.title.toLowerCase().includes(query?.toLowerCase() || "");
  });

  const showProducts = filteredProducts.map((item: DataTypesProduct) => (
    <ProductCard
      key={item.id}
      id={item.id}
      title={item.title}
      image={item.images[0]}
      price={item.price}
      discount={item.price * (item.discountPercentage / 100)}
      description={item.description}
      rate={item.rating}
    />
  ));

  return (
    <div className="px-3 py-2">
      <h3 className="py-2">
        {t("search")}
        {query}
      </h3>
      <div className="gap-4 products-container">
        {showProducts.length > 0 ? (
          showProducts
        ) : (
          <h3 className="position-absolute top-50 start-50 translate-middle">
            No Result
          </h3>
        )}
      </div>
    </div>
  );
}

export default SearchResult;
