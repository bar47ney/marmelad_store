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
      .post("https://fakestoreapi.com/auth/login", values)
      .then((res) => {
        dispatch({type: LOGIN, data: { session: res.data.token, user: values.username, users: [] }})
        window.localStorage.setItem("token", res.data.token);
        window.localStorage.setItem("user", values.username);
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
        setViewSpinner(false);
      });

    // const userTest = {
    //   login: "test",
    //   password: "test",
    // };
    // userTest.login === values.login && userTest.password === values.password
    //   ? setAuth({session: true, user: userTest.login})
    //   : setAuth({session: false, user: ""});
    // setValues({
    //   login: "",
    //   password: "",
    // });
    // return
  };

  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  console.log(values);

  return viewSpinner ? (
    <Spinner />
  ) : (
    <form className="container mt-5 col-6">
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          onChange={onChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          onChange={onChange}
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button className="btn btn-primary" onClick={signIn}>
        Submit
      </button>
    </form>
  );
};

export default Login;
