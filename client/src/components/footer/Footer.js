import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../context/context";
import { LOGOUT } from "../reducer/reducer";
import "./footer.css";

const links = [
  {
    name: "Продукты",
    link: "/products",
  },
  {
    name: "Новости",
    link: "/news",
  },
  {
    name: "Отзывы",
    link: "/feedbacks",
  },
  {
    name: "О нас",
    link: "/about",
  },
  {
    name: "Контакты",
    link: "/contacts",
  },
  {
    name: "|Заказы",
    link: "/orders",
  },
  {
    name: "Покупатели",
    link: "/customers",
  },
];

const Footer = () => {
  return (
    <div class="bg-dark p-5 mt-5">
      <div class="row">
        <div class="col-sm text-center"><Link to="/" className="link nav-link">LOGO</Link></div> 
        {links.map((link, index) => (
          <div class="col-sm text-center">
            <Link to={link.link} className="link nav-link">
              {link.name}
            </Link>
          </div>
        ))}
      </div>
      <div class="row">
      <div class="col-sm text-center"><p className="copyright m-5">2022 BSUIR</p></div>
      </div>
    </div>
  );
};

export default Footer;
