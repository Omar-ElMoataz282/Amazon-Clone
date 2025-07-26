import { Navigate, Outlet } from "react-router-dom";

export default function AuthProtected() {
  const user = JSON.parse(localStorage.getItem("Current-Account") || "null");

  return user ? <Navigate to="/" replace /> : <Outlet />;
}
