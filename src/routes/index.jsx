import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetail from "../pages/Detail";
import Cart from "../pages/cart";
import Checkout from "../pages/Checkout";
export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          path="/"
          element={<Home />}
        />
        <Route
          path="/detail/:id"
          element={<ProductDetail />}
        />
        <Route
          path="/cart"
          element={<Cart />}
        />
        <Route
          path="/checkout"
          element={<Checkout />}
        />
      </Routes>
    </BrowserRouter>
  );
}
