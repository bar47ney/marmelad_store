import React, { useContext, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import MyModal from "../../components/MyModal/MyModal";
import { deleteUser } from "../../components/reducer/reducer";
import Context from "../../context/context";
import Crud from "../../service/crud.service";

const UserList = () => {
  const [sorter, setSorter] = useState(0);
  const [searchQuery, setSearcQuery] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [deleteUserId, setdeleteUserId] = useState(null);

  const { state, dispatch } = useContext(Context);
  const usersCrud = new Crud("users");

  const deleteUserReal = () => {
    usersCrud
      .delete(deleteUserId)
      .then((res) => {
        dispatch(deleteUser(deleteUserId));
        setShowModal(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteThisUser = (user) => {
    setShowModal(true);
    setdeleteUserId(user.id);
  };

  const onSearch = (e) => {
    setSearcQuery(e.target.value);
  };

  const onSort = (e) => {
    setSorter(+e.target.value);
  };

  const sortedUsers = useMemo(() => {
    if (sorter) {
      return [...state.users].sort((a, b) => b.id - a.id);
    }
    if (!sorter) {
      return [...state.users].sort((a, b) => a.id - b.id);
    }
  }, [sorter, state.users]);

  const sortedAndSearchedUsers = useMemo(() => {
    return sortedUsers.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, sortedUsers]);

  // const { auth, setAuth } = useContext(Context);
  // console.log(auth);

  return (
    <>
      <MyModal
        visible={showModal}
        onCancel={() => setShowModal(false)}
        closeButtonShow
        saveButtonShow
        onConfirm={() => deleteUserReal()}
      >
        <h4>Do you really want to delete or think about?</h4>
      </MyModal>
      <div className="input-group mt-3">
        <span className="input-group-text" id="basic-addon1">
          Search
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Search post"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={onSearch}
        />
      </div>
      <select
        className="form-select mt-3"
        aria-label="Default select example"
        onChange={onSort}
      >
        <option defaultValue value="0">
          from Min to Max
        </option>
        <option value="1">from Max to Min</option>
      </select>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {sortedAndSearchedUsers.length ? (
            sortedAndSearchedUsers.map((user, index) => (
              <tr key={index}>
                <td>
                  <Link to={`/users/${user.id}`}>{user.id}</Link>
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <button
                    onClick={() => deleteThisUser(user)}
                    className="btn btn-primary btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <h3 className="mt-3">Not found users</h3>
          )}
        </tbody>
      </table>
    </>
  );
};

export default UserList;
