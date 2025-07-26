import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout/MainLayout";
import HomePage from "./Features/Home/HomePage";
import Products from "./Features/Products/Products";
import ProductDetails from "./Features/ProductDetails/ProductDetails";
import Cart from "./Features/Cart/Cart";
import Regsiter from "./Features/auth/Register/Register";
import LogIn from "./Features/auth/LogIn/LogIn";
import AuthProtected from "./Guards/AuthProtected";
import Orders from "./Features/Orders/Orders";
import SearchResult from "./Features/SearchResult/SearchResult";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route element={<AuthProtected />}>
          <Route path="/register" element={<Regsiter />} />
          <Route path="/login" element={<LogIn />} />
        </Route>

        <Route path="/" element={<HomePage />} />

        <Route path="/products" element={<Products />} />

        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/orders" element={<Orders />} />

        <Route path="/search-result" element={<SearchResult />} />
      </Route>
    </Routes>
  );
}

export default App;
