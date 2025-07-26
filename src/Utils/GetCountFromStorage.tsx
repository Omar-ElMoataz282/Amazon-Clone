export default function getCurrentCountFromStorage(id: number): number {
  const items = JSON.parse(localStorage.getItem("data") || "[]");

  const found = items.find((item: { id: number }) => item.id === id);

  return found ? found.count : 0;
}
