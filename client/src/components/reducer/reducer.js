export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SET_USERS = "SET_USERS";
export const ADD_USER = "ADD_USER";
export const SET_USER = "SET_USER";
export const EDIT_USER = "EDIT_USER";
export const DELETE_USER = "DELETE_USER";

export const setUsers = (users = []) => ({
  type: SET_USERS,
  data: users,
});

export const addUser = (user = {}) => ({
  type: ADD_USER,
  data: user,
});

export const setUser = (user = {}) => ({
  type: SET_USER,
  data: user,
});

export const editUser = (user = {}, id) => ({
  type: EDIT_USER,
  data: user,
  id: id,
});

export const deleteUser = (id) => ({
  type: DELETE_USER,
  data: id,
});

export const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return action.data;
    case LOGOUT:
      return action.data;
    case SET_USERS:
      return { ...state, users: action.data };
    case ADD_USER:
      return { ...state, users: [...state.users, action.data] };
    case SET_USER:
      return { ...state, currentUser: action.data };
    case EDIT_USER:
      return {
        ...state, 
        users: state.users.map((user) =>
          action.id === user.id ? action.data : user
        ),
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.data),
      };
    default:
      throw new Error();
  }
};
