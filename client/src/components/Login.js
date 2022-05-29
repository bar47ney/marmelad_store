import React, { useState, useContext } from "react";
import Context from "../context/context";
import http from "../http";
import Spinner from "./Spinner";
import { LOGIN } from "./reducer/reducer";

const Login = () => {
  const { dispatch } = useContext(Context);
  const [viewSpinner, setViewSpinner] = useState(false);

  const onChange = (e) => {
    const field = e.target.id;
    setValues({ ...values, [field]: e.target.value });
  };

  const signIn = (e) => {
    setViewSpinner(true);
    e.preventDefault();
    http
      .post("http://localhost:5000/api/admin/login", values)
      .then((res) => {
        dispatch({
          type: LOGIN,
          data: { session: res.data.token, user: values.login, users: [] },
        });
        window.localStorage.setItem("token", res.data.token);
        window.localStorage.setItem("user", values.login);
        console.log(res.data.token);
      })
      .catch((e) => {
        console.log(e);
        setViewSpinner(false);
      });
  };

  const [values, setValues] = useState({
    login: "",
    password: "",
  });

  console.log(values);

  return viewSpinner ? (
    <Spinner />
  ) : (
    <form className="container col-6" style={{margin: "150px auto"}}> 
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Логин
        </label>
        <input
          type="text"
          className="form-control"
          id="login"
          onChange={onChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Пароль
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          onChange={onChange}
        />
      </div>

      <button className="btn btn-primary" onClick={signIn}>
        Войти
      </button>
    </form>
  );
};

export default Login;
