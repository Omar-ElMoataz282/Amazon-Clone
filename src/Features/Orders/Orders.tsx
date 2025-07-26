import { useEffect, useState } from "react";
import type { OrderData, OrderTypes } from "../../Types/Types";
import { useTranslation } from "react-i18next";

function Orders() {
  const { t } = useTranslation();
  const [data, setData] = useState<OrderData[]>([]);

  //Get Orders From Local Storage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Order") || "[]");
    setData(data);
  }, []);

  //Calculate Final Price After Discount
  function calculateFinalPrice(price: number, discountPercentage: number) {
    const discount = price * (discountPercentage / 100);
    return Number((price - discount).toFixed(2));
  }

  //Calculate Total Price
  const totalPrice = data.map((order) => {
    return order.items.reduce((acc, item) => {
      const finalPrice = calculateFinalPrice(
        item.price,
        item.discountPercentage
      );
      return acc + finalPrice * item.count;
    }, 0);
  });

  const showData = data.map((order, index) => {
    return (
      <tbody key={`order-${index}`}>
        <tr key={`header-${index}`}>
          <td
            colSpan={5}
            className="bg-secondary text-white text-start fw-bold p-2"
          >
            <span>
              {t("orders.header")} #{index + 1}
            </span>
            <span> {order.date}</span>
          </td>
        </tr>

        {order.items.map((item: OrderTypes, idx: number) => {
          const finalPrice = calculateFinalPrice(
            item.price,
            item.discountPercentage
          );

          return (
            <tr key={`item-${index}-${idx}`}>
              <td>{item.title}</td>
              <td>{item.brand}</td>
              <td className="fw-bold">{finalPrice}</td>
              <td>{item.count}</td>
              <td className="fw-bold">
                {(finalPrice * item.count).toFixed(2)}
              </td>
            </tr>
          );
        })}
        <tr>
          <td className="bg-secondary text-white fw-bold py-2" colSpan={4}>
            {t("orders.total")}
          </td>
          <td className="border-top fw-bold">{totalPrice[index].toFixed(2)}</td>
        </tr>
        <tr>
          <td colSpan={5} className="bg-transparent">
            <hr />
          </td>
        </tr>
      </tbody>
    );
  });

  return (
    <div className="pt-3 ">
      <div className="p-3 pb-0 table-responsive">
        <table className="w-100 text-center table">
          <thead>
            <tr>
              <th>{t("orders.name")}</th>
              <th>{t("orders.brand")}</th>
              <th>{t("orders.price")}</th>
              <th>{t("orders.count")}</th>
              <th>{t("orders.total")}</th>
            </tr>
          </thead>
          {showData.length > 0 ? (
            showData
          ) : (
            <tbody>
              <tr>
                <td colSpan={5} className="bg-white py-4 fw-bold">
                  {t("orders.noOrders")}
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}

export default Orders;
