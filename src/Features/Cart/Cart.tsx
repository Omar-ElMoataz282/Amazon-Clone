import { useContext, useEffect, useState } from "react";
import "./Cart.css";
import CartCard from "../../Components/CartCard/CartCard";
import { CartItems } from "../../Contexts/RefreshData";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n/Trans";
import { Button } from "react-bootstrap";
import GetDataFromLocalStorage from "../../Utils/GetDataFromStorage";
import { useNavigate } from "react-router-dom";
import type { DataTypesCart } from "../../Types/Types";
import GetFullDate from "../../Utils/GetFullDate";

function Cart() {
  const [data, setData] = useState<DataTypesCart[]>([]);
  const navigate = useNavigate();

  //For Translation
  const { t } = useTranslation();
  const isArabic = i18n.language === "ar";

  //Refresh Data by Context
  const refreshData = useContext(CartItems);

  //Get Data From Local Storage
  useEffect(() => {
    const data = GetDataFromLocalStorage();
    setData(data);
  }, [refreshData?.isChanged]);

  //Calculate Final Price After Discount
  function calculateFinalPrice(price: number, discountPercentage: number) {
    const discount = price * (discountPercentage / 100);
    return Number((price - discount).toFixed(2));
  }

  //Calculate Total Price
  const totalPrice = data.reduce((acc, item) => {
    const finalPrice = calculateFinalPrice(item.price, item.discountPercentage);
    return acc + finalPrice * item.count;
  }, 0);

  //Calculate Total Items
  const totalItems = data.reduce((acc, item) => {
    return acc + item.count;
  }, 0);

  //Add To Order Page
  function addToOrder() {
    const getData = JSON.parse(localStorage.getItem("Order") || "[]");

    const newOrder = {
      date: GetFullDate(),
      items: data,
    };

    getData.push(newOrder);

    localStorage.setItem("Order", JSON.stringify(getData));

    refreshData?.setIsChanged((prev) => !prev);

    navigate("/orders");

    localStorage.removeItem("data");
  }

  //Mapping Data to Show
  const showData = data.map((item: DataTypesCart) => {
    const finalPrice = calculateFinalPrice(item.price, item.discountPercentage);

    return (
      <CartCard
        key={item.id}
        id={item.id}
        image={item.images[0]}
        title={item.title}
        count={item.count}
        brand={item.brand}
        price={finalPrice}
      />
    );
  });

  return (
    <div className="pt-3 m-auto col-md-10 px-3">
      <div className="bg-white p-3 overflow-hidden">
        <h3 className="pb-2 position-relative price-cart">
          {t("cart.header")}
          <span
            style={{ left: isArabic ? "0" : "", right: isArabic ? "" : "0" }}
          >
            {t("cart.price")}
          </span>
        </h3>

        <hr />

        <div>
          {data.length > 0 ? (
            showData
          ) : (
            <h4 className="text-center">{t("cart.empty")}</h4>
          )}
        </div>

        <div className="d-flex justify-content-between align-items-center px-3">
          <Button disabled={data.length === 0} onClick={addToOrder}>
            {t("cart.checkout")}
          </Button>

          <h5>
            <span className="fw-normal">
              {t("cart.total")} ({totalItems} {t("cart.pieces")}): {""}
            </span>
            {totalPrice.toFixed(2)} EGP
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Cart;
