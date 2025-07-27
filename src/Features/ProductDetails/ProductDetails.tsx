import { useParams } from "react-router-dom";
import { ProductDetailsApi } from "../../Utils/Apis";
import { useDataSWR } from "../../Utils/SWR";
import { useTranslation } from "react-i18next";
import Stars from "../../Components/Stars/Stars";
import IncDecBtn from "../../Components/IncDecBtn/IncDecBtn";
import { Button } from "react-bootstrap";
import ProductImages from "../../Components/Product-Images/ProductImages";
import AddToLocalStorage from "../../Utils/AddToLocalStorage";
import { useContext, useEffect, useState } from "react";
import getCurrentCountFromStorage from "../../Utils/GetCountFromStorage";
import { CartItems } from "../../Contexts/RefreshData";
import { ToastContainer, toast } from "react-toastify";

function ProductDetails() {
  // Get Id From Url
  const { id } = useParams();

  //Count Products
  const [count, setCount] = useState(1);

  //For Refresh
  const refresh = useContext(CartItems);

  //Get Count From Local Storage
  const currentCount = getCurrentCountFromStorage(Number(id));
  const [disabled, setDisabled] = useState(false);

  //For Translation
  const { t } = useTranslation();

  // //Get Data From SWR File
  const { data } = useDataSWR({ api: ProductDetailsApi + `/${id}` });

  //Calculate final price after discount
  const discount = data?.price * (data?.discountPercentage / 100);
  const finalPrice = Number((data?.price - discount).toFixed(2));

  //Set Integer Number To Gold Star
  const ratingValue = Number(data?.rating);
  const finalRate = isNaN(ratingValue) ? 0 : Math.round(ratingValue);

  //Add To Local Storage
  const addToLocalStorage = AddToLocalStorage;

  useEffect(() => {
    if (currentCount >= data?.stock || data?.stock == 0) {
      setDisabled(true);
    }
  }, [data, currentCount]);

  return (
    <div className="d-flex flex-wrap" style={{ height: "calc(100vh - 60px)" }}>
      <div className="col-10 m-auto col-md-5">
        <ProductImages />
      </div>

      <div className="col-md-7 d-flex flex-column justify-content-center px-3 pb-2 px-md-5">
        <div>
          <h2 className="m-0">
            {t("product_details.title")} {data?.title}
          </h2>

          <p className="fw-bold m-0 mb-2">
            {t("product_details.brand")} {data?.brand}
          </p>

          <div>
            <span className="fw-bold">{finalRate}</span>
            <Stars ratingNum={finalRate} />
          </div>
        </div>

        <hr />

        <h3>
          {t("product_details.price")}{" "}
          {(finalPrice != data?.price && finalPrice) || ""}{" "}
          <del>{data?.price}</del>
        </h3>

        <p>
          <b>{t("product_details.description")}</b> {data?.description}
        </p>

        <div className="d-flex justify-content-center justify-content-sm-between gap-2 gap-md-0 align-items-center flex-wrap">
          <IncDecBtn max={data?.stock} sendCount={setCount} />

          <Button
            className="text-black border-0 px-5"
            style={{ backgroundColor: "#ffd814" }}
            disabled={!data || disabled}
            onClick={() => {
              const result = addToLocalStorage(data, count);
              refresh!.setIsChanged((prev) => !prev);

              if (!result.success) {
                const toastMsg = t("product_details.onlyAvailable", {
                  count: Number(result.message),
                });
                toast.error(toastMsg);
              } else {
                const toastMsg = t(result.message);
                toast.success(toastMsg);
              }
            }}
          >
            {data ? t("addToCart") : "Loading..."}
          </Button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}
export default ProductDetails;
