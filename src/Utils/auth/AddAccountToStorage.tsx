import type { AccountTypes } from "../../Types/Types";

export default function AddAccountToStorage(account: AccountTypes) {
  const getData = JSON.parse(localStorage.getItem("Accounts") || "[]");

  const accountExist = getData.findIndex(
    (item: AccountTypes) => item.email === account.email
  );

  if (accountExist != -1) {
    return {
      success: false,
      message: "auth.errExist",
    };
  } else {
    getData.push(account);

    localStorage.setItem("Accounts", JSON.stringify(getData));

    return {
      success: true,
      message: "Account Added Successfully",
    };
  }
}
