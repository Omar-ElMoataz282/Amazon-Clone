import ProductCard from "../../Components/ProductCard/ProductCard";
import { ProductsApi } from "../../Utils/Apis";
import { useDataSWR } from "../../Utils/SWR";
import "./Products.css";
import type { DataTypesProduct } from "../../Types/Types";

function Products() {
  //Get Data From SWR File
  const { data } = useDataSWR({ api: ProductsApi });
  const products = data?.products || [];

  const showProducts = products.map((item: DataTypesProduct) => (
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
    <div className="px-3 py-4">
      <div className="gap-4 products-container">{showProducts}</div>
    </div>
  );
}

export default Products;
