import type { AccountTypes } from "../../Types/Types";

export default function AddCurAccountToStorage(account: AccountTypes) {
  localStorage.setItem("Current-Account", JSON.stringify(account));
}
