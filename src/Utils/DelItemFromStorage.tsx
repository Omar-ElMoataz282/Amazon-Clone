export default function DelItemFromLocalStorage(id: number) {
  const items = JSON.parse(localStorage.getItem("data") ?? "[]");

  const updatedItems = items.filter((item: { id: number }) => item.id !== id);

  localStorage.setItem("data", JSON.stringify(updatedItems));
}
