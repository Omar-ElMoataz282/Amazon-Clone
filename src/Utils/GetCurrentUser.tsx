export default function GetCurrentUser() {
  //Get Current Name From Local Storage
  const getName =
    JSON.parse(localStorage.getItem("Current-Account") || "null")?.name || "";
  const currentName = getName.split(" ")[0];

  //Get Current User [First Name]
  const user = currentName.charAt(0).toUpperCase() + currentName.slice(1);

  return user;
}
