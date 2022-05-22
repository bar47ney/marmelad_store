import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Crud from "../../service/crud.service";
import Spinner from "../../components/Spinner";
import { NavLink } from "react-router-dom";
import NotFound from "../NotFound";
import { editUser } from "../../components/reducer/reducer";
import Context from "../../context/context";

const UserEdit = (props) => {
  const [error, setError] = useState();
  const { id } = useParams();
  const usersCrud = new Crud("users");
  const [user, setUser] = useState({});
  const [viewSpinner, setViewSpinner] = useState(false);
  const [viewEditForm, setViewEditForm] = useState(false);

  const { state, dispatch } = useContext(Context);

  const onChange = (e) => {
    const field = e.target.id;
    field === "userId" || field === "id"
      ? setUser({ ...user, [field]: +e.target.value })
      : setUser({ ...user, [field]: e.target.value });
  };

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    setViewSpinner(true);
    usersCrud
      .getOneById(`${id}`)
      .then((res) => {
        setUser(res.data);
        setViewSpinner(false);
      })
      .catch((err) => {
        setError(err);
        setViewSpinner(false);
      });
  };

  const saveUser = (e) => {
    e.preventDefault();
    setViewSpinner(true);
    usersCrud
      .update(user.id, user)
      .then((res) => {
        setViewSpinner(false);
        setUser(res.data);
        dispatch(editUser(res.data, user.id));
        setViewEditForm(false);
        console.log(user);
      })
      .catch((err) => {
        setError(err);
        setViewSpinner(false);
      });
  };

  //   console.log(id);
  console.log(user);
  //   console.log(error);

  return (
    <>
      {viewSpinner ? (
        <Spinner />
      ) : error ? (
        <NotFound title={error.message} />
      ) : viewEditForm ? (
        <form className="container m-5 col-6" onSubmit={saveUser}>
          {user &&
            Object.keys(user).map((field, index) => {
              if (field === "id" || field === "address" || field === "company")
                return;
              return (
                <div className="mb-3" key={index}>
                  <label htmlFor={field} className="form-label">
                    {field}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    value={user[field]}
                    id={field}
                    onChange={onChange}
                  />
                </div>
              );
            })}
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      ) : (
        <div
          className="card position-absolute top-50 start-50 translate-middle"
          style={{ width: "18rem" }}
        >
          {/* <img src="..." className="card-img-top" alt="..." /> */}
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <p className="card-text">username: {user.username}</p>
            <p className="card-text">email: {user.email}</p>
            <p className="card-text">phone: {user.phone}</p>
            <p className="card-text">website: {user.website}</p>
            <NavLink to="/users" className="btn btn-primary">
              Back to Users
            </NavLink>
            <button
              type="submit"
              className="btn btn-primary m-1"
              onClick={() => setViewEditForm(true)}
            >
              Edit
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default UserEdit;
