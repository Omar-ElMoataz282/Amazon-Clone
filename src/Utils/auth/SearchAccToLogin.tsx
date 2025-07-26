import type { AccountWithoutName } from "../../Types/Types";

export default function SearchAccountToLogin(account: AccountWithoutName) {
  const getData = JSON.parse(localStorage.getItem("Accounts") || "[]");

  const accountExist = getData.findIndex(
    (item: AccountWithoutName) => item.email === account.email
  );

  if (accountExist != -1) {
    const passwordExist = getData[accountExist].password === account.password;

    if (passwordExist) {
      window.localStorage.setItem(
        "Current-Account",
        JSON.stringify({ ...account, name: getData[accountExist].name })
      );
      return {
        success: true,
        message: "Account Found",
      };
    } else {
      return {
        success: false,
        message: "auth.errWrong",
      };
    }
  } else {
    return {
      success: false,
      message: "auth.errWrong",
    };
  }
}
