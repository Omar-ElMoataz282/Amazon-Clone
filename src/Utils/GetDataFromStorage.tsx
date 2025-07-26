export default function GetDataFromLocalStorage() {
  const data = localStorage.getItem("data");
  const parsed = JSON.parse(data ?? "[]");
  return parsed;
}
