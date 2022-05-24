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
    <div class="site-section bg-dark mt-5">
      <div class="container">
        <div class="cta d-block d-md-flex align-items-center px-5 bg-success">
          <div>
            <h2 class="mb-0">Ready for a next project?</h2>
            <h3 class="text-dark">Let's get started!</h3>
          </div>
          <div class="ml-auto">
            <a href="#" class="btn btn-light rounded-0 py-3 px-5 ">
              Contact us
            </a>
          </div>
        </div>
        <div class="row">

          {links.map((link, index) => (
            <div class="col-sm">
              <Link to={link.link} className="nav-link" onClick>
                {link.name}
              </Link>
              <p class="copyright">
                <small>&copy; 2019</small>
              </p>
            </div>
          ))}

          <div class="col-sm">
            <a href="#" class="footer-logo">
              Colorlib
            </a>
            <p class="copyright">
              <small>&copy; 2019</small>
            </p>
          </div>
          <div class="col-sm">
            <h3>Customers</h3>
            <ul class="list-unstyled links">
              <li>
                <a href="#">Buyer</a>
              </li>
              <li>
                <a href="#">Supplier</a>
              </li>
            </ul>
          </div>
          <div class="col-sm">
            <h3>Company</h3>
            <ul class="list-unstyled links">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>
          <div class="col-sm">
            <h3>Further Information</h3>
            <ul class="list-unstyled links">
              <li>
                <a href="#">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3">
            <h3>Follow us</h3>
            <ul class="list-unstyled social">
              <li>
                <a href="#">
                  <span class="icon-facebook"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="icon-twitter"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="icon-linkedin"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="icon-medium"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="icon-paper-plane"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
