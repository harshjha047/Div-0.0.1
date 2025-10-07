import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Auth from "./Components/Auth/Auth.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Product from "./Components/Product/Product.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import Help from "./Components/Pages/Help.jsx";
import AboutUs from "./Components/Pages/AboutUs.jsx";
import ProductCat from "./Components/Product/ProductCat.jsx";
import Home from "./Components/Home/Home.jsx";
import TC from "./Components/Pages/TC.jsx";
import { ShopApi } from "./Contexts/ShopContext.jsx";
import ProductItem from "./Components/Product/ProductItem.jsx";
import NotFound from "./Components/ReusableComponents/NotFound.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />}></Route>
      <Route path="auth" element={<Auth />}></Route>
      <Route path="product" element={<Product />}></Route>
      <Route path="product/:brand" element={<ProductCat/>}></Route>
      <Route path="product/Item/:ProductId" element={<ProductItem/>}></Route>
      <Route path="cart" element={<Cart />}></Route>
      <Route path="help" element={<Help />}></Route>
      <Route path="aboutus" element={<AboutUs />}></Route>
      <Route path="T&C" element={<TC />}></Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <ShopApi>
    <RouterProvider router={router} />
  </ShopApi>
);
