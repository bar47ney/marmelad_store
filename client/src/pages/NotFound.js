import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = ({ title }) => {
  return (
    <div className="position-absolute top-50 start-50 translate-middle text-center">
      <h1>{title ? title : "Not found"}</h1>
      <NavLink to="/" className="btn btn-primary">
        Go to Home
      </NavLink>
    </div>
  );
};
export default NotFound;
