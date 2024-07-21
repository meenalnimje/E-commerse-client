import "./App.css";

import { Route, Routes } from "react-router-dom";

import AdminHome from "./pages/AdminHome";
import AdminOrderPage from "./pages/AdminOrderPage";
import AdminProductDetailPage from "./pages/AdminProductDetailPage";
import AdminProtected from "./utiles/AdminProtected";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Logout from "./features/auth/components/Logout";
import NotFound from "./pages/NotFound";
import NotLoggedIn from "./utiles/NotLoggedIn";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductForm from "./features/admin/components/ProductForm";
import Protected from "./utiles/Protected";
import React from "react";
import SignupPage from "./pages/SignupPage";
import UserOrderPage from "./pages/UserOrderPage";
import UserProfilePage from "./pages/UserProfilePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Protected />}>
          <Route path="/" element={<Home />} />
          <Route path="/product-detail/:id" element={<ProductDetailsPage />} />
          <Route path="/order-success/:id" element={<OrderSuccessPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/forgotpasswd" element={<ForgotPasswordPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/orders" element={<UserOrderPage />} />
        </Route>
        <Route element={<AdminProtected />}>
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/admin/product-form" element={<ProductForm />} />
          <Route path="/admin/orders" element={<AdminOrderPage />} />
          <Route
            path="/admin/product-detail/:id"
            element={<AdminProductDetailPage />}
          />
          <Route
            path="/admin/product-form/edit/:id"
            element={<ProductForm />}
          />
        </Route>
        <Route element={<NotLoggedIn />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
