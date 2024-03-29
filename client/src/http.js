import axios from "axios";

export default axios.create({
    baseURL: process.env.REACT_APP_MARMELAD_STORE_API_URL,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
});
