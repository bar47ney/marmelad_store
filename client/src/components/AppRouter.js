import React, { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Context from "../context/context";
import Customers from "../pages/customers/Customers";
import CustomersOne from "../pages/customers/CustomersOne";
import Orders from "../pages/orders/Orders";
import OrdersOne from "../pages/orders/OrdersOne";
import Posts from "../pages/news/Posts";
import ProductsOne from "../pages/products/PoductsOne";
import Products from "../pages/products/Products";
import Login from "./Login";
import MainPage from "./MainPage/MainPage";
import PostOne from "../pages/news/PostOne";
import Contacts from "../pages/Contacts";
import About from "../pages/About";
import Feedbacks from "../pages/Feedbacks";

const AppRouter = () => {
  const [toggle, setToggle] = useState(false);

  const { state } = useContext(Context);

  return state.session ? (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route exact path="/customers" element={<Customers />} />
      <Route exact path="/customers/:id" element={<CustomersOne />} />
      <Route exact path="/product/:id" element={<ProductsOne />} />
      <Route path="/products" element={<Products />} />
      <Route path="/orders" element={<Orders />} />
      <Route exact path="/order/:id" element={<OrdersOne />} />
      <Route path="/news" element={<Posts />} />
      <Route exact path="/news/:id" element={<PostOne />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/about" element={<About />} />
      <Route path="/feedbacks" element={<Feedbacks />} />
      <Route path="*" element={<MainPage />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<MainPage />} />
      <Route exact path="/product/:id" element={<ProductsOne />} />
      <Route path="/products" element={<Products />} />
      <Route path="/news" element={<Posts />} />
      <Route exact path="/news/:id" element={<PostOne />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/about" element={<About />} />
      <Route path="/feedbacks" element={<Feedbacks />} />
      <Route path="*" element={<MainPage />} />
    </Routes>
  );
};

export default AppRouter;
