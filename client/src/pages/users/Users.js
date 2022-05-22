import React, { useContext, useEffect, useState } from "react";
import MyModal from "../../components/MyModal/MyModal";
import { setUsers } from "../../components/reducer/reducer";
import Context from "../../context/context";
import Crud from "../../service/crud.service";
import UserAdd from "./UserAdd";
import UserList from "./UserList";

const Users = () => {
  const usersCrud = new Crud("users");
  // const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const { state, dispatch } = useContext(Context);

  const show = () => {
    setShowModal(true);
  };

  const getUsers = () => {
    usersCrud.getAll().then((res) => {
      // dispatch({ type: SET_USERS, data: res.data });
      res.data === state.users || state.users.length === 0
        ? dispatch(setUsers(res.data))
        : dispatch(setUsers(state.users));
    });
  };

  useEffect(() => {
    // fetchAllUsers();
    getUsers();
  }, [state.users.length]);

  // const fetchAllUsers = () => {
  //   usersCrud
  //     .getAll()
  //     .then((res) => {
  //       console.log(res.data);
  //       setUsers(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <div className="container mb-5">
      {state.users.length && <UserList />}
      <button className="btn btn-secondary" onClick={show}>
        Add user
      </button>
      <MyModal
        visible={showModal}
        onCancel={() => setShowModal(false)}
        closeButtonShow
      >
        <UserAdd closeModal={() => setShowModal(false)} />
      </MyModal>
    </div>
  );
};

export default Users;
