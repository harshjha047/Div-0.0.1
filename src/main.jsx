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
import OTPvalidation from "./Components/Pages/OTPvalidation.jsx";
import { AuthProvider } from "./Contexts/AuthContext.jsx";
import { ProfileProvider } from "./Contexts/ProfileContext.jsx";
import ResetPasswort from "./Components/Auth/ResetPasswort.jsx";
import CreateNewPassword from "./Components/Auth/CreateNewPassword.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import AddAddress from "./Components/Profile/AddAddress.jsx";
import ProtectedWrapper from "./Components/ProtectedWrapper/ProtectedWrapper.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />}></Route>
      <Route path="auth" element={<Auth />}></Route>
      <Route path="product" element={<Product />}></Route>
      <Route path="product/:brand" element={<ProductCat />}></Route>
      <Route path="product/Item/:ProductId" element={<ProductItem />}></Route>
      <Route path="help" element={<Help />}></Route>
      <Route path="aboutus" element={<AboutUs />}></Route>
      <Route path="T&C" element={<TC />}></Route>
      <Route path="auth/account/validation" element={<OTPvalidation />}></Route>
      <Route path="auth/account/reset" element={<ResetPasswort />}></Route>
      <Route
        path="auth/account/reset/validation"
        element={<OTPvalidation />}
      ></Route>
      <Route
        path="auth/account/reset/create"
        element={<CreateNewPassword />}
      ></Route>
      <Route element={<ProtectedWrapper />}>
        <Route path="profile/:tab" element={<Profile />}></Route>
        <Route path="profile/Info" element={<Profile />}></Route>
        <Route path="profile/Info/address/add" element={<AddAddress />}></Route>
        <Route path="cart" element={<Cart />}></Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <ProfileProvider>
    <ShopApi>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ShopApi>
  </ProfileProvider>
);
