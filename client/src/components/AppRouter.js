import React, { useState, useContext } from "react";
import { Redirect, Routes, Route } from "react-router-dom";
import Users from "../pages/users/Users";
import Counter from "../components/CounterStudy";
import MyToggleButton from "../components/MyToggleButton/ToggleButton";
import Posts from "../pages/posts/Posts";
import UserEdit from "../pages/users/UserEdit";
import NotFound from "../pages/NotFound";
import Context from "../context/context";
import Login from "./Login";
import Products from "../pages/products/Products";
import ProductsOne from "../pages/products/PoductsOne";
import Orders from "../pages/orders/Orders";
import Customers from "../pages/customers/Customers";
import CustomersOne from "../pages/customers/CustomersOne";
import OrdersOne from "../pages/orders/OrdersOne";

const AppRouter = () => {
  const [toggle, setToggle] = useState(false);
  const { state } = useContext(Context);

  return state.session ? (
    <Routes>
      <Route path="/" element={<MyToggleButton />} />
      <Route exact path="/customers" element={<Customers />} />
      <Route exact path="/customers/:id" element={<CustomersOne />} />
      <Route exact path="/product/:id" element={<ProductsOne />} />
      <Route path="/products" element={<Products />} />
      <Route path="/orders" element={<Orders />} />
      <Route exact path="/order/:id" element={<OrdersOne />} />
      <Route path="/news" element={<Posts />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
