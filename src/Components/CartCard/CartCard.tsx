import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import DelItemFromLocalStorage from "../../Utils/DelItemFromStorage";
import { useContext } from "react";
import { CartItems } from "../../Contexts/RefreshData";
import type { DataTypesCartCard } from "../../Types/Types";

function CartCard({
  id,
  image,
  title,
  count,
  brand,
  price,
}: DataTypesCartCard) {
  const { t } = useTranslation();

  const handleRemove = DelItemFromLocalStorage;
  //Refresh Data by Context
  const refreshData = useContext(CartItems);

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap">
        <div className="col-md-3 m-auto">
          <img
            src={image}
            alt="img"
            className="w-100 object-fit-cover"
            style={{ height: "150px" }}
          />
        </div>

        <div className="col-md-6 d-flex flex-column gap-2">
          <h6 className="text-truncate m-0 fw-normal">
            {t("product_details.title")} <br className="d-block d-sm-none" />
            <span className="fw-bold">{title}</span>
          </h6>

          <p style={{ color: "#067d62", fontSize: "14px" }} className="m-0">
            {t("product_details.stock")}
          </p>

          <p className="m-0">
            {t("product_details.brand")}
            <span className="fw-bold">{brand}</span>
          </p>

          <h6 className="fw-normal d-flex gap-2 align-items-center">
            <div>
              {t("product_details.count")}
              <span className="fw-bold">{count}</span>
            </div>
            |
            <Button
              className="p-0 bg-transparent text-primary border-0"
              style={{ fontSize: "14px" }}
              onClick={() => {
                handleRemove(id);
                refreshData?.setIsChanged((prev) => !prev);
              }}
            >
              {t("product_details.delete")}
            </Button>
          </h6>
        </div>

        <div className="col-md-3 col-12 d-flex justify-content-end">
          <h5>EGP {price}</h5>
        </div>
      </div>

      <hr />
    </>
  );
}

export default CartCard;
