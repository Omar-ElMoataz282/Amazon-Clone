import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import ProductCard from "../ProductCard/ProductCard";
import { useDataSWR } from "../../Utils/SWR";
import { ProductsApi } from "../../Utils/Apis";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useTranslation } from "react-i18next";
import type { DataTypesProduct } from "../../Types/Types";

function SwiperComponent() {
  //For Translation
  const { t } = useTranslation();

  //Get Data From SWR File
  const { data } = useDataSWR({ api: ProductsApi });
  const products = data?.products || [];

  // Limit Show Products - Map Data
  const dataShow = 8;
  const showProducts = products
    .slice(0, dataShow)
    .map((item: DataTypesProduct) => (
      <SwiperSlide key={item.id}>
        <ProductCard
          id={item.id}
          title={item.title}
          image={item.images[0]}
          price={item.price}
          discount={item.price * (item.discountPercentage / 100)}
          description={item.description}
          rate={item.rating}
        />
      </SwiperSlide>
    ));

  return (
    <div className="pt-4 px-3">
      <h2 className="pb-2">{t("products.show")}</h2>

      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={20}
        slidesPerGroup={1}
        breakpoints={{
          0: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          767: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
        navigation
        className="pb-5 d-grid"
        style={{ direction: "ltr" }}
        pagination={{ clickable: true }}
      >
        {showProducts}
      </Swiper>
    </div>
  );
}

export default SwiperComponent;
