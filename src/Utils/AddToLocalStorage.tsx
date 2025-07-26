import type { DataTypesLocalStorage } from "../Types/Types";

function AddToLocalStorage(data: DataTypesLocalStorage, count: number) {
  const getItems = JSON.parse(
    localStorage.getItem("data") || "[]"
  ) as DataTypesLocalStorage[];

  const productExist = getItems.findIndex((item) => item.id === data.id);

  const currentCount = productExist !== -1 ? getItems[productExist].count : 0;

  if (currentCount + count > data.stock) {
    if (data.stock - currentCount >= 1) {
      return {
        success: false,
        message: `Only ${data.stock - currentCount} Available`,
      };
    } else {
      return {
        success: false,
        message: `Not Available Any More`,
      };
    }
  }

  if (productExist !== -1) {
    if (getItems[productExist].count) {
      getItems[productExist].count += count;
    }
  } else {
    getItems.push({ ...data, count });
  }

  localStorage.setItem("data", JSON.stringify(getItems));

  return {
    success: true,
    message: "Done!",
  };
}

export default AddToLocalStorage;
