import React, { useContext, useState } from "react";
import { addUser } from "../../components/reducer/reducer";
import Context from "../../context/context";
import Crud from "../../service/crud.service";

const UserAdd = ({ closeModal }) => {
  const { state, dispatch } = useContext(Context);
  const usersCrud = new Crud("users");

  const onChange = (e) => {
    const field = e.target.id;
    setValues({ ...values, [field]: e.target.value });
  };
  const addNewUser = () => {
    usersCrud
      .create(values)
      .then((res) => {
        dispatch(addUser(res.data));
        setValues({
          name: "",
          age: "",
          country: "",
          id: "",
        });
        closeModal();
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const [values, setValues] = useState({
    name: "",
    age: "",
    country: "",
    id: Date.now(),
  });
  return (
    <>
      {Object.keys(values).map((value, index) => {
        if (value === "age" || value === "id") {
          return (
            <div className="" key={index}>
              <input
                id={value}
                value={values[value]}
                type="number"
                placeholder={`Input user ${value}`}
                onChange={onChange}
                className="mb-1 form-control"
              />
            </div>
          );
        }
        return (
          <div className="" key={index}>
            <input
              id={value}
              value={values[value]}
              placeholder={`Input user ${value}`}
              onChange={onChange}
              className="mb-1 form-control"
            />
          </div>
        );
      })}
      <div className="">
        <button className="btn btn-primary mt-2 btn-sm" onClick={addNewUser}>
          Add new User
        </button>
      </div>
    </>
  );
};

export default UserAdd;
