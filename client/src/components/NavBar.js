import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../context/context";
import { LOGOUT } from "./reducer/reducer";

const NavBar = () => {
  const [viewMobileMenu, setViewMobileMenu] = useState(false);
  const { state, dispatch } = useContext(Context);
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
      name: "Админ",
      link: "/login",
    },
    {
      name: "Заказы",
      link: "/orders",
    },
    {
      name: "Покупатели",
      link: "/customers",
    },
  ];

  const viewMenu = () => {
    setViewMobileMenu(!viewMobileMenu);
  };

  const logout = () => {
    dispatch({ type: LOGOUT, data: { session: null, user: "", users: [] } });
    window.localStorage.clear();
  };

  console.log(state);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            LOGO
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={viewMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse justify-content-start ${
              viewMobileMenu ? "show" : ""
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              {links.map((link, index) => {
                if (
                  !state.session &&
                  (link.name === "Заказы" || link.name === "Покупатели")
                ) {
                } else {
                  return (
                    <li className="nav-item" key={index}>
                      <Link
                        to={link.link}
                        className="nav-link"
                        onClick={viewMenu}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>
            {state.session ? (
              <div
                className={`collapse navbar-collapse justify-content-end ${
                  viewMobileMenu ? "show" : ""
                }`}
              >
                <div className="btn">
                  <span className="badge rounded-pill bg-light text-dark">
                    {state.user}
                  </span>
                </div>

                <button className="btn btn-outline-secondary" onClick={logout}>
                  Выйти
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
